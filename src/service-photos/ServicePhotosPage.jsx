import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowLeft, Check, ChevronDown, Download, FileText, Filter, Grid2X2, List, Plus,
  Printer, Search, Star, Upload, X,
} from 'lucide-react';
import ServicePhotoCard from './ServicePhotoCard';
import PhotoLightbox from './PhotoLightbox';
import PhotoEditorDrawer from './PhotoEditorDrawer';
import { initialPhotos } from './servicePhotoData';
import { Brand } from '../shared/Brand';
import './servicePhotos.css';

const categories = ['Todos', 'Antes', 'Durante', 'Depois', 'Irregularidades', 'Resultado final'];

export default function ServicePhotosPage() {
  const [photos, setPhotos] = useState(initialPhotos);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('Todos');
  const [responsible, setResponsible] = useState('Todos');
  const [date, setDate] = useState('');
  const [view, setView] = useState('grid');
  const [selected, setSelected] = useState([]);
  const [lightboxId, setLightboxId] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [toast, setToast] = useState('');
  const uploadRef = useRef(null);

  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const robots = document.querySelector('meta[name="robots"]');
    const previousDescription = description?.getAttribute('content');
    const previousRobots = robots?.getAttribute('content');

    document.title = 'Relatório fotográfico de serviços | MoviSys';
    description?.setAttribute('content', 'Galeria técnica MoviSys para organizar, revisar e exportar evidências de serviços realizados.');
    robots?.setAttribute('content', 'noindex, nofollow');

    return () => {
      document.title = previousTitle;
      if (description && previousDescription) description.setAttribute('content', previousDescription);
      if (robots && previousRobots) robots.setAttribute('content', previousRobots);
    };
  }, []);

  const responsibles = useMemo(() => ['Todos', ...new Set(photos.map((photo) => photo.responsible))], [photos]);
  const filtered = useMemo(() => photos.filter((photo) => {
    const haystack = [photo.title, photo.description, photo.location, photo.responsible, photo.technicalNotes, photo.equipment].join(' ').toLocaleLowerCase('pt-BR');
    const matchesSearch = haystack.includes(search.toLocaleLowerCase('pt-BR'));
    const matchesCategory = category === 'Todos' || photo.category === category;
    const matchesResponsible = responsible === 'Todos' || photo.responsible === responsible;
    const matchesDate = !date || photo.capturedAt.slice(0, 10) === date;
    return matchesSearch && matchesCategory && matchesResponsible && matchesDate;
  }), [photos, search, category, responsible, date]);

  const activePhoto = photos.find((photo) => photo.id === lightboxId);
  const editingPhoto = photos.find((photo) => photo.id === editingId);

  const notify = (message) => { setToast(message); window.setTimeout(() => setToast(''), 2800); };
  const toggleSelected = (id) => setSelected((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  const toggleImportant = (id) => setPhotos((current) => current.map((photo) => photo.id === id ? { ...photo, important: !photo.important } : photo));
  const downloadPhoto = (photo) => { const link = document.createElement('a'); link.href = photo.image; link.download = `OS-2026-0148-${String(photo.sequence).padStart(2, '0')}.png`; link.click(); };
  const downloadSelected = () => { (selected.length ? photos.filter((photo) => selected.includes(photo.id)) : filtered).forEach((photo, index) => window.setTimeout(() => downloadPhoto(photo), index * 180)); notify(`${selected.length || filtered.length} arquivo(s) preparado(s) para download.`); };
  const printReport = () => { window.print(); };
  const clearFilters = () => { setSearch(''); setCategory('Todos'); setResponsible('Todos'); setDate(''); };

  const navigateLightbox = useCallback((direction) => {
    setLightboxId((currentId) => {
      const index = filtered.findIndex((photo) => photo.id === currentId);
      if (index < 0) return filtered[0]?.id ?? null;
      return filtered[(index + direction + filtered.length) % filtered.length]?.id ?? null;
    });
  }, [filtered]);

  const handleUpload = (event) => {
    const files = Array.from(event.target.files ?? []).filter((file) => file.type.startsWith('image/'));
    if (!files.length) return;
    const additions = files.map((file, index) => ({
      id: `local-${Date.now()}-${index}`, sequence: photos.length + index + 1,
      title: file.name.replace(/\.[^.]+$/, ''), description: 'Nova evidência adicionada. Complete os detalhes técnicos antes de finalizar o relatório.',
      location: 'Local não informado', category: 'Durante', capturedAt: new Date(file.lastModified || Date.now()).toISOString(),
      responsible: 'Usuário atual', device: 'Arquivo enviado', technicalNotes: '', equipment: '', situation: '', action: '', result: '',
      image: URL.createObjectURL(file), important: false,
    }));
    setPhotos((current) => [...current, ...additions]);
    notify(`${additions.length} foto(s) adicionada(s).`);
    event.target.value = '';
  };

  const savePhoto = (updated) => { setPhotos((current) => current.map((photo) => photo.id === updated.id ? updated : photo)); setEditingId(null); notify('Detalhes salvos com sucesso.'); };

  return (
    <div className="service-photos-app">
      <a className="skip-link" href="#conteudo-principal">Ir para o conteúdo</a>
      <header className="sp-topbar"><Brand /><a href="/" className="sp-back"><ArrowLeft /> Site institucional</a><div className="sp-user"><span>RT</span><div><strong>Rafael Teixeira</strong><small>Administrador</small></div><ChevronDown /></div></header>
      <main className="sp-main" id="conteudo-principal">
        <nav className="breadcrumbs" aria-label="Navegação estrutural"><a href="#ordens">Ordens de serviço</a><span>/</span><a href="#os">OS-2026-0148</a><span>/</span><strong>Fotos</strong></nav>
        <section className="sp-page-head">
          <div><span className="sp-overline">Evidências técnicas</span><h1>Fotos dos serviços realizados</h1><p>Documentação visual organizada por etapa, com contexto técnico e rastreabilidade.</p></div>
          <div className="sp-head-actions"><button className="sp-button sp-button--secondary" type="button" onClick={downloadSelected}><Download /> Baixar</button><button className="sp-button sp-button--secondary" type="button" onClick={printReport}><Printer /> Imprimir</button><button className="sp-button sp-button--primary" type="button" onClick={() => uploadRef.current?.click()}><Plus /> Adicionar fotos</button><input ref={uploadRef} hidden type="file" accept="image/jpeg,image/png,image/webp" multiple onChange={handleUpload} /></div>
        </section>
        <section className="order-context">
          <div><span>Ordem de serviço</span><strong>OS-2026-0148</strong></div><div><span>Cliente</span><strong>Grupo Horizonte Ltda.</strong></div><div><span>Serviço</span><strong>Organização e certificação de rede</strong></div><div><span>Atendimento</span><strong>17 jul. 2026</strong></div><div className="order-context__status"><span>Status</span><strong><i /> Concluído</strong></div>
        </section>

        <section className={`sp-toolbar ${filtersOpen ? 'is-open' : ''}`}>
          <label className="sp-search"><Search /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Pesquisar título, local ou observação..." aria-label="Pesquisar fotos" />{search && <button type="button" onClick={() => setSearch('')} aria-label="Limpar pesquisa"><X /></button>}</label>
          <button className="filter-mobile-button" type="button" onClick={() => setFiltersOpen(!filtersOpen)}><Filter /> Filtros</button>
          <div className="sp-filter-fields">
            <label><span>Data</span><input type="date" value={date} onChange={(event) => setDate(event.target.value)} /></label>
            <label><span>Responsável</span><select value={responsible} onChange={(event) => setResponsible(event.target.value)}>{responsibles.map((item) => <option key={item}>{item}</option>)}</select></label>
          </div>
          <div className="view-toggle" aria-label="Formato de visualização"><button className={view === 'grid' ? 'is-active' : ''} type="button" onClick={() => setView('grid')} aria-label="Visualização em grade"><Grid2X2 /></button><button className={view === 'list' ? 'is-active' : ''} type="button" onClick={() => setView('list')} aria-label="Visualização em lista"><List /></button></div>
        </section>

        <div className="category-tabs" role="tablist" aria-label="Filtrar por categoria">
          {categories.map((item) => <button key={item} role="tab" aria-selected={category === item} type="button" onClick={() => setCategory(item)}>{item}<span>{item === 'Todos' ? photos.length : photos.filter((photo) => photo.category === item).length}</span></button>)}
        </div>

        <div className="results-head"><p aria-live="polite"><strong>{filtered.length}</strong> evidência(s) encontrada(s) · <Star /> {photos.filter((photo) => photo.important).length} em destaque</p>{(search || category !== 'Todos' || responsible !== 'Todos' || date) && <button type="button" onClick={clearFilters}>Limpar filtros</button>}</div>

        {filtered.length ? <section className={`evidence-grid evidence-grid--${view}`} aria-label="Fotos dos serviços realizados">{filtered.map((photo) => <ServicePhotoCard key={photo.id} photo={photo} selected={selected.includes(photo.id)} view={view} onSelect={toggleSelected} onOpen={setLightboxId} onEdit={setEditingId} onToggleImportant={toggleImportant} onDownload={downloadPhoto} />)}</section> : <section className="empty-state"><Search /><h2>Nenhuma evidência encontrada</h2><p>Ajuste os filtros ou limpe a pesquisa para visualizar as fotos.</p><button className="sp-button sp-button--primary" type="button" onClick={clearFilters}>Limpar filtros</button></section>}

        {selected.length > 0 && <div className="batch-bar"><span><i>{selected.length}</i> selecionada(s)</span><button type="button" onClick={() => setSelected([])}>Limpar seleção</button><button type="button" onClick={downloadSelected}><Download /> Baixar</button><button type="button" onClick={printReport}><Printer /> Imprimir</button><button className="batch-bar__primary" type="button" onClick={printReport}><FileText /> Gerar relatório</button></div>}
      </main>

      <section className="print-report" aria-hidden="true"><header><Brand compact /><div><strong>Relatório fotográfico</strong><span>OS-2026-0148 · Grupo Horizonte Ltda.</span></div></header><div className="print-report__meta"><span>Serviço: Organização e certificação de rede</span><span>Data: 17/07/2026</span><span>Status: Concluído</span></div><div className="print-report__grid">{photos.filter((photo) => !selected.length || selected.includes(photo.id)).map((photo) => <article key={photo.id}><img src={photo.image} alt="" /><div><span>{String(photo.sequence).padStart(2, '0')} · {photo.category}</span><h2>{photo.title}</h2><p>{photo.description}</p><dl><div><dt>Local</dt><dd>{photo.location}</dd></div><div><dt>Responsável</dt><dd>{photo.responsible}</dd></div><div><dt>Resultado</dt><dd>{photo.result}</dd></div></dl></div></article>)}</div></section>

      {activePhoto && <PhotoLightbox photo={activePhoto} photos={filtered} onClose={() => setLightboxId(null)} onNavigate={navigateLightbox} onEdit={(id) => { setLightboxId(null); setEditingId(id); }} onToggleImportant={toggleImportant} onDownload={downloadPhoto} />}
      {editingPhoto && <PhotoEditorDrawer photo={editingPhoto} onClose={() => setEditingId(null)} onSave={savePhoto} />}
      {toast && <div className="sp-toast" role="status"><Check />{toast}</div>}
    </div>
  );
}
