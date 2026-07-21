import { ArrowRight, Handshake } from 'lucide-react';
import { ClientLogoCard } from './ClientLogoCard';
import { clients } from './clients';

export function ClientsSection() {
  return (
    <section
      id="clientes"
      className="overflow-hidden bg-movisys-surface px-[4vw] py-24 text-movisys-ink md:py-32"
      aria-labelledby="clients-title"
    >
      <div
        className="mx-auto max-w-[1240px]"
      >
        <div className="mb-12 grid gap-8 border-t border-movisys-ink/15 pt-7 md:mb-16 md:grid-cols-[0.75fr_1.4fr_0.6fr] md:items-end">
          <p className="m-0 flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-movisys-muted">
            <Handshake className="h-4 w-4 text-movisys-cyan" aria-hidden="true" />
            06 — Confiança construída
          </p>
          <div>
            <h2 id="clients-title" className="m-0 text-[clamp(2.7rem,5vw,5rem)] font-semibold leading-[0.98] tracking-[-0.055em]">
              Nossos Clientes
            </h2>
            <p className="mb-0 mt-6 max-w-2xl text-[clamp(1rem,1.5vw,1.2rem)] leading-7 text-movisys-muted">
              Empresas que confiam na MoviSys para sustentar e evoluir suas operações.
            </p>
          </div>
          <a className="inline-flex items-center gap-2 text-sm font-bold text-movisys-ink transition-colors hover:text-[#087f9b]" href="#contato">
            Conheça nossa abordagem <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 border-l border-t border-movisys-ink/10 md:grid-cols-4" role="list" aria-label="Clientes MoviSys">
          {clients.map((client) => (
            <div key={client.name} role="listitem">
              <ClientLogoCard client={client} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
