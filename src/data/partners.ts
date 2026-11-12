// Partners who supported ADG, most of them since the Nuada I project.
// `logo` is a file in public/partners/ (leave empty to show the name as text).

export interface Partner {
  name: string;
  logo?: string;
  contact?: string;
  contribution: string;
}

export const partners: Partner[] = [
  {
    name: 'Milestones Unlimited',
    logo: '/partners/milestones-unlimited.png',
    contact: 'Marc Groothedde',
    contribution:
      'An experienced manager with twenty years in the industrial sector, skilled in project, development and operations management. Helps us navigate a tough market and analyses and advises on the company’s operations.',
  },
  {
    name: 'Hogeschool Windesheim Zwolle',
    logo: '/partners/windesheim.png',
    contribution: 'Access to the metal workshop and support with materials.',
  },
  {
    name: 'ROC Amsterdam',
    logo: '/partners/roc-amsterdam.png',
    contribution:
      'Composites expertise and access to their composite laboratory, working with carbon fibre and glass fibre.',
  },
  {
    name: 'ZWINC',
    logo: '/partners/zwinc.png',
    contribution: 'Materials and 3D printing.',
  },
  {
    name: 'Dextro-Tech',
    logo: '/partners/dextro-tech.png',
    contribution: 'Produced the 3D-printed nose cone for our rocket.',
  },
  {
    name: 'Rootz Mediabureau',
    logo: '/partners/rootz.png',
    contribution:
      'Advice on the company’s external relations and on its overall image.',
  },
];
