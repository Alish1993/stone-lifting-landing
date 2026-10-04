:root {
  --bg: #0b0d13;
  --bg-2: #111827;
  --panel: rgba(22, 27, 38, 0.9);
  --panel-strong: #171d2c;
  --card: #121827;
  --card-soft: #1b2332;
  --text: #f5f7fb;
  --muted: #b7c0d4;
  --line: rgba(255, 255, 255, 0.08);
  --accent: #d5b36b;
  --accent-2: #6ea8ff;
  --success: #7fe7ba;
  --danger: #ff7f7f;
  --shadow: 0 20px 60px rgba(0, 0, 0, 0.28);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background:
    radial-gradient(circle at top, rgba(214, 179, 90, 0.2), transparent 35%),
    linear-gradient(180deg, #0b0d13 0%, #111827 100%);
  color: var(--text);
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

button,
input,
select,
textarea {
  font: inherit;
}

.container {
  width: min(1180px, calc(100% - 2rem));
  margin: 0 auto;
}

.page-shell {
  min-height: 100vh;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(18px);
  background: rgba(11, 13, 19, 0.7);
  border-bottom: 1px solid var(--line);
}

.topbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 76px;
  gap: 1rem;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: #111827;
  font-weight: 900;
}

.brand strong {
  display: block;
  font-size: 0.96rem;
  letter-spacing: 0.08em;
}

.brand small {
  display: block;
  color: var(--muted);
  font-size: 0.67rem;
  letter-spacing: 0.04em;
}

.nav {
  display: flex;
  align-items: center;
  gap: 1.4rem;
  color: var(--muted);
  font-size: 0.92rem;
}

.nav a {
  transition: color 0.2s ease;
}

.nav a:hover,
.nav a:focus-visible {
  color: var(--text);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: 999px;
  padding: 0.92rem 1.55rem;
  font-weight: 600;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  cursor: pointer;
}

.btn:hover,
.btn:focus-visible {
  transform: translateY(-1px);
}

.btn-primary {
  color: #111827;
  background: linear-gradient(135deg, var(--accent), #f3d596);
  box-shadow: 0 18px 32px rgba(213, 179, 107, 0.35);
}

.btn-ghost {
  color: var(--text);
  background: rgba(255, 255, 255, 0.02);
  border-color: var(--line);
}

.btn-call {
  background: rgba(110, 168, 255, 0.08);
  border-color: rgba(110, 168, 255, 0.3);
  color: var(--text);
}

.hero {
  padding: 5.5rem 0 2rem;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 2.5rem;
}

.eyebrow {
  margin: 0 0 1rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--accent);
}

.hero-copy h1 {
  margin: 0;
  max-width: 700px;
  font-size: clamp(2.5rem, 4vw, 5rem);
  line-height: 1.02;
  letter-spacing: -0.06em;
}

.subtitle {
  margin-top: 1.25rem;
  font-size: clamp(1.05rem, 1.6vw, 1.5rem);
  color: var(--muted);
}

.hero-actions {
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.hero-trust {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem 1.5rem;
  padding: 0;
  margin: 2rem 0 0;
  color: var(--muted);
  font-size: 0.95rem;
}

.hero-trust li {
  position: relative;
  padding-left: 1rem;
}

.hero-trust li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--accent);
}

.hero-card {
  position: relative;
  padding: 1.2rem;
  border-radius: 32px;
  background: linear-gradient(180deg, rgba(18, 24, 39, 0.94), rgba(17, 24, 39, 1));
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
}

.hero-image {
  min-height: 530px;
  border-radius: 24px;
  background:
    linear-gradient(180deg, rgba(13, 15, 18, 0.15), rgba(13, 15, 18, 0.75)),
    url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat;
}

.stat-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.stat-row div {
  padding: 1rem 1.1rem;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.02);
}

.stat-row strong {
  display: block;
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
}

.stat-row span {
  color: var(--muted);
  font-size: 0.8rem;
}

.section {
  padding: 5rem 0;
}

.muted {
  background: rgba(255, 255, 255, 0.015);
}

.section-head {
  margin-bottom: 2.4rem;
}

.section-head h2 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 3rem);
  letter-spacing: -0.05em;
}

.cards-grid {
  display: grid;
  gap: 1.4rem;
}

.four-col {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.three-col {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.info-card,
.problem-card,
.review-card,
.step-card {
  background: rgba(17, 24, 39, 0.8);
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 1.5rem;
  box-shadow: 0 18px 42px rgba(0, 0, 0, 0.12);
}

.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: rgba(213, 179, 107, 0.12);
  color: var(--accent);
  font-weight: 800;
  margin-bottom: 1.1rem;
}

.info-card h3,
.problem-card h3,
.step-card h3 {
  margin: 0 0 0.75rem;
  font-size: 1.4rem;
}

.info-card p,
.problem-card p,
.step-card p,
.review-card p,
.footer-text,
.faq-list p,
.price-box p,
.equipment-list li {
  color: var(--muted);
  line-height: 1.7;
}

.problem-card {
  min-height: 220px;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.2rem;
}

.step-card {
  position: relative;
}

.step-card span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 14px;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, rgba(213, 179, 107, 0.18), rgba(110, 168, 255, 0.18));
  color: var(--accent);
  font-weight: 800;
}

.equipment-layout {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 1.4rem;
  align-items: stretch;
}

.equipment-list {
  background: rgba(17, 24, 39, 0.8);
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 2rem;
}

.equipment-list ul {
  margin: 0;
  padding-left: 1.2rem;
  list-style: disc;
}

.equipment-panel {
  display: grid;
  grid-template-rows: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.mini-block {
  background: rgba(17, 24, 39, 0.8);
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 1.5rem;
}

.mini-block strong {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
}

.mini-block span {
  color: var(--muted);
}

.mini-block.highlight {
  background: linear-gradient(135deg, rgba(213, 179, 107, 0.12), rgba(110, 168, 255, 0.12));
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.gallery-item {
  min-height: 310px;
  display: grid;
  place-items: center;
  border: 1px solid var(--line);
  border-radius: 24px;
  background: linear-gradient(180deg, rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.95));
  color: var(--muted);
  font-weight: 600;
}

.placeholder-photo {
  background-image:
    linear-gradient(180deg, rgba(13, 15, 18, 0.2), rgba(13, 15, 18, 0.5)),
    linear-gradient(135deg, rgba(213, 179, 107, 0.12), rgba(110, 168, 255, 0.12));
}

.price-box {
  display: grid;
  justify-items: center;
  text-align: center;
  padding: 3rem 2rem;
  border-radius: 28px;
  border: 1px solid var(--line);
  background: linear-gradient(135deg, rgba(213, 179, 107, 0.1), rgba(110, 168, 255, 0.12));
}

.price-box strong {
  font-size: clamp(2.3rem, 4vw, 4.2rem);
  letter-spacing: -0.07em;
}

.price-box span {
  display: inline-block;
  margin-top: 0.5rem;
  color: var(--muted);
  font-size: 1.1rem;
}

.review-card {
  min-height: 240px;
}

.stars {
  color: var(--accent);
  letter-spacing: 0.22em;
  margin-bottom: 1rem;
}

.review-card strong {
  display: inline-block;
  margin-top: 1rem;
}

.faq-wrap {
  max-width: 980px;
}

.faq-list {
  display: grid;
  gap: 0.8rem;
}

.faq-list details {
  background: rgba(17, 24, 39, 0.8);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 1rem 1.2rem;
}

.faq-list summary {
  cursor: pointer;
  list-style: none;
  font-weight: 600;
}

.faq-list summary::-webkit-details-marker {
  display: none;
}

.faq-list p {
  margin: 0.9rem 0 0;
}

.form-layout {
  display: grid;
  gap: 1.5rem;
}

.lead-form {
  background: rgba(17, 24, 39, 0.8);
  border: 1px solid var(--line);
  border-radius: 28px;
  padding: 2rem;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.1rem;
}

label {
  display: grid;
  gap: 0.5rem;
  color: var(--muted);
}

label span {
  font-size: 0.9rem;
}

input,
select,
textarea {
  width: 100%;
  padding: 1rem 1rem;
  border-radius: 14px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.02);
  color: var(--text);
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

input:focus,
select:focus,
textarea:focus {
  border-color: rgba(213, 179, 107, 0.8);
  box-shadow: 0 0 0 4px rgba(213, 179, 107, 0.12);
}

.full-width {
  grid-column: 1 / -1;
}

.form-footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
}

.form-status {
  margin: 0;
  color: var(--success);
}

.form-status.error {
  color: var(--danger);
}

.honeypot {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

.footer {
  border-top: 1px solid var(--line);
  background: rgba(9, 12, 17, 0.9);
  padding: 2.5rem 0 5rem;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.footer-brand {
  margin-bottom: 0.8rem;
}

.footer-contacts {
  display: grid;
  gap: 0.45rem;
  color: var(--muted);
}

.footer-actions {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  flex-wrap: wrap;
}

.floating-actions {
  position: fixed;
  right: 18px;
  bottom: 18px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  z-index: 30;
}

.floating-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 148px;
  min-height: 48px;
  border-radius: 999px;
  padding: 0.85rem 1.1rem;
  font-weight: 700;
  color: #fff;
  box-shadow: 0 18px 32px rgba(0, 0, 0, 0.24);
}

.whatsapp {
  background: linear-gradient(135deg, #25d366, #1ea851);
}

.telegram {
  background: linear-gradient(135deg, #2da5e7, #1c8fe1);
}

.reveal {
  opacity: 0;
  transform: translateY(22px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

.hidden-mobile {
  display: flex;
}

@media (max-width: 980px) {
  .hero-grid,
  .equipment-layout,
  .four-col,
  .three-col,
  .steps-grid,
  .gallery-grid,
  .form-grid {
    grid-template-columns: 1fr 1fr;
  }

  .hero-grid,
  .equipment-layout {
    grid-template-columns: 1fr;
  }

  .nav {
    display: none;
  }
}

@media (max-width: 720px) {
  .topbar-inner,
  .hero-actions,
  .form-footer,
  .footer-inner {
    align-items: flex-start;
    flex-direction: column;
  }

  .four-col,
  .three-col,
  .steps-grid,
  .gallery-grid,
  .form-grid {
    grid-template-columns: 1fr;
  }

  .hero {
    padding-top: 4rem;
  }

  .hero-image {
    min-height: 360px;
  }

  .floating-actions {
    right: 12px;
    bottom: 12px;
  }

  .floating-btn {
    min-width: 130px;
  }

  .hidden-mobile {
    display: none;
  }
}
