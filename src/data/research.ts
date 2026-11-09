// R&D programmes shown on /research and the home page.
// `stage` is the index into `stages` (0 = Concept ... 4 = Complete).

export const stages = ['Concept', 'Design', 'Prototype', 'Testing', 'Complete'] as const;

export interface Programme {
  name: string;
  area: string;
  stage: number;
  summary: string;
  next: string;
}

export const programmes: Programme[] = [
  {
    name: 'Nuada I',
    area: 'Rocketry',
    stage: 4,
    summary:
      'Single-stage sounding rocket built to validate our airframe, recovery and avionics systems.',
    next: 'Flight data feeds directly into the Nuada II design.',
  },
  {
    name: 'Nuada II',
    area: 'Rocketry · Avionics',
    stage: 1,
    summary:
      'Dual-deploy successor to Nuada I, targeting higher altitude with an upgraded airframe and avionics stack.',
    next: 'Finalising the avionics architecture and airframe layout.',
  },
  {
    name: 'Thermal Resistance Composite',
    area: 'Materials',
    stage: 2,
    summary:
      'In-house composite material for high-temperature structures such as airframe skins and nozzle components.',
    next: 'Producing test coupons for thermal and mechanical characterisation.',
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

// Progress log — newest first. Add an entry every time something happens.
export interface Update {
  date: string; // YYYY-MM
  programme: string;
  title: string;
  body: string;
}

export const updates: Update[] = [
  {
    date: '2026-10',
    programme: 'Thermal Resistance Composite',
    title: 'First sample layups produced',
    body: 'Initial layups completed; coupons are being prepared for thermal exposure tests.',
  },
  {
    date: '2026-08',
    programme: 'Nuada II',
    title: 'Design phase started',
    body: 'Requirements set from Nuada I lessons learned. Work moved on to the dual-deploy recovery system.',
  },
  {
    date: '2026-06',
    programme: 'Liquid Engine',
    title: 'Programme opened',
    body: 'Kick-off of propulsion research, starting with a propellant combination trade study.',
  },
  {
    date: '2026-05',
    programme: 'Nuada I',
    title: 'Flight campaign completed',
    body: 'Airframe, recovery and avionics validated in flight. Post-flight review published internally.',
  },
];
