const services = [
  {
    index: "01",
    title: "Добыча",
    text: "Проектирование и ведение горных работ с точным контролем каждого этапа — от вскрытия массива до выдачи сырья.",
    tags: ["Проходка", "Выемка", "Транспортировка"],
  },
  {
    index: "02",
    title: "Укрепление",
    text: "Диагностика массива, крепление выработок и инженерная защита подземных объектов в сложных геологических условиях.",
    tags: ["Геомеханика", "Крепление", "Мониторинг"],
  },
  {
    index: "03",
    title: "Облагораживание",
    text: "Превращаем шахты и пещеры в безопасные, функциональные пространства для промышленности, туризма и науки.",
    tags: ["Инфраструктура", "Свет", "Навигация"],
  },
];

const stages = [
  ["Исследование", "Сканируем объект, изучаем породы и формируем цифровую модель."],
  ["Проектирование", "Рассчитываем технологию, сроки, логистику и меры безопасности."],
  ["Реализация", "Выполняем работы единой командой с постоянным контролем качества."],
  ["Эксплуатация", "Передаём готовый объект и систему дальнейшего мониторинга."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="RockScience — на главную">
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
          <span>ROCK<span>SCIENCE</span></span>
        </a>
        <nav aria-label="Основная навигация">
          <a href="#team">Команда</a>
          <a href="#services">Услуги</a>
          <a href="#contact">Контакты</a>
        </nav>
        <a className="header-cta" href="#contact">Обсудить проект <span>↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="depth-label" aria-hidden="true">
          <span>УРОВЕНЬ</span><strong>−480 м</strong>
        </div>
        <div className="hero-copy">
          <p className="eyebrow"><span /> Инженерия под поверхностью</p>
          <h1>Углубляемся<br />в <em>возможности</em></h1>
          <p className="hero-lead">
            Добываем ресурсы и создаём новую ценность подземных пространств —
            безопасно, точно, с уважением к породе.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#services">Наши направления <span>↓</span></a>
            <a className="text-link" href="#approach">Как мы работаем <span>→</span></a>
          </div>
        </div>
        <div className="rock-visual" aria-hidden="true">
          <div className="rock rock-back" />
          <div className="rock rock-mid" />
          <div className="rock rock-front">
            <div className="core-glow" />
          </div>
          <div className="scan-line" />
          <span className="coordinate c1">55°45′ N</span>
          <span className="coordinate c2">37°37′ E</span>
        </div>
        <div className="hero-foot">
          <p>ДОБЫЧА <span>×</span> ИНЖЕНЕРИЯ <span>×</span> ПРОСТРАНСТВО</p>
          <p className="scroll-hint">Листайте глубже <span>↓</span></p>
        </div>
      </section>

      <section className="manifesto section-pad" id="team">
        <p className="section-index">/ 01 — КОМАНДА</p>
        <div className="team-heading">
          <h2>Команда<br /><em>RockScience</em></h2>
          <p>Два крупных блока команды. Здесь можно будет разместить информацию о ключевых направлениях, подразделениях или руководителях.</p>
        </div>
        <div className="team-grid">
          <article className="team-block team-block-featured">
            <div className="team-portrait">
              <img src="/team-speaker.png" alt="Участник команды RockScience у трибуны" />
            </div>
            <div className="team-content">
              <span className="team-number">01</span>
              <p className="team-label">Крупный блок</p>
              <h3>Название первого блока</h3>
              <p>Здесь будет основная информация о первой части команды.</p>
            </div>
          </article>
          <article className="team-block">
            <div className="team-content">
              <span className="team-number">02</span>
              <p className="team-label">Крупный блок</p>
              <h3>Название второго блока</h3>
              <p>Здесь будет основная информация о второй части команды.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="services section-pad" id="services">
        <div className="section-heading">
          <p className="section-index light">/ 02 — НАПРАВЛЕНИЯ</p>
          <h2>Работаем с глубиной<br />на всех уровнях</h2>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service-card" key={service.index}>
              <div className="service-number">{service.index}</div>
              <div className="service-symbol" aria-hidden="true">
                <span /><span /><span />
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <div className="tags">
                {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="approach section-pad" id="approach">
        <div className="approach-intro">
          <p className="section-index">/ 03 — МЕТОД</p>
          <h2>От неизвестности<br />к <em>точному</em> результату</h2>
          <p>Каждое решение опирается на данные о реальном состоянии массива. Это позволяет управлять рисками до начала работ, а не реагировать на них после.</p>
        </div>
        <ol className="stages">
          {stages.map(([title, text], index) => (
            <li key={title}>
              <span className="stage-index">0{index + 1}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
              <span className="stage-arrow" aria-hidden="true">↘</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="safety" id="safety">
        <div className="safety-visual" aria-hidden="true">
          <div className="tunnel-rings"><i /><i /><i /><i /><i /></div>
          <div className="safety-beam" />
        </div>
        <div className="safety-copy">
          <p className="section-index light">/ 04 — ПРИНЦИП</p>
          <h2>Безопасность —<br />это <em>система</em></h2>
          <p>Контролируем устойчивость породы, состояние креплений и параметры среды на всём жизненном цикле объекта.</p>
          <ul>
            <li><span>01</span> Геотехнический мониторинг</li>
            <li><span>02</span> Сценарии аварийного реагирования</li>
            <li><span>03</span> Документируемый контроль качества</li>
          </ul>
        </div>
      </section>

      <section className="contact section-pad" id="contact">
        <div>
          <p className="section-index">/ 05 — КОНТАКТ</p>
          <h2>Есть сложный<br />подземный <em>объект?</em></h2>
        </div>
        <div className="contact-action">
          <p>Расскажите нам о задаче. Инженерная команда изучит вводные и предложит следующий шаг.</p>
          <a className="button button-dark" href="mailto:projects@rockscience.ru?subject=Новый проект для RockScience">Начать разговор <span>↗</span></a>
          <small>projects@rockscience.ru</small>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
          <span>ROCK<span>SCIENCE</span></span>
        </a>
        <p>Горная инженерия и развитие подземных пространств</p>
        <p>© 2026 ROCKSCIENCE</p>
      </footer>
    </main>
  );
}
