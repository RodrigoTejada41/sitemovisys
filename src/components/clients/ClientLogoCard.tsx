import { motion, useReducedMotion } from 'framer-motion';
import type { Client } from './clients';

type ClientLogoCardProps = {
  client: Client;
};

export function ClientLogoCard({ client }: ClientLogoCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className="group flex h-52 w-full flex-col justify-between border border-movisys-ink/10 bg-white p-5 shadow-[0_1px_0_rgba(6,19,29,0.02)] transition-[border-color,box-shadow] duration-300 hover:border-movisys-cyan/70 hover:shadow-client-card md:w-[280px] md:flex-none md:p-6"
      whileHover={reduceMotion ? undefined : { y: -4, scale: 1.025 }}
      transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
      title={client.name}
    >
      <div className="flex min-h-28 items-center justify-center overflow-hidden border-b border-movisys-ink/10 pb-4">
        <img
          className={`h-20 w-full object-contain transition-[filter,opacity] duration-300 ${client.logoStatus === 'placeholder' ? 'grayscale group-hover:grayscale-0' : ''} ${client.imageClassName ?? ''}`}
          src={client.logo}
          alt={client.alt}
          width="240"
          height="90"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="flex items-end justify-between gap-3 pt-4">
        <h3 className="m-0 flex min-h-10 items-end text-[0.95rem] font-semibold leading-5 tracking-[-0.02em] text-movisys-ink">{client.name}</h3>
        <span className="h-2 w-2 flex-none rounded-full bg-movisys-cyan" aria-hidden="true" />
      </div>
    </motion.article>
  );
}
