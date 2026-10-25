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
   ========================================================= */

window.PROJECTS = [
  {
    slug: "finic",
    title: "finic ai",
    services: "Web Design",
    where: "O0 Studio",
    description:
      "Finic is an AI-powered fraud detection platform helping teams identify organized fraud faster and build stronger defenses.",
    live: "",
    items: [
      { file: "01.webp", h: 121 },
      { file: "02.webp", h: 139 },
      { file: "03.webp", h: 178 },
      { file: "04.webp", h: 242 },
      { file: "05.webp", h: 229 },
    ],
  },
  {
    slug: "move-your-horse",
    title: "move your horse",
    services: "Brand, Posters",
    where: "",
    description: "",
    live: "",
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
    where: "O0 Studio",
    description: "",
    live: "",
    items: [
      { file: "01.webp", h: 424 },
      { file: "02.mp4", h: 225 },
      { file: "03.webp", h: 327 },
      { file: "04.mp4", h: 205 },
      { file: "05.webp", h: 197 },
    ],
  },
  {
    slug: "payman",
    title: "payman",
    services: "Web Design",
    where: "O0 Studio",
    description: "",
    live: "",
    items: [
      { file: "01.webp", h: 141 },
      { file: "02.mp4", h: 242 },
      { file: "03.webp", h: 190 },
      { file: "04.webp", h: 139 },
      { file: "05.webp", h: 141 },
    ],
  },
  {
    slug: "defined",
    title: "defined",
    services: "Web Design, Brand",
    where: "O0 Studio",
    description: "",
    live: "",
    items: [
      { file: "01.webp", h: 280 },
      { file: "02.webp", h: 126 },
      { file: "03.webp", h: 258 },
      { file: "04.webp", h: 280 },
      { file: "05.webp", h: 241 },
    ],
  },
  {
    slug: "open-note",
    title: "open note",
    services: "Web Design, Illustration",
    where: "O0 Studio",
    description: "",
    live: "",
    items: [
      { file: "01.webp", h: 132 },
      { file: "02.webp", h: 213 },
      { file: "03.webp", h: 139 },
      { file: "04.webp", h: 243 },
      { file: "05.webp", h: 132 },
      { file: "06.webp", h: 243 },
      { file: "07.webp", h: 132 },
    ],
  },
  {
    slug: "photon-spear",
    title: "photon spear",
    services: "Web Design",
    where: "O0 Studio",
    description: "",
    live: "",
    items: [
      { file: "01.webp", h: 132 },
      { file: "02.webp", h: 195 },
      { file: "03.webp", h: 121 },
      { file: "04.webp", h: 221 },
      { file: "05.webp", h: 121 },
    ],
  },
  {
    slug: "crusoe",
    title: "Crusoe",
    services: "Web Design",
    where: "O0 Studio",
    description: "",
    live: "",
    items: [
      { file: "01.webp", h: 127 },
      { file: "02.webp", h: 150 },
    ],
  },
];
