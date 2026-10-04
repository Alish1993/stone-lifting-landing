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
  city: 'Москва, МО',
  schedule: 'Пн–Вс: 09:00–21:00',
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
    question: '⏱️ Как быстро вы выезжаете?',
    answer: 'Обычно в течение 1–4 часов в рабочее время, в зависимости от удалённости и загруженности. Срочные вызовы согласовываются отдельно.',
  },
  {
    question: '🪜 Поднимаете ли вы плиту в квартире с узкой лестницей?',
    answer: 'Да. Мы используем вакуумные присоски, тележки, страховку и грамотную схему подъёма даже на узких участках. Сначала проводим замер.',
  },
  {
    question: '🚀 Можно ли подъём без лифта?',
    answer: 'Да. Мы выполняем подъём по лестницам и коридорам с полной страховкой груза и безопасной маршрутизацией.',
  },
  {
    question: '💎 Что делать, если плита уже уложена и нужно поднять ровно без сколов?',
    answer: 'Это как раз наша специализация. Мы работаем аккуратно, используем спецоборудование и контролируем каждый этап.',
  },
  {
    question: '✅ Есть ли гарантия на работу?',
    answer: 'Да. Мы фиксируем условия в смете и гарантируем сохранность материала при выполнении всех этапов по технологии.',
  },
  {
    question: '💰 Сколько стоит подъём одной плиты на этаж?',
    answer: 'Цена зависит от материала, размера плиты, сложности маршрута и наличия лифта. Обычно от 1500 ₽. Точная стоимость после замера.',
  },
];

const reviewsData = [
  {
    name: 'Алексей К.',
    location: 'квартира, 7-й этаж',
    text: 'Очень аккуратно подняли мраморную плиту. Всё было без сколов и вовремя. Ребята профессионалы, рекомендую.',
    stars: 5,
  },
  {
    name: 'Марина С.',
    location: 'офис, без лифта',
    text: 'Работали через узкую лестницу, без лифта. Всё прошло быстро и безопасно. Особенно порадовали аккуратность и вежливость. Спасибо!',
    stars: 5,
  },
  {
    name: 'Сергей М.',
    location: 'коттедж, 6-й этаж',
    text: 'Подняли гранитные плиты на 6 этаж. Составили понятный расчёт и всё сделали точно по срокам. Надёжная команда.',
    stars: 5,
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
            <span class="brand-mark">⬆️</span>
            <span>
              <strong>КАЛИБР</strong>
              <small>Плитный подъём</small>
            </span>
          </a>

          <nav class="nav hidden-mobile" aria-label="Основная навигация">
            <a href="#services">Услуги</a>
            <a href="#problems">Решения</a>
            <a href="#process">Процесс</a>
            <a href="#equipment">Техника</a>
            <a href="#reviews">Отзывы</a>
            <a href="#faq">FAQ</a>
            <a href="#form">Заявка</a>
          </nav>

          <a class="btn btn-call" href="${CONTACTS.phoneHref}">☎️ ${CONTACTS.phone}</a>
        </div>
      </header>

      <main id="top">
        <section class="hero">
          <div class="container hero-grid">
            <div class="hero-copy reveal">
              <p class="eyebrow">🏆 Специалисты по подъёму камня</p>
              <h1>Подъём крупноформатного керамогранита, мрамора и гранита на любой этаж</h1>
              <p class="subtitle">Аккуратно, без сколов, с гарантией. За 10 секунд оставьте заявку и получите расчёт</p>

              <div class="hero-actions">
                <a class="btn btn-primary" href="#form">Рассчитать стоимость</a>
                <a class="btn btn-ghost" href="${CONTACTS.wa}" target="_blank" rel="noreferrer">WhatsApp</a>
                <a class="btn btn-ghost" href="${CONTACTS.tg}" target="_blank" rel="noreferrer">Telegram</a>
              </div>

              <ul class="hero-trust" aria-label="Преимущества">
                <li>Без сколов и повреждений</li>
                <li>Подъём без лифта</li>
                <li>За 1–4 часа</li>
                <li>Гарантия качества</li>
              </ul>
            </div>

            <div class="hero-card reveal">
              <div class="hero-image" aria-label="Профессиональный подъём плит камня">
                <div class="image-content">
                  <div class="stone-visual"></div>
                  <div class="stat-badge">2000+</div>
                  <div class="stat-text">плит успешно подняты</div>
                </div>
              </div>
              <div class="stat-row">
                <div>
                  <strong>15+ лет</strong>
                  <span>опыта в строительстве</span>
                </div>
                <div>
                  <strong>100%</strong>
                  <span>без повреждений</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" class="section">
          <div class="container">
            <div class="section-head reveal">
              <p class="eyebrow">💎 Основной профиль</p>
              <h2>Крупноформатный камень любой степени сложности</h2>
              <p class="section-desc">Мы специализируемся на материалах, которые требуют особого подхода и аккуратности</p>
            </div>

            <div class="cards-grid four-col">
              <article class="info-card reveal">
                <div class="icon">🟦</div>
                <h3>Керамогранит</h3>
                <p>Крупные плитки от 1200×1200 мм и больше. Поднимаем аккуратно, без риска сколов и трещин на краях.</p>
              </article>

              <article class="info-card reveal">
                <div class="icon">💎</div>
                <h3>Мрамор</h3>
                <p>Натуральный мрамор с деликатной фактурой и повышенной ценностью. Работаем с максимальной осторожностью.</p>
              </article>

              <article class="info-card reveal">
                <div class="icon">✨</div>
                <h3>Оникс</h3>
                <p>Транспортировка красивого, но хрупкого материала с полной страховкой груза и мягкими захватами.</p>
              </article>

              <article class="info-card reveal">
                <div class="icon">⬛</div>
                <h3>Гранит</h3>
                <p>Тяжёлые и плотные плиты. Рассчитываем грузоподъёмность, маршруты и фиксацию для абсолютной безопасности.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="problems" class="section muted">
          <div class="container">
            <div class="section-head reveal">
              <p class="eyebrow">🔧 Сложные условия</p>
              <h2>Проблемы, которые мы решаем</h2>
              <p class="section-desc">Узкие лестницы, отсутствие лифта, большой вес — для нас это стандартные задачи</p>
            </div>

            <div class="cards-grid three-col">
              <article class="problem-card reveal">
                <h3>🪜 Узкие лестницы</h3>
                <p>Поднимаем материал через коридоры, лестничные пролёты и технические проходы без риска повредить стены и плиту.</p>
              </article>
              <article class="problem-card reveal">
                <h3>❌ Лифты не подходят</h3>
                <p>При отсутствии лифта или слишком малом проёме используем безопасный ручной и механизированный подъём с полной страховкой.</p>
              </article>
              <article class="problem-card reveal">
                <h3>⚖️ Большой вес и размер</h3>
                <p>Рассчитываем грузоподъёмность, используем спецтележки и вакуумные присоски для равномерного распределения нагрузки.</p>
              </article>
              <article class="problem-card reveal">
                <h3>🛡️ Риск сколов</h3>
                <p>Мягкие захваты, вакуумные присоски, страховка и опыт — гарантируем целостность материала на всех этапах.</p>
              </article>
              <article class="problem-card reveal">
                <h3>⏰ Нужно быстро</h3>
                <p>Работаем оперативно, согласуем график под ваш ремонт и не срываем сроки сдачи объекта.</p>
              </article>
              <article class="problem-card reveal">
                <h3>🏠 Уже уложено</h3>
                <p>Если плиту уже положили и нужно переделать аккуратно — это наша специализация. Снимаем и укладываем правильно.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="process" class="section">
          <div class="container">
            <div class="section-head reveal">
              <p class="eyebrow">📋 Алгоритм работы</p>
              <h2>Простой и прозрачный процесс</h2>
              <p class="section-desc">От заявки до гарантии — четыре чётких шага</p>
            </div>

            <div class="steps-grid">
              <div class="step-card reveal">
                <span>1️⃣</span>
                <h3>Заявка</h3>
                <p>Вы оставляете заявку в форме или пишете в WhatsApp/Telegram. Мы уточняем детали и оцениваем объём работы.</p>
              </div>
              <div class="step-card reveal">
                <span>2️⃣</span>
                <h3>Замер и расчёт</h3>
                <p>Приезжаем, проверяем маршрут, измеряем плиту, взвешиваем. Составляем подробный расчёт с точной ценой.</p>
              </div>
              <div class="step-card reveal">
                <span>3️⃣</span>
                <h3>Подъём</h3>
                <p>Выполняем работу с полной страховкой, контролем качества и соблюдением всех мер безопасности.</p>
              </div>
              <div class="step-card reveal">
                <span>4️⃣</span>
                <h3>Приёмка</h3>
                <p>Проверяем результат, фиксируем качество, согласуем финальный приём. Гарантия на всю работу.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="equipment" class="section muted">
          <div class="container">
            <div class="section-head reveal">
              <p class="eyebrow">🛠️ Арсенал и команда</p>
              <h2>Техника и опыт, которые снижают риски</h2>
              <p class="section-desc">Профессиональное оборудование и квалифицированная команда — залог успеха</p>
            </div>

            <div class="equipment-layout">
              <div class="equipment-list reveal">
                <ul>
                  <li><strong>Вакуумные присоски</strong> — надёжное удержание плит до 500 кг без повреждений</li>
                  <li><strong>Специальные тележки</strong> — манёвры в узких коридорах и лестничных пролётах</li>
                  <li><strong>Страховка груза</strong> — полный контроль нагрузки на всех этапах подъёма</li>
                  <li><strong>Мягкие захваты</strong> — защита поверхности камня от царапин и трещин</li>
                  <li><strong>Опыт 15+ лет</strong> — 2000+ успешных подъёмов без повреждений</li>
                  <li><strong>Квалифицированная команда</strong> — строители-профессионалы с сертификатами</li>
                </ul>
              </div>

              <div class="equipment-panel">
                <div class="mini-block reveal">
                  <strong>🎯 Точность</strong>
                  <span>Замер маршрута перед каждым подъёмом</span>
                </div>
                <div class="mini-block highlight reveal">
                  <strong>⚡ Скорость</strong>
                  <span>От 1 до 4 часов на один объект</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section">
          <div class="container">
            <div class="section-head reveal">
              <p class="eyebrow">📸 Наши работы</p>
              <h2>Примеры успешных проектов</h2>
              <p class="section-desc">Готовые объекты — лучший показатель качества</p>
            </div>

            <div class="gallery-grid">
              <div class="gallery-item reveal placeholder-photo">
                <div class="gallery-content">
                  <span>🏢 Коммерческий объект</span>
                  <p>Керамогранит 1500×3000, 4 этаж</p>
                </div>
              </div>
              <div class="gallery-item reveal placeholder-photo">
                <div class="gallery-content">
                  <span>🏠 Квартира премиум</span>
                  <p>Мрамор натуральный, 7 этаж</p>
                </div>
              </div>
              <div class="gallery-item reveal placeholder-photo">
                <div class="gallery-content">
                  <span>🏛️ Офис в бизнес-центре</span>
                  <p>Гранит, подъём без лифта</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section muted">
          <div class="container">
            <div class="section-head reveal">
              <p class="eyebrow">💰 Стоимость услуг</p>
              <h2>Прозрачное ценообразование</h2>
              <p class="section-desc">Минимальная стоимость или точный расчёт после замера</p>
            </div>

            <div class="price-box reveal">
              <strong>от 1 500 ₽</strong>
              <span>за плиту / этаж</span>
              <p>Точная цена зависит от материала, размера плиты, расстояния, сложности маршрута и наличия лифта. Мы рассчитываем стоимость индивидуально после замера и всегда согласуем её с вами перед работой.</p>
            </div>
          </div>
        </section>

        <section id="reviews" class="section">
          <div class="container">
            <div class="section-head reveal">
              <p class="eyebrow">⭐ Отзывы клиентов</p>
              <h2>Что говорят о нашей работе</h2>
              <p class="section-desc">Более 2000 довольных клиентов</p>
            </div>

            <div class="cards-grid three-col">
              ${reviewsData
                .map(
                  (review) => `
                    <article class="review-card reveal">
                      <div class="stars">${'★'.repeat(review.stars)}</div>
                      <p>"${review.text}"</p>
                      <strong>${review.name}</strong>
                      <small>${review.location}</small>
                    </article>
                  `,
                )
                .join('')}
            </div>
          </div>
        </section>

        <section id="faq" class="section muted">
          <div class="container faq-wrap">
            <div class="section-head reveal">
              <p class="eyebrow">❓ Вопросы и ответы</p>
              <h2>Часто спрашивают клиенты</h2>
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
              <p class="eyebrow">📝 Оставить заявку</p>
              <h2>Бесплатный расчёт за 10 секунд</h2>
              <p class="section-desc">Заполните форму ниже, и мы свяжемся с вами в течение 15 минут</p>
            </div>

            <form id="lead-form" class="lead-form reveal" novalidate>
              <div class="form-grid">
                <label>
                  <span>👤 Ваше имя</span>
                  <input type="text" name="name" placeholder="Иван Петров" required />
                </label>

                <label>
                  <span>📱 Телефон</span>
                  <input type="tel" name="phone" placeholder="+7 900 000-00-00" required />
                </label>

                <label class="full-width">
                  <span>📍 Адрес объекта</span>
                  <input type="text" name="address" placeholder="ул. Пример, дом 1, кв. 5" required />
                </label>

                <label>
                  <span>📈 Этаж</span>
                  <input type="text" name="floor" placeholder="Например: 5" />
                </label>

                <label>
                  <span>💎 Материал</span>
                  <select name="material">
                    <option value="">Выберите материал</option>
                    ${MATERIALS.map((item) => `<option value="${item}">${item}</option>`).join('')}
                  </select>
                </label>

                <label>
                  <span>📐 Размер плиты</span>
                  <input type="text" name="size" placeholder="Например: 1200×2400" />
                </label>

                <label>
                  <span>🔢 Количество</span>
                  <input type="text" name="quantity" placeholder="Например: 3 плиты" />
                </label>

                <label>
                  <span>🛗 Есть ли лифт?</span>
                  <select name="lift">
                    <option value="">Выберите</option>
                    <option value="Да">Да</option>
                    <option value="Нет">Нет</option>
                    <option value="Не знаю">Не знаю</option>
                  </select>
                </label>

                <label class="full-width">
                  <span>💬 Комментарий</span>
                  <textarea name="comment" rows="4" placeholder="Узкая лестница, острые углы, есть окно для подъёма..."></textarea>
                </label>

                <div class="honeypot" aria-hidden="true">
                  <label>
                    Оставьте это поле пустым
                    <input type="text" name="website" tabindex="-1" autocomplete="off" />
                  </label>
                </div>
              </div>

              <div class="form-footer">
                <button class="btn btn-primary" type="submit">✓ Отправить заявку</button>
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
              <span class="brand-mark">⬆️</span>
              <span>
                <strong>КАЛИБР</strong>
                <small>Плитный подъём</small>
              </span>
            </a>
            <p class="footer-text">Профессиональный подъём крупноформатного камня на любой этаж. Без сколов. С гарантией.</p>
          </div>

          <div class="footer-contacts">
            <a href="${CONTACTS.phoneHref}"><strong>${CONTACTS.phone}</strong></a>
            <span>📍 ${CONTACTS.city}</span>
            <span>🕐 ${CONTACTS.schedule}</span>
          </div>

          <div class="footer-actions">
            <a class="btn btn-ghost" href="${CONTACTS.wa}" target="_blank" rel="noreferrer">WhatsApp</a>
            <a class="btn btn-ghost" href="${CONTACTS.tg}" target="_blank" rel="noreferrer">Telegram</a>
          </div>
        </div>
      </footer>

      <div class="floating-actions" aria-label="Мгновенные контакты">
        <a href="${CONTACTS.wa}" target="_blank" rel="noreferrer" class="floating-btn whatsapp" title="Написать в WhatsApp">WhatsApp</a>
        <a href="${CONTACTS.tg}" target="_blank" rel="noreferrer" class="floating-btn telegram" title="Написать в Telegram">Telegram</a>
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
        statusNode.textContent = '❌ Заполните имя, телефон и адрес';
        statusNode.classList.add('error');
        return;
      }

      if (payload.website) {
        statusNode.textContent = '❌ Некорректный запрос';
        statusNode.classList.add('error');
        return;
      }

      statusNode.textContent = '⏳ Отправляем заявку...';
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

        statusNode.textContent = '✅ ' + (result.message || 'Спасибо! Мы свяжемся с вами в течение 15 минут');
        statusNode.classList.remove('error');
        form.reset();
      } catch (error) {
        const message = error instanceof Error ? error.message : 'Не удалось отправить заявку';
        statusNode.textContent = '❌ ' + message;
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
