import { useMemo, useState } from 'react'
import { initialLeads, LEAD_STATUSES } from './data/leads'
import LeadsTable from './components/LeadsTable'
import LeadFormModal from './components/LeadFormModal'
import './App.css'

let nextId = initialLeads.length + 1

function App() {
  const [leads, setLeads] = useState(initialLeads)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('Todos')
  const [editingLead, setEditingLead] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const matchesStatus = statusFilter === 'Todos' || lead.status === statusFilter
      const query = search.trim().toLowerCase()
      const matchesSearch =
        !query ||
        lead.name.toLowerCase().includes(query) ||
        lead.company.toLowerCase().includes(query) ||
        lead.email.toLowerCase().includes(query)
      return matchesStatus && matchesSearch
    })
  }, [leads, search, statusFilter])

  function openNewLeadModal() {
    setEditingLead(null)
    setShowModal(true)
  }

  function openEditLeadModal(lead) {
    setEditingLead(lead)
    setShowModal(true)
  }

  function handleSave(formData) {
    if (editingLead) {
      setLeads((prev) => prev.map((l) => (l.id === editingLead.id ? { ...editingLead, ...formData } : l)))
    } else {
      setLeads((prev) => [
        ...prev,
        { ...formData, id: nextId++, createdAt: new Date().toISOString().slice(0, 10) },
      ])
    }
    setShowModal(false)
  }

  function handleDelete(id) {
    setLeads((prev) => prev.filter((l) => l.id !== id))
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Scaglia CRM</h1>
        <button className="btn-primary" onClick={openNewLeadModal}>
          + Nuevo lead
        </button>
      </header>

      <div className="toolbar">
        <input
          type="search"
          placeholder="Buscar por nombre, empresa o email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="status-filter">
          <option value="Todos">Todos los estados</option>
          {LEAD_STATUSES.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>

      <LeadsTable leads={filteredLeads} onEdit={openEditLeadModal} onDelete={handleDelete} />

      {showModal && (
        <LeadFormModal lead={editingLead} onSave={handleSave} onClose={() => setShowModal(false)} />
      )}
    </div>
  )
}

export default App
