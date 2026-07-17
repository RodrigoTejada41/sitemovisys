import { Handshake } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { ClientLogoCard } from './ClientLogoCard';
import { clients } from './clients';

export function ClientsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="clientes"
      className="overflow-hidden bg-movisys-surface px-[4vw] py-24 text-movisys-ink md:py-32"
      aria-labelledby="clients-title"
    >
      <motion.div
        className="mx-auto max-w-[1240px]"
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <div className="mb-12 grid gap-8 border-t border-movisys-ink/15 pt-7 md:mb-16 md:grid-cols-[0.75fr_2fr]">
          <p className="m-0 flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-movisys-muted">
            <Handshake className="h-4 w-4 text-movisys-cyan" aria-hidden="true" />
            06 — Confiança construída
          </p>
          <div>
            <h2 id="clients-title" className="m-0 text-[clamp(2.7rem,5vw,5rem)] font-semibold leading-[0.98] tracking-[-0.055em]">
              Nossos Clientes
            </h2>
            <p className="mb-0 mt-6 max-w-2xl text-[clamp(1rem,1.5vw,1.2rem)] leading-7 text-movisys-muted">
              Empresas que confiam na tecnologia e nas soluções da MoviSys para impulsionar seus negócios.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 md:hidden" role="list" aria-label="Clientes MoviSys">
          {clients.map((client) => (
            <div key={client.name} role="listitem">
              <ClientLogoCard client={client} />
            </div>
          ))}
        </div>

        <div className="relative hidden select-none md:block" aria-label="Carrossel de clientes MoviSys" aria-live="off">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-movisys-surface to-transparent" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-movisys-surface to-transparent" aria-hidden="true" />
          <div className="overflow-hidden py-6">
            <motion.div
              className="flex w-max"
              initial={{ x: '0%' }}
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 22, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
              style={{ willChange: 'transform' }}
            >
              {[0, 1].map((group) => (
                <div className="flex gap-5 pr-5" key={group} aria-hidden={group === 1 ? 'true' : undefined}>
                  {clients.map((client) => (
                    <ClientLogoCard client={client} key={`${group}-${client.name}`} />
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
