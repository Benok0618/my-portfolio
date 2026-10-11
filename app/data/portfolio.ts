export interface ExperienceItem {
  role: string
  org: string
  period: string
  points: string[]
  current?: boolean
}

export interface EducationItem {
  program: string
  school: string
  period: string
}

export interface SkillGroupData {
  title: string
  note: string
  skills: string[]
}

export interface AwardItem {
  title: string
  detail: string
  link?: string
}

export interface MoreProject {
  title: string
  detail: string
  tags: string[]
}

export interface ContactItem {
  id: string
  label: string
  value: string
  href?: string
  copy?: boolean
  placeholder?: boolean
  icon: 'mail' | 'phone' | 'facebook' | 'github' | 'linkedin'
}

export const profile = {
  name: 'Lennox Luis Omaña',
  initials: 'LO',
  location: 'Los Baños, Laguna, Philippines',
  status: 'Open to opportunities',
  roles: [
    'Full-stack Developer',
    'Laravel + Vue Engineer',
    'Health-Tech Builder',
    'Video Editor',
  ],
  bio: 'Computer Science graduate (LSPU Los Baños, 2025) who builds full-stack systems for government and health offices with Laravel, Vue 3 and Inertia.js. Experience in web development, machine learning and technical support, plus an award-winning video editor.',
}

export const experience: ExperienceItem[] = [
  {
    role: 'IT Specialist / Full-stack Developer',
    org: 'Municipal Health Office (RHU1) Los Baños',
    period: 'Sept 2025 – Present',
    current: true,
    points: [
      'Leads the full-stack redevelopment of the Rural Health Unit Information System (Laravel, Vue.js, Inertia.js, PrimeVue).',
      'Modernizes the system while keeping compatibility with current RHU workflows.',
      'Provides troubleshooting and technical support for MHO employees.',
    ],
  },
  {
    role: 'MIS Staff (Internship)',
    org: 'DOST-CALABARZON Regional Office',
    period: 'Feb 2025 – May 2025',
    points: [
      'Developed ASSIST, a ticketing system for service requests (data override, password reset, inquiries) in Laravel PHP.',
      'Handled backend development covering ticket creation, assignment, tracking and resolution.',
      'Assisted with technical services.',
    ],
  },
  {
    role: 'Freelance Software / Web Developer',
    org: 'Independent',
    period: '2021 – Present',
    points: [
      'Delivered client projects (PESO web-based system, Katy Coffee e-commerce site) using PHP, JavaScript and Python.',
      'Owned backend logic, database design and deployment for small-business and government clients.',
    ],
  },
  {
    role: 'Creative Head (Video Editing), earlier Promotional Head',
    org: 'Legion of Lures, LSPU Los Baños',
    period: '2021 – 2024',
    points: [
      'Led creative output including video editing; earlier served as Promotional Head.',
    ],
  },
]

export const moreProjects: MoreProject[] = [
  {
    title: 'Katy Coffee e-commerce',
    detail: 'Commissioned web system, deployed for a small business.',
    tags: ['PHP', 'JavaScript'],
  },
  {
    title: 'PESO web-based system',
    detail: 'Member of the dev team, back-end.',
    tags: ['Back-end'],
  },
  {
    title: 'Job Recommendation Model',
    detail: 'Unsupervised K-means clustering.',
    tags: ['Machine Learning'],
  },
  {
    title: 'Facial Recognition Attendance',
    detail: 'Haar Cascade + Local Binary Pattern Histogram, single class photo.',
    tags: ['OpenCV'],
  },
  {
    title: 'Stray Cat Reproduction Simulation',
    detail: 'Agent-based model built on GAMA.',
    tags: ['Simulation'],
  },
]

export const awards: AwardItem[] = [
  {
    title: '1st Place — Video Editing, "The Future is on Us"',
    detail: 'Supreme Student Council of Computer Studies, LSPU-LB',
    link: 'https://www.facebook.com/lspulbccssc/videos/356909886170632',
  },
  {
    title: 'Certificate of Completion',
    detail: 'DOST-CALABARZON',
  },
  {
    title: 'Service Award — Creative Head (Video Editing)',
    detail: 'Legion of Lures, LSPU Los Baños',
  },
]

export const skillGroups: SkillGroupData[] = [
  {
    title: 'Backend',
    note: 'services, APIs and data',
    skills: ['Laravel', 'PHP', 'Node.js', 'REST APIs', 'Inertia.js'],
  },
  {
    title: 'Frontend',
    note: 'interfaces and interactions',
    skills: ['Vue.js', 'JavaScript', 'HTML/CSS', 'PrimeVue'],
  },
  {
    title: 'Data & ML',
    note: 'models and analysis',
    skills: ['Python', 'scikit-learn-style clustering', 'OpenCV-style face recognition'],
  },
  {
    title: 'Tools',
    note: 'versioning and workflow',
    skills: ['Git', 'GitHub', 'Visual Studio', 'MySQL', 'PostgreSQL'],
  },
  {
    title: 'Creative',
    note: 'video and post-production',
    skills: ['Filmora', 'Adobe Premiere', 'CapCut', 'DaVinci Resolve (foundational)'],
  },
]

export const education: EducationItem[] = [
  {
    program: 'BS Computer Science',
    school: 'Laguna State Polytechnic University — Los Baños',
    period: '2021 – 2025',
  },
  {
    program: 'Information Communication Technology',
    school: 'Colegio Los Baños',
    period: '2019 – 2021',
  },
]

export const contacts: ContactItem[] = [
  {
    id: 'email',
    label: 'Email',
    value: 'lennoxluisomana@gmail.com',
    href: 'mailto:lennoxluisomana@gmail.com',
    copy: true,
    icon: 'mail',
  },
  {
    id: 'phone',
    label: 'Phone',
    value: '+63 955 637 8466',
    href: 'tel:+639556378466',
    copy: true,
    icon: 'phone',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    value: 'facebook.com/Benok061803',
    href: 'https://www.facebook.com/Benok061803',
    icon: 'facebook',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/Benok0618',
    href: 'https://github.com/Benok0618',
    icon: 'github',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/lennox-luis-omaña-600197367',
    href: 'https://www.linkedin.com/in/lennox-luis-oma%C3%B1a-600197367',
    icon: 'linkedin',
  },
]

export const languages = ['Tagalog', 'English']
