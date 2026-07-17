import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Download, Info, Pencil, Star, X } from 'lucide-react';
import { categoryConfig } from './servicePhotoData';

const dateFormatter = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'long', timeStyle: 'short' });

export default function PhotoLightbox({ photo, photos, onClose, onNavigate, onEdit, onToggleImportant, onDownload }) {
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') onNavigate(-1);
      if (event.key === 'ArrowRight') onNavigate(1);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose, onNavigate]);

  if (!photo) return null;
  const category = categoryConfig[photo.category] ?? categoryConfig.Antes;

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={`Foto ampliada: ${photo.title}`}>
      <header className="lightbox__header">
        <div><span>{String(photo.sequence).padStart(2, '0')} de {String(photos.length).padStart(2, '0')}</span><strong>{photo.title}</strong></div>
        <div className="lightbox__tools">
          <button type="button" onClick={() => onToggleImportant(photo.id)} aria-label="Alternar destaque"><Star fill={photo.important ? 'currentColor' : 'none'} /></button>
          <button type="button" onClick={() => onDownload(photo)} aria-label="Baixar foto"><Download /></button>
          <button type="button" onClick={() => onEdit(photo.id)} aria-label="Editar detalhes"><Pencil /></button>
          <button ref={closeRef} type="button" onClick={onClose} aria-label="Fechar visualização"><X /></button>
        </div>
      </header>
      <div className="lightbox__stage">
        <button className="lightbox__nav lightbox__nav--prev" type="button" onClick={() => onNavigate(-1)} aria-label="Foto anterior"><ChevronLeft /></button>
        <img src={photo.image} alt={`${photo.category}: ${photo.title}, ${photo.location}`} />
        <button className="lightbox__nav lightbox__nav--next" type="button" onClick={() => onNavigate(1)} aria-label="Próxima foto"><ChevronRight /></button>
      </div>
      <aside className="lightbox__info">
        <span className={`category-badge category-badge--${category.className}`}>{category.label}</span>
        <div className="lightbox__info-title"><Info /><p>{photo.description}</p></div>
        <dl>
          <div><dt>Data e hora</dt><dd>{dateFormatter.format(new Date(photo.capturedAt))}</dd></div>
          <div><dt>Local</dt><dd>{photo.location}</dd></div>
          <div><dt>Responsável</dt><dd>{photo.responsible}</dd></div>
          <div><dt>Dispositivo</dt><dd>{photo.device}</dd></div>
          <div><dt>Resultado</dt><dd>{photo.result}</dd></div>
        </dl>
      </aside>
      <div className="lightbox__thumbs" aria-label="Miniaturas">
        {photos.map((item) => <button key={item.id} className={item.id === photo.id ? 'is-active' : ''} type="button" onClick={() => onNavigate(photos.indexOf(item) - photos.indexOf(photo))}><img src={item.image} alt="" /></button>)}
      </div>
    </div>
  );
}
