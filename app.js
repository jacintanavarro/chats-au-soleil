(function () {
  'use strict';

  /* ---------- helpers ---------- */

  function getTooltip(prop) {
    if (prop.status === 'on-request') return 'Solo bajo petición, sin tarifa pública.';
    if (prop.status === 'unavailable') return `Fechas ${prop.dates} no disponibles.`;
    if (prop.status === 'warning') {
      if (prop.name.indexOf('Volets Bleus') !== -1) return 'En verano solo se alquila de sábado a sábado.';
      if (prop.name.indexOf('Lagoon') !== -1) return 'Precio base: faltan comida, combustible y amarres por añadir.';
      return prop.statusLabel + '.';
    }
    return null;
  }

  function badgeHTML(prop) {
    const tooltip = getTooltip(prop);
    const badge = `<span class="badge ${prop.status}">${prop.statusLabel}</span>`;
    if (!tooltip) return badge;
    return `<span class="badge-wrap" tabindex="0">${badge}<span class="badge-tooltip">${tooltip}</span></span>`;
  }

  function priceHTML(prop) {
    if (prop.priceTotal) {
      return `
        <div class="card-price">${prop.priceTotal}</div>
        ${prop.pricePerPerson ? `<div class="card-price-pp">${prop.pricePerPerson}</div>` : ''}
        ${prop.pricePerNight ? `<div class="card-price-pp">${prop.pricePerNight}</div>` : ''}
      `;
    }
    return `<div class="card-price-note">precio a consultar</div>`;
  }

  function cardBodyHTML(prop) {
    return `
      <div class="card-location">${prop.location}</div>
      <h3 class="card-title">${prop.name}</h3>
      <p class="card-desc">${prop.description}</p>
      <p class="card-meta">${prop.capacity}<br>${prop.dates}</p>
      <div class="card-price-row">${priceHTML(prop)}</div>
      <a class="card-link" href="${prop.url}" target="_blank" rel="noopener noreferrer">Ver la propiedad →</a>
    `;
  }

  function renderFeatureCard(prop) {
    return `
      <div class="feature-card reveal">
        <div class="feature-image">
          <div class="card-badge-float">${badgeHTML(prop)}</div>
          <img src="${prop.image}" alt="${prop.name}, ${prop.location}" loading="lazy" data-name="${prop.name}">
        </div>
        <div class="feature-content">
          ${cardBodyHTML(prop)}
        </div>
      </div>`;
  }

  function renderPropertyCard(prop) {
    return `
      <div class="property-card">
        <div class="card-image-wrap">
          <div class="card-badge-float">${badgeHTML(prop)}</div>
          <img src="${prop.image}" alt="${prop.name}, ${prop.location}" loading="lazy" data-name="${prop.name}">
        </div>
        <div class="card-body">
          ${cardBodyHTML(prop)}
        </div>
      </div>`;
  }

  function renderStack(dest) {
    const id = dest.number;
    const cards = dest.properties.map((p, i) =>
      `<div class="stack-card" data-index="${i}">${renderPropertyCard(p)}</div>`
    ).join('');
    const dots = dest.properties.map((_, i) =>
      `<button class="stack-dot" data-stack-dot="${id}" data-dot-index="${i}" aria-label="Ver opción ${i + 1} en ${dest.place}"></button>`
    ).join('');
    return `
      <div class="stack-wrap reveal">
        <div class="stack-container" data-stack="${id}">${cards}</div>
        <div class="stack-controls">
          <button class="stack-link" data-stack-adv="${id}">Ver otra opción en ${dest.place} →</button>
          <div class="stack-arrows">
            <button class="arrow-btn" data-stack-prev="${id}" aria-label="Opción anterior en ${dest.place}">‹</button>
            <button class="arrow-btn" data-stack-next="${id}" aria-label="Opción siguiente en ${dest.place}">›</button>
          </div>
        </div>
        <div class="stack-dots">${dots}</div>
      </div>`;
  }

  function renderDestinationSection(dest, index) {
    const bgClass = index % 2 === 0 ? 'bg-white' : 'bg-ivory';
    const body = dest.layout === 'stack'
      ? renderStack(dest)
      : renderFeatureCard(dest.properties[0]);

    return `
      <section class="destination ${bgClass}" id="dest-${dest.number}" data-nav="${dest.number}">
        <div class="destination-inner">
          <div class="destination-number">${dest.number}</div>
          <h2 class="destination-title">${dest.place} · <span class="country">${dest.country}</span></h2>
          ${body}
          <div class="divider">
            <div class="divider-line"></div>
            <div class="divider-icon">${ornaments.wave}</div>
            <div class="divider-line"></div>
          </div>
        </div>
      </section>`;
  }

  /* ---------- render nav ---------- */

  function renderNav() {
    const sidebarNav = document.getElementById('sidebarNav');
    const pillNav = document.getElementById('pillNav');

    sidebarNav.innerHTML = destinations.map((d, i) =>
      `<button class="nav-item${i === 0 ? ' active' : ''}" data-nav-link="${d.number}">
        <span class="num">${d.number}</span><span>${d.place}</span>
      </button>`
    ).join('');

    pillNav.innerHTML = destinations.map((d, i) =>
      `<button class="${i === 0 ? 'active' : ''}" data-nav-link="${d.number}">${d.number}</button>`
    ).join('');
  }

  /* ---------- render quick glance ---------- */

  function renderQuickGlance() {
    const row = document.getElementById('quickGlanceRow');
    const items = [];
    destinations.forEach(dest => {
      dest.properties.forEach(prop => {
        const price = prop.priceTotal || 's/consultar';
        items.push(`
          <button class="qg-item" data-nav-link="${dest.number}">
            <img class="qg-thumb" src="${prop.image}" alt="${prop.name}" loading="lazy" data-name="${prop.name}">
            <div class="qg-name">${prop.name}</div>
            <div class="qg-price">${price}</div>
          </button>`);
      });
    });
    row.innerHTML = items.join('');
  }

  /* ---------- ornaments ---------- */

  function renderOrnaments() {
    document.getElementById('sidebarCat').innerHTML = ornaments.cat;
    document.getElementById('footerCat').innerHTML = ornaments.cat;
    document.getElementById('heroSun').innerHTML = ornaments.sun;
  }

  /* ---------- image fallbacks ---------- */

  function wireImageFallbacks(root) {
    root.querySelectorAll('img[data-name]').forEach(img => {
      img.addEventListener('error', function handler() {
        const div = document.createElement('div');
        div.className = 'img-fallback';
        div.setAttribute('role', 'img');
        div.setAttribute('aria-label', img.getAttribute('alt') || '');
        div.textContent = img.dataset.name;
        img.replaceWith(div);
      }, { once: true });
    });
  }

  /* ---------- scrollspy + reveal ---------- */

  function setupScrollspy() {
    const sections = Array.from(document.querySelectorAll('.destination'));
    const navLinks = Array.from(document.querySelectorAll('[data-nav-link]'));

    const spy = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const num = entry.target.dataset.nav;
          navLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.navLink === num);
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

    sections.forEach(sec => spy.observe(sec));
  }

  function setupReveal() {
    const revealEls = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  }

  function setupNavClicks() {
    document.querySelectorAll('[data-nav-link]').forEach(el => {
      el.addEventListener('click', () => {
        const target = document.getElementById(`dest-${el.dataset.navLink}`);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  /* ---------- card stack behavior ---------- */

  const stackState = {};

  function initStacks() {
    document.querySelectorAll('.stack-container').forEach(container => {
      const id = container.dataset.stack;
      const cards = Array.from(container.querySelectorAll('.stack-card'));
      stackState[id] = { index: 0, count: cards.length };
      updateStack(id);
    });

    document.querySelectorAll('[data-stack-adv]').forEach(btn => {
      btn.addEventListener('click', () => advanceStack(btn.dataset.stackAdv, 1));
    });
    document.querySelectorAll('[data-stack-next]').forEach(btn => {
      btn.addEventListener('click', () => advanceStack(btn.dataset.stackNext, 1));
    });
    document.querySelectorAll('[data-stack-prev]').forEach(btn => {
      btn.addEventListener('click', () => advanceStack(btn.dataset.stackPrev, -1));
    });
    document.querySelectorAll('[data-stack-dot]').forEach(dot => {
      dot.addEventListener('click', () => {
        const id = dot.dataset.stackDot;
        stackState[id].index = parseInt(dot.dataset.dotIndex, 10);
        updateStack(id);
      });
    });
  }

  function advanceStack(id, dir) {
    const state = stackState[id];
    state.index = (state.index + dir + state.count) % state.count;
    updateStack(id);
  }

  function updateStack(id) {
    const state = stackState[id];
    const container = document.querySelector(`.stack-container[data-stack="${id}"]`);
    const cards = Array.from(container.querySelectorAll('.stack-card'));

    cards.forEach((card, i) => {
      const rank = (i - state.index + state.count) % state.count;
      card.style.zIndex = state.count - rank;
      if (rank === 0) {
        card.style.transform = 'translateY(0) scale(1) rotate(0deg)';
        card.style.opacity = '1';
      } else if (rank === 1) {
        card.style.transform = 'translateY(10px) scale(0.94) rotate(-2deg)';
        card.style.opacity = '0.6';
      } else if (rank === 2) {
        card.style.transform = 'translateY(20px) scale(0.9) rotate(2deg)';
        card.style.opacity = '0.35';
      } else {
        card.style.transform = 'translateY(20px) scale(0.9) rotate(2deg)';
        card.style.opacity = '0';
      }
    });

    document.querySelectorAll(`[data-stack-dot="${id}"]`).forEach(dot => {
      dot.classList.toggle('active', parseInt(dot.dataset.dotIndex, 10) === state.index);
    });
  }

  /* ---------- init ---------- */

  function init() {
    renderOrnaments();
    renderNav();
    renderQuickGlance();

    const container = document.getElementById('destinations');
    container.innerHTML = destinations.map((d, i) => renderDestinationSection(d, i)).join('');

    wireImageFallbacks(document);
    setupNavClicks();
    setupScrollspy();
    setupReveal();
    initStacks();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
