import { useEffect, useRef, useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  Blocks,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Cloud,
  Code2,
  Croissant,
  Database,
  Factory,
  Headphones,
  Mail,
  MessageCircle,
  Menu,
  Network,
  Pill,
  Phone,
  ServerCog,
  ShieldCheck,
  ShoppingBasket,
  Stethoscope,
  Store,
  Truck,
  UtensilsCrossed,
  Wrench,
  Send,
  X,
  Zap,
} from 'lucide-react';
import ServicePhotosPage from './service-photos/ServicePhotosPage';
import ContactFormModal from './contact/ContactFormModal';
import { ClientsSection } from './components/clients/ClientsSection';
import AboutPage from './about/AboutPage';
import { Brand } from './shared/Brand';
import LegalPage from './legal/LegalPage';

const navigation = [
  ['Soluções', '#solucoes'],
  ['Software', '#software'],
  ['Clientes', '#clientes'],
  ['Quem Somos', '/quem-somos'],
  ['Contato', '#contato'],
];

const pillars = [
  {
    icon: Code2,
    label: 'Software',
    title: 'Gestão clara para decisões melhores.',
    description: 'ERP, PDV, financeiro, estoque e CRM conectados à rotina da empresa.',
    tags: ['ERP e PDV', 'CRM e integrações'],
  },
  {
    icon: Blocks,
    label: 'Automação comercial',
    title: 'Vendas rápidas e sem retrabalho.',
    description: 'Frente de caixa integrada a NFC-e, TEF, PIX, balanças, leitores e comandas.',
    tags: ['Fiscal e pagamentos', 'Comandas e periféricos'],
  },
  {
    icon: Network,
    label: 'Infraestrutura',
    title: 'Infraestrutura segura e disponível.',
    description: 'Redes, servidores, cloud e backup planejados como um único ambiente.',
    tags: ['Redes e servidores', 'Cloud e segurança'],
  },
  {
    icon: Headphones,
    label: 'Suporte técnico',
    title: 'Suporte presente quando importa.',
    description: 'Atendimento preventivo e corretivo para reduzir paradas e manter o desempenho.',
    tags: ['Remoto e presencial', 'Monitoramento e manutenção'],
  },
];

const infra = [
  {
    id: 'redes',
    icon: Network,
    title: 'Redes corporativas',
    eyebrow: 'Conectividade',
    description: 'Cabeamento, Wi-Fi corporativo, VPN, firewall e VLAN dimensionados para estabilidade e controle.',
    detail: 'Do projeto à certificação, toda a rede é documentada para crescer sem perder desempenho.',
  },
  {
    id: 'servidores',
    icon: ServerCog,
    title: 'Servidores e virtualização',
    eyebrow: 'Disponibilidade',
    description: 'Windows Server, Linux, Active Directory, Hyper-V, VMware e banco de dados sob administração especializada.',
    detail: 'Ambientes monitorados, com acesso organizado, redundância e continuidade operacional.',
  },
  {
    id: 'seguranca',
    icon: ShieldCheck,
    title: 'Segurança e backup',
    eyebrow: 'Proteção',
    description: 'Backup automatizado, proteção contra ransomware, controle de acesso e recuperação de desastres.',
    detail: 'Políticas claras reduzem risco e mantêm os dados críticos disponíveis quando a empresa precisa.',
  },
  {
    id: 'cloud',
    icon: Cloud,
    title: 'Cloud e produtividade',
    eyebrow: 'Escala',
    description: 'Microsoft 365, Google Workspace, VPS, hospedagem e migração para nuvem com acompanhamento técnico.',
    detail: 'Arquivos, colaboração e recursos computacionais acessíveis com segurança de qualquer unidade.',
  },
];

const sectors = [
  { id: 'restaurantes', icon: UtensilsCrossed, name: 'Restaurantes', detail: 'PDV, comandas e delivery', description: 'Integre salão, balcão, cozinha, delivery, estoque e financeiro em uma operação rápida e rastreável.', solutions: ['Comandas e KDS', 'PDV e NFC-e', 'Delivery integrado'] },
  { id: 'padarias', icon: Croissant, name: 'Padarias', detail: 'Produção, balcão e estoque', description: 'Controle receitas, produção diária, perdas, balcão, balanças e reposição sem perder agilidade no atendimento.', solutions: ['Fichas de produção', 'Balanças e etiquetas', 'Controle de perdas'] },
  { id: 'mercados', icon: ShoppingBasket, name: 'Mercados', detail: 'Checkout, fiscal e reposição', description: 'Mantenha caixas, leitores, emissão fiscal, preços e estoque sincronizados para reduzir filas e rupturas.', solutions: ['Checkout integrado', 'Gestão fiscal', 'Reposição de estoque'] },
  { id: 'lojas', icon: Store, name: 'Lojas', detail: 'Vendas, CRM e integração', description: 'Unifique vendas, clientes, produtos, metas e canais para acompanhar toda a jornada comercial.', solutions: ['PDV e estoque', 'CRM e fidelização', 'Indicadores de vendas'] },
  { id: 'farmacias', icon: Pill, name: 'Farmácias', detail: 'Estoque, rastreio e segurança', description: 'Proteja a operação com controle de lotes, validade, acessos, disponibilidade de sistemas e segurança dos dados.', solutions: ['Lotes e validade', 'Controle de acessos', 'Backup e continuidade'] },
  { id: 'clinicas', icon: Stethoscope, name: 'Clínicas', detail: 'Agenda, dados e continuidade', description: 'Organize agenda, atendimento e infraestrutura com proteção para informações sensíveis e alta disponibilidade.', solutions: ['Agenda integrada', 'Rede segura', 'Backup automatizado'] },
  { id: 'escritorios', icon: BriefcaseBusiness, name: 'Escritórios', detail: 'Cloud, colaboração e suporte', description: 'Conecte equipes e documentos com produtividade em nuvem, acesso seguro e suporte técnico contínuo.', solutions: ['Microsoft 365', 'Arquivos em nuvem', 'Suporte aos usuários'] },
  { id: 'industrias', icon: Factory, name: 'Indústrias', detail: 'Produção, redes e automação', description: 'Estruture redes, servidores e integrações para sustentar produção, rastreabilidade e crescimento operacional.', solutions: ['Redes industriais', 'Servidores e dados', 'Integração de processos'] },
  { id: 'distribuidoras', icon: Truck, name: 'Distribuidoras', detail: 'Logística, vendas e estoque', description: 'Conecte pedidos, equipes comerciais, depósitos e expedição para ganhar velocidade e precisão logística.', solutions: ['Força de vendas', 'Estoque multiunidade', 'Pedidos e expedição'] },
  { id: 'servicos', icon: Wrench, name: 'Serviços', detail: 'Ordens, equipes e financeiro', description: 'Acompanhe clientes, contratos, ordens de serviço, equipes externas e resultados financeiros em um único fluxo.', solutions: ['Ordens de serviço', 'Gestão de equipes', 'Financeiro e CRM'] },
];

function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerSolid, setHeaderSolid] = useState(false);
  const [activeInfra, setActiveInfra] = useState(infra[0].id);
  const [activeSectorId, setActiveSectorId] = useState(null);
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const sectorDetailRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setHeaderSolid(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
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

  useEffect(() => {
    if (!activeSectorId) return undefined;
    const timer = window.setTimeout(() => sectorDetailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 80);
    return () => window.clearTimeout(timer);
  }, [activeSectorId]);

  const selectedInfra = infra.find((item) => item.id === activeInfra) ?? infra[0];
  const SelectedIcon = selectedInfra.icon;
  const selectedSector = sectors.find((sector) => sector.id === activeSectorId);

  return (
    <>
      <a className="skip-link" href="#conteudo-principal">Ir para o conteúdo</a>
      <header className={`site-header ${headerSolid || menuOpen ? 'site-header--solid' : ''}`}>
        <Brand />
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <button className="header-cta" type="button" onClick={() => setContactFormOpen(true)}>Solicitar orçamento <ArrowRight size={16} /></button>
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
        <section className="hero" id="inicio">
          <div className="hero__image" aria-hidden="true" />
          <div className="hero__shade" aria-hidden="true" />
          <div className="hero__content">
            <p className="eyebrow hero-enter hero-enter--1"><span /> Software, infraestrutura e suporte</p>
            <h1 className="hero-enter hero-enter--2">Tecnologia que<br />move sua <em>empresa.</em></h1>
            <p className="hero__lead hero-enter hero-enter--3">A MoviSys integra sistemas, automação e infraestrutura para sua empresa operar com segurança e crescer sem gargalos.</p>
            <div className="hero__actions hero-enter hero-enter--4">
              <button className="button button--primary" type="button" onClick={() => setContactFormOpen(true)}>Falar com um especialista <ArrowRight size={18} /></button>
              <a className="button button--ghost" href="#solucoes">Conhecer soluções</a>
            </div>
          </div>
          <a className="hero__scroll" href="#visao" aria-label="Descer para conhecer a MoviSys">
            <span>Descubra</span><ArrowDown />
          </a>
          <div className="hero__rail"><span>MoviSys</span><span>Software · Infraestrutura · Suporte</span></div>
        </section>

        <section className="biological-app section" id="evolucao-biologica" aria-labelledby="biological-app-title">
          <div className="biological-app__heading">
            <div>
              <p className="section-kicker">Aplicativo oficial MoviSys</p>
              <h2 id="biological-app-title">Evolução Biológica</h2>
            </div>
            <p>Sistema de gestão com integração autorizada ao Google Calendar.</p>
          </div>
          <div className="biological-app__content">
            <div className="biological-app__purpose">
              <p>O Evolução Biológica é um sistema de gestão desenvolvido pela MoviSys Tecnologia para empresas de controle de pragas, dedetização, sanitização e manejo integrado de pragas.</p>
              <p>O sistema permite organizar clientes, ordens de serviço, visitas técnicas, compromissos, certificados, relatórios, contratos e vencimentos de serviços.</p>
            </div>
            <div className="biological-app__oauth">
              <h3>Integração com o Google Calendar</h3>
              <p>A integração permite que cada empresa usuária conecte voluntariamente uma Conta Google e sincronize seus compromissos, visitas técnicas, atendimentos e ordens de serviço com a agenda autorizada.</p>
              <p>Cada conta é conectada individualmente. Um cliente não possui acesso à agenda, aos eventos ou às credenciais de outros clientes.</p>
              <p>A conexão utiliza o protocolo OAuth 2.0 do Google. O Evolução Biológica não solicita nem armazena a senha da Conta Google.</p>
              <p>Os dados autorizados são utilizados exclusivamente para fornecer a sincronização solicitada pelo usuário. O acesso pode ser revogado pelo próprio usuário a qualquer momento.</p>
              <a className="button button--app" href="/evolucao-biologica/appagenda">
                Conheça a integração com o Google Calendar <ArrowRight size={18} />
              </a>
              <nav className="biological-app__legal" aria-label="Documentos do Evolução Biológica">
                <a href="/politica-de-privacidade">Política de Privacidade</a>
                <a href="/termos-de-servico">Termos de Serviço</a>
              </nav>
            </div>
          </div>
        </section>

        <section className="intro section" id="visao">
          <div className="section-grid reveal">
            <p className="section-kicker">01 — Visão integrada</p>
            <div>
              <h2>Tudo conectado.<br /><span>Menos risco na operação.</span></h2>
              <p className="section-copy">Unimos gestão, automação e infraestrutura em uma parceria técnica única. Menos fornecedores, mais controle e decisões mais rápidas.</p>
            </div>
          </div>
          <div className="principles reveal">
            {[
              ['01', 'Operação contínua', 'Tecnologia estável para a empresa não parar.'],
              ['02', 'Dados protegidos', 'Acessos, backups e continuidade sob controle.'],
              ['03', 'Crescimento seguro', 'Ambientes preparados para evoluir com o negócio.'],
            ].map(([number, title, copy]) => (
              <div className="principle" key={title}>
                <span>{number}</span><h3>{title}</h3><p>{copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="solutions section" id="solucoes">
          <div className="section-heading reveal">
            <p className="section-kicker">02 — Soluções</p>
            <h2>Uma equipe.<br />Quatro frentes.</h2>
            <div className="section-heading__support"><p>Planejamento, implantação e suporte com visão completa da operação.</p><button type="button" onClick={() => setContactFormOpen(true)}>Encontrar a solução ideal <ArrowRight /></button></div>
          </div>
          <div className="pillar-list">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <article className="pillar reveal" key={pillar.label}>
                  <div className="pillar__number">0{index + 1}</div>
                  <div className="pillar__icon"><Icon /></div>
                  <div className="pillar__body">
                    <p>{pillar.label}</p>
                    <h3>{pillar.title}</h3>
                    <span>{pillar.description}</span>
                  </div>
                  <ul>{pillar.tags.map((tag) => <li key={tag}><Check size={14} />{tag}</li>)}</ul>
                </article>
              );
            })}
          </div>
        </section>

        <section className="software" id="software">
          <div className="software__copy reveal">
            <p className="section-kicker section-kicker--light">03 — Software MoviSys</p>
            <h2>Controle agora.<br /><span>Clareza para decidir.</span></h2>
            <p>Vendas, caixa, financeiro, estoque e relacionamento em uma gestão simples de operar.</p>
            <div className="software__features">
              <span><Database /> Dados centralizados</span>
              <span><Zap /> Operação em tempo real</span>
              <span><ShieldCheck /> Acesso seguro</span>
            </div>
          </div>
          <div className="product-visual reveal" aria-label="Representação de painel gerencial MoviSys">
            <div className="product-visual__glow" />
            <div className="product-window">
              <div className="product-window__top">
                <Brand compact />
                <span>Visão executiva</span>
                <div className="product-avatar">RT</div>
              </div>
              <div className="product-window__body">
                <aside><i /><i /><i /><i /></aside>
                <div className="product-data">
                  <p>Desempenho da operação</p>
                  <div className="metric-line"><strong>Vendas</strong><span>Atualizado agora</span></div>
                  <div className="chart"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
                  <div className="data-row"><span>Fluxo de caixa</span><b>Saudável</b></div>
                  <div className="data-row"><span>Giro de estoque</span><b>Em alta</b></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="infrastructure section" id="infraestrutura">
          <div className="section-heading reveal">
            <p className="section-kicker">04 — Infraestrutura</p>
            <h2>Uma base projetada<br />para não parar.</h2>
            <div className="section-heading__support"><p>Conectividade, proteção e disponibilidade para sustentar a operação.</p><button type="button" onClick={() => setContactFormOpen(true)}>Avaliar infraestrutura <ArrowRight /></button></div>
          </div>
          <div className="infra-explorer reveal">
            <div className="infra-tabs" role="tablist" aria-label="Áreas de infraestrutura">
              {infra.map((item) => (
                <button key={item.id} type="button" role="tab" aria-selected={activeInfra === item.id} onClick={() => setActiveInfra(item.id)}>
                  <span>{item.eyebrow}</span>{item.title}<ChevronDown />
                </button>
              ))}
            </div>
            <div className="infra-detail" role="tabpanel" key={selectedInfra.id}>
              <SelectedIcon />
              <p>{selectedInfra.eyebrow}</p>
              <h3>{selectedInfra.description}</h3>
              <span>{selectedInfra.detail}</span>
            </div>
          </div>
        </section>

        <section className="sectors section">
          <div className="section-grid reveal">
            <p className="section-kicker">05 — Experiência aplicada</p>
            <div>
              <h2>Soluções alinhadas<br /><span>à sua operação.</span></h2>
              <p className="section-copy">Cada negócio tem prioridades diferentes. Selecione um segmento e veja as possibilidades.</p>
            </div>
          </div>
          <article className="custom-system-callout reveal" aria-labelledby="custom-system-title">
            <div className="custom-system-callout__icon" aria-hidden="true"><Code2 /></div>
            <div className="custom-system-callout__copy">
              <p>Desenvolvimento sob medida</p>
              <h3 id="custom-system-title">Software que acompanha<br />o seu processo.</h3>
              <span>Projetamos sistemas alinhados à rotina e às regras da sua empresa, com evolução contínua.</span>
            </div>
            <ul aria-label="Recursos de sistemas sob medida">
              <li><Check /> Sistemas web e desktop</li>
              <li><Check /> Integrações e automações</li>
              <li><Check /> Evolução e suporte contínuo</li>
            </ul>
          </article>
          <div className="sector-options-heading reveal">
            <p>Soluções por tipo de negócio</p>
            <button type="button" onClick={() => setContactFormOpen(true)}>Não encontrou seu segmento? Fale conosco <ArrowRight /></button>
          </div>
          <div className="sector-list reveal">
            {sectors.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <button className={`sector-item ${activeSectorId === sector.id ? 'is-active' : ''}`} key={sector.id} type="button" onClick={() => setActiveSectorId(sector.id)} aria-expanded={activeSectorId === sector.id} aria-controls="sector-detail">
                  <div className="sector-item__top"><i>{String(index + 1).padStart(2, '0')}</i><Icon aria-hidden="true" /></div>
                  <div><h3>{sector.name}</h3><p>{sector.detail}</p></div>
                </button>
              );
            })}
          </div>
          {selectedSector && (() => {
            const SelectedSectorIcon = selectedSector.icon;
            return (
              <section className="sector-detail-panel" id="sector-detail" ref={sectorDetailRef} key={selectedSector.id} aria-live="polite">
                <button className="sector-detail-panel__close" type="button" onClick={() => setActiveSectorId(null)} aria-label="Fechar detalhes do segmento"><X /></button>
                <div className="sector-detail-panel__icon"><SelectedSectorIcon aria-hidden="true" /></div>
                <div className="sector-detail-panel__copy">
                  <span>Soluções para</span>
                  <h3>{selectedSector.name}</h3>
                  <p>{selectedSector.description}</p>
                </div>
                <div className="sector-detail-panel__solutions">
                  <span>Recursos indicados</span>
                  <ul>{selectedSector.solutions.map((solution) => <li key={solution}><Check /> {solution}</li>)}</ul>
                  <button type="button" onClick={() => setContactFormOpen(true)}>Solicitar atendimento <ArrowRight /></button>
                </div>
              </section>
            );
          })()}
        </section>

        <ClientsSection />

        <section className="advisory" id="assessoria">
          <div className="advisory__orb" aria-hidden="true" />
          <div className="advisory__content reveal">
            <p className="section-kicker section-kicker--light">07 — Assessoria contínua</p>
            <h2>Decisões técnicas<br />com visão de negócio.</h2>
            <p>Planejamento e acompanhamento para reduzir riscos, preparar expansões e proteger a continuidade.</p>
            <div className="advisory__list">
              <span><Check /> Planejamento tecnológico</span>
              <span><Check /> Auditoria de infraestrutura</span>
              <span><Check /> Gestão de ativos e licenças</span>
              <span><Check /> Continuidade de negócios</span>
            </div>
            <button className="button button--outline-light" type="button" onClick={() => setContactFormOpen(true)}>Agendar uma conversa <ArrowRight /></button>
          </div>
          <div className="advisory__statement reveal">
            <span>Estratégia</span><span>Implementação</span><span>Suporte</span>
          </div>
        </section>

        <section className="final-cta section" id="contato">
          <div className="final-cta__line reveal">
            <div className="final-cta__identity">
              <p className="section-kicker">Próximo passo</p>
              <span>Atendimento direto e personalizado.</span>
            </div>
            <h2>Vamos simplificar<br />sua <em>tecnologia?</em></h2>
            <p>Conte o que precisa melhorar. Um especialista da MoviSys avalia o cenário com você.</p>
            <button className="contact-form-trigger" type="button" onClick={() => setContactFormOpen(true)}>
              <Send />
              <span><small>Primeiro contato</small><strong>Solicitar orçamento</strong></span>
              <ArrowRight />
            </button>
            <div className="contact-actions">
              <a href="https://wa.me/5511933799278" target="_blank" rel="noreferrer">
                <Phone />
                <span><small>WhatsApp</small><strong>(11) 93379-9278</strong></span>
                <ArrowRight />
              </a>
              <a href="mailto:contatomovisystecnologia@gmail.com">
                <Mail />
                <span><small>E-mail</small><strong>contatomovisystecnologia@gmail.com</strong></span>
                <ArrowRight />
              </a>
            </div>
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
        <MessageCircle />
        <span>WhatsApp</span>
      </a>

      {contactFormOpen && <ContactFormModal onClose={() => setContactFormOpen(false)} />}
    </>
  );
}

function App() {
  if (window.location.pathname.startsWith('/politica-de-privacidade')) {
    return <LegalPage type="privacy" />;
  }

  if (window.location.pathname.startsWith('/termos-de-servico')) {
    return <LegalPage type="terms" />;
  }

  if (window.location.pathname.startsWith('/quem-somos')) {
    return <AboutPage />;
  }

  if (window.location.pathname.startsWith('/fotos-servicos')) {
    return <ServicePhotosPage />;
  }

  return <LandingPage />;
}

export default App;
