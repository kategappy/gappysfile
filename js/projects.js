/* =========================================================
   ДАНІ ПРОЄКТІВ — єдиний файл, який ти редагуєш,
   коли додаєш / прибираєш / міняєш порядок робіт.

   - Проєкти йдуть у тому порядку, як записані тут.
   - Картинки «перетікають» по 6 колонках: якщо проєкт не влазить
     у рядок, решта переноситься вниз сама.
   - slug  — назва папки з файлами: assets/projects/<slug>/
   - title — підпис над першою картинкою
   - items — файли по ТВОЇЙ нумерації (01, 02, 03…)
       file — назва файлу (.webp .jpg .png .gif .mp4 .webm)
       h    — висота плитки при ширині 225 (пропорція файлу)
   - skipAfter — скільки порожніх клітинок лишити після проєкту
   - services / where / description / live — для сторінки проєкту
       live: посилання (https://…) → клікабельна кнопка «Live website»;
             будь-який інший текст → сіра неклікабельна плашка з цим текстом
   ========================================================= */

window.PROJECTS = [
  {
    slug: "move-your-horse",
    title: "move your horse",
    services: "Naming, Brand, Organisation, Management",
    where: "Personal project",
    live: "https://www.instagram.com/move.your.horse/",
    description: "My own initiative: a chess club with vinyl music and drinks, every Wednesday. A passion project I came up with, branded, organised and hosted myself.",
    items: [
      { file: "01.webp", h: 136 },
      { file: "02.mp4", h: 112 },
      { file: "03.webp", h: 350 },
    ],
  },
  {
    slug: "payman",
    title: "payman",
    services: "Web Design, Brand",
    where: "O0",
    live: "No longer live",
    description: "Visual direction and website for Payman, a platform that helps banks strengthen security and reduce fraud. The client came to us with a logo that looked like a seashell, and we built a whole underwater world around it. Seashells were once used as money, and the deep sea has its own dangers too: sharks stand in for fraud, lurking where you least expect them.",
    items: [
      { file: "01.webp", h: 141 },
      { file: "02.mp4", h: 243 },
      { file: "03.webp", h: 190 },
      { file: "04.webp", h: 139 },
      { file: "05.webp", h: 141 },
    ],
  },
  {
    slug: "bart-and-fink",
    title: "bart & fink",
    services: "Web Design",
    where: "O0",
    live: "https://www.baf.agency/",
    description: "Bart & Fink, a video production agency, asked for something corporate, visual and interesting. The idea was to work with desktop folders, the most familiar interface there is, and reimagine them as a way to explore the agency.",
    items: [
      { file: "01.webp", h: 424 },
      { file: "02.mp4", h: 225 },
      { file: "03.webp", h: 327 },
      { file: "04.mp4", h: 205 },
      { file: "05.webp", h: 197 },
    ],
  },
  {
    slug: "finic",
    title: "finic ai",
    services: "Web Design, Brand",
    where: "O0",
    live: "No longer live",
    description: "Visual system and website for Finic, an AI platform that helps banks fight fraud. The system is built around a narrative: Finic the fox and the enemies it hunts down in a digital world.",
    items: [
      { file: "01.mp4", h: 120 },
      { file: "02.mp4", h: 119 },
      { file: "03.mp4", h: 110 },
      { file: "04.webp", h: 177 },
      { file: "05.mp4", h: 115 },
    ],
  },
  {
    slug: "tomin",
    title: "tomin",
    services: "Web Design",
    where: "O0",
    live: "https://www.tomin.film/",
    description: "Website for a film production studio: a simple, stylish gallery of their projects.",
    items: [
      { file: "01.mp4", h: 128 },
      { file: "02.webp", h: 123 },
    ],
  },
  {
    slug: "defined",
    title: "defined",
    services: "Web Design",
    where: "O0",
    live: "https://definedvc.com/",
    description: "Visual identity and website for Defined, a venture fund investing in early-stage companies. A style that supports the idea behind the name while staying simple and clear.",
    items: [
      { file: "01.mp4", h: 128 },
      { file: "02.webp", h: 258 },
      { file: "03.mp4", h: 133 },
      { file: "04.mp4", h: 243 },
      { file: "05.mp4", h: 281 },
    ],
  },
  {
    slug: "open-note",
    title: "open note",
    services: "Web Design, Illustration",
    where: "O0",
    live: "https://www.opennote.com/",
    description: "Website and illustrations for Open Note, an AI platform that helps students learn. The goal was to keep it from feeling childish: engaging for students who work through a lot of complex material, with small funny easter eggs hidden in the design.",
    items: [
      { file: "01.mp4", h: 129 },
      { file: "02.mp4", h: 125 },
      { file: "03.mp4", h: 123 },
      { file: "04.mp4", h: 125 },
      { file: "05.webp", h: 132 },
    ],
  },
  {
    slug: "free-time",
    title: "free time",
    services: "",
    where: "Personal projects",
    live: "",
    description: "Still shots and images I made along the way.",
    items: [
      { file: "01.webp", h: 169 },
      { file: "02.webp", h: 169 },
    ],
  },
  {
    slug: "first-project",
    title: "first project",
    services: "",
    where: "Freelance",
    live: "",
    description: "We all start somewhere. I'm keeping this here for myself, as a reminder of my very first project.",
    items: [
      { file: "01.webp", h: 169 },
    ],
  },
];
