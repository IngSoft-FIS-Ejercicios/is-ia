const initialFindings = [
  new Finding({
    id: 1,
    title: 'Taller de fotografía nocturna',
    summary: 'Actividad introductoria con práctica en exterior y revisión de imágenes.',
    severity: 'alta',
    status: 'Cupos disponibles'
  }),
  new Finding({
    id: 2,
    title: 'Cine debate: Historias urbanas',
    summary: 'Proyección con charla posterior coordinada por el equipo de programación.',
    severity: 'alta',
    status: 'Últimos lugares'
  }),
  new Finding({
    id: 3,
    title: 'Clase abierta de cerámica',
    summary: 'Encuentro práctico para iniciar técnicas básicas de modelado y esmaltado.',
    severity: 'media',
    status: 'Inscripción abierta'
  }),
  new Finding({
    id: 4,
    title: 'Recorrido guiado por la muestra',
    summary: 'Visita breve por la exposición con foco en obras destacadas y contexto histórico.',
    severity: 'media',
    status: 'Programada'
  })
];

window.initialFindings = initialFindings;