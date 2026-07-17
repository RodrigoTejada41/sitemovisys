import { CalendarDays, Check, Download, MapPin, Pencil, Star, UserRound } from 'lucide-react';
import { categoryConfig } from './servicePhotoData';

const dateFormatter = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' });

export default function ServicePhotoCard({ photo, selected, view, onSelect, onOpen, onEdit, onToggleImportant, onDownload }) {
  const category = categoryConfig[photo.category] ?? categoryConfig.Antes;

  return (
    <article className={`evidence-card evidence-card--${view} ${selected ? 'is-selected' : ''}`} aria-labelledby={`photo-title-${photo.id}`}>
      <div className="evidence-card__media">
        <button className="evidence-card__open" type="button" onClick={() => onOpen(photo.id)} aria-label={`Ampliar foto ${photo.sequence}: ${photo.title}`}>
          <img src={photo.image} alt={`${photo.category}: ${photo.title}, ${photo.location}`} loading={photo.sequence > 3 ? 'lazy' : 'eager'} decoding="async" />
        </button>
        <label className="photo-check">
          <input type="checkbox" checked={selected} onChange={() => onSelect(photo.id)} aria-label={`Selecionar foto ${photo.sequence}: ${photo.title}`} />
          <span><Check /></span>
        </label>
        <span className="photo-sequence">{String(photo.sequence).padStart(2, '0')}</span>
        <button className={`photo-star ${photo.important ? 'is-active' : ''}`} type="button" onClick={() => onToggleImportant(photo.id)} aria-label={`${photo.important ? 'Remover destaque da' : 'Destacar'} foto ${photo.sequence}`}>
          <Star fill={photo.important ? 'currentColor' : 'none'} />
        </button>
      </div>
      <div className="evidence-card__content">
        <span className={`category-badge category-badge--${category.className}`}>{category.label}</span>
        <h3 id={`photo-title-${photo.id}`}>{photo.title}</h3>
        <p>{photo.description}</p>
        <div className="photo-meta">
          <span><MapPin />{photo.location}</span>
          <span><CalendarDays />{dateFormatter.format(new Date(photo.capturedAt))}</span>
          <span><UserRound />{photo.responsible}</span>
        </div>
        <div className="evidence-card__actions">
          <button type="button" onClick={() => onEdit(photo.id)}><Pencil /> Editar detalhes</button>
          <button type="button" onClick={() => onDownload(photo)} aria-label={`Baixar foto ${photo.sequence}`}><Download /></button>
        </div>
      </div>
    </article>
  );
}
