import { useEffect, useState } from 'react';
import {
  ArrowRight,
  Check,
  Eye,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  Target,
  X,
} from 'lucide-react';
import { Brand } from '../shared/Brand';
import './aboutPage.css';

const navigation = [
  ['Início', '/#inicio'],
  ['Soluções', '/#solucoes'],
  ['Clientes', '/#clientes'],
  ['Quem Somos', '/quem-somos'],
  ['Contato', '/#contato'],
];

const values = [
  'Ética e transparência.',
  'Compromisso com resultados.',
  'Excelência técnica.',
  'Inovação com propósito.',
  'Atendimento próximo e ágil.',
  'Parcerias de longo prazo.',
];

const story = [
  'Há mais de duas décadas, atuamos em tecnologia da informação e automação comercial. Reunimos sistemas, infraestrutura, segurança e suporte em soluções adequadas à realidade de cada empresa.',
  'Começamos pelo entendimento da operação. Assim, cada projeto reduz riscos, simplifica processos e cria uma base segura para o crescimento.',
  'Nossa experiência em diferentes segmentos sustenta relações transparentes, suporte próximo e evolução tecnológica contínua.',
];

function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Quem Somos | MoviSys';

    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.getAttribute('content');
    const canonical = document.querySelector('link[rel="canonical"]');
    const previousCanonical = canonical?.getAttribute('href');
    description?.setAttribute('content', 'Conheça a MoviSys: mais de 20 anos entregando software, automação comercial, infraestrutura e suporte para empresas.');
    canonical?.setAttribute('href', 'https://movisystecnologia.com.br/quem-somos');

    return () => {
      document.title = previousTitle;
      if (description && previousDescription) description.setAttribute('content', previousDescription);
      if (canonical && previousCanonical) canonical.setAttribute('href', previousCanonical);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    const closeOnEscape = (event) => event.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.classList.remove('menu-open');
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [menuOpen]);

  return (
    <div className="about-page">
      <a className="skip-link" href="#conteudo-principal">Ir para o conteúdo</a>
      <header className="site-header site-header--solid">
        <Brand />
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map(([label, href]) => (
            <a className={label === 'Quem Somos' ? 'is-current' : ''} key={href} href={href} aria-current={label === 'Quem Somos' ? 'page' : undefined}>{label}</a>
          ))}
        </nav>
        <a className="header-cta" href="/#contato">Solicitar orçamento <ArrowRight size={16} /></a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`} aria-hidden={!menuOpen} inert={!menuOpen}>
        <nav>
          {navigation.map(([label, href], index) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              <span>0{index + 1}</span>{label}<ArrowRight />
            </a>
          ))}
        </nav>
      </div>

      <main id="conteudo-principal">
        <section className="about-hero" aria-labelledby="about-title">
          <div className="about-hero__image" aria-hidden="true" />
          <div className="about-hero__content">
            <div>
              <p className="eyebrow"><span /> Institucional</p>
              <h1 id="about-title">Quem<br /><em>Somos.</em></h1>
              <p className="about-hero__lead">A <strong>MoviSys</strong> transforma tecnologia em operações mais simples, seguras e preparadas para crescer.</p>
              <div className="about-hero__actions"><a className="button button--primary" href="/#contato">Falar com um especialista <ArrowRight /></a></div>
            </div>
            <aside className="about-hero__experience" aria-label="Experiência da MoviSys">
              <strong>+20</strong>
              <span>anos de experiência em<br />TI e automação comercial</span>
            </aside>
          </div>
          <div className="about-hero__rail"><span>MoviSys</span><span>Tecnologia · Estratégia · Confiança</span></div>
        </section>

        <section className="about-story section" aria-labelledby="story-title">
          <div className="about-story__heading">
            <p className="section-kicker">01 — Nossa trajetória</p>
            <h2 id="story-title">Tecnologia com<br /><span>visão de negócio.</span></h2>
          </div>
          <div className="about-story__body">
            {story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="about-purpose" aria-labelledby="purpose-title">
          <div className="about-purpose__heading">
            <p className="section-kicker section-kicker--light">02 — Direção</p>
            <h2 id="purpose-title">O que nos move.<br /><span>Onde queremos chegar.</span></h2>
          </div>
          <div className="about-purpose__grid">
            <article>
              <Target aria-hidden="true" />
              <span>01</span>
              <h3>Nossa Missão</h3>
              <p>Simplificar operações e apoiar o crescimento das empresas com tecnologia segura, eficiente e atendimento próximo.</p>
            </article>
            <article>
              <Eye aria-hidden="true" />
              <span>02</span>
              <h3>Nossa Visão</h3>
              <p>Ser referência em tecnologia empresarial pela qualidade das soluções e pela confiança construída com cada cliente.</p>
            </article>
          </div>
        </section>

        <section className="about-values section" aria-labelledby="values-title">
          <div className="about-values__heading">
            <p className="section-kicker">03 — Nossos valores</p>
            <h2 id="values-title">Princípios que orientam<br /><span>cada parceria.</span></h2>
          </div>
          <div className="about-values__list">
            {values.map((value, index) => (
              <div key={value}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <Check aria-hidden="true" />
                <p>{value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="about-manifesto" aria-labelledby="manifesto-title">
          <div>
            <img src="/assets/movisys-logo.webp" alt="Logo MoviSys Tecnologia" loading="lazy" />
            <p>MoviSys</p>
            <h2 id="manifesto-title">Tecnologia que<br /><em>Move sua Empresa.</em></h2>
            <span>Software, infraestrutura e suporte trabalhando juntos para sua empresa avançar.</span>
            <a className="button button--primary" href="/#contato">Solicitar orçamento <ArrowRight /></a>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer__top">
          <Brand />
          <p>Software, infraestrutura e suporte para empresas que não podem parar.</p>
          <address>
            <a href="tel:+5511933799278"><Phone /> (11) 93379-9278</a>
            <a href="mailto:contatomovisystecnologia@gmail.com"><Mail /> contatomovisystecnologia@gmail.com</a>
          </address>
        </div>
        <div className="footer__links" aria-label="Links legais">
          <a href="/politica-de-privacidade">Política de Privacidade</a>
          <a href="/termos-de-servico">Termos de Serviço</a>
        </div>
        <div className="footer__bottom"><span>© {new Date().getFullYear()} MoviSys</span><span>Tecnologia que move sua empresa</span></div>
      </footer>

      <a className="whatsapp-float" href="https://wa.me/5511933799278" target="_blank" rel="noreferrer" aria-label="Abrir conversa com a MoviSys no WhatsApp">
        <MessageCircle /><span>WhatsApp</span>
      </a>
    </div>
  );
}

export default AboutPage;
