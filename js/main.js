/* Gappy's File — вся поведінка сайту */
(function () {
  const PROJECTS = window.PROJECTS || [];
  const page = document.body.dataset.page;

  /* ---------- контакти (заповни, коли буде готово) ---------- */
  const LINKS = {
    contact: "mailto:katyagaa55@gmail.com",
    email: "mailto:katyagaa55@gmail.com",
    linkedin: "https://www.linkedin.com/in/kateryna-hapiienko-399292173/",
    arena: "https://www.are.na/kate-gappy",
    instagram: "https://www.instagram.com/katya__gappy/",
  };

  /* ---------- шапка, лінії сітки, футер ---------- */
  function chrome() {
    const lines = document.createElement("div");
    lines.className = "grid-lines";
    lines.innerHTML = "<span></span>".repeat(6);
    document.body.prepend(lines);

    const header = document.createElement("header");
    header.className = "row header";
    header.innerHTML = `
      <a class="brand" href="index.html">Gappy’s File</a>
      <a class="nav-projects" href="index.html" ${page === "home" || page === "project" ? 'aria-current="page"' : ""}>Projects</a>
      <a class="nav-about" href="about.html" ${page === "about" ? 'aria-current="page"' : ""}>About</a>
      <a class="nav-contact" href="contact.html" ${page === "contact" ? 'aria-current="page"' : ""}>Contact</a>`;
    document.body.prepend(header);
    lines.after(header);

    const clockBox = document.createElement("div");
    clockBox.className = "clock";
    clockBox.setAttribute("aria-label", "Local time in Barcelona");
    clockBox.innerHTML = "Barcelona, <span>--:--:--</span>";
    header.after(clockBox);

    const footer = document.createElement("footer");
    footer.className = "row footer";
    footer.innerHTML = `<p>© 1999-Now. Gappy’s File. All rights reserved</p>`;
    document.body.append(footer);

    const clock = clockBox.querySelector("span");
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Madrid", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false,
    });
    const tick = () => (clock.textContent = fmt.format(new Date()));
    tick();
    setInterval(tick, 1000);
  }

  /* картинка / відео або сірий плейсхолдер, якщо файла ще нема */
  const VIDEO = /\.(mp4|webm)$/i;
  function media(src, h, alt, autoplay) {
    const box = document.createElement("div");
    box.className = "media";
    box.style.aspectRatio = `225 / ${h || 170}`;
    let el;
    if (VIDEO.test(src)) {
      el = document.createElement("video");
      Object.assign(el, { autoplay: true, muted: true, loop: true, playsInline: true, preload: "auto" });
      el.setAttribute("muted", "");
      el.setAttribute("playsinline", "");
    } else {
      el = new Image();
      el.alt = alt || "";
      el.loading = "lazy";
      el.decoding = "async";
    }
    // як тільки файл завантажився — плитка бере його справжні пропорції,
    // тож картинка/відео показується повністю, без обрізання
    const fit = (w, h) => { if (w && h) box.style.aspectRatio = `${w} / ${h}`; };
    el.addEventListener("load", () => fit(el.naturalWidth, el.naturalHeight));
    el.addEventListener("loadedmetadata", () => fit(el.videoWidth, el.videoHeight));
    el.addEventListener("error", () => {
      // HD-версії відео нема — беремо звичайну
      if (el.dataset.fallback) { const f = el.dataset.fallback; delete el.dataset.fallback; el.src = f; return; }
      el.remove();
      box.insertAdjacentHTML("beforeend", `<span class="missing">${src.split("/").slice(-2).join("/")}</span>`);
    });
    el.src = src;
    box.append(el);
    return box;
  }

  /* ---------- поява плиток при скролі ----------
     Коли плитка заходить в екран, вона отримує клас is-in (анімація в CSS).
     Плитки, що з'являються разом, їдуть «хвилькою» зліва направо. */
  function revealOnScroll(els) {
    els.forEach((el) => el.classList.add("reveal"));
    if (!("IntersectionObserver" in window)) { els.forEach((el) => el.classList.add("is-in")); return; }
    const io = new IntersectionObserver((entries) => {
      entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top || a.boundingClientRect.left - b.boundingClientRect.left)
        .forEach((e, n) => {
          e.target.style.setProperty("--delay", `${Math.min(n, 6) * 0.04}s`);
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    els.forEach((el) => io.observe(el));

    // повернулась на сторінку кнопкою «назад» — браузер відновлює її з кешу,
    // тому скидаємо стан і програємо анімацію знову
    window.addEventListener("pageshow", (e) => {
      if (!e.persisted) return;
      els.forEach((el) => { el.classList.remove("is-in"); io.observe(el); });
    });
  }

  const playVideos = (els) => els.forEach((el) => el.querySelectorAll("video").forEach((v) => v.play().catch(() => {})));
  const pauseVideos = (els) => els.forEach((el) => el.querySelectorAll("video").forEach((v) => v.pause()));

  /* ---------- ГОЛОВНА ---------- */
  function home() {
    const grid = document.querySelector(".works");
    const tilesBySlug = {};

    PROJECTS.forEach((p) => {
      tilesBySlug[p.slug] = [];
      p.items.forEach(({ file, h }, i) => {
        const a = document.createElement("a");
        a.className = "tile";
        a.href = `project.html?p=${p.slug}`;
        a.dataset.slug = p.slug;
        if (i === 0) a.insertAdjacentHTML("beforeend", `<span class="label">${p.title}</span>`);
        a.append(media(`assets/projects/${p.slug}/${file}`, h, `${p.title} — ${i + 1}`));
        grid.append(a);
        tilesBySlug[p.slug].push(a);
      });
      for (let s = 0; s < (p.skipAfter || 0); s++) {
        const gap = document.createElement("div");
        gap.className = "skip";
        grid.append(gap);
      }
    });

    revealOnScroll([...grid.querySelectorAll(".tile")]);

    /* Ховер: наводиш на одну картинку — виділяється весь проєкт.
       Рамка малюється навколо кожного рядка, який займає проєкт. */
    const tag = document.querySelector(".cursor-tag");
    let current = null;
    let boxes = [];

    function clearSelection() {
      boxes.forEach((b) => b.remove());
      boxes = [];
      playVideos([...grid.querySelectorAll(".tile.is-active")]); // відводиш курсор — відео знову грають
      grid.classList.remove("is-hovering");
      grid.querySelectorAll(".tile.is-active").forEach((t) => t.classList.remove("is-active"));
    }

    function drawSelection(slug) {
      clearSelection();
      const tiles = tilesBySlug[slug];
      if (!tiles) return;
      grid.classList.add("is-hovering");
      tiles.forEach((t) => t.classList.add("is-active"));
      pauseVideos(tiles); // ховер на проєкт — його відео завмирають

      const g = grid.getBoundingClientRect();
      const rows = new Map();
      tiles.forEach((t) => {
        const r = t.getBoundingClientRect();
        const key = Math.round(r.top);
        if (!rows.has(key)) rows.set(key, []);
        rows.get(key).push({ r, t });
      });

      const pad = 0;
      rows.forEach((items) => {
        let left = Infinity, right = -Infinity, top = Infinity, bottom = -Infinity;
        items.forEach(({ r, t }) => {
          left = Math.min(left, r.left); right = Math.max(right, r.right);
          bottom = Math.max(bottom, r.bottom);
          const label = t.querySelector(".label");
          top = Math.min(top, label ? label.getBoundingClientRect().top : r.top);
        });
        const box = document.createElement("div");
        box.className = "selection";
        box.innerHTML = "<i></i><i></i><i></i><i></i>";
        Object.assign(box.style, {
          left: `${left - g.left - pad}px`,
          top: `${top - g.top - pad}px`,
          width: `${right - left + pad * 2}px`,
          height: `${bottom - top + pad * 2}px`,
        });
        grid.append(box);
        boxes.push(box);
      });
    }

    // курсор у межах рамки (разом з 10px проміжками між картинками)?
    function insideSelection(e) {
      return boxes.some((b) => {
        const r = b.getBoundingClientRect();
        return e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
      });
    }
    function deactivate() { current = null; clearSelection(); tag.classList.remove("on"); }

    grid.addEventListener("pointermove", (e) => {
      if (e.pointerType !== "mouse") return;
      const tile = e.target.closest(".tile");
      if (tile) {
        if (tile.dataset.slug !== current) { current = tile.dataset.slug; drawSelection(current); }
        tag.classList.add("on");
      } else if (current && !insideSelection(e)) deactivate();
    });
    grid.addEventListener("pointerleave", deactivate);
    // клік у проміжку між картинками теж відкриває проєкт
    grid.addEventListener("click", (e) => {
      if (!e.target.closest(".tile") && current) location.href = `project.html?p=${current}`;
    });
    window.addEventListener("pointermove", (e) => {
      tag.style.left = e.clientX + "px";
      tag.style.top = e.clientY + "px";
    });
    window.addEventListener("resize", () => { if (current) drawSelection(current); });
  }

  /* студія O0 — завжди посилання на її сайт */
  const STUDIOS = { O0: "https://www.ozero.design/" };
  function whereLink(where) {
    const url = STUDIOS[where.trim()];
    return url ? `<a class="studio-link" href="${url}" target="_blank" rel="noopener">${where}</a>` : where;
  }

  /* кнопка сайту: посилання → «Live website», інший текст → неклікабельна плашка */
  function liveButton(live) {
    if (!live) return "";
    if (/^https?:\/\//.test(live)) {
      const label = /instagram\.com/.test(live) ? "Instagram" : "Live website";
      return `<a class="btn" href="${live}" target="_blank" rel="noopener">${label}</a>`;
    }
    return `<span class="btn is-off">${live}</span>`;
  }

  /* ---------- СТОРІНКА ПРОЄКТУ ---------- */
  function project() {
    const slug = new URLSearchParams(location.search).get("p");
    const i = Math.max(0, PROJECTS.findIndex((p) => p.slug === slug));
    const p = PROJECTS[i];
    if (!p) return;
    document.title = `${p.title} — Gappy’s File`;

    const info = document.querySelector(".info");
    info.innerHTML = `
      <dl><dt>Project</dt><dd>${p.title}</dd></dl>
      ${p.services ? `<dl><dt>Services</dt><dd>${p.services}</dd></dl>` : ""}
      ${p.where ? `<dl><dt>Where</dt><dd>${whereLink(p.where)}</dd></dl>` : ""}
      ${p.description ? `<p class="desc">${p.description}</p>` : ""}
      ${liveButton(p.live)}`;

    const gallery = document.querySelector(".gallery");
    // кожна картинка в обгортці: анімацію запускає обгортка, а маска — на самій картинці
    p.items.forEach(({ file, h }, n) => {
      const wrap = document.createElement("div");
      wrap.className = "shot";
      const m = media(`assets/projects/${p.slug}/${file}`, h, `${p.title} — ${n + 1}`, true);
      // на сторінці проєкту відео у високій якості (NN.hd.mp4), якщо є
      const v = m.querySelector("video");
      if (v) { v.dataset.fallback = v.src; v.src = v.src.replace(/\.mp4$/, ".hd.mp4"); }
      wrap.append(m);
      gallery.append(wrap);
    });


    const prev = PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length];
    const next = PROJECTS[(i + 1) % PROJECTS.length];
    const navHTML = `
      <a href="project.html?p=${prev.slug}" title="${prev.title}">← prev</a>
      <a href="index.html">all projects</a>
      <a href="project.html?p=${next.slug}" title="${next.title}">next →</a>`;
    // на десктопі — внизу лівої колонки (фіксовано), на телефоні — під картинками
    info.insertAdjacentHTML("beforeend", `<nav class="pnav">${navHTML}</nav>`);
    document.querySelector(".project-nav").innerHTML = navHTML;
  }

  /* ---------- ABOUT ---------- */
  function about() {
    document.querySelectorAll("[data-link]").forEach((a) => {
      const href = LINKS[a.dataset.link];
      if (href) a.href = href;
    });
    eyes();
  }

  /* ---------- очі стежать за курсором ----------
     Обличчя вставляється в сторінку як SVG, щоб можна було рухати зіниці.
     Зіниця зсувається в бік курсора, але не далі за MAX (у одиницях малюнка). */
  async function eyes() {
    const img = document.querySelector("img.face");
    if (!img) return;
    let svg;
    try {
      const res = await fetch(img.getAttribute("src"));
      const box = document.createElement("div");
      box.innerHTML = await res.text();
      svg = box.querySelector("svg");
    } catch (e) { return; } // не вийшло — лишається звичайна картинка
    if (!svg) return;
    svg.setAttribute("class", img.className);
    img.replaceWith(svg);

    const pupils = [...svg.querySelectorAll(".pupil")].map((g) => ({
      g, cx: +g.dataset.cx, cy: +g.dataset.cy, x: 0, y: 0, tx: 0, ty: 0,
    }));
    if (!pupils.length) return;
    const MAX_X = 5, MAX_Y = 3;

    function aim(clientX, clientY) {
      const m = svg.getScreenCTM();
      if (!m) return;
      const scale = m.a;
      pupils.forEach((p) => {
        const ex = m.e + p.cx * scale, ey = m.f + p.cy * scale; // центр ока на екрані
        const dx = clientX - ex, dy = clientY - ey;
        const dist = Math.hypot(dx, dy) || 1;
        const k = Math.min(1, dist / 300); // далеко — зіниця в краю ока
        p.tx = (dx / dist) * MAX_X * k;
        p.ty = (dy / dist) * MAX_Y * k;
      });
    }

    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let last = 0, mx = 0, my = 0;
    if (matchMedia("(hover: hover)").matches) {
      // погляд оновлюється ривками (не частіше ніж раз на 140 мс), як справжні очі
      window.addEventListener("pointermove", (e) => {
        mx = e.clientX; my = e.clientY;
        const now = performance.now();
        if (now - last > 140) { last = now; aim(mx, my); }
      });
      setInterval(() => aim(mx, my), 160); // наздоганяємо, коли мишка зупинилась
    } else if (!reduce) {
      // на телефоні курсора нема — очі різко переводять погляд: ліво, право, вгору, вниз
      const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1], [0, 0], [-1, -1], [1, -1], [-1, 1], [1, 1]];
      let prev = 4;
      const look = () => {
        let i; do { i = Math.floor(Math.random() * dirs.length); } while (i === prev);
        prev = i;
        pupils.forEach((p) => { p.tx = dirs[i][0] * MAX_X; p.ty = dirs[i][1] * MAX_Y; });
        setTimeout(look, 600 + Math.random() * 1200);
      };
      look();
    }

    (function tick() {
      pupils.forEach((p) => {
        p.x += (p.tx - p.x) * (reduce ? 1 : 0.45); // 0.45 — швидкий, чіткий ривок
        p.y += (p.ty - p.y) * (reduce ? 1 : 0.45);
        p.g.setAttribute("transform", `translate(${p.x.toFixed(2)} ${p.y.toFixed(2)})`);
      });
      requestAnimationFrame(tick);
    })();
  }

  chrome();
  if (page === "home") home();
  if (page === "project") project();
  if (page === "about" || page === "contact") about();
})();
