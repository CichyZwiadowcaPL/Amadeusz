// Consultancy services and products shown on /services and the home page.

export interface Service {
  title: string;
  body: string;
  items: string[];
}

export const services: Service[] = [
  {
    title: 'Design & analysis',
    body: 'From a sketch to a validated design — mechanical, structural and thermal.',
    items: ['3D CAD & technical drawings', 'Structural (FEA) analysis', 'Thermal & flow analysis', 'Design reviews'],
  },
  {
    title: 'Prototyping & manufacturing',
    body: 'Turning designs into hardware quickly, with the processes to make it repeatable.',
    items: ['Rapid prototyping', 'Composite layup', 'Design for manufacture', 'Small-batch production'],
  },
  {
    title: 'Testing & validation',
    body: 'Planning and running tests that prove a design works — and documenting the results.',
    items: ['Test planning', 'Instrumentation & data acquisition', 'Material characterisation', 'Test reports'],
  },
  {
    title: 'Electronics & software',
    body: 'Embedded systems for measurement, control and data logging.',
    items: ['Custom PCB design', 'Embedded firmware', 'Sensor integration', 'Telemetry & ground software'],
  },
  {
    title: 'Systems engineering',
    body: 'Keeping complex projects on track from requirements to delivery.',
    items: ['Requirements definition', 'Trade studies', 'Risk analysis', 'Technical documentation'],
  },
  {
    title: 'R&D partnership',
    body: 'Joint development for companies, universities and research groups.',
    items: ['Feasibility studies', 'Joint research projects', 'Grant-funded programmes', 'Technology transfer'],
  },
];

export interface Product {
  name: string;
  body: string;
  availability: string;
}

export const products: Product[] = [
  {
    name: 'Thermal resistance composite',
    body: 'Our in-house high-temperature composite, available for evaluation samples and joint application development.',
    availability: 'Samples on request',
  },
  {
    name: 'Flight & data-logging electronics',
    body: 'Avionics hardware proven on our own vehicles, adaptable for logging, telemetry and control in other applications.',
    availability: 'Custom configurations',
  },
  {
    name: 'Custom engineered components',
    body: 'Parts and assemblies designed and built to your specification, from one-off prototypes to small series.',
    availability: 'Made to order',
  },
];

export const process = [
  { title: 'Get in touch', body: 'Tell us about your problem, goals and timeline.' },
  { title: 'Scoping', body: 'We discuss requirements and agree on what success looks like.' },
  { title: 'Proposal', body: 'You receive a clear scope, schedule and quote.' },
  { title: 'Delivery', body: 'We work in short iterations with regular progress updates.' },
];
