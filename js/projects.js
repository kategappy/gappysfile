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
    slug: "payman",
    title: "payman",
    services: "Web Design, Brand",
    where: "O0",
    live: "No longer live",
    description: "",
    items: [
      { file: "01.webp", h: 141 },
      { file: "02.mp4", h: 243 },
      { file: "03.webp", h: 190 },
      { file: "04.webp", h: 139 },
      { file: "05.webp", h: 141 },
    ],
  },
  {
    slug: "move-your-horse",
    title: "move your horse",
    services: "Naming, Brand, Organisation, Management",
    where: "Personal project",
    live: "https://www.instagram.com/move.your.horse/",
    description: "",
    items: [
      { file: "01.webp", h: 136 },
      { file: "02.webp", h: 224 },
      { file: "03.webp", h: 224 },
      { file: "04.webp", h: 350 },
    ],
  },
  {
    slug: "bart-and-fink",
    title: "bart & fink",
    services: "Web Design",
    where: "O0",
    live: "https://www.baf.agency/",
    description: "",
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
    description: "",
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
    description: "",
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
    description: "",
    items: [
      { file: "01.mp4", h: 128 },
      { file: "02.mp4", h: 282 },
      { file: "03.webp", h: 258 },
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
    description: "",
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
    description: "",
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
    description: "This shots are memory for my own path, for myself. We are all starting from something",
    items: [
      { file: "01.webp", h: 169 },
    ],
  },
];
