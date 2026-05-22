export type Profile = {
  name: string;
  role: string;
  taglineSchool: string;
  taglineSuffix: string;
  school: string;
  location: string;
  status: string;
  focus: string;
  seoDescription: string;
  lastUpdated: string;
  email: string;
  linkedin: string;
  github: string;
  resume: string;
};

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
  note: string;
  kind: 'WORK' | 'EDUCATION';
  logo: string;
  current?: boolean;
  incoming?: boolean;
};

export type Photo = {
  label: string;
  city: string;
  size: 'sm' | 'md' | 'lg' | 'v' | 'vs';
  src: string;
};

export type Section = {
  id: string;
  label: string;
  n: string;
};
