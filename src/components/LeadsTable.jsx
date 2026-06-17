const statusClass = {
  Nuevo: 'status-nuevo',
  Contactado: 'status-contactado',
  Calificado: 'status-calificado',
  Ganado: 'status-ganado',
  Perdido: 'status-perdido',
}

export default function LeadsTable({ leads, onEdit, onDelete }) {
  if (leads.length === 0) {
    return <p className="empty-state">No hay leads que coincidan con la búsqueda.</p>
  }

  return (
    <table className="leads-table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Empresa</th>
          <th>Email</th>
          <th>Teléfono</th>
          <th>Origen</th>
          <th>Estado</th>
          <th>Creado</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {leads.map((lead) => (
          <tr key={lead.id}>
            <td>{lead.name}</td>
            <td>{lead.company}</td>
            <td>{lead.email}</td>
            <td>{lead.phone}</td>
            <td>{lead.source}</td>
            <td>
              <span className={`status-badge ${statusClass[lead.status] ?? ''}`}>{lead.status}</span>
            </td>
            <td>{lead.createdAt}</td>
            <td className="row-actions">
              <button className="btn-link" onClick={() => onEdit(lead)}>
                Editar
              </button>
              <button className="btn-link btn-danger" onClick={() => onDelete(lead.id)}>
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
