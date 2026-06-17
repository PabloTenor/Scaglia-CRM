export const LEAD_STATUSES = ['Nuevo', 'Contactado', 'Calificado', 'Ganado', 'Perdido']

export const initialLeads = [
  {
    id: 1,
    name: 'Mariana Suárez',
    company: 'Suárez Construcciones',
    email: 'mariana@suarezconst.com',
    phone: '+54 9 11 5555-0101',
    source: 'Web',
    status: 'Nuevo',
    createdAt: '2026-06-10',
  },
  {
    id: 2,
    name: 'Diego Fernández',
    company: 'Fernández & Asoc.',
    email: 'diego@fernandezasoc.com',
    phone: '+54 9 11 5555-0102',
    source: 'Referido',
    status: 'Contactado',
    createdAt: '2026-06-08',
  },
  {
    id: 3,
    name: 'Laura Gómez',
    company: 'Gómez Estudio Contable',
    email: 'laura@gomezcontable.com',
    phone: '+54 9 11 5555-0103',
    source: 'Instagram',
    status: 'Calificado',
    createdAt: '2026-06-05',
  },
]
