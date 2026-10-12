import type { Lang } from '../i18n/ui';

const shared = {
  name: 'Michał Korulczyk',
  firstName: 'Michał',
  lastName: 'Korulczyk',
  title: 'Technical Lead · Senior Backend Engineer',
  focus: 'Rails · DDD · Event-driven',
  jobTitle: 'Technical Lead',
  employer: 'Smart Pension',
  email: 'korulczyk.michal@gmail.com',
  linkedin: {
    url: 'https://www.linkedin.com/in/micha%C5%82-korulczyk-0202b391/',
    label: 'linkedin.com/in/michał-korulczyk-0202b391',
  },
};

const en = {
  ...shared,
  location: 'Grodzisk Mazowiecki, Poland',
  description:
    'Technical Lead and Senior Backend Engineer with over 11 years in Ruby on Rails and Elixir. Domain-Driven Design, event-driven architecture, Kafka, AWS and Kubernetes.',
  summary:
    'Backend engineer and technical leader with over 11 years of experience designing, building and operating production systems in Ruby on Rails and Elixir. I specialise in moving monoliths toward distributed, event-driven, domain-oriented architectures: I applied Domain-Driven Design from event storming through to Kafka domain events, built the tooling that enabled a monolith split, and introduced correlated logs and traces across microservices running on AWS and Kubernetes. As Technical Lead at Smart Pension I own architecture decisions, lead cross-discipline design, and grow a team of 8 engineers. Outside work I use my own products to explore AI-assisted engineering.',
  skills: [
    {
      area: 'Architecture',
      items:
        'Domain-Driven Design, event-driven architecture, microservices, Apache Kafka, Karafka, Protocol Buffers, OpenID Connect (OIDC), data migrations, observability (distributed tracing, correlated logs, Sentry)',
    },
    { area: 'Cloud & CI/CD', items: 'AWS, Kubernetes, CircleCI, Jenkins, GitHub Actions' },
    { area: 'Languages', items: 'Ruby, Elixir, JavaScript, Python' },
    { area: 'Frameworks', items: 'Ruby on Rails, Phoenix, RSpec, React' },
    { area: 'Databases', items: 'PostgreSQL, PostGIS, Redis' },
    {
      area: 'Leadership',
      items:
        'People management, technical leadership, event storming, Scrum facilitation, end-to-end feature ownership, on-call and incident response',
    },
  ],
  languages:
    'Polish, native · English, professional working proficiency and my daily working language at a UK company',
  interests: 'Board games, basketball, and cooking, especially fermenting food at home.',
};


export const profiles: Record<Lang, typeof en> = { en };
