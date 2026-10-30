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
        'Entraînement d\'un modèle 3D de segmentation de trois motifs pulmonaires : verre dépoli, réticulation et consolidation.',
        'Score Dice macro de 0,84 et sensibilité supérieure à 90 % pour chaque motif.',
        'Conception d\'une plateforme d\'aide à la décision intégrant une visualisation 3D/WebXR.',
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
        'Conception de systèmes UI et parcours utilisateurs en collaboration avec les équipes backend et IA, avec Figma et Adobe XD.',
      ],
    },
  ],
  projects: [
    {
      id: 'ild-texnet',
      title: 'ILD-TexNet | Évaluation patient-disjoint de réseaux de textures compacts pour la classification des ILD',
      status: 'En cours',
      category: 'IA / Imagerie Médicale',
      description:
        'Projet de recherche sur des réseaux de textures multi-échelles compacts pour la classification de patchs HRCT, sur la base MedGIFT. Protocole d\'évaluation patient-disjoint avec contrôle explicite des fuites de données ; manuscrit en cours de rédaction.',
      image: undefined,
      tags: [
        'Analyse de textures',
        'PyTorch',
        'HRCT',
        'Évaluation patient-disjoint',
        'MedGIFT',
      ],
      year: '2026',
      caseStudy: {
        problem:
          'La classification des maladies pulmonaires interstitielles sur HRCT produit facilement des scores optimistes lorsque des patchs d\'un même patient apparaissent à la fois dans les ensembles d\'entraînement et de test. Les modèles compacts sont attractifs pour un déploiement clinique, mais leur évaluation doit être fiable.',
        approach:
          'Mise en place d\'un protocole d\'évaluation patient-disjoint rigoureux avec contrôle explicite des fuites de données sur la base MedGIFT, puis conception et implémentation d\'un réseau compact de textures multi-échelles pour la classification de patchs HRCT.',
        highlight:
          'Le projet associe une architecture compacte à une démarche d\'évaluation rigoureuse. Le manuscrit en préparation s\'intitule « Patient-Disjoint Evaluation of Compact Texture Networks for ILD Classification ». L\'objectif est un résultat qui tient hors du split d\'entraînement, pas seulement un bon score de classement.',
      },
    },
    {
      id: 'ild-xr',
      title: 'ILD-XR | Quantification 3D Hiérarchique et Visualisation WebXR des Motifs de Maladies Pulmonaires Interstitielles en HRCT',
      status: 'Terminé',
      category: 'IA / Imagerie Médicale',
      description:
        'Plateforme WebXR de bout en bout pour la visualisation assistée par IA des maladies pulmonaires interstitielles à partir de scanners thoraciques (113 patients) : prétraitement DICOM, transfert d\'apprentissage avec validation croisée stratifiée à 5 plis et séparation des patients (F1 0,839), et exploration interactive 2D/3D/WebXR.',
      image: ildXrImg,
      tags: [
        'Deep Learning 3D',
        'Transfert d\'apprentissage',
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
          'ILD-XR est un pipeline complet : des volumes DICOM bruts jusqu\'à une vue 3D exploitable dans le navigateur. Le prétraitement masque, rééchantillonne et normalise les scans hétérogènes pour stabiliser l\'entraînement, puis le transfert d\'apprentissage avec validation croisée stratifiée à 5 plis et séparation des patients classifie la maladie, et des outils interactifs 2D, 3D et WebXR exposent les lésions.',
        highlight:
          'Les modèles ont été re-vérifiés hors fold sur des données jamais vues lors de l\'entraînement. Le classement a changé. Un bon score de validation croisée n\'est pas équivalent à un modèle prêt à être déployé. Des métriques honnêtes passent en premier.',
      },
    },
    {
      id: 'greymatter',
      title: 'GrayMatter | Mécanismes d\'Attention pour la Segmentation de l\'Hippocampe',
      status: 'Terminé',
      category: 'IA / Imagerie Médicale',
      description:
        'Article de recherche et plateforme open-source comparant trois mécanismes d\'attention pour la segmentation des sous-régions hippocampiques sur 260 volumes IRM de la tâche 4 du Medical Segmentation Decathlon. Propose un protocole d\'évaluation apparié montrant que les scores de sélection peuvent induire en erreur.',
      image: undefined,
      tags: ['U-Net 3D', 'PyTorch', 'MONAI', 'Attention Coordonnée', 'CISA', 'Open Source'],
      year: '2026',
      caseStudy: {
        problem:
          'Les sous-régions hippocampiques soutiennent le diagnostic dans l\'épilepsie, la déficience cognitive légère et la maladie d\'Alzheimer. Les mécanismes d\'attention sont largement utilisés mais les comparaisons varient généralement les partitions de données, le prétraitement et les métriques, rendant les résultats non fiables.',
        approach:
          'Protocole d\'évaluation apparié qui fixe toutes les variables de confusion et compare trois conceptions de connexions résiduelles : U-Net 3D simple, attention coordonnée et attention inter-tranche coordonnée (CISA). Tous entraînés sur des partitions patient identiques et évalués sur des prédictions croisées agrégées avec cinq métriques complémentaires (DSC, HD95, ASD, IoU, RVE) et des tests statistiques appariés.',
        highlight:
          'La CISA obtient le meilleur score de sélection mais ne conserve pas cet avantage sous évaluation agrégée ; l\'attention coordonnée se classe plus régulièrement sur les cinq métriques. Cela montre que les scores de sélection seuls peuvent induire en erreur, et que l\'évaluation multi-métrique agrégée est plus fiable.',
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
      date: 'Sep 2026 – Présent',
      detail:
        'Master 1 en Intelligence artificielle. Cours de machine learning et vision par ordinateur, avec un axe de recherche en imagerie médicale et deep learning 3D.',
    },
    {
      institution: 'Université Saad Dahlab de Blida 1',
      date: 'Sep 2023 – Juin 2026',
      detail:
        'Licence en Informatique, spécialité Systèmes informatiques. Rang : 5e sur 104 étudiants ; moyenne passée de 11,23/20 (S1) à 15,18/20 (S6) ; moyenne générale 12,53/20. Projet de fin de cycle au CDTA : ILD-XR, note 17/20. Cours pertinents : algorithmique et structures de données, méthodes numériques, intelligence artificielle.',
    },
    {
      institution: 'Institut Supérieur de Technologie d\'Antsiranana',
      date: 'Nov 2022 – Juil 2023',
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
      date: '2023 – PRÉSENT',
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
        'GrayMatter : U-Net 3D avec attention pour la segmentation de l\'hippocampe sur IRM. Validation croisée patient-wise (5-fold) sur 260 cas annotés de la tâche 4 du Medical Segmentation Decathlon.',
    },
  ],
  community: [
    {
      id: 'aema',
      dateRange: 'SEP 2026 – PRÉSENT',
      title: 'Responsable de communication',
      org: 'Association des Étudiants Malagasy en Algérie (AEMA)',
      bullets: [
        'Gestion des canaux de communication et diffusion des informations.',
        'Coordination du recensement des membres par ville.',
        'Élaboration d\'un guide pratique pour les nouveaux étudiants.',
      ],
    },
    {
      id: 'sis',
      dateRange: 'JAN 2026 – PRÉSENT',
      title: 'Fondateur',
      org: 'School of Intelligent Systems, Blida',
      bullets: [
        'Création et animation d\'un groupe d\'étude en IA et génie logiciel réunissant des étudiants d\'Algérie et de Madagascar.',
        'Réalisation de Tsiry, un prototype fonctionnel de gestion des rendez-vous hospitaliers en malagasy. Code : github.com/rsebany/Tsiry',
      ],
    },
    {
      id: 'itc-ceiab',
      dateRange: 'SEP 2024 – PRÉSENT',
      title: 'Membre actif',
      org: 'IT Community Blida · CEEIAB',
      bullets: [
        'Participation aux activités d\'IA et aux compétitions internes du club.',
        'Développement d\'une plateforme de gestion des membres et de l\'équipe.',
        'Accueil et intégration des étudiants étrangers (CEEIAB).',
      ],
    },
  ],
  certifications: [
    {
      name: 'Spécialisation Deep Learning (5 cours)',
      issuer: 'DeepLearning.AI · 2026',
    },
    {
      name: 'IA pour le diagnostic médical',
      issuer: 'DeepLearning.AI · 2026',
    },
    {
      name: 'Aspire Leaders Program, Cohorte 2',
      issuer: 'Aspire Institute · Juillet 2026',
    },
    {
      name: 'CS50x : Introduction à l\'informatique',
      issuer: 'Harvard University · 2025',
    },
    {
      name: 'CS50AI : Introduction à l\'IA avec Python',
      issuer: 'Harvard University · 2025',
    },
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
    { name: 'SimpleITK', mark: '●' },
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
        'SimpleITK',
        'Transfer learning',
        'Validation croisée patient-wise',
      ],
    },
    {
      title: 'Imagerie Médicale & XR',
      items: ['HRCT & IRM', 'DICOM & NIfTI', 'WebXR', 'Three.js', '3D Slicer'],
    },
    {
      title: 'Génie Logiciel',
      items: ['FastAPI', 'Django', 'Next.js', 'Docker', 'Git/GitHub', 'Linux'],
    },
    {
      title: 'Compétences comportementales',
      items: ['Adaptabilité', 'Leadership', 'Travail en équipe', 'Autonomie', 'Gestion du temps'],
    },
    {
      title: 'Langues',
      items: ['Malgache (natif)', 'Français (DELF B2, 2023)', 'Anglais (B2, CEIL)'],
    },
  ],
  references: [
    {
      name: 'Dr Samir BENBELKACEM',
      role: 'Maître de recherche',
      org: 'CDTA',
      email: 'sbenbelkacem@cdta.dz',
      relation: 'Encadrant de stage',
    },
    {
      name: 'Dr Hadjer YKHLEF',
      role: 'Maîtresse de conférences',
      org: 'Université Saad Dahlab Blida 1',
      email: 'ykhlef_hadjer@univ-blida.dz',
      relation: 'Directrice de PFE',
    },
    {
      name: 'Yasser HAMIDULLAH',
      role: 'Chercheur',
      org: 'DFKI, Sarrebruck',
      email: 'yasser.hamidullah@dfki.de',
      relation: 'Mentor',
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
    referencesTitle: 'Références',
    connectNow: 'Contact',
    backToPortfolio: 'Retour au portfolio',
    theProblem: 'Le problème',
    theApproach: 'L\'approche',
    whyItHolds: 'Pourquoi c\'est solide',
    builtWith: 'Développé avec',
    allRightsReserved: 'Tous droits réservés.',
  },
}
