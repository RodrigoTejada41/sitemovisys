import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
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
  'Ética e transparência em todas as relações.',
  'Compromisso com resultados.',
  'Excelência técnica e melhoria contínua.',
  'Inovação aplicada às necessidades do cliente.',
  'Atendimento humanizado e suporte ágil.',
  'Parcerias duradouras baseadas em confiança e respeito.',
];

const story = [
  'Com mais de duas décadas de experiência no setor de Tecnologia da Informação e Automação Comercial, reunimos conhecimento técnico, visão estratégica e compromisso com a excelência para entregar soluções confiáveis e personalizadas. Nossa atuação abrange desde infraestrutura de TI, redes, servidores e segurança até sistemas de gestão empresarial (ERP), PDV, automação comercial, suporte especializado e desenvolvimento de soluções sob medida.',
  'Mais do que fornecer tecnologia, buscamos compreender a realidade de cada cliente. Cada projeto é desenvolvido com foco em eficiência operacional, estabilidade, segurança e escalabilidade, garantindo que a tecnologia se torne uma vantagem competitiva para o negócio.',
  'Nossa experiência foi construída ao longo de anos atendendo empresas de diversos segmentos, sempre com o mesmo compromisso: oferecer soluções robustas, atendimento transparente e suporte técnico de alto nível.',
  'A confiança conquistada de nossos clientes é resultado de uma atuação baseada em ética, responsabilidade e relacionamento de longo prazo. Para a MoviSys, cada parceria representa um compromisso contínuo com a qualidade, inovação e evolução tecnológica.',
  'Estamos em constante atualização para acompanhar as transformações do mercado, incorporando novas tecnologias, computação em nuvem, inteligência artificial, automação de processos e soluções digitais que agregam valor real às operações de nossos clientes.',
];

function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const reveal = {
    initial: reduceMotion ? false : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.18 },
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  };

  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Quem Somos | MoviSys';

    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.getAttribute('content');
    description?.setAttribute('content', 'Conheça a MoviSys: mais de duas décadas de experiência em tecnologia, automação comercial, infraestrutura, sistemas e suporte empresarial.');

    return () => {
      document.title = previousTitle;
      if (description && previousDescription) description.setAttribute('content', previousDescription);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  return (
    <div className="about-page">
      <header className="site-header site-header--solid">
        <Brand />
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map(([label, href]) => (
            <a className={label === 'Quem Somos' ? 'is-current' : ''} key={href} href={href} aria-current={label === 'Quem Somos' ? 'page' : undefined}>{label}</a>
          ))}
        </nav>
        <a className="header-cta" href="/#contato">Fale conosco <ArrowRight size={16} /></a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`} aria-hidden={!menuOpen}>
        <nav>
          {navigation.map(([label, href], index) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              <span>0{index + 1}</span>{label}<ArrowRight />
            </a>
          ))}
        </nav>
      </div>

      <main>
        <section className="about-hero" aria-labelledby="about-title">
          <div className="about-hero__image" aria-hidden="true" />
          <div className="about-hero__content">
            <motion.div {...reveal}>
              <p className="eyebrow"><span /> Institucional</p>
              <h1 id="about-title">Quem<br /><em>Somos.</em></h1>
              <p className="about-hero__lead">Na <strong>MoviSys</strong>, acreditamos que tecnologia não deve apenas funcionar — ela deve impulsionar resultados, simplificar processos e contribuir para o crescimento sustentável de cada empresa.</p>
            </motion.div>
            <motion.aside className="about-hero__experience" {...reveal} transition={{ ...reveal.transition, delay: 0.18 }} aria-label="Experiência da MoviSys">
              <strong>+20</strong>
              <span>anos de experiência em<br />TI e automação comercial</span>
            </motion.aside>
          </div>
          <div className="about-hero__rail"><span>MoviSys</span><span>Tecnologia · Estratégia · Confiança</span></div>
        </section>

        <section className="about-story section" aria-labelledby="story-title">
          <motion.div className="about-story__heading" {...reveal}>
            <p className="section-kicker">01 — Nossa trajetória</p>
            <h2 id="story-title">Tecnologia com<br /><span>visão de negócio.</span></h2>
          </motion.div>
          <div className="about-story__body">
            {story.map((paragraph, index) => (
              <motion.p key={paragraph} {...reveal} transition={{ ...reveal.transition, delay: Math.min(index * 0.05, 0.2) }}>{paragraph}</motion.p>
            ))}
          </div>
        </section>

        <section className="about-purpose" aria-labelledby="purpose-title">
          <motion.div className="about-purpose__heading" {...reveal}>
            <p className="section-kicker section-kicker--light">02 — Direção</p>
            <h2 id="purpose-title">O que nos move.<br /><span>Onde queremos chegar.</span></h2>
          </motion.div>
          <div className="about-purpose__grid">
            <motion.article {...reveal}>
              <Target aria-hidden="true" />
              <span>01</span>
              <h3>Nossa Missão</h3>
              <p>Fornecer soluções tecnológicas inteligentes que aumentem a produtividade, reduzam custos operacionais e impulsionem o crescimento das empresas por meio da inovação, segurança e excelência no atendimento.</p>
            </motion.article>
            <motion.article {...reveal} transition={{ ...reveal.transition, delay: 0.12 }}>
              <Eye aria-hidden="true" />
              <span>02</span>
              <h3>Nossa Visão</h3>
              <p>Ser reconhecida como uma das principais referências em tecnologia, automação comercial e soluções empresariais, destacando-se pela qualidade dos serviços, inovação constante e confiança construída junto aos clientes.</p>
            </motion.article>
          </div>
        </section>

        <section className="about-values section" aria-labelledby="values-title">
          <motion.div className="about-values__heading" {...reveal}>
            <p className="section-kicker">03 — Nossos valores</p>
            <h2 id="values-title">Princípios que orientam<br /><span>cada parceria.</span></h2>
          </motion.div>
          <div className="about-values__list">
            {values.map((value, index) => (
              <motion.div key={value} {...reveal} transition={{ ...reveal.transition, delay: (index % 2) * 0.08 }}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <Check aria-hidden="true" />
                <p>{value}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="about-manifesto" aria-labelledby="manifesto-title">
          <motion.div {...reveal}>
            <img src="/assets/movisys-logo.png" alt="Logo MoviSys Tecnologia" loading="lazy" />
            <p>MoviSys</p>
            <h2 id="manifesto-title">Tecnologia que<br /><em>Move sua Empresa.</em></h2>
            <span>Transformamos desafios em soluções, processos em produtividade e tecnologia em resultados concretos.</span>
            <a className="button button--primary" href="/#contato">Fale com a MoviSys <ArrowRight /></a>
          </motion.div>
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
        <div className="footer__bottom"><span>© {new Date().getFullYear()} MoviSys</span><span>Tecnologia que move sua empresa</span></div>
      </footer>

      <a className="whatsapp-float" href="https://wa.me/5511933799278" target="_blank" rel="noreferrer" aria-label="Abrir conversa com a MoviSys no WhatsApp">
        <MessageCircle /><span>WhatsApp</span>
      </a>
    </div>
  );
}

export default AboutPage;
