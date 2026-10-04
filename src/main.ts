type LeadForm = {
  name: string;
  phone: string;
  address: string;
  floor: string;
  material: string;
  size: string;
  quantity: string;
  lift: string;
  comment: string;
  website: string;
};

const CONTACTS = {
  phone: '+7 977 326-09-90',
  phoneHref: 'tel:+79773260990',
  wa: 'https://wa.me/79773260990?text=Здравствуйте!%20Хочу%20рассчитать%20подъём%20плит',
  tg: 'https://t.me/kalibr93',
  city: 'Ваш город',
  schedule: 'Пн–Вс: 9:00–21:00',
};

const MATERIALS = [
  'Керамогранит',
  'Мрамор',
  'Оникс',
  'Гранит',
  'Другой камень',
];

const faqItems = [
  {
    question: 'Как быстро выезжаете?',
    answer: 'Обычно в течение 1–4 часов в рабочее время, в зависимости от удалённости и загруженности.',
  },
  {
    question: 'Поднимаете ли плиту в квартире с узкой лестницей?',
    answer: 'Да. Мы используем вакуумные присоски, тележки, страховку и грамотную схему подъёма даже на узких участках.',
  },
  {
    question: 'Можно ли подъём без лифта?',
    answer: 'Да. Мы выполняем подъём по лестницам и коридорам с полной страховкой груза и безопасной маршрутизацией.',
  },
  {
    question: 'Что делать, если плитка уже уложена и нужно поднять ровно без сколов?',
    answer: 'Это как раз наша специализация. Мы работаем аккуратно, используем спецоборудование и контролируем каждый этап.',
  },
  {
    question: 'Есть ли гарантия на работу?',
    answer: 'Да. Мы фиксируем условия в смете и гарантируем сохранность материала при выполнении всех этапов по технологии.',
  },
  {
    question: 'Сколько стоит подъём одной плиты на этаж?',
    answer: 'Цена зависит от материала, размера, этажа, наличия лифта и маршрута. Обычно рассчитываем индивидуально после замера.',
  },
];

const render = () => {
  const app = document.querySelector('#app');

  if (!app) return;

  app.innerHTML = `
    <div class="page-shell">
      <header class="topbar">
        <div class="container topbar-inner">
          <a class="brand" href="#top" aria-label="На главный экран">
            <span class="brand-mark">K</span>
            <span>
              <strong>КАЛИБР</strong>
              <small>Плитный подъём</small>
            </span>
          </a>

          <nav class="nav hidden-mobile" aria-label="Основная навигация">
            <a href="#services">Что поднимаем</a>
            <a href="#process">Как работаем</a>
            <a href="#equipment">Оборудование</a>
            <a href="#reviews">Отзывы</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Контакты</a>
          </nav>

          <a class="btn btn-call" href="${CONTACTS.phoneHref}">Позвонить</a>
        </div>
      </header>

      <main id="top">
        <section class="hero">
          <div class="container hero-grid">
            <div class="hero-copy reveal">
              <p class="eyebrow">Подъём крупноформатных плит на этаж</p>
              <h1>Подъём крупноформатного керамогранита, мрамора и камня на любой этаж</h1>
              <p class="subtitle">Аккуратно, без сколов, с гарантией</p>

              <div class="hero-actions">
                <a class="btn btn-primary" href="#form">Рассчитать стоимость</a>
                <a class="btn btn-ghost" href="${CONTACTS.wa}" target="_blank" rel="noreferrer">Написать в WhatsApp</a>
                <a class="btn btn-ghost" href="${CONTACTS.tg}" target="_blank" rel="noreferrer">Написать в Telegram</a>
              </div>

              <ul class="hero-trust" aria-label="Преимущества">
                <li>Без сколов</li>
                <li>Подъём без лифта</li>
                <li>От 1 часа</li>
                <li>Гарантия</li>
              </ul>
            </div>

            <div class="hero-card reveal">
              <div class="hero-image" aria-label="Пример подъёма плит"></div>
              <div class="stat-row">
                <div>
                  <strong>2000+</strong>
                  <span>плит поднято</span>
                </div>
                <div>
                  <strong>4 шага</strong>
                  <span>от заявки до сдачи</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" class="section">
          <div class="container">
            <div class="section-head reveal">
              <p class="eyebrow">Что мы поднимаем</p>
              <h2>Крупноформатный камень и плитка любой сложности</h2>
            </div>

            <div class="cards-grid four-col">
              <article class="info-card reveal">
                <div class="icon">01</div>
                <h3>Керамогранит</h3>
                <p>Крупные плитки от 1200×1200 мм и больше, поднимаем аккуратно без сколов.</p>
              </article>

              <article class="info-card reveal">
                <div class="icon">02</div>
                <h3>Мрамор</h3>
                <p>Натуральный мрамор с деликатной фактурой и повышенной ценностью.</p>
              </article>

              <article class="info-card reveal">
                <div class="icon">03</div>
                <h3>Оникс</h3>
                <p>Транспортация красивого, но хрупкого материала с осторожностью и страховкой.</p>
              </article>

              <article class="info-card reveal">
                <div class="icon">04</div>
                <h3>Гранит</h3>
                <p>Тяжёлые и плотные плиты, которые требуют правильный весовой расчёт и фиксацию.</p>
              </article>
            </div>
          </div>
        </section>

        <section class="section muted">
          <div class="container">
            <div class="section-head reveal">
              <p class="eyebrow">Проблемы, которые мы решаем</p>
              <h2>Сложные условия по лестницам, лифту и узким проходам</h2>
            </div>

            <div class="cards-grid three-col">
              <article class="problem-card reveal">
                <h3>Узкие лестницы</h3>
                <p>Поднимаем материал через коридоры, лестничные пролёты и технические проходы без риска повреждения стен и плит.</p>
              </article>
              <article class="problem-card reveal">
                <h3>Лифты не подходят</h3>
                <p>При отсутствии лифта или слишком малом проёме используем безопасный ручной и механизированный подъём.</p>
              </article>
              <article class="problem-card reveal">
                <h3>Большой вес и размер</h3>
                <p>Мы рассчитываем грузоподъёмность, маршруты и фиксацию, чтобы не допустить перегрузку и повреждения.</p>
              </article>
              <article class="problem-card reveal">
                <h3>Риск сколов</h3>
                <p>Используем вакуумные присоски, мягкие захваты, страховку и контроль качества на каждом этапе.</p>
              </article>
              <article class="problem-card reveal">
                <h3>Нужно быстро</h3>
                <p>Работаем с соблюдением сроков и подгоняем график под ваш объект, чтобы не срывать ремонт.</p>
              </article>
              <article class="problem-card reveal">
                <h3>Нужно аккуратно</h3>
                <p>Сохраняем полезную площадь, не повреждаем отделку и не нарушаем внутреннюю конструкцию помещений.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="process" class="section">
          <div class="container">
            <div class="section-head reveal">
              <p class="eyebrow">Как мы работаем</p>
              <h2>Простой и понятный процесс</h2>
            </div>

            <div class="steps-grid">
              <div class="step-card reveal">
                <span>01</span>
                <h3>Заявка</h3>
                <p>Вы оставляете заявку, мы уточняем детали и быстро оцениваем объём работ.</p>
              </div>
              <div class="step-card reveal">
                <span>02</span>
                <h3>Замер и расчёт</h3>
                <p>Определяем этаж, маршрут, материал, вес и подготовку безопасного подъёма.</p>
              </div>
              <div class="step-card reveal">
                <span>03</span>
                <h3>Подъём</h3>
                <p>Исполняем работу с фиксацией, страховкой и контролем сохранности плиты.</p>
              </div>
              <div class="step-card reveal">
                <span>04</span>
                <h3>Приёмка</h3>
                <p>Проверяем качество, фиксируем результат и согласовываем финальный приём.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="equipment" class="section muted">
          <div class="container">
            <div class="section-head reveal">
              <p class="eyebrow">Оборудование и опыт</p>
              <h2>Техника и команда, которые снижают риск повреждений</h2>
            </div>

            <div class="equipment-layout">
              <div class="equipment-list reveal">
                <ul>
                  <li>Вакуумные присоски для безопасного удержания плит</li>
                  <li>Тележки и платформы для маневрирования в узких проходах</li>
                  <li>Страховка груза и контроль нагрузки</li>
                  <li>Команда с опытом работы с камнем и гранитом</li>
                </ul>
              </div>

              <div class="equipment-panel reveal">
                <div class="mini-block">
                  <strong>Опыт</strong>
                  <span>Более 2000 плит поднято</span>
                </div>
                <div class="mini-block highlight">
                  <strong>Безопасность</strong>
                  <span>Проверка маршрута и страховка на каждом этапе</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section">
          <div class="container">
            <div class="section-head reveal">
              <p class="eyebrow">Наши работы</p>
              <h2>Место под фото и видео</h2>
            </div>

            <div class="gallery-grid">
              <div class="gallery-item reveal placeholder-photo">
                <span>Фото объекта</span>
              </div>
              <div class="gallery-item reveal placeholder-photo">
                <span>Видео подъёма</span>
              </div>
              <div class="gallery-item reveal placeholder-photo">
                <span>Проект квартиры</span>
              </div>
            </div>
          </div>
        </section>

        <section class="section muted">
          <div class="container">
            <div class="section-head reveal">
              <p class="eyebrow">Цены</p>
              <h2>Стоимость рассчитывается индивидуально</h2>
            </div>

            <div class="price-box reveal">
              <strong>от 1 500 ₽</strong>
              <span>за плиту / этаж</span>
              <p>Точная цена зависит от материала, размера плит, сложности маршрута и наличия лифта. После замера мы назовём финальную стоимость.</p>
            </div>
          </div>
        </section>

        <section id="reviews" class="section">
          <div class="container">
            <div class="section-head reveal">
              <p class="eyebrow">Отзывы клиентов</p>
              <h2>Что говорят о работе</h2>
            </div>

            <div class="cards-grid three-col">
              <article class="review-card reveal">
                <div class="stars">★★★★★</div>
                <p>«Очень аккуратно поднимали мраморную плиту в новостройке. Всё без сколов и вовремя.»</p>
                <strong>Алексей, квартира</strong>
              </article>

              <article class="review-card reveal">
                <div class="stars">★★★★★</div>
                <p>«Работали через узкую лестницу, без лифта. Всё прошло быстро и безопасно, особенно порадовали аккуратность и вежливость.»</p>
                <strong>Марина, офис</strong>
              </article>

              <article class="review-card reveal">
                <div class="stars">★★★★★</div>
                <p>«Подняли гранитные плиты на 6 этаж. Составили понятный расчёт и всё сделали точно по сроку.»</p>
                <strong>Сергей, коттедж</strong>
              </article>
            </div>
          </div>
        </section>

        <section id="faq" class="section muted">
          <div class="container faq-wrap">
            <div class="section-head reveal">
              <p class="eyebrow">FAQ</p>
              <h2>Частые вопросы клиентов</h2>
            </div>

            <div class="faq-list reveal">
              ${faqItems
                .map(
                  (item) => `
                    <details>
                      <summary>${item.question}</summary>
                      <p>${item.answer}</p>
                    </details>
                  `,
                )
                .join('')}
            </div>
          </div>
        </section>

        <section id="form" class="section">
          <div class="container form-layout">
            <div class="section-head reveal">
              <p class="eyebrow">Оставьте заявку</p>
              <h2>Расчёт за 10 секунд</h2>
            </div>

            <form id="lead-form" class="lead-form reveal" novalidate>
              <div class="form-grid">
                <label>
                  <span>Имя</span>
                  <input type="text" name="name" placeholder="Ваше имя" required />
                </label>

                <label>
                  <span>Телефон</span>
                  <input type="tel" name="phone" placeholder="+7 900 000-00-00" required />
                </label>

                <label class="full-width">
                  <span>Адрес</span>
                  <input type="text" name="address" placeholder="Улица, дом, квартира/офис" required />
                </label>

                <label>
                  <span>Этаж</span>
                  <input type="text" name="floor" placeholder="Например: 5" />
                </label>

                <label>
                  <span>Материал</span>
                  <select name="material">
                    <option value="">Выберите материал</option>
                    ${MATERIALS.map((item) => `<option value="${item}">${item}</option>`).join('')}
                  </select>
                </label>

                <label>
                  <span>Размер плит</span>
                  <input type="text" name="size" placeholder="Напр. 1200×2400" />
                </label>

                <label>
                  <span>Количество</span>
                  <input type="text" name="quantity" placeholder="Напр. 3 плиты" />
                </label>

                <label>
                  <span>Есть ли лифт?</span>
                  <select name="lift">
                    <option value="">Выберите</option>
                    <option value="Да">Да</option>
                    <option value="Нет">Нет</option>
                    <option value="Не знаю">Не знаю</option>
                  </select>
                </label>

                <label class="full-width">
                  <span>Комментарий</span>
                  <textarea name="comment" rows="4" placeholder="Например: узкая лестница, 3 этаж, надо занести через окно"></textarea>
                </label>

                <div class="honeypot" aria-hidden="true">
                  <label>
                    Оставьте это поле пустым
                    <input type="text" name="website" tabindex="-1" autocomplete="off" />
                  </label>
                </div>
              </div>

              <div class="form-footer">
                <button class="btn btn-primary" type="submit">Отправить заявку</button>
                <p id="form-status" class="form-status" aria-live="polite"></p>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer id="contact" class="footer">
        <div class="container footer-inner">
          <div>
            <a class="brand footer-brand" href="#top">
              <span class="brand-mark">K</span>
              <span>
                <strong>КАЛИБР</strong>
                <small>Плитный подъём</small>
              </span>
            </a>
            <p class="footer-text">Подъём крупноформатного керамогранита, мрамора и камня на любой этаж.</p>
          </div>

          <div class="footer-contacts">
            <a href="${CONTACTS.phoneHref}">${CONTACTS.phone}</a>
            <span>${CONTACTS.city}</span>
            <span>${CONTACTS.schedule}</span>
          </div>

          <div class="footer-actions">
            <a class="btn btn-ghost" href="${CONTACTS.wa}" target="_blank" rel="noreferrer">WhatsApp</a>
            <a class="btn btn-ghost" href="${CONTACTS.tg}" target="_blank" rel="noreferrer">Telegram</a>
          </div>
        </div>
      </footer>

      <div class="floating-actions" aria-label="Мгновенные контакты">
        <a href="${CONTACTS.wa}" target="_blank" rel="noreferrer" class="floating-btn whatsapp">WhatsApp</a>
        <a href="${CONTACTS.tg}" target="_blank" rel="noreferrer" class="floating-btn telegram">Telegram</a>
      </div>
    </div>
  `;

  const form = document.querySelector<HTMLFormElement>('#lead-form');
  const statusNode = document.querySelector<HTMLParagraphElement>('#form-status');

  if (form && statusNode) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const payload: Partial<LeadForm> = {
        name: String(formData.get('name') ?? '').trim(),
        phone: String(formData.get('phone') ?? '').trim(),
        address: String(formData.get('address') ?? '').trim(),
        floor: String(formData.get('floor') ?? '').trim(),
        material: String(formData.get('material') ?? '').trim(),
        size: String(formData.get('size') ?? '').trim(),
        quantity: String(formData.get('quantity') ?? '').trim(),
        lift: String(formData.get('lift') ?? '').trim(),
        comment: String(formData.get('comment') ?? '').trim(),
        website: String(formData.get('website') ?? '').trim(),
      };

      if (!payload.name || !payload.phone || !payload.address) {
        statusNode.textContent = 'Заполните имя, телефон и адрес';
        statusNode.classList.add('error');
        return;
      }

      if (payload.website) {
        statusNode.textContent = 'Некорректный запрос';
        statusNode.classList.add('error');
        return;
      }

      statusNode.textContent = 'Отправляем заявку...';
      statusNode.classList.remove('error');

      try {
        const response = await fetch('/api/lead', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        const result = (await response.json()) as { ok?: boolean; message?: string };

        if (!response.ok || !result.ok) {
          throw new Error(result.message || 'Не удалось отправить заявку');
        }

        statusNode.textContent = result.message || 'Спасибо! Мы свяжемся с вами в течение 15 минут';
        statusNode.classList.remove('error');
        form.reset();
      } catch (error) {
        const message = error instanceof Error ? error.message : 'Не удалось отправить заявку';
        statusNode.textContent = message;
        statusNode.classList.add('error');
      }
    });
  }

  const revealItems = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );

  revealItems.forEach((item) => observer.observe(item));
};

render();
