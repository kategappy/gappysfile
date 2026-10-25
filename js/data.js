/*
  ДАНІ ПРОЄКТІВ — єдине місце, яке треба редагувати.

  Кожен проєкт:
    slug     — назва папки в assets/projects/<slug>/
    title    — підпис над плитками
    images   — файли з папки по порядку (1, 2, 3…)
    ratios   — пропорції плиток (висота / ширина), щоб до завантаження картинок
               сітка не стрибала. Якщо картинки нема — показується сірий плейсхолдер.
    skipAfter — скільки порожніх клітинок лишити після проєкту (як у макеті)
    services, where, description, live — для сторінки проєкту
*/
window.PROJECTS = [
  {
    slug: "finic",
    title: "finic ai",
    images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
    ratios: [0.54, 0.62, 0.79, 1.08, 1.02],
    services: "Web Design",
    where: "O0 Studio",
    description:
      "Finic is an AI-powered fraud detection platform helping teams identify organized fraud faster and build stronger defenses.",
    live: "",
  },
  {
    slug: "move-your-horse",
    title: "move your horse",
    images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
    ratios: [0.6, 1.0, 1.56, 1.0],
    skipAfter: 1,
    services: "Brand, Poster",
    where: "",
    description: "Chess & music — identity and posters for a series of events in Barcelona.",
    live: "",
  },
  {
    slug: "bart-fink",
    title: "bart & fink",
    images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
    ratios: [1.88, 1.0, 1.45, 1.0, 0.88],
    services: "Web Design",
    where: "O0 Studio",
    description: "",
    live: "",
  },
  {
    slug: "payman",
    title: "payman",
    images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
    ratios: [0.63, 0.84, 0.63, 1.08, 0.62],
    services: "Web Design",
    where: "O0 Studio",
    description: "",
    live: "",
  },
  {
    slug: "defined",
    title: "defined",
    images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
    ratios: [1.24, 0.56, 1.15, 1.24, 1.07],
    services: "Web Design, Brand",
    where: "O0 Studio",
    description: "",
    live: "",
  },
  {
    slug: "open-note",
    title: "open note",
    images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"],
    ratios: [0.59, 0.95, 0.62, 1.08, 0.59, 1.08, 0.59],
    services: "Web Design, Illustration",
    where: "O0 Studio",
    description: "",
    live: "",
  },
  {
    slug: "photon-spear",
    title: "photon spear",
    images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
    ratios: [0.59, 0.87, 0.54, 0.98, 0.54],
    services: "Web Design",
    where: "O0 Studio",
    description: "",
    live: "",
  },
  {
    slug: "crusoe",
    title: "Crusoe",
    images: ["1.jpg", "2.jpg"],
    ratios: [0.56, 0.67],
    services: "Web Design",
    where: "O0 Studio",
    description: "",
    live: "",
  },
];
