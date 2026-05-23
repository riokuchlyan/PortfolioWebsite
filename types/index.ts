export type Project = {
  n: string;
  title: string;
  blurb: string;
  stack: string[];
  year: string;
  type: string;
  image: string;
  href: string;
};

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  kind: 'WORK' | 'EDUCATION';
  logo: string;
};

export type Photo = {
  label: string;
  city: string;
  size: 'sm' | 'md' | 'v';
  src: string;
};

export type Section = {
  id: string;
  label: string;
  n: string;
};
