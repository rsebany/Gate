import ildXrImg from '../assets/ILD-XR.png'
import pfePaper from '../assets/Paper/PFE_research.pdf'
import graymatterPaper from '../assets/Paper/Graymatter_paper.pdf'

export const portfolio = {
  masthead: {
    volume: 'VOL. 2026',
    city: 'BLIDA',
    nameDisplay: 'ROMUALDO SEBANY',
    subtitle: 'DEEP LEARNING FOR MEDICAL IMAGING & BIOMEDICAL SIGNALS',
    availableCta: 'AVAILABLE FOR HIRE',
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
      label: 'Phone',
      href: 'tel:+213655871883',
      icon: 'phone' as const,
    },
  ],
  specialReport: {
    figureCaption: 'FIG 1: AI RESEARCH INTERN',
    headline: 'Special Report: Medical Imaging for the Global South',
    byline: 'BY ROMUALDO SEBANY · BLIDA',
    body: `I build AI tools that help doctors see inside the human body. My models read medical scans, and my software lets people explore the results in 3D, right in the browser.

At CDTA, I built ILD-XR, a system that screens lung disease from CT scans. At I-ACE 2026, my team took first place with GrayMatter, an open platform that segments the hippocampus on MRI. The win taught me more than the prize. When we rechecked our models on data they had never seen, the ranking changed completely. A strong result in training does not always mean a model works in real life.

I care about clean pipelines, honest metrics, and software that other people can actually run.`,
  },
  experience: [
    {
      id: 'cdta',
      dateRange: 'NOV 2025 – MAY 2026',
      title: 'AI Research Intern',
      org: 'CDTA – Centre de Développement des Technologies Avancées, Algiers',
      bullets: [
        'ILD-XR: screening of interstitial lung diseases on thoracic CT scans (113 patients). Patient-level 3D pipeline with patient-disjoint evaluation, F1 score 0.839 ± 0.056, calibration error 0.052.',
        'Designed preprocessing for heterogeneous DICOM volumes (masking, resampling, normalization) to stabilize training, and shipped a WebXR + FastAPI interface for browser-based 3D review.',
        'Capstone: immersive web decision-support platform integrated into the same research system, graded 17/20.',
      ],
    },
    {
      id: 'arimayi',
      dateRange: 'JUL 2025 – NOV 2025',
      title: 'Frontend Lead Developer',
      org: 'AriMayi · Remote',
      bullets: [
        'Led the migration to Next.js (SSR) and Redux, improving performance and maintainability on production apps.',
        'Worked with backend and design to ship responsive features on schedule.',
      ],
    },
    {
      id: 'kleer',
      dateRange: 'JUL 2025 – OCT 2025',
      title: 'Back End Developer',
      org: 'Kleer Infini · Remote',
      bullets: [
        'Built secure REST APIs with Django REST Framework and tuned PostgreSQL queries for a multi-tenant platform.',
        'Implemented authentication, validation, and API documentation for reliable services.',
      ],
    },
    {
      id: 'mada-digital',
      dateRange: 'AUG – OCT 2023',
      title: 'UX Designer',
      org: 'MADA-Digital, Antsiranana, Madagascar',
      bullets: [
        'Designed UI systems and user journeys using Figma and Adobe XD.',
      ],
    },
  ],
  projects: [
    {
      id: 'ild-xr',
      title: 'ILD-XR | AI-Powered 3D Lung Diagnosis Platform',
      status: 'Complete',
      category: 'AI / Medical Imaging',
      description:
        'End-to-end WebXR platform for AI-assisted visualization and screening of interstitial lung disease from thoracic CT (113 patients): DICOM preprocessing, patient-level 3D deep learning with patient-disjoint evaluation, and browser-based 3D review. F1 score 0.839 ± 0.056, calibration error 0.052. Capstone graded 17/20.',
      image: ildXrImg,
      tags: [
        '3D Deep Learning',
        'FastAPI',
        'WebXR',
        'DICOM',
        'CT Screening',
      ],
      paper: pfePaper,
      year: '2026',
      caseStudy: {
        problem:
          'Interstitial lung diseases are hard to diagnose. The patterns that matter are subtle, scattered across a whole 3D scan, and easily missed by eye. Patients often reach a clear answer late, when treatment is less effective.',
        approach:
          'ILD-XR is an end-to-end stack: from raw DICOM volumes to a 3D view a clinician can explore in the browser. Preprocessing masks, resamples, and normalizes heterogeneous scans to keep training stable, then a patient-level 3D deep learning model screens for disease with patient-disjoint evaluation, so no patient leaks across the split.',
        highlight:
          'The models were re-checked out of fold on data they had never seen during training. The ranking changed. That result is the whole point of ILD-XR: a strong cross-validation score is not the same as a model that is ready to ship. Honest metrics come first.',
      },
    },
    {
      id: 'greymatter',
      title: 'GreyMatter | Open-Source Hippocampus Segmentation',
      status: 'Complete',
      category: 'AI / Medical Imaging',
      description:
        '1st prize, I-ACE Hackathon 2026. Open-source platform for reproducible hippocampal subregion segmentation on MRI (260 cases). Highlights the gap between cross-validation (Dice 0.86) and out-of-fold evaluation (Dice 0.85).',
      image: undefined,
      tags: ['3D CNN', 'PyTorch', 'MONAI', 'Open Source'],
      paper: graymatterPaper,
      year: '2026',
      caseStudy: {
        problem:
          'The hippocampus is one of the first brain structures to shrink in Alzheimer\'s disease and epilepsy. Measuring its subregions on MRI by hand is slow and inconsistent between experts, which delays early diagnosis.',
        approach:
          'GrayMatter is an open-source platform (MONAI, PyTorch) for reproducible hippocampal subregion segmentation. Every model is evaluated twice: once with cross-validation and once out of fold on data excluded from training, so the reported scores reflect what the model really does.',
        highlight:
          'The honest numbers are the point. Cross-validation gave Dice 0.86 while out-of-fold evaluation gave 0.85, a small gap that still changed the ranking of methods. GrayMatter ships open source so anyone can re-run the evaluation and trust the result.',
      },
    },
  ],
  works: [
    {
      id: 'ild-screening',
      title:
        'Patient-Level Hierarchical 3D Deep Learning for ILD Screening with Volumetric Biomarkers',
      authors: 'Sebany, R., et al.',
      venue: 'In preparation',
    },
    {
      id: 'graymatter',
      title:
        'GrayMatter: An Open-Source Platform for Reproducible Hippocampal Subregion Segmentation',
      authors: 'Sebany, R., Chauke, M.',
      venue: 'In preparation',
    },
  ],
  video: {
    title:
      'How Students in Madagascar Can Eat Well on a Budget – Zirah (CS50x Project)',
    description:
      'My CS50x final project: a web app that helps students eat well on a budget by combining recipe management, budget tracking, and community sharing into one practical platform.',
    embedUrl: 'https://www.youtube-nocookie.com/embed/vUjrNvufIVI',
  },
  education: [
    {
      institution: 'Université Saad Dahlab de Blida 1',
      date: 'Sep 2023 – Jun 2026',
      detail:
        'Licence in Computer Science (Systems) — Mention: Assez Bien. Key coursework: Algorithms, Artificial Intelligence, Databases, Human–Computer Interaction. Capstone (17/20): ILD-XR, an immersive web platform for interstitial lung disease screening.',
    },
    {
      institution: 'Higher Institute of Technology, Antsiranana',
      date: 'Nov 2022 – Jul 2023',
      detail:
        'Networks and Telecommunications — transition year before integration at University of Blida 1.',
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
      title: 'Scholar, Algerian Government Scholarship',
      org: 'Government of Algeria',
      detail:
        'Full scholarship awarded to the Algerian government program for Malagasy students pursuing higher education.',
    },
    {
      id: 'aspire',
      date: 'APR – JUN 2026',
      title: 'Participant, Aspire Leaders Program (Cohort 2)',
      org: 'Aspire Institute',
      detail:
        'Selected for an international leadership program focused on innovation, project management, and societal impact.',
    },
    {
      id: 'i-ace',
      date: 'APR 2026',
      title: '1st Prize, I-ACE Hackathon',
      org: 'INTELLECT Scientific Club, IGEE, Boumerdès',
      detail:
        'GrayMatter: open-source platform for hippocampal subregion segmentation on MRI (260 cases). Highlighted the gap between cross-validation (Dice 0.86) and out-of-fold evaluation (Dice 0.85).',
    },
  ],
  community: [
    {
      id: 'sis',
      dateRange: 'JAN 2024 – PRESENT',
      title: 'Founder',
      org: 'School of Intelligent Systems',
      bullets: [
        'Founded a small peer-learning group (~10 active students) focused on software engineering and introductory AI.',
        'Run weekly sessions and project-based work (React, Node.js, basics of deep learning), from fundamentals to shippable student projects.',
        'Handle planning, mentoring, and follow-up so learners stay consistent over the semester.',
      ],
    },
    {
      id: 'itc-blida',
      dateRange: 'NOV 2024 – PRESENT',
      title: 'Member',
      org: 'IT Community',
      bullets: [
        'Participate in the science and technology community promoting knowledge sharing in computer science.',
      ],
    },
    {
      id: 'ceiab',
      dateRange: 'DEC 2024 – PRESENT',
      title: 'Active Member',
      org: 'CEIAB (Communauté des Étudiants Internationaux en Algérie)',
      bullets: [
        'Supported administrative and academic integration of international students.',
      ],
    },
    {
      id: 'huawei',
      dateRange: '2022 – 2023',
      title: 'Active Member',
      org: 'Huawei Club',
      bullets: [
        'Participated in weekly technical workshops on AI, cloud, and networking.',
      ],
    },
  ],
  certifications: [
    { name: 'Neural Networks and Deep Learning', issuer: 'DeepLearning.AI' },
    { name: 'AI for Medical Diagnosis', issuer: 'DeepLearning.AI' },
    { name: 'CS50 Introduction to Artificial Intelligence with Python', issuer: 'Harvard University' },
    { name: 'Developing Back-End Apps with Node.js and Express', issuer: 'IBM' },
    { name: 'Supervised Machine Learning: Regression and Classification', issuer: 'Stanford University' },
  ],
  interests: [
    'Scientific outreach',
    'Reading',
    'Sports',
    'Volunteering',
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
    { name: 'TensorFlow', mark: '●' },
    { name: 'FastAPI', mark: '●' },
    { name: 'Django / Next.js', mark: '●' },
    { name: 'Docker / PostgreSQL', mark: '●' },
    { name: 'Git / Linux', mark: '●' },
  ],
  skillsGroups: [
    {
      title: 'Programming',
      items: ['Python (Expert)', 'JavaScript (Advanced)', 'React', 'C++ (Intermediate)'],
    },
    {
      title: 'AI & deep learning',
      items: [
        'PyTorch',
        'MONAI',
        'TensorFlow',
        'Scikit-Learn',
        'U-Net',
        '3D segmentation',
        'Transfer learning',
      ],
    },
    {
      title: 'Medical imaging & XR',
      items: ['DICOM', 'CT', 'MRI', 'WebXR', 'Three.js', 'NIfTI'],
    },
    {
      title: 'Software & systems',
      items: ['FastAPI', 'Django', 'Next.js', 'Docker', 'PostgreSQL', 'Git', 'Linux', 'Bash'],
    },
    {
      title: 'Soft skills',
      items: [
        'Adaptability',
        'Scientific rigor',
        'Leadership',
        'Autonomy',
        'Teamwork',
      ],
    },
    {
      title: 'Languages',
      items: [
        'English (B2 — IELTS in progress)',
        'French (Fluent)',
        'Malagasy (Native)',
      ],
    },
  ],
  connect: {
    tagline: 'Open to collaboration on medical AI, XR for clinical imaging, and open tooling — research inquiries welcome.',
    emailLabel: 'EMAIL INQUIRY',
    emailHref: 'mailto:romualdosebany@gmail.com',
    phoneLabel: 'PHONE',
    phoneHref: 'tel:+213655871883',
    githubLabel: 'GITHUB',
    githubHref: 'https://github.com/rsebany',
  },
  footer: {
    printed: 'PRINTED IN BLIDA',
    copyrightName: 'ROMUALDO SEBANY',
  },
} as const

export type Portfolio = typeof portfolio
