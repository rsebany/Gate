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
        'Trained a 3D segmentation model for three lung patterns: ground-glass opacity, reticulation, and consolidation.',
        'Reached a macro Dice score of 0.84 and sensitivity above 90% for each pattern.',
        'Designed a decision-support platform with 3D/WebXR visualization.',
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
      id: 'ild-texnet',
      title: 'ILD-TexNet | Patient-Disjoint Evaluation of Compact Texture Networks for ILD Classification',
      status: 'Ongoing',
      category: 'AI / Medical Imaging',
      description:
        'Research project on compact multi-scale texture networks for HRCT patch classification, built on the MedGIFT ILD database. Patient-disjoint evaluation protocol with explicit data-leakage control; manuscript in preparation.',
      image: undefined,
      tags: [
        'Texture Analysis',
        'PyTorch',
        'HRCT',
        'Patient-Disjoint Evaluation',
        'MedGIFT',
      ],
      year: '2026',
      caseStudy: {
        problem:
          'Interstitial lung disease classification on HRCT is prone to optimistic scores when patches from the same patient appear in both training and test sets. Compact models are attractive for clinical deployment, but their evaluation has to be trustworthy.',
        approach:
          'Built a rigorous patient-disjoint evaluation protocol with explicit data-leakage control on the MedGIFT ILD database, then designed and implemented a compact multi-scale texture network for HRCT patch classification.',
        highlight:
          'The project pairs a compact architecture with an evaluation-first mindset. The manuscript in preparation is titled "Patient-Disjoint Evaluation of Compact Texture Networks for ILD Classification". The goal is a result that holds up outside the training split, not just a strong leaderboard number.',
      },
    },
    {
      id: 'ild-xr',
      title: 'ILD-XR | Hierarchical 3D Quantification and WebXR Visualization of Interstitial Lung Disease Patterns on HRCT',
      status: 'Complete',
      category: 'AI / Medical Imaging',
      description:
        'End-to-end WebXR platform for AI-assisted visualization of interstitial lung disease from thoracic CT (113 patients): DICOM preprocessing, transfer learning with patient-separated stratified 5-fold cross-validation (F1 0.839), and interactive 2D/3D/WebXR review.',
      image: ildXrImg,
      tags: [
        '3D Deep Learning',
        'Transfer Learning',
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
          'ILD-XR is an end-to-end stack: from raw DICOM volumes to a 3D view a clinician can explore in the browser. Preprocessing masks, resamples, and normalizes heterogeneous scans to keep training stable, then transfer learning with patient-separated stratified 5-fold cross-validation classifies the disease and interactive 2D, 3D, and WebXR tools expose the lesions.',
        highlight:
          'The models were re-checked out of fold on data they had never seen during training. The ranking changed. A strong cross-validation score is not the same as a model that is ready to ship. Honest evaluation comes first.',
      },
    },
    {
      id: 'greymatter',
      title: 'GrayMatter | Attention Mechanisms for Hippocampal Segmentation',
      status: 'Complete',
      category: 'AI / Medical Imaging',
      description:
        'Research paper and open-source platform comparing three attention mechanisms for hippocampal subregion segmentation on 260 MRI volumes from Medical Segmentation Decathlon Task 4. Introduces a matched evaluation protocol showing selection-time scores can mislead architectural comparisons.',
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
      date: 'Sep 2026 – Present',
      detail:
        'Master 1 in Artificial Intelligence. Graduate coursework in machine learning and computer vision, with a research focus on medical imaging and 3D deep learning.',
    },
    {
      institution: 'Université Saad Dahlab de Blida 1',
      date: 'Sep 2023 – Jun 2026',
      detail:
        'Licence in Computer Science, Information Systems specialization. Ranked 5th out of 104 students; average improved from 11.23/20 (S1) to 15.18/20 (S6); overall average 12.53/20. Capstone at CDTA: ILD-XR, graded 17/20. Relevant coursework: algorithms and data structures, numerical methods, artificial intelligence.',
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
      date: '2023 – PRESENT',
      title: 'Algerian Government Scholarship for Malagasy Students',
      org: 'Government of Algeria',
      detail:
        'Full scholarship awarded through the Algerian government program for Malagasy students pursuing higher education.',
    },
    {
      id: 'i-ace',
      date: 'APR 2026',
      title: '1st Prize, I-ACE Hackathon',
      org: 'INTELLECT Scientific Club, IGEE, Boumerdès',
      detail:
        'GrayMatter: attention-based 3D U-Net for hippocampal segmentation on MRI. Patient-wise 5-fold cross-validation on 260 annotated cases from Medical Segmentation Decathlon Task 4.',
    },
  ],
  community: [
    {
      id: 'aema',
      dateRange: 'SEP 2026 – PRESENT',
      title: 'Communications Officer',
      org: 'Association of Malagasy Students in Algeria (AEMA)',
      bullets: [
        'Manage communication channels and share information with members.',
        'Coordinate the member census by city.',
        'Develop a practical guide for new students.',
      ],
    },
    {
      id: 'sis',
      dateRange: 'JAN 2026 – PRESENT',
      title: 'Founder',
      org: 'School of Intelligent Systems, Blida',
      bullets: [
        'Created and lead a study group in AI and software engineering bringing together students from Algeria and Madagascar.',
        'Built Tsiry, a working prototype for hospital appointment management in Malagasy. Code: github.com/rsebany/Tsiry',
      ],
    },
    {
      id: 'itc-ceiab',
      dateRange: 'SEP 2024 – PRESENT',
      title: 'Active Member',
      org: 'IT Community Blida · CEEIAB',
      bullets: [
        'Take part in AI activities and internal club competitions.',
        'Developed a member and team management platform.',
        'Support reception and integration of international students (CEEIAB).',
      ],
    },
  ],
  certifications: [
    {
      name: 'Deep Learning Specialization (5 courses)',
      issuer: 'DeepLearning.AI · 2026',
    },
    {
      name: 'AI for Medical Diagnosis',
      issuer: 'DeepLearning.AI · 2026',
    },
    {
      name: 'Aspire Leaders Program, Cohort 2',
      issuer: 'Aspire Institute · July 2026',
    },
    {
      name: 'CS50x: Introduction to Computer Science',
      issuer: 'Harvard University · 2025',
    },
    {
      name: 'CS50AI: Introduction to AI with Python',
      issuer: 'Harvard University · 2025',
    },
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
    { name: 'SimpleITK', mark: '●' },
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
        'SimpleITK',
        'Transfer learning',
        'Patient-wise cross-validation',
      ],
    },
    {
      title: 'Medical Imaging & XR',
      items: ['HRCT & MRI', 'DICOM & NIfTI', 'WebXR', 'Three.js', '3D Slicer'],
    },
    {
      title: 'Software Engineering',
      items: ['FastAPI', 'Django', 'Next.js', 'Docker', 'Git/GitHub', 'Linux'],
    },
    {
      title: 'Soft Skills',
      items: ['Adaptability', 'Leadership', 'Teamwork', 'Autonomy', 'Time management'],
    },
    {
      title: 'Languages',
      items: ['Malagasy (Native)', 'French (DELF B2, 2023)', 'English (B2, CEIL)'],
    },
  ],
  references: [
    {
      name: 'Dr Samir BENBELKACEM',
      role: 'Research Fellow',
      org: 'CDTA',
      email: 'sbenbelkacem@cdta.dz',
      relation: 'Internship supervisor',
    },
    {
      name: 'Dr Hadjer YKHLEF',
      role: 'Associate Professor',
      org: 'Université Saad Dahlab Blida 1',
      email: 'ykhlef_hadjer@univ-blida.dz',
      relation: 'Capstone advisor',
    },
    {
      name: 'Yasser HAMIDULLAH',
      role: 'Researcher',
      org: 'DFKI, Saarbrücken',
      email: 'yasser.hamidullah@dfki.de',
      relation: 'Mentor',
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
    referencesTitle: 'References',
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
