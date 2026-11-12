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
      'Our first mission, started in 2021: a research-focused rocket that validated our own airframe, recovery and avionics systems. Nominated for the Dutch Aerospace Fund Prize in 2022.',
    next: 'Laid the technical foundation for the company and for Nuada II.',
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
      'Liquid-propellant rocket engine designed from first principles as the basis for future vehicles.',
    next: 'Propellant trade study and preliminary performance sizing.',
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
    date: '2026-06',
    programme: 'Liquid Engine',
    title: 'Programme opened',
    body: 'Kick-off of propulsion research, starting with a propellant combination trade study.',
  },
  {
    date: '2026-07',
    programme: 'Company',
    title: 'ADG officially registered',
    body: 'Aerospace Development Group is now officially registered with the Dutch Chamber of Commerce (KvK).',
  },
  {
    date: '2022',
    programme: 'Nuada I',
    title: 'Nominated for the Dutch Aerospace Fund Prize',
    body: 'The Nuada I project was nominated for the Dutch Aerospace Fund Prize.',
  },
  {
    date: '2021',
    programme: 'Nuada I',
    title: 'Nuada I mission started',
    body: 'Work began on our first research-focused rocket and our own rocketry systems.',
  },
];

export const updates = [...log].sort((a, b) => b.date.localeCompare(a.date));
