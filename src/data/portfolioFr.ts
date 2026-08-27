import ildXrImg from '../assets/ILD-XR.png'

export const portfolioFr = {
  lang: 'fr' as const,
  masthead: {
    volume: 'VOL. 2026',
    city: 'BLIDA',
    nameDisplay: 'Romualdo SEBANY',
    availableCta: 'COLLABORONS',
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
      label: 'Téléphone',
      href: 'tel:+213655871883',
      icon: 'phone' as const,
    },
  ],
  specialReport: {
    headline: 'Profil',
    byline: '',
    body: `Je suis diplômé en informatique originaire de Madagascar, étudiant en Algérie dans le cadre d'une bourse gouvernementale. Ma recherche porte sur la classification et la segmentation d'images pour l'imagerie médicale. J'ai fondé un groupe d'apprentissage par les pairs et remporté le 1er prix au hackathon I-ACE 2026 avec GrayMatter, une plateforme open-source de segmentation de l'hippocampe. Je cherche maintenant à progresser davantage dans ce domaine.`,
  },
  experience: [
    {
      id: 'cdta',
      dateRange: 'NOV 2025 – MAI 2026',
      title: 'Stagiaire en IA et imagerie médicale',
      org: 'CDTA – Centre de Développement des Technologies Avancées, Alger',
      bullets: [
        'ILD-XR : développement d\'un pipeline de Deep Learning 3D pour l\'analyse de scanners thoraciques, classification hiérarchique des maladies pulmonaires interstitielles sur 113 patients. Évaluation patient-level avec validation disjointe.',
        'Projet de fin d\'études : plateforme web immersive d\'aide à la décision intégrant ILD-XR.',
      ],
    },
    {
      id: 'greymatter-hackathon',
      dateRange: 'AVR 2026',
      title: '1er Prix, Hackathon I-ACE',
      org: 'INTELLECT Scientific Club, IGEE, Boumerdès',
      bullets: [
        'GrayMatter : segmentation hippocampique (260 IRM) basée sur un réseau 3D U-Net avec mécanismes d\'attention dans les skip connections.',
        'Validation croisée patient-wise (5-fold) avec évaluation out-of-fold. Manuscrit en préparation.',
      ],
    },
    {
      id: 'kleer',
      dateRange: 'JUIL 2025 – OCT 2025',
      title: 'Développeur Backend',
      org: 'Kleer Infini · À distance',
      bullets: [
        'Conception d\'API REST avec Django pour KleerLogistics : utilisateurs, envois, matching livreur-colis et paiements.',
        'Implémentation de l\'authentification, du tableau de bord administrateur et de la documentation API.',
      ],
    },
    {
      id: 'arimayi',
      dateRange: 'JUIL 2025 – NOV 2025',
      title: 'Développeur Frontend',
      org: 'AriMayi · À distance',
      bullets: [
        'Développement d\'interfaces responsives avec Next.js, React et TypeScript, en collaboration avec les équipes backend et design.',
        'Migration d\'applications vers Next.js et mise en place de tests avec Jest.',
      ],
    },
    {
      id: 'mada-digital',
      dateRange: 'AOÛT – OCT 2023',
      title: 'UX Designer',
      org: 'MADA-Digital, Antsiranana, Madagascar',
      bullets: [
        'Conception de systèmes UI et parcours utilisateurs en collaboration avec les équipes backend et IA, using Figma et Adobe XD.',
      ],
    },
  ],
  projects: [
    {
      id: 'ild-xr',
      title: 'ILD-XR | Quantification 3D Hiérarchique et Visualisation WebXR des Motifs de Maladies Pulmonaires Interstitielles en HRCT',
      status: 'Terminé',
      category: 'IA / Imagerie Médicale',
      description:
        'Plateforme WebXR de bout en bout pour la visualisation assistée par IA des maladies pulmonaires interstitielles à partir de scanners thoraciques (113 patients) : prétraitement DICOM, Deep Learning 3D patient-level avec évaluation disjointe, et visualisation 3D dans le navigateur.',
      image: ildXrImg,
      tags: [
        'Deep Learning 3D',
        'FastAPI',
        'WebXR',
        'DICOM',
        'Analyse CT',
      ],
      year: '2026',
      caseStudy: {
        problem:
          'Les maladies pulmonaires interstitielles sont difficiles à diagnostiquer. Les motifs pertinents sont subtils, dispersés dans tout un scanner 3D, et faciles à manquer à l\'œil nu. Les patients obtiennent souvent une réponse claire tardivement, quand le traitement est moins efficace.',
        approach:
          'ILD-XR est un pipeline complet : des volumes DICOM bruts jusqu\'à une vue 3D exploitable dans le navigateur. Le prétraitement masque, rééchantillonne et normalise les scans hétérogènes pour stabiliser l\'entraînement, puis un modèle 3D Deep Learning patient-level classifie les maladies avec une évaluation disjointe.',
        highlight:
          'Les modèles ont été re-vérifiés hors fold sur des données jamais vues lors de l\'entraînement. Le classement a changé. Un bon score de validation croisée n\'est pas équivalent à un modèle prêt à être déployé. Des métriques honnêtes passent en premier.',
      },
    },
    {
      id: 'greymatter',
      title: 'GreyMatter | Segmentation Open-Source de l\'Hippocampe',
      status: 'Terminé',
      category: 'IA / Imagerie Médicale',
      description:
        '1er prix, Hackathon I-ACE 2026. Plateforme open-source pour la segmentation reproductible des sous-régions hippocampiques sur IRM (260 cas). Met en lumière l\'écart entre la validation croisée et l\'évaluation out-of-fold.',
      image: undefined,
      tags: ['CNN 3D', 'PyTorch', 'MONAI', 'Open Source'],
      year: '2026',
      caseStudy: {
        problem:
          'L\'hippocampe est l\'une des premières structures cérébrales à rétrécir dans la maladie d\'Alzheimer et l\'épilepsie. Mesurer ses sous-régions sur IRM à la main est lent et incohérent entre experts, ce qui retarde le diagnostic précoce.',
        approach:
          'GrayMatter est une plateforme open-source (MONAI, PyTorch) pour la segmentation reproductible des sous-régions hippocampiques. Chaque modèle est évalué deux fois : une fois par validation croisée et une fois out-of-fold sur des données exclues de l\'entraînement.',
        highlight:
          'Les chiffres honnêtes sont le point. La validation croisée et l\'évaluation out-of-fold donnent des classements différents, montrant qu\'un petit écart peut changer la méthode gagnante. GrayMatter est open source pour que chacun puisse revérifier les résultats.',
      },
    },
  ],
  video: {
    title:
      'Comment les étudiants à Madagascar peuvent bien manger avec un budget limité – Zirah (Projet CS50x)',
    description:
      'Mon projet final CS50x : une application web qui aide les étudiants à bien manger avec un budget limité, combinant gestion de recettes, suivi de budget et partage communautaire.',
    embedUrl: 'https://www.youtube-nocookie.com/embed/vUjrNvufIVI',
  },
  education: [
    {
      institution: 'Université Saad Dahlab de Blida 1',
      date: 'Sep 2023 – Jun 2026',
      detail:
        'Licence en Informatique. Modules clés : Algorithmique, Intelligence Artificielle, Bases de Données, Interaction Homme-Machine. Mémoire : ILD-XR, plateforme web immersive de classification des maladies pulmonaires interstitielles.',
    },
    {
      institution: 'Institut Supérieur de Technologie d\'Antsiranana',
      date: 'Nov 2022 – Jul 2023',
      detail:
        'Réseaux et Télécommunications, année validée (S1 et S2) : signaux et systèmes, analyse de Fourier, réseaux et programmation. Poursuite du parcours en Algérie.',
    },
    {
      institution: 'Lycée Mixte Nosy Be',
      date: '2022',
      detail: 'Baccalauréat scientifique, Mention Bien.',
    },
  ],
  honors: [
    {
      id: 'boursier',
      date: '2023 – 2026',
      title: 'Boursier du gouvernement algérien pour étudiants malgaches',
      org: 'Gouvernement d\'Algérie',
      detail:
        'Bourse complète attribuée dans le cadre du programme gouvernemental algérien pour les étudiants malgaches poursuivant des études supérieures.',
    },
    {
      id: 'i-ace',
      date: 'AVR 2026',
      title: '1er Prix, Hackathon I-ACE',
      org: 'INTELLECT Scientific Club, IGEE, Boumerdès',
      detail:
        'GrayMatter : segmentation des sous-régions hippocampiques sur IRM (260 cas). Validation croisée patient-wise (5-fold) avec évaluation out-of-fold.',
    },
  ],
  community: [
    {
      id: 'sis',
      dateRange: 'JAN 2026 – PRÉSENT',
      title: 'Fondateur',
      org: 'School of Intelligent Systems, Blida',
      bullets: [
        'Création et animation d\'un groupe étudiant en Algérie et à Madagascar, dédié à l\'IA et au génie logiciel.',
        'Organisation d\'ateliers pratiques et développement de Tsiry, un système de gestion des rendez-vous hospitaliers traduit en malagasy. Code : github.com/rsebany/Tsiry',
      ],
    },
    {
      id: 'itc-ceiab',
      dateRange: '2024 – PRÉSENT',
      title: 'Membre actif',
      org: 'IT Community Blida · CEEIAB',
      bullets: [
        'Contribution aux activités IA et compétitions (IT Community) ; accueil et intégration des étudiants étrangers (CEEIAB).',
      ],
    },
  ],
  certifications: [
    { name: 'Deep Learning Specialization', issuer: 'DeepLearning.AI' },
    { name: 'AI for Medical Diagnosis', issuer: 'DeepLearning.AI' },
    { name: 'CS50x : Introduction à l\'informatique', issuer: 'Harvard University' },
    { name: 'CS50AI : Introduction à l\'IA avec Python', issuer: 'Harvard University' },
    { name: 'Aspire Leaders Program, Cohorte 2', issuer: 'Aspire Institute' },
  ],
  interests: [
    'Football',
    'Diffusion scientifique',
    'Lecture de journaux',
    'Open source',
    'Partage de connaissances',
  ],
  skillsIndex: [
    { name: 'Python', mark: '●●●' },
    { name: 'Deep Learning', mark: '●●●' },
    { name: 'Imagerie Médicale', mark: '●●●' },
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
      title: 'Programmation',
      items: ['Python', 'Java', 'C', 'JavaScript/TypeScript'],
    },
    {
      title: 'IA & Deep Learning',
      items: [
        'PyTorch',
        'MONAI',
        'Segmentation & classification 3D',
        'Transfer learning',
        'Mécanismes d\'attention',
      ],
    },
    {
      title: 'Imagerie Médicale & XR',
      items: ['CT / IRM', 'WebXR', '3D Slicer'],
    },
    {
      title: 'Génie Logiciel',
      items: ['FastAPI', 'Django', 'Next.js', 'Docker', 'Git/GitHub', 'Linux'],
    },
    {
      title: 'Langues',
      items: ['Français (Courant)', 'Anglais (B2)', 'Malgache (Natif)'],
    },
  ],
  connect: {
    tagline:
      'Ouvert à la collaboration en IA médicale, XR pour l\'imagerie clinique et outils open source. Demandes de recherche bienvenues.',
    emailLabel: 'EMAIL',
    emailHref: 'mailto:romualdosebany@gmail.com',
    phoneLabel: 'TÉLÉPHONE',
    phoneHref: 'tel:+213655871883',
    githubLabel: 'GITHUB',
    githubHref: 'https://github.com/rsebany',
  },
  footer: {
    printed: 'IMPRIMÉ',
    copyrightName: 'ROMUALDO SEBANY',
  },
  labels: {
    careerRetrospective: 'PARCOURS PROFESSIONNEL',
    timeline: 'Chronologie',
    featuredProjects: 'PROJETS RETENUS',
    caseStudy: 'Étude de cas',
    videoExhibit: 'VIDÉO',
    honorsDistinctions: 'DISTINCTIONS',
    awards: 'Récompenses',
    communityChronicle: 'VIE COMMUNAUTAIRE',
    extracurricular: 'Extra-scolaire',
    skillsIndexTitle: 'Index de compétences',
    academicNotices: 'Parcours académique',
    credentials: 'Certifications',
    stackLanguages: 'Stack & langues',
    interestsTitle: 'Loisirs',
    connectNow: 'Contact',
    backToPortfolio: 'Retour au portfolio',
    theProblem: 'Le problème',
    theApproach: 'L\'approche',
    whyItHolds: 'Pourquoi c\'est solide',
    builtWith: 'Développé avec',
    allRightsReserved: 'Tous droits réservés.',
  },
}
