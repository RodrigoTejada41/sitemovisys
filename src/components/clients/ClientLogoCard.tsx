import type { Client } from './clients';

type ClientLogoCardProps = {
  client: Client;
};

export function ClientLogoCard({ client }: ClientLogoCardProps) {
  return (
    <article
      className="group flex h-44 w-full flex-col justify-between border-b border-r border-movisys-ink/10 bg-transparent p-5 transition-colors duration-300 hover:bg-white/70 md:h-48 md:p-6"
      title={client.name}
    >
      <div className="flex min-h-24 items-center justify-center overflow-hidden">
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
      <div className="flex items-end justify-between gap-3 border-t border-movisys-ink/10 pt-4">
        <h3 className="m-0 text-[0.82rem] font-semibold leading-5 tracking-[-0.01em] text-movisys-ink">{client.name}</h3>
        <span className="h-2 w-2 flex-none rounded-full bg-movisys-cyan" aria-hidden="true" />
      </div>
    </article>
  );
}
