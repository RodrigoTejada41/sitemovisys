import { useEffect, useState } from 'react';
import {
  ArrowRight,
  CalendarDays,
  Check,
  FileText,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  X,
} from 'lucide-react';
import { Brand } from '../shared/Brand';
import './legalPage.css';

const navigation = [
  ['Início', '/#inicio'],
  ['Soluções', '/#solucoes'],
  ['Clientes', '/#clientes'],
  ['Quem Somos', '/quem-somos'],
  ['Contato', '/#contato'],
];

const legalPages = {
  privacy: {
    path: '/politica-de-privacidade',
    title: 'Política de Privacidade | MoviSys Tecnologia',
    description: 'Política de Privacidade da MoviSys Tecnologia e informações sobre o tratamento de dados e integrações com serviços Google.',
    canonical: 'https://movisystecnologia.com.br/politica-de-privacidade',
    eyebrow: 'Privacidade e LGPD',
    heading: 'Política de Privacidade',
    lead: 'Esta Política explica como a MoviSys Tecnologia trata dados pessoais no site, no atendimento comercial e nas integrações autorizadas com serviços Google.',
    updatedAt: '24 de julho de 2026',
    icon: ShieldCheck,
    sections: [
      {
        title: 'Identificacao da empresa',
        body: [
          'A MoviSys Tecnologia fornece soluções de software, automação comercial, infraestrutura e suporte técnico para empresas. O contato oficial para assuntos de privacidade e atendimento é contatomovisystecnologia@gmail.com.',
        ],
      },
      {
        title: 'Finalidade da coleta de dados',
        body: [
          'Tratamos dados para responder solicitações de contato, prestar suporte, executar serviços contratados, manter a segurança das operações, cumprir obrigações legais e viabilizar integrações autorizadas pelo usuário.',
        ],
      },
      {
        title: 'Dados que podem ser coletados',
        body: [
          'Podemos coletar nome, empresa, telefone, e-mail, mensagens enviadas, preferências de atendimento, dados técnicos básicos de acesso ao site e informações necessárias para prestar os serviços solicitados.',
          'Durante o login com Google, podem ser recebidos dados de identificação da conta autorizada, como nome, e-mail e identificador da conta, conforme as permissões concedidas pelo usuário.',
        ],
      },
      {
        title: 'Uso de dados do Google Calendar',
        body: [
          'Quando o usuário autorizar a integração, o sistema poderá consultar, criar, editar ou excluir eventos do Google Calendar somente para executar funcionalidades de agenda solicitadas ou configuradas pelo próprio usuário.',
          'A MoviSys não acessa calendários, eventos ou dados da conta Google sem autorização OAuth válida.',
        ],
      },
      {
        title: 'Uso de dados das APIs do Google',
        body: [
          'O sistema acessará somente os dados autorizados pelo usuário e usará esses dados exclusivamente para oferecer funcionalidades relacionadas à agenda.',
          'Os dados obtidos pelas APIs do Google não serão vendidos, não serão usados para publicidade e não serão transferidos para finalidades alheias ao funcionamento da integração autorizada.',
          'O usuário pode revogar o acesso a qualquer momento nas configurações da própria Conta Google. O tratamento seguirá a Política de Dados do Usuário dos Serviços de API do Google, incluindo os requisitos de uso limitado.',
        ],
      },
      {
        title: 'Tokens OAuth',
        body: [
          'Tokens OAuth podem ser armazenados de forma protegida para manter a integração ativa enquanto houver autorização do usuário e necessidade operacional. Esses tokens não são publicados, compartilhados ou inseridos no código-fonte.',
        ],
      },
      {
        title: 'Protecao e seguranca',
        body: [
          'Aplicamos medidas técnicas e organizacionais para proteger informações contra acesso não autorizado, perda, alteração indevida e divulgação. O acesso interno é limitado a pessoas que precisam da informação para executar atendimento, suporte ou operação autorizada.',
        ],
      },
      {
        title: 'Compartilhamento de dados',
        body: [
          'Dados podem ser compartilhados com fornecedores técnicos estritamente necessários para hospedagem, comunicação, segurança, suporte ou cumprimento legal. Não vendemos dados pessoais.',
        ],
      },
      {
        title: 'Retencao e exclusao',
        body: [
          'Mantemos dados pelo tempo necessário para cumprir as finalidades informadas, contratos, obrigações legais e defesa de direitos. O titular pode solicitar exclusão pelo e-mail de contato, observadas obrigações legais de retenção.',
        ],
      },
      {
        title: 'Direitos do titular',
        body: [
          'Nos termos da LGPD, o titular pode solicitar confirmação de tratamento, acesso, correção, anonimização, bloqueio, eliminação, portabilidade, informação sobre compartilhamento e revisão de consentimento quando aplicável.',
        ],
      },
      {
        title: 'Revogacao do acesso Google',
        body: [
          'O usuário pode revogar a autorização da integração pela página de permissões da Conta Google ou solicitar apoio pelo contato oficial da MoviSys. A revogação pode interromper recursos dependentes da agenda.',
        ],
      },
      {
        title: 'Cookies',
        body: [
          'O site pode usar cookies técnicos ou recursos equivalentes para funcionamento, segurança e melhoria da experiência. Cookies de terceiros somente devem ser usados quando necessários aos serviços incorporados ao site.',
        ],
      },
      {
        title: 'Alteracoes nesta politica',
        body: [
          'Esta Política pode ser atualizada para refletir mudanças legais, técnicas ou operacionais. A data de última atualização será mantida nesta página.',
        ],
      },
      {
        title: 'Contato',
        body: [
          'Solicitações sobre privacidade, direitos do titular, exclusão de dados ou integrações Google devem ser enviadas para contatomovisystecnologia@gmail.com.',
        ],
      },
    ],
  },
  terms: {
    path: '/termos-de-servico',
    title: 'Termos de Serviço | MoviSys Tecnologia',
    description: 'Termos e condições de uso dos serviços e integrações disponibilizados pela MoviSys Tecnologia.',
    canonical: 'https://movisystecnologia.com.br/termos-de-servico',
    eyebrow: 'Condições de uso',
    heading: 'Termos de Serviço',
    lead: 'Estes Termos definem as condições gerais de uso dos serviços, canais digitais e integrações oferecidos pela MoviSys Tecnologia.',
    updatedAt: '24 de julho de 2026',
    icon: FileText,
    sections: [
      {
        title: 'Identificacao e aceitacao',
        body: [
          'A MoviSys Tecnologia fornece serviços de software, automação comercial, infraestrutura e suporte técnico. Ao contratar serviços, usar canais digitais ou autorizar integrações, o usuário declara ter lido e aceito estes Termos.',
        ],
      },
      {
        title: 'Descricao geral dos servicos',
        body: [
          'Os serviços podem incluir desenvolvimento e implantação de sistemas, suporte técnico, automação comercial, infraestrutura, redes, segurança, backup, cloud e integrações com plataformas de terceiros.',
        ],
      },
      {
        title: 'Condicoes de uso',
        body: [
          'O usuário deve usar os serviços de forma lícita, fornecer informações corretas, manter seus acessos protegidos e respeitar limites técnicos, contratuais e legais aplicáveis.',
        ],
      },
      {
        title: 'Responsabilidades do usuario',
        body: [
          'Cabe ao usuário manter credenciais sob sigilo, autorizar apenas acessos necessários, revisar informações inseridas nos sistemas e comunicar incidentes, erros ou usos indevidos assim que identificados.',
        ],
      },
      {
        title: 'Responsabilidades da MoviSys',
        body: [
          'A MoviSys se compromete a prestar os serviços contratados com diligência técnica, adotar medidas razoáveis de segurança e tratar dados pessoais conforme a legislação aplicável e a Política de Privacidade.',
        ],
      },
      {
        title: 'Disponibilidade e manutencao',
        body: [
          'Serviços digitais podem passar por manutenções, atualizações ou indisponibilidades temporárias. Quando aplicável, a MoviSys buscará reduzir impactos e orientar o usuário sobre procedimentos necessários.',
        ],
      },
      {
        title: 'Integracao com Google Calendar',
        body: [
          'A integração com Google Calendar depende de autorização OAuth concedida pelo usuário. Quando autorizada, poderá permitir consulta, criação, edição ou exclusão de eventos conforme as funcionalidades de agenda efetivamente utilizadas.',
        ],
      },
      {
        title: 'Autorizacao OAuth e revogacao',
        body: [
          'A autorização OAuth pode ser revogada pelo usuário nas configurações da Conta Google. A revogação pode limitar ou interromper recursos ligados ao Google Calendar.',
        ],
      },
      {
        title: 'Limitacoes de responsabilidade',
        body: [
          'A MoviSys não se responsabiliza por falhas causadas por uso indevido, informações incorretas fornecidas pelo usuário, indisponibilidade de terceiros, problemas de conectividade ou eventos fora de seu controle razoável.',
        ],
      },
      {
        title: 'Seguranca das credenciais',
        body: [
          'O usuário deve proteger senhas, tokens, dispositivos e contas de acesso. Credenciais sensíveis não devem ser enviadas por canais inseguros nem compartilhadas com terceiros não autorizados.',
        ],
      },
      {
        title: 'Propriedade intelectual',
        body: [
          'Marcas, conteúdos, interfaces, códigos, documentos e materiais da MoviSys são protegidos por direitos de propriedade intelectual, salvo quando houver contrato específico dispondo de forma diferente.',
        ],
      },
      {
        title: 'Privacidade e protecao de dados',
        body: [
          'O tratamento de dados pessoais segue a Política de Privacidade publicada no site e a legislação brasileira aplicável, incluindo a LGPD.',
        ],
      },
      {
        title: 'Suspensao ou encerramento',
        body: [
          'O acesso a serviços pode ser suspenso ou encerrado em caso de violação destes Termos, risco de segurança, inadimplência contratual ou obrigação legal, respeitados os direitos aplicáveis.',
        ],
      },
      {
        title: 'Alteracoes dos termos',
        body: [
          'Estes Termos podem ser atualizados para refletir mudanças legais, técnicas, comerciais ou operacionais. A versão vigente será a publicada nesta página.',
        ],
      },
      {
        title: 'Legislacao aplicavel e contato',
        body: [
          'Aplicam-se as leis da República Federativa do Brasil. Dúvidas sobre estes Termos devem ser enviadas para contatomovisystecnologia@gmail.com.',
        ],
      },
    ],
  },
};

function setMeta(selector, attribute, value) {
  const element = document.querySelector(selector);
  element?.setAttribute(attribute, value);
  return element;
}

function useLegalMeta(page) {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const canonical = document.querySelector('link[rel="canonical"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const previous = {
      description: description?.getAttribute('content'),
      canonical: canonical?.getAttribute('href'),
      ogTitle: ogTitle?.getAttribute('content'),
      ogDescription: ogDescription?.getAttribute('content'),
      ogUrl: ogUrl?.getAttribute('content'),
    };

    document.title = page.title;
    setMeta('meta[name="description"]', 'content', page.description);
    setMeta('link[rel="canonical"]', 'href', page.canonical);
    setMeta('meta[property="og:title"]', 'content', page.title);
    setMeta('meta[property="og:description"]', 'content', page.description);
    setMeta('meta[property="og:url"]', 'content', page.canonical);

    return () => {
      document.title = previousTitle;
      if (previous.description) description?.setAttribute('content', previous.description);
      if (previous.canonical) canonical?.setAttribute('href', previous.canonical);
      if (previous.ogTitle) ogTitle?.setAttribute('content', previous.ogTitle);
      if (previous.ogDescription) ogDescription?.setAttribute('content', previous.ogDescription);
      if (previous.ogUrl) ogUrl?.setAttribute('content', previous.ogUrl);
    };
  }, [page]);
}

function LegalFooter() {
  return (
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
  );
}

function LegalPage({ type }) {
  const page = legalPages[type] ?? legalPages.privacy;
  const [menuOpen, setMenuOpen] = useState(false);
  const Icon = page.icon;

  useLegalMeta(page);

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
    <div className="legal-page">
      <a className="skip-link" href="#conteudo-principal">Ir para o conteúdo</a>
      <header className="site-header site-header--solid">
        <Brand />
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
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
        <section className="legal-hero" aria-labelledby="legal-title">
          <div className="legal-hero__content">
            <p className="eyebrow"><span /> {page.eyebrow}</p>
            <h1 id="legal-title">{page.heading}</h1>
            <p>{page.lead}</p>
            <div className="legal-hero__meta">
              <span><CalendarDays aria-hidden="true" /> Última atualização: {page.updatedAt}</span>
              <span><Icon aria-hidden="true" /> MoviSys Tecnologia</span>
            </div>
          </div>
        </section>

        <section className="legal-content section" aria-label={page.heading}>
          <aside className="legal-summary">
            <Icon aria-hidden="true" />
            <strong>{page.heading}</strong>
            <p>Documento público para verificação OAuth, LGPD e transparência no uso de dados.</p>
            <a href="mailto:contatomovisystecnologia@gmail.com">Falar sobre este documento <ArrowRight /></a>
          </aside>
          <div className="legal-sections">
            {page.sections.map((section, index) => (
              <article key={section.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h2>{section.title}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </article>
            ))}
          </div>
        </section>
      </main>

      <LegalFooter />

      <a className="whatsapp-float" href="https://wa.me/5511933799278" target="_blank" rel="noreferrer" aria-label="Abrir conversa com a MoviSys no WhatsApp">
        <MessageCircle />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}

export default LegalPage;
