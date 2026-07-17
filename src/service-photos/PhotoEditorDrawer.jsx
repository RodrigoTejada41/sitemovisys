import { useEffect, useState } from 'react';
import { Save, X } from 'lucide-react';
import { categoryConfig } from './servicePhotoData';

const fields = [
  ['title', 'Título da evidência', 'input'],
  ['description', 'Descrição detalhada', 'textarea'],
  ['location', 'Local exato', 'input'],
  ['technicalNotes', 'Observações técnicas', 'textarea'],
  ['equipment', 'Produtos ou equipamentos utilizados', 'textarea'],
  ['situation', 'Situação encontrada', 'textarea'],
  ['action', 'Ação executada', 'textarea'],
  ['result', 'Resultado obtido', 'textarea'],
];

export default function PhotoEditorDrawer({ photo, onClose, onSave }) {
  const [draft, setDraft] = useState(photo);
  useEffect(() => setDraft(photo), [photo]);
  if (!draft) return null;

  const update = (field, value) => setDraft((current) => ({ ...current, [field]: value }));

  return (
    <div className="drawer-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <aside className="photo-drawer" role="dialog" aria-modal="true" aria-label={`Editar ${draft.title}`}>
        <header><div><span>Evidência {String(draft.sequence).padStart(2, '0')}</span><h2>Detalhes da foto</h2></div><button type="button" onClick={onClose} aria-label="Fechar editor"><X /></button></header>
        <div className="photo-drawer__body">
          <img className="photo-drawer__preview" src={draft.image} alt="" />
          <label className="form-field"><span>Etapa do serviço</span><select value={draft.category} onChange={(event) => update('category', event.target.value)}>{Object.keys(categoryConfig).map((category) => <option key={category}>{category}</option>)}</select></label>
          {fields.map(([field, label, type]) => (
            <label className="form-field" key={field}><span>{label}</span>{type === 'textarea' ? <textarea rows="3" value={draft[field]} onChange={(event) => update(field, event.target.value)} /> : <input value={draft[field]} onChange={(event) => update(field, event.target.value)} />}</label>
          ))}
          <label className="important-toggle"><input type="checkbox" checked={draft.important} onChange={(event) => update('important', event.target.checked)} /><span /> Marcar como foto importante</label>
        </div>
        <footer><button className="sp-button sp-button--secondary" type="button" onClick={onClose}>Cancelar</button><button className="sp-button sp-button--primary" type="button" onClick={() => onSave(draft)}><Save /> Salvar alterações</button></footer>
      </aside>
    </div>
  );
}
