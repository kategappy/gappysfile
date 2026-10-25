/* Gappy's File — вся поведінка сайту */
(function () {
  const PROJECTS = window.PROJECTS || [];
  const page = document.body.dataset.page;

  /* ---------- контакти (заповни, коли буде готово) ---------- */
  const LINKS = {
    contact: "mailto:",   // наприклад "mailto:hello@gappy.com"
    email: "mailto:",
    linkedin: "#",
    arena: "#",
    instagram: "#",
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
      <a class="nav-projects" href="index.html" ${page !== "about" ? 'aria-current="page"' : ""}>Projects</a>
      <a class="nav-about" href="about.html" ${page === "about" ? 'aria-current="page"' : ""}>About</a>
      <a class="nav-contact" href="${LINKS.contact}">Contact</a>
      <div class="clock" aria-label="Local time in Barcelona">Barcelona, <span>--:--:--</span></div>`;
    document.body.prepend(header);
    lines.after(header);

    const footer = document.createElement("footer");
    footer.className = "row footer";
    footer.innerHTML = `<p>© 1999-Now. Gappy’s File. All rights reserved</p>`;
    document.body.append(footer);

    const clock = header.querySelector(".clock span");
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Madrid", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false,
    });
    const tick = () => (clock.textContent = fmt.format(new Date()));
    tick();
    setInterval(tick, 1000);
  }

  /* картинка або сірий плейсхолдер, якщо файла ще нема */
  function media(src, ratio, alt) {
    const box = document.createElement("div");
    box.className = "media";
    box.style.aspectRatio = `1 / ${ratio || 0.75}`;
    const img = new Image();
    img.alt = alt || "";
    img.loading = "lazy";
    img.decoding = "async";
    img.onload = () => { box.style.aspectRatio = `${img.naturalWidth} / ${img.naturalHeight}`; };
    img.onerror = () => {
      img.remove();
      box.insertAdjacentHTML("beforeend", `<span class="missing">${src.split("/").slice(-2).join("/")}</span>`);
    };
    img.src = src;
    box.append(img);
    return box;
  }

  /* ---------- ГОЛОВНА ---------- */
  function home() {
    const grid = document.querySelector(".works");
    const tilesBySlug = {};

    PROJECTS.forEach((p) => {
      tilesBySlug[p.slug] = [];
      p.images.forEach((file, i) => {
        const a = document.createElement("a");
        a.className = "tile";
        a.href = `project.html?p=${p.slug}`;
        a.dataset.slug = p.slug;
        if (i === 0) a.insertAdjacentHTML("beforeend", `<span class="label">${p.title}</span>`);
        a.append(media(`assets/projects/${p.slug}/${file}`, p.ratios && p.ratios[i], `${p.title} — ${i + 1}`));
        grid.append(a);
        tilesBySlug[p.slug].push(a);
      });
      for (let s = 0; s < (p.skipAfter || 0); s++) {
        const gap = document.createElement("div");
        gap.className = "skip";
        grid.append(gap);
      }
    });

    /* Ховер: наводиш на одну картинку — виділяється весь проєкт.
       Рамка малюється навколо кожного рядка, який займає проєкт. */
    const tag = document.querySelector(".cursor-tag");
    let current = null;
    let boxes = [];

    function clearSelection() {
      boxes.forEach((b) => b.remove());
      boxes = [];
      grid.classList.remove("is-hovering");
      grid.querySelectorAll(".tile.is-active").forEach((t) => t.classList.remove("is-active"));
    }

    function drawSelection(slug) {
      clearSelection();
      const tiles = tilesBySlug[slug];
      if (!tiles) return;
      grid.classList.add("is-hovering");
      tiles.forEach((t) => t.classList.add("is-active"));

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

    grid.addEventListener("pointerover", (e) => {
      const tile = e.target.closest(".tile");
      const slug = tile ? tile.dataset.slug : null;
      if (slug === current) return;
      current = slug;
      if (slug) { drawSelection(slug); tag.classList.add("on"); }
    });
    grid.addEventListener("pointerleave", () => {
      current = null; clearSelection(); tag.classList.remove("on");
    });
    grid.addEventListener("pointerout", (e) => {
      if (!e.relatedTarget || !e.relatedTarget.closest || !e.relatedTarget.closest(".tile")) {
        current = null; clearSelection(); tag.classList.remove("on");
      }
    });
    window.addEventListener("pointermove", (e) => {
      tag.style.left = e.clientX + "px";
      tag.style.top = e.clientY + "px";
    });
    window.addEventListener("resize", () => { if (current) drawSelection(current); });
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
      ${p.where ? `<dl><dt>Where</dt><dd>${p.where}</dd></dl>` : ""}
      ${p.description ? `<p class="desc">${p.description}</p>` : ""}
      ${p.live ? `<a class="btn" href="${p.live}" target="_blank" rel="noopener">Live website</a>` : ""}`;

    const gallery = document.querySelector(".gallery");
    p.images.forEach((file, n) =>
      gallery.append(media(`assets/projects/${p.slug}/${file}`, p.ratios && p.ratios[n], `${p.title} — ${n + 1}`))
    );

    const prev = PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length];
    const next = PROJECTS[(i + 1) % PROJECTS.length];
    document.querySelector(".project-nav").innerHTML = `
      <a href="project.html?p=${prev.slug}">← ${prev.title}</a>
      <a href="index.html">All projects</a>
      <a href="project.html?p=${next.slug}">${next.title} →</a>`;
  }

  /* ---------- ABOUT ---------- */
  function about() {
    document.querySelectorAll("[data-link]").forEach((a) => {
      const href = LINKS[a.dataset.link];
      if (href) a.href = href;
    });
  }

  chrome();
  if (page === "home") home();
  if (page === "project") project();
  if (page === "about") about();
})();
