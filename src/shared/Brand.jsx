export function Brand({ compact = false, href = '/#inicio' }) {
  return (
    <a className={`brand ${compact ? 'brand--compact' : ''}`} href={href} aria-label="MoviSys — início">
      <span className="brand__image-frame" aria-hidden="true">
        <img src="/assets/movisys-logo.webp" alt="" />
      </span>
      <span>Movi<span>Sys</span></span>
    </a>
  );
}
