import { useState } from 'react'
import { LEAD_STATUSES } from '../data/leads'

const emptyLead = {
  name: '',
  company: '',
  email: '',
  phone: '',
  source: '',
  status: LEAD_STATUSES[0],
}

export default function LeadFormModal({ lead, onSave, onClose }) {
  const [form, setForm] = useState(lead ?? emptyLead)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    onSave(form)
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>{lead ? 'Editar lead' : 'Nuevo lead'}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre
            <input name="name" value={form.name} onChange={handleChange} required />
          </label>
          <label>
            Empresa
            <input name="company" value={form.company} onChange={handleChange} />
          </label>
          <label>
            Email
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </label>
          <label>
            Teléfono
            <input name="phone" value={form.phone} onChange={handleChange} />
          </label>
          <label>
            Origen
            <input name="source" value={form.source} onChange={handleChange} />
          </label>
          <label>
            Estado
            <select name="status" value={form.status} onChange={handleChange}>
              {LEAD_STATUSES.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </label>
          <div className="modal-actions">
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="btn-primary">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
