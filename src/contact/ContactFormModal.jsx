import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Mail, MessageCircle, X } from 'lucide-react';
import './contactForm.css';

const services = [
  'Software, ERP ou sistema sob medida',
  'PDV e automação comercial',
  'Redes e Wi-Fi corporativo',
  'Servidores, cloud e virtualização',
  'Segurança e backup',
  'Suporte técnico',
  'Assessoria tecnológica',
  'Outro serviço',
];

const initialForm = {
  name: '',
  company: '',
  phone: '',
  email: '',
  service: '',
  details: '',
};

function buildMessage(form) {
  return [
    'Olá, quero solicitar atendimento da MoviSys.',
    '',
    `Nome: ${form.name}`,
    `Empresa: ${form.company || 'Não informada'}`,
    `Telefone: ${form.phone}`,
    `E-mail: ${form.email || 'Não informado'}`,
    `Tipo de serviço: ${form.service}`,
    '',
    'Detalhes:',
    form.details,
  ].join('\n');
}

export default function ContactFormModal({ onClose }) {
  const [form, setForm] = useState(initialForm);
  const firstFieldRef = useRef(null);
  const dialogRef = useRef(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    const previousFocus = document.activeElement;
    document.body.classList.add('contact-modal-open');
    firstFieldRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onCloseRef.current();
      if (event.key !== 'Tab') return;

      const focusable = dialogRef.current?.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled])');
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('contact-modal-open');
      window.removeEventListener('keydown', handleKeyDown);
      previousFocus?.focus?.();
    };
  }, []);

  const update = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submit = (event) => {
    event.preventDefault();
    const channel = event.nativeEvent.submitter?.value;
    const message = buildMessage(form);

    if (channel === 'whatsapp') {
      const url = `https://wa.me/5511933799278?text=${encodeURIComponent(message)}`;
      const popup = window.open(url, '_blank', 'noopener,noreferrer');
      if (popup) popup.opener = null;
      return;
    }

    const subject = `Solicitação MoviSys — ${form.service}`;
    window.location.href = `mailto:contatomovisystecnologia@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  };

  return (
    <div className="contact-modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section ref={dialogRef} className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-form-title">
        <aside className="contact-modal__brand">
          <img src="/assets/movisys-logo.webp" alt="Logo MoviSys Tecnologia" />
          <div>
            <span>Atendimento comercial</span>
            <p>Descreva sua necessidade. A mensagem será preparada para o canal escolhido.</p>
          </div>
          <address>
            <a href="https://wa.me/5511933799278" target="_blank" rel="noreferrer"><MessageCircle /> (11) 93379-9278</a>
            <a href="mailto:contatomovisystecnologia@gmail.com"><Mail /> contatomovisystecnologia@gmail.com</a>
          </address>
        </aside>

        <div className="contact-modal__content">
          <header>
            <div><span>Solicitar atendimento</span><h2 id="contact-form-title">Como podemos ajudar?</h2></div>
            <button type="button" onClick={onClose} aria-label="Fechar formulário"><X /></button>
          </header>

          <form onSubmit={submit}>
            <div className="contact-form-grid">
              <label><span>Nome *</span><input ref={firstFieldRef} name="name" value={form.name} onChange={update} autoComplete="name" required /></label>
              <label><span>Empresa</span><input name="company" value={form.company} onChange={update} autoComplete="organization" /></label>
              <label><span>Telefone / WhatsApp *</span><input type="tel" name="phone" value={form.phone} onChange={update} autoComplete="tel" placeholder="(DDD) número" required /></label>
              <label><span>E-mail</span><input type="email" name="email" value={form.email} onChange={update} autoComplete="email" /></label>
              <label className="contact-form-grid__wide"><span>Tipo de serviço *</span><select name="service" value={form.service} onChange={update} required><option value="">Selecione o serviço</option>{services.map((service) => <option key={service}>{service}</option>)}</select></label>
              <label className="contact-form-grid__wide"><span>Descreva sua necessidade *</span><textarea name="details" value={form.details} onChange={update} rows="5" placeholder="Informe o cenário, quantidade de usuários ou equipamentos e o que precisa ser resolvido." required /></label>
            </div>

            <p className="contact-form-note">Os dados não são armazenados pelo site. Eles apenas preenchem a mensagem no canal escolhido.</p>
            <div className="contact-form-actions">
              <button type="submit" name="channel" value="whatsapp" className="contact-form-actions__whatsapp"><MessageCircle /> Enviar por WhatsApp <ArrowRight /></button>
              <button type="submit" name="channel" value="email" className="contact-form-actions__email"><Mail /> Enviar por e-mail <ArrowRight /></button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
