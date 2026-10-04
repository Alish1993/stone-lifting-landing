import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT || 3001);
const isProduction = process.env.NODE_ENV === 'production';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.resolve(__dirname, '../dist');

app.use(
  cors({
    origin: process.env.ALLOWED_ORIGIN || true,
    credentials: true,
  }),
);
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, message: 'Telegram lead service is running' });
});

app.post('/api/lead', async (req, res) => {
  try {
    const data = req.body ?? {};
    const trap = String(data.website ?? '').trim();

    if (trap) {
      return res.status(400).json({
        ok: false,
        message: 'Некорректный запрос',
      });
    }

    const requiredFields = ['name', 'phone', 'address'];
    const missing = requiredFields.filter((field) => !String(data[field] ?? '').trim());

    if (missing.length) {
      return res.status(400).json({
        ok: false,
        message: 'Заполните обязательные поля: имя, телефон, адрес',
      });
    }

    const cleanedPhone = String(data.phone).replace(/\s+/g, '').replace(/[()\-]/g, '');
    const phonePattern = /^\+?[0-9]{10,15}$/;

    if (!phonePattern.test(cleanedPhone)) {
      return res.status(400).json({
        ok: false,
        message: 'Введите корректный телефон',
      });
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return res.status(500).json({
        ok: false,
        message: 'Сервис Telegram не настроен на сервере',
      });
    }

    const timestamp = new Date().toLocaleString('ru-RU', {
      timeZone: 'Europe/Moscow',
      hour12: false,
    });

    const message = [
      'Новая заявка:',
      `Имя: ${String(data.name).trim()}`,
      `Телефон: ${cleanedPhone}`,
      `Адрес: ${String(data.address).trim()}`,
      `Этаж: ${String(data.floor || 'не указан').trim()}`,
      `Материал: ${String(data.material || 'не указан').trim()}`,
      `Размер плит: ${String(data.size || 'не указан').trim()}`,
      `Количество: ${String(data.quantity || 'не указано').trim()}`,
      `Лифт: ${String(data.lift || 'не указан').trim()}`,
      `Комментарий: ${String(data.comment || 'нет').trim()}`,
      `Время заявки: ${timestamp}`,
    ].join('\n');

    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        disable_web_page_preview: true,
      }),
    });

    const telegramResult = (await response.json()) as { ok?: boolean; description?: string };

    if (!response.ok || !telegramResult.ok) {
      throw new Error(telegramResult.description || 'Не удалось отправить в Telegram');
    }

    res.status(200).json({
      ok: true,
      message: 'Спасибо! Мы свяжемся с вами в течение 15 минут',
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Ошибка сервера';

    res.status(500).json({
      ok: false,
      message,
    });
  }
});

if (isProduction) {
  app.use(express.static(distPath));

  app.get('*', (_req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
