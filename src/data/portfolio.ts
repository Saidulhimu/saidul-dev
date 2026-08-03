import {
  Code2,
  Brain,
  Database,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';

export const profile = {
  name: 'Md. Saidul Islam',
  role: 'Full-Stack Web Developer',
  brand: 'Saidul.dev',
  bio: 'Forward-thinking CSE graduate bridging modern full-stack web architectures (React, Node.js, Django) with data-driven Machine Learning & Explainable AI (XAI).',
  location: 'Pabna, Bangladesh',
  email: 'saidulhimuu@gmail.com',
  phone: '01303962860',
  phoneTel: '+8801303962860',
  github: 'https://github.com/Saidulhimu',
  linkedin: 'https://www.linkedin.com/in/md-saidul-islam-a6a942414/',
  cvUrl: 'https://drive.google.com/file/d/1h4Pd-7jXmYBehpbNgCdO22WBxdZbfUAT/view?usp=sharing',
  avatar: '/src/assets/profilePic.jpg',
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Full-Stack Web Development',
    icon: Code2,
    skills: ['React.js', 'Node.js', 'Django', 'REST APIs', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript'],
  },
  {
    title: 'Machine Learning & Data Science',
    icon: Brain,
    skills: ['XGBoost', 'Random Forest', 'SVM', 'SHAP / LIME', 'NLP', 'Data Pipelines', 'Model Interpretation'],
  },
  {
    title: 'Databases & Tools',
    icon: Database,
    skills: ['MySQL', 'Git', 'GitHub', 'Linux', 'VS Code'],
  },
  {
    title: 'Soft Skills & Strengths',
    icon: Sparkles,
    skills: ['Leadership', 'Problem Solving', 'Quick Learner', 'Positive Attitude'],
  },
];

export type TechLogo = {
  name: string;
  /** Two-letter glyph rendered in a styled chip — keeps the bundle icon-free and crisp. */
  glyph: string;
  /** Tailwind gradient classes for the logo tile background. */
  gradient: string;
};

export const techLogos: TechLogo[] = [
  { name: 'React', glyph: 'Re', gradient: 'from-[#61DAFB] to-[#149ECA]' },
  { name: 'Node.js', glyph: 'No', gradient: 'from-[#3C873A] to-[#68A063]' },
  { name: 'Next.js', glyph: 'Nx', gradient: 'from-slate-700 to-slate-900' },
  { name: 'Tailwind', glyph: 'Tw', gradient: 'from-[#38BDF8] to-[#0EA5E9]' },
  { name: 'MongoDB', glyph: 'Mo', gradient: 'from-[#4DB33D] to-[#001E2B]' },
  { name: 'JavaScript', glyph: 'JS', gradient: 'from-[#F7DF1E] to-[#E6B800]' },
  { name: 'Python', glyph: 'Py', gradient: 'from-[#3776AB] to-[#FFD43B]' },
  { name: 'Django', glyph: 'Dj', gradient: 'from-[#092E20] to-[#44B78B]' },
  { name: 'MySQL', glyph: 'My', gradient: 'from-[#00758F] to-[#F29111]' },
  { name: 'Git', glyph: 'Gi', gradient: 'from-[#F05032] to-[#C0392B]' },
  { name: 'GitHub', glyph: 'Gh', gradient: 'from-slate-700 to-slate-900' },
  { name: 'Linux', glyph: 'Li', gradient: 'from-[#FCC624] to-[#111]' },
];

export type Experience = {
  role: string;
  org: string;
  period: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    role: 'Full-Stack & Intelligent Systems Consultant',
    org: 'Freelance / Remote',
    period: 'June 2025 — Present',
    highlights: [
      'End-to-end full-stack web development with responsive interfaces and robust backends.',
      'Implementing ML workflows using XGBoost, Random Forest, and SHAP feature analysis.',
      'Bridging explainable AI techniques with production-ready web platforms.',
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
  status?: string;
  statusType?: 'research' | 'featured';
  image?: string;
  imageCaption?: string;
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    title: 'DharmaSafe: Bengali Text Aggression Detection System',
    description:
      'An AI-driven natural language processing (NLP) research project designed to detect, categorize, and mitigate aggressive, toxic, and hate speech in Bengali online text. Utilizes state-of-the-art transformer models fine-tuned on Bengali linguistics for precise content moderation and online safety.',
    tags: ['Bengali NLP', 'Text Classification', 'PyTorch / Scikit-Learn', 'Confusion Matrix Analysis', 'Ongoing Research'],
    featured: true,
    status: 'Ongoing Research',
    statusType: 'research',
    image: '/assets/project1.png',
    imageCaption: 'Model Evaluation: Confusion Matrix for Aggression Classification',
  },
  {
    title: 'Tech Store: E-Commerce Platform with AI-Powered Features',
    description:
      'A feature-rich, modern E-Commerce web application built for seamless online tech shopping. Features an integrated AI-powered product assistant/recommendation engine, smooth cart & checkout workflows, responsive UI/UX, and optimized API performance. Codebase hosted on GitHub.',
    tags: ['E-Commerce', 'AI Assistant', 'React / Next.js', 'Tailwind CSS', 'GitHub Integrated'],
    status: 'Featured Project',
    statusType: 'featured',
    image: '/assets/project2.png',
    liveUrl: 'https://techstore17.ai.studio/',
    githubUrl: 'https://github.com/Saidulhimu',
  },
  {
    title: 'NextKit — Authentic Football Club Jerseys',
    description:
      'A premium e-commerce storefront for authentic football club jerseys, built with Next.js and a headless CMS. Features a sleek product catalog with filtering by club and league, a lightning-fast search, size-guide modals, secure checkout, and a fully responsive design tuned for a high-end retail experience.',
    tags: ['Next.js', 'E-Commerce', 'Headless CMS', 'Tailwind CSS', 'Responsive UI'],
    status: 'Live Project',
    statusType: 'featured',
    image: 'https://images.pexels.com/photos/20688402/pexels-photo-20688402.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    liveUrl: 'https://nextkit-premium.bolt.host',
  },
];

export type Education = {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  gradeLabel: string;
};

export const education: Education[] = [
  {
    degree: 'B.Sc. in Computer Science and Engineering',
    institution: 'BUBT — Bangladesh University of Business & Technology',
    period: '2022 — Present',
    grade: '3.17',
    gradeLabel: 'CGPA',
  },
  {
    degree: 'HSC — Science',
    institution: 'Shahid Bulbul Government College, Pabna',
    period: '',
    grade: '3.58',
    gradeLabel: 'GPA',
  },
  {
    degree: 'SSC — Science',
    institution: 'Radhanagar Majumder Academy, Pabna',
    period: '',
    grade: '4.77',
    gradeLabel: 'GPA',
  },
];

export const achievements = {
  awards: ['1st Runner Up — Brainstorming Week 2024 (BUBT)'],
  extracurricular: [
    'BUBT IT Club Member (2023–2026)',
    'BUBT Cultural Club Executive Member (2024–2026)',
    'ICPC Regional Contest Volunteer (2025)',
  ],
};

export type Certification = {
  title: string;
  issuer: string;
  year: string;
};

export const certifications: Certification[] = [
  {
    title: 'Advanced Learning Algorithms',
    issuer: 'Stanford University & DeepLearning.AI (Coursera)',
    year: '',
  },
  {
    title: 'Supervised Machine Learning',
    issuer: 'Stanford University & DeepLearning.AI (Coursera)',
    year: '',
  },
  {
    title: 'EY Technology Risk Virtual Job Simulation',
    issuer: 'Forage',
    year: '2026',
  },
];

export const reference = {
  name: 'Md. Mamun Hossain',
  title: 'Assistant Professor, Dept. of CSE, BUBT',
};
