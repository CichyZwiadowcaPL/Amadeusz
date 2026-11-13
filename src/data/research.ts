// R&D programmes shown on /research and the home page.
// `stage` is the index into `stages` (0 = Concept ... 4 = Complete).

export const stages = ['Concept', 'Design', 'Prototype', 'Testing', 'Complete'] as const;

export interface Programme {
  name: string;
  area: string;
  stage: number;
  summary: string;
  next: string;
  page?: string; // optional detail page, e.g. '/research/nuada-i'
}

export const programmes: Programme[] = [
  {
    name: 'Nuada I',
    area: 'Rocketry',
    stage: 4,
    page: '/research/nuada-i',
    summary:
      'Our first rocket programme (2021 – 2026): a solid-fuel research rocket designed to reach 2 km, with our own solid booster, flight electronics, composite structure and dual-deploy recovery. Nominated for the Dutch Aerospace Fund Award in 2022.',
    next: 'The technology developed in Nuada I is carried over to Nuada II and our other projects.',
  },
  {
    name: 'Nuada II',
    area: 'Rocketry · Avionics',
    stage: 0,
    summary:
      'Dual-deploy successor to Nuada I, targeting higher altitude with an upgraded airframe and avionics stack.',
    next: 'Defining requirements and exploring concepts for the airframe and avionics.',
  },
  {
    name: 'Thermal Resistance Composite',
    area: 'Materials',
    stage: 0,
    summary:
      'In-house composite material for high-temperature structures such as airframe skins and nozzle components.',
    next: 'Researching material options and defining target thermal and mechanical properties.',
  },
  {
    name: 'Liquid Engine',
    area: 'Propulsion',
    stage: 0,
    summary:
      'Concept for a liquid-propellant rocket engine, intended as the basis for future vehicles.',
    next: 'Concept phase: defining the goals and requirements. Research has not started yet.',
  },
];

// Progress log — add an entry every time something happens (any order; sorted newest first).
export interface Update {
  date: string; // YYYY-MM or YYYY
  programme: string;
  title: string;
  body: string;
}

const log: Update[] = [
  {
    date: '2026-10',
    programme: 'Thermal Resistance Composite',
    title: 'Material research started',
    body: 'Started researching material options and defining target properties for a high-temperature composite.',
  },
  {
    date: '2026-08',
    programme: 'Nuada II',
    title: 'Concept phase started',
    body: 'Collecting lessons learned from Nuada I and exploring concepts for the dual-deploy recovery system.',
  },
  {
    date: '2026-07',
    programme: 'Company',
    title: 'ADG officially registered',
    body: 'Aerospace Development Group is now officially registered with the Dutch Chamber of Commerce (KvK).',
  },
  {
    date: '2026',
    programme: 'Nuada I',
    title: 'Nuada I completed',
    body: 'The Nuada I project is finished. Its technology and lessons learned are carried over to Nuada II and our other projects.',
  },
  {
    date: '2024-06',
    programme: 'Nuada I',
    title: 'Construction phase and structural testing',
    body: 'Nuada I reached the construction phase. Destructive tensile tests at ROC Amsterdam confirmed that the structure has a large safety margin.',
  },
  {
    date: '2022',
    programme: 'Nuada I',
    title: 'Nominated for the Dutch Aerospace Fund Award',
    body: 'The Nuada I project was nominated for the Dutch Aerospace Fund Award.',
  },
  {
    date: '2021',
    programme: 'Nuada I',
    title: 'The Nuada programme started',
    body: 'Work began on our first rocket. The first concept (Nuada-0) aimed for a liquid engine; the team chose the achievable, solid-fuel Nuada I as its first mission.',
  },
];

export const updates = [...log].sort((a, b) => b.date.localeCompare(a.date));
