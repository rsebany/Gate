import ildXrImg from '../assets/ILD-XR.png'

export const portfolioEn = {
  lang: 'en' as 'en' | 'fr',
  masthead: {
    volume: 'VOL. 2026',
    city: 'BLIDA',
    nameDisplay: 'Romualdo SEBANY',
    availableCta: 'LET\'S COLLABORATE',
  },
  socials: [
    {
      label: 'Email',
      href: 'mailto:romualdosebany@gmail.com',
      icon: 'email' as const,
    },
    {
      label: 'GitHub',
      href: 'https://github.com/rsebany',
      icon: 'github' as const,
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/romualdo-sebany',
      icon: 'linkedin' as const,
    },
    {
      label: 'Phone',
      href: 'tel:+213655871883',
      icon: 'phone' as const,
    },
  ],
  specialReport: {
    headline: 'Profile',
    byline: '',
    body: `I am a computer science graduate from Madagascar, studying in Algeria on a government scholarship. My research focuses on image classification and segmentation for medical imaging. I founded a peer-learning community and won 1st prize at the I-ACE 2026 hackathon with GrayMatter, an open-source hippocampus segmentation platform. Now I am looking to grow further in this field.`,
  },
  experience: [
    {
      id: 'cdta',
      dateRange: 'NOV 2025 – MAY 2026',
      title: 'AI Research Intern, Medical Imaging',
      org: 'CDTA – Centre de Développement des Technologies Avancées, Algiers',
      bullets: [
        'ILD-XR: built a 3D deep learning pipeline for classification of interstitial lung diseases on thoracic CT scans (113 patients). Patient-level evaluation with patient-disjoint validation.',
        'Capstone: immersive web decision-support platform integrated into ILD-XR.',
      ],
    },
    {
      id: 'greymatter-hackathon',
      dateRange: 'APR 2026',
      title: '1st Prize, I-ACE Hackathon',
      org: 'INTELLECT Scientific Club, IGEE, Boumerdès',
      bullets: [
        'GrayMatter: hippocampal segmentation (260 MRI) using a 3D U-Net with attention mechanisms in skip connections.',
        'Patient-wise 5-fold cross-validation with out-of-fold evaluation. Manuscript in preparation.',
      ],
    },
    {
      id: 'kleer',
      dateRange: 'JUL 2025 – OCT 2025',
      title: 'Backend Developer',
      org: 'Kleer Infini · Remote',
      bullets: [
        'Built REST APIs with Django for KleerLogistics: users, shipments, driver-parcel matching, and payments.',
        'Implemented authentication, admin dashboard, and API documentation.',
      ],
    },
    {
      id: 'arimayi',
      dateRange: 'JUL 2025 – NOV 2025',
      title: 'Frontend Developer',
      org: 'AriMayi · Remote',
      bullets: [
        'Developed responsive interfaces with Next.js, React, and TypeScript in collaboration with backend and design teams.',
        'Led migration of applications to Next.js and set up testing with Jest.',
      ],
    },
    {
      id: 'mada-digital',
      dateRange: 'AUG – OCT 2023',
      title: 'UX Designer',
      org: 'MADA-Digital, Antsiranana, Madagascar',
      bullets: [
        'Designed UI systems and user journeys in collaboration with backend and AI teams using Figma and Adobe XD.',
      ],
    },
  ],
  projects: [
    {
      id: 'ild-xr',
      title: 'ILD-XR | Hierarchical 3D Quantification and WebXR Visualization of Interstitial Lung Disease Patterns on HRCT',
      status: 'Complete',
      category: 'AI / Medical Imaging',
      description:
        'End-to-end WebXR platform for AI-assisted visualization of interstitial lung disease from thoracic CT (113 patients): DICOM preprocessing, patient-level 3D deep learning with patient-disjoint evaluation, and browser-based 3D review.',
      image: ildXrImg,
      tags: [
        '3D Deep Learning',
        'FastAPI',
        'WebXR',
        'DICOM',
        'CT Analysis',
      ],
      year: '2026',
      caseStudy: {
        problem:
          'Interstitial lung diseases are hard to diagnose. The patterns that matter are subtle, scattered across a whole 3D scan, and easily missed by eye. Patients often reach a clear answer late, when treatment is less effective.',
        approach:
          'ILD-XR is an end-to-end stack: from raw DICOM volumes to a 3D view a clinician can explore in the browser. Preprocessing masks, resamples, and normalizes heterogeneous scans to keep training stable, then a patient-level 3D deep learning model classifies disease with patient-disjoint evaluation.',
        highlight:
          'The models were re-checked out of fold on data they had never seen during training. The ranking changed. A strong cross-validation score is not the same as a model that is ready to ship. Honest evaluation comes first.',
      },
    },
    {
      id: 'greymatter',
      title: 'GreyMatter | Attention Mechanisms for Hippocampal Segmentation',
      status: 'Complete',
      category: 'AI / Medical Imaging',
      description:
        'Research paper and open-source platform comparing three attention mechanisms for hippocampal subregion segmentation on 260 MRI volumes. Introduces a matched evaluation protocol showing selection-time scores can mislead architectural comparisons.',
      image: undefined,
      tags: ['3D U-Net', 'PyTorch', 'MONAI', 'Coordinate Attention', 'CISA', 'Open Source'],
      year: '2026',
      caseStudy: {
        problem:
          'Hippocampal subregions support diagnosis in epilepsy, mild cognitive impairment, and Alzheimer\'s disease. Attention mechanisms are widely used but comparisons typically vary data splits, preprocessing, and metrics, making results unreliable.',
        approach:
          'Introduced a matched evaluation protocol that fixes all confounding variables and compares three skip-connection designs: plain 3D U-Net, coordinate attention, and coordinate inter-slice attention (CISA). All trained on identical patient-level splits and scored on pooled cross-validated predictions using five complementary metrics (DSC, HD95, ASD, IoU, RVE) with paired statistical testing.',
        highlight:
          'CISA achieves the best selection-time validation score but does not retain this advantage under pooled evaluation; coordinate attention ranks more consistently across all five metrics. This shows selection-time scores alone can mislead, and pooled multi-metric evaluation gives a more trustworthy picture.',
      },
    },
  ],
  video: {
    title:
      'How Students in Madagascar Can Eat Well on a Budget – Zirah (CS50x Project)',
    description:
      'My CS50x final project: a web app that helps students eat well on a budget by combining recipe management, budget tracking, and community sharing.',
    embedUrl: 'https://www.youtube-nocookie.com/embed/vUjrNvufIVI',
  },
  education: [
    {
      institution: 'Université Saad Dahlab de Blida 1',
      date: 'Sep 2023 – Jun 2026',
      detail:
        'Licence in Computer Science. Key coursework: Algorithms, Artificial Intelligence, Databases, Human-Computer Interaction. Capstone: ILD-XR, an immersive web platform for interstitial lung disease classification.',
    },
    {
      institution: 'Higher Institute of Technology, Antsiranana',
      date: 'Nov 2022 – Jul 2023',
      detail:
        'Networks and Telecommunications, validated year (S1 and S2): signals and systems, Fourier analysis, networks and programming. Continued studies in Algeria.',
    },
    {
      institution: 'Lycée Mixte Nosy Be',
      date: '2022',
      detail: 'Scientific Baccalaureate, Mention Bien.',
    },
  ],
  honors: [
    {
      id: 'boursier',
      date: '2023 – 2026',
      title: 'Algerian Government Scholarship for Malagasy Students',
      org: 'Government of Algeria',
      detail:
        'Full scholarship awarded to the Algerian government program for Malagasy students pursuing higher education.',
    },
    {
      id: 'i-ace',
      date: 'APR 2026',
      title: '1st Prize, I-ACE Hackathon',
      org: 'INTELLECT Scientific Club, IGEE, Boumerdès',
      detail:
        'GrayMatter: hippocampal subregion segmentation on MRI (260 cases). Patient-wise 5-fold cross-validation with out-of-fold evaluation.',
    },
  ],
  community: [
    {
      id: 'sis',
      dateRange: 'JAN 2026 – PRESENT',
      title: 'Founder',
      org: 'School of Intelligent Systems, Blida',
      bullets: [
        'Created and lead a peer-learning group in Algeria and Madagascar focused on AI and software engineering.',
        'Organize practical workshops and develop Tsiry, a hospital appointment management system translated into Malagasy. Code: github.com/rsebany/Tsiry',
      ],
    },
    {
      id: 'itc-ceiab',
      dateRange: '2024 – PRESENT',
      title: 'Active Member',
      org: 'IT Community Blida · CEEIAB',
      bullets: [
        'Contribute to AI activities and competitions (IT Community); support reception and integration of international students (CEEIAB).',
      ],
    },
  ],
  certifications: [
    { name: 'Deep Learning Specialization', issuer: 'DeepLearning.AI' },
    { name: 'AI for Medical Diagnosis', issuer: 'DeepLearning.AI' },
    { name: 'CS50x: Introduction to Computer Science', issuer: 'Harvard University' },
    { name: 'CS50AI: Introduction to AI with Python', issuer: 'Harvard University' },
    { name: 'Aspire Leaders Program, Cohort 2', issuer: 'Aspire Institute' },
  ],
  interests: [
    'Football',
    'Scientific outreach',
    'Reading journals',
    'Open source',
    'Knowledge sharing',
  ],
  skillsIndex: [
    { name: 'Python', mark: '●●●' },
    { name: 'Deep Learning', mark: '●●●' },
    { name: 'Medical Imaging', mark: '●●●' },
    { name: 'PyTorch', mark: '●●' },
    { name: 'JavaScript', mark: '●●' },
    { name: 'React', mark: '●●' },
    { name: 'DICOM / NIfTI', mark: '●●' },
    { name: 'WebXR / Three.js', mark: '●●' },
    { name: 'MONAI', mark: '●' },
    { name: 'FastAPI', mark: '●' },
    { name: 'Django / Next.js', mark: '●' },
    { name: 'Docker / PostgreSQL', mark: '●' },
    { name: 'Git / Linux', mark: '●' },
  ],
  skillsGroups: [
    {
      title: 'Programming',
      items: ['Python', 'Java', 'C', 'JavaScript/TypeScript'],
    },
    {
      title: 'AI & Deep Learning',
      items: [
        'PyTorch',
        'MONAI',
        '3D segmentation & classification',
        'Transfer learning',
        'Attention mechanisms',
      ],
    },
    {
      title: 'Medical Imaging & XR',
      items: ['CT / MRI', 'WebXR', '3D Slicer'],
    },
    {
      title: 'Software Engineering',
      items: ['FastAPI', 'Django', 'Next.js', 'Docker', 'Git/GitHub', 'Linux'],
    },
    {
      title: 'Languages',
      items: ['French (Fluent)', 'English (B2)', 'Malagasy (Native)'],
    },
  ],
  connect: {
    tagline:
      'Open to collaboration on medical AI, XR for clinical imaging, and open tooling. Research inquiries welcome.',
    emailLabel: 'EMAIL INQUIRY',
    emailHref: 'mailto:romualdosebany@gmail.com',
    phoneLabel: 'PHONE',
    phoneHref: 'tel:+213655871883',
    githubLabel: 'GITHUB',
    githubHref: 'https://github.com/rsebany',
  },
  footer: {
    printed: 'PRINTED',
    copyrightName: 'ROMUALDO SEBANY',
  },
  labels: {
    careerRetrospective: 'CAREER RETROSPECTIVE',
    timeline: 'Timeline',
    featuredProjects: 'FEATURED PROJECTS',
    caseStudy: 'Case study',
    videoExhibit: 'VIDEO EXHIBIT',
    honorsDistinctions: 'HONORS & DISTINCTIONS',
    awards: 'Awards',
    communityChronicle: 'COMMUNITY CHRONICLE',
    extracurricular: 'Extracurricular',
    skillsIndexTitle: 'Skills index',
    academicNotices: 'Academic notices',
    credentials: 'Credentials',
    stackLanguages: 'Stack & languages',
    interestsTitle: 'Hobbies',
    connectNow: 'Connect now',
    backToPortfolio: 'Back to portfolio',
    theProblem: 'The problem',
    theApproach: 'The approach',
    whyItHolds: 'Why it holds up',
    builtWith: 'Built with',
    allRightsReserved: 'All rights reserved.',
  },
}

export type PortfolioData = typeof portfolioEn
