// Project data — edit here to add/remove slides.
const S = 'stroke="#111" stroke-width="6" stroke-linejoin="round" stroke-linecap="round"';

const PROJECTS = [
  {
    title: 'Quantifying Crypto Narratives',
    meta: 'MSc Dissertation · University of Bristol · 2025',
    blurb: 'Moving beyond "positive vs negative" sentiment to measure which economic stories — regulation, ETFs, tech breakthroughs — dominate crypto discourse, and whether that predicts BTC/ETH price moves.',
    chips: ['Python', 'LSTM', 'XGBoost', 'ARIMAX', 'GDELT', 'NLP'],
    cover: `
      <svg viewBox="0 0 600 260" aria-hidden="true">
        <circle cx="120" cy="40" r="110" fill="#ff8a3d" ${S}/>
        <circle cx="150" cy="150" r="70" fill="#c6f04f" ${S}/>
        <text x="150" y="178" text-anchor="middle" font-family="Archivo Black" font-size="80">₿</text>
        <g ${S}>
          <line x1="300" y1="70" x2="300" y2="200"/><rect x="285" y="100" width="30" height="70" fill="#ff7d9c"/>
          <line x1="350" y1="50" x2="350" y2="170"/><rect x="335" y="70" width="30" height="70" fill="#6ea8dc"/>
          <line x1="400" y1="90" x2="400" y2="210"/><rect x="385" y="110" width="30" height="60" fill="#ff7d9c"/>
          <line x1="450" y1="30" x2="450" y2="150"/><rect x="435" y="45" width="30" height="80" fill="#6ea8dc"/>
        </g>
        <text x="590" y="250" text-anchor="end" font-family="Archivo Black" font-size="64" fill="#111">0.567</text>
      </svg>`,
    detail: `
      <p>Crypto prices react to stories as much as to charts. Simple sentiment scores are inconsistent predictors — the <em>sentiment paradox</em>. This dissertation reframes the problem around <strong>narrative salience</strong>: how prominent specific economic narratives are on a given day.</p>
      <div class="stats">
        <div class="stat"><b>0.539 → 0.567</b><span>Accuracy uplift from adding narrative features (ablation)</span></div>
        <div class="stat"><b>~62%</b><span>Ethereum directional accuracy after leakage audit</span></div>
        <div class="stat"><b>85% → real</b><span>Inflated early scores caught by guardrail audit</span></div>
      </div>
      <ul>
        <li>Combined BTC/ETH OHLCV market data with Reddit archives (PulseReddit) and GDELT financial-news themes.</li>
        <li>Engineered salience features — entropy, novelty and z-scores over themes like ETF, regulation and technology.</li>
        <li>Benchmarked ARIMAX, Random Forest, XGBoost and LSTM hybrids with rolling-origin cross-validation.</li>
        <li>Built a guardrail audit (permutation tests, leakage checks) and reported negative results honestly.</li>
      </ul>
      <figure><img src="assets/final_comparison.png" alt="Model performance comparison across feature sets for Bitcoin and Ethereum" loading="lazy"><figcaption>Model progression: price → sentiment → narrative → salience → hybrid LSTM.</figcaption></figure>
      <div class="modal-actions">
        <a class="btn btn-lime" href="https://github.com/tangledmind01/Quantitatifying_Crypto_Narratives" target="_blank" rel="noopener">Code on GitHub ↗</a>
      </div>`
  },
  {
    title: 'Health & Employment in England and Wales',
    meta: 'Visual Analytics · University of Bristol',
    blurb: 'Interactive Tableau dashboards and ML on 2011 vs 2021 census data, exposing widening health inequalities and shifts in economic activity across regions.',
    chips: ['Tableau', 'UMAP', 't-SNE', 'Bayesian Regression', 'Pandas'],
    cover: `
      <svg viewBox="0 0 600 260" aria-hidden="true">
        <rect x="-10" y="150" width="620" height="120" fill="#6ea8dc" ${S}/>
        <path d="M70 230 L70 120 L120 120 L120 230 M150 230 L150 70 L200 70 L200 230 M230 230 L230 150 L280 150 L280 230" fill="#c6f04f" ${S}/>
        <circle cx="440" cy="95" r="70" fill="#ff7d9c" ${S}/>
        <path d="M440 95 L440 25 A70 70 0 0 1 505 120 Z" fill="#7b4dff" ${S}/>
        <text x="590" y="250" text-anchor="end" font-family="Archivo Black" font-size="54" fill="#111">2011→2021</text>
      </svg>`,
    detail: `
      <p>Using UK census data from 2011 and 2021, this project analyses long-term health conditions, general health and economic activity across England and Wales — built for policymakers, public-health officials and local authorities.</p>
      <ul>
        <li>EDA, cleaning and merging of both census years on standardised area identifiers.</li>
        <li>UMAP and t-SNE to uncover latent regional clusters.</li>
        <li>Bayesian Regression to model health and employment outcomes.</li>
        <li>Interactive Tableau dashboards: spatial maps, cluster plots and predictive comparisons.</li>
      </ul>
      <p>Key insight: health inequalities worsened between censuses, with clear shifts in employment patterns post-COVID.</p>`
  },
  {
    title: 'Word Clustering & Decision Boundaries',
    meta: 'AI Coursework · University of Bristol',
    blurb: 'Clustering words from two classic novels using co-occurrence graphs and Dijkstra shortest paths, plus a study of how neural nets vs logistic regression handle curved class boundaries.',
    chips: ['NLTK', 'K-Means', 'Dijkstra', 'PCA', 'Neural Nets'],
    cover: `
      <svg viewBox="0 0 600 260" aria-hidden="true">
        <g ${S}>
          <line x1="90" y1="70" x2="210" y2="150"/><line x1="210" y1="150" x2="330" y2="60"/>
          <line x1="210" y1="150" x2="170" y2="230"/><line x1="330" y1="60" x2="420" y2="150"/>
          <circle cx="90" cy="70" r="34" fill="#ff7d9c"/><circle cx="210" cy="150" r="40" fill="#c6f04f"/>
          <circle cx="330" cy="60" r="30" fill="#6ea8dc"/><circle cx="170" cy="230" r="26" fill="#ff8a3d"/>
          <circle cx="420" cy="150" r="30" fill="#7b4dff"/>
        </g>
        <text x="590" y="250" text-anchor="end" font-family="Archivo Black" font-size="72" fill="#111">K=5</text>
      </svg>`,
    detail: `
      <p><strong>Task 1 — Word clustering.</strong> Built a corpus of 8,000+ sentences from <em>Pride and Prejudice</em> and <em>Frankenstein</em>, selected ~100 nouns via POS tagging, and measured similarity via sentence-level co-occurrence.</p>
      <ul>
        <li>K-Means (K = 5) with PCA visualisation surfaced themes like social relations, Gothic elements and character groupings.</li>
        <li>Dijkstra shortest paths over a word graph captured indirect links (e.g. “Elizabeth” ↔ “marriage” via “Darcy”), producing more coherent clusters.</li>
      </ul>
      <p><strong>Task 2 — Classification boundaries.</strong> Generated synthetic data split by x₂ = a·x₁² + x₁ and compared logistic regression with a small neural network: the network adapted to curvature, reaching ~99% accuracy where logistic regression plateaued.</p>
      <p><strong>Task 3 — Essay</strong> on large language models and their limits.</p>`
  },
  {
    title: 'Statistical Computing in R',
    meta: 'Statistical Computation & Empirical Methods',
    blurb: 'World Bank debt data wrangling with the tidyverse, maximum-likelihood derivations, and a simulation study of the unpaired t-test’s Type I error and power.',
    chips: ['R', 'tidyverse', 'ggplot2', 'MLE', 'Simulation'],
    cover: `
      <svg viewBox="0 0 600 260" aria-hidden="true">
        <path d="M20 230 C140 230 170 40 260 40 C350 40 380 230 500 230 Z" fill="#c6f04f" ${S}/>
        <path d="M200 230 C260 230 280 120 340 120 C400 120 420 230 520 230 Z" fill="#ff7d9c" ${S} opacity=".95"/>
        <line x1="10" y1="230" x2="590" y2="230" ${S}/>
        <text x="590" y="110" text-anchor="end" font-family="Archivo Black" font-size="72" fill="#111">t-test</text>
      </svg>`,
    detail: `
      <ul>
        <li><strong>Section A:</strong> reshaped and joined World Bank debt, country and indicator datasets (13,800+ rows) with dplyr/tidyr pivots and joins, then summarised and visualised.</li>
        <li><strong>Section B:</strong> derived normalising constants, moments, CDF, quantile function and the MLE for a shifted exponential distribution.</li>
        <li><strong>Section C:</strong> simulation study of Type I error for the unpaired t-test, applied to compare Toyota vs Ford fuel efficiency, with power analysis and robustness testing.</li>
      </ul>`
  },
  {
    title: 'Bank Transaction Analytics & Fraud Detection',
    meta: 'Team project · 2024',
    blurb: 'Exploratory analysis and feature engineering on transactional data to surface fraud patterns and build detection models.',
    chips: ['Python', 'EDA', 'Feature Engineering'],
    cover: `
      <svg viewBox="0 0 600 260" aria-hidden="true">
        <rect x="40" y="50" width="300" height="180" rx="18" fill="#6ea8dc" ${S}/>
        <rect x="40" y="90" width="300" height="36" fill="#111"/>
        <rect x="70" y="160" width="60" height="40" rx="6" fill="#c6f04f" ${S}/>
        <path d="M420 40 L520 75 L520 140 C520 190 470 220 420 235 C370 220 320 190 320 140 L320 75 Z" fill="#ff7d9c" ${S}/>
        <text x="420" y="170" text-anchor="middle" font-family="Archivo Black" font-size="90" fill="#111">!</text>
      </svg>`,
    detail: `
      <p>Analysed bank transaction datasets with EDA and feature engineering to identify anomalous behaviour and support fraud-detection modelling — a team project emphasising collaboration and delivery under deadlines.</p>
      <div class="modal-actions">
        <a class="btn btn-lime" href="https://lnkd.in/gMS7Crqc" target="_blank" rel="noopener">See the project ↗</a>
      </div>`
  }
];

// ---------- render carousel ----------
const carousel = document.getElementById('carousel');
const dots = document.getElementById('dots');
const track = document.createElement('div');
track.className = 'track';

PROJECTS.forEach((p, i) => {
  const slide = document.createElement('article');
  slide.className = 'slide';
  slide.innerHTML = `
    <div class="card">
      <div class="cover" style="background:${['#ff7d9c', '#c6f04f', '#7b4dff', '#ff8a3d', '#6ea8dc'][i % 5]}">${p.cover}</div>
      <div class="card-body">
        <h3>${p.title}</h3>
        <div class="card-meta">${p.meta}</div>
        <p>${p.blurb}</p>
        <div class="chips">${p.chips.map(c => `<span class="chip">${c}</span>`).join('')}</div>
        <button class="btn" data-i="${i}">View details →</button>
      </div>
    </div>`;
  track.appendChild(slide);

  const d = document.createElement('button');
  d.setAttribute('aria-label', `Show project ${i + 1}`);
  d.onclick = () => go(i);
  dots.appendChild(d);
});
carousel.appendChild(track);

let idx = 0;
function go(i) {
  idx = (i + PROJECTS.length) % PROJECTS.length;
  track.style.transform = `translateX(-${idx * 100}%)`;
  [...dots.children].forEach((d, j) => d.classList.toggle('on', j === idx));
}
document.getElementById('prev').onclick = () => go(idx - 1);
document.getElementById('next').onclick = () => go(idx + 1);
go(0);

// swipe on touch
let x0 = null;
carousel.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
carousel.addEventListener('touchend', e => {
  if (x0 === null) return;
  const dx = e.changedTouches[0].clientX - x0;
  if (Math.abs(dx) > 40) go(idx + (dx < 0 ? 1 : -1));
  x0 = null;
});

// ---------- modal ----------
const modal = document.getElementById('modal');
const body = document.getElementById('modal-body');
track.addEventListener('click', e => {
  const b = e.target.closest('button[data-i]');
  if (!b) return;
  const p = PROJECTS[+b.dataset.i];
  body.innerHTML = `<div class="card-meta">${p.meta}</div><h3>${p.title}</h3>
    <div class="chips">${p.chips.map(c => `<span class="chip">${c}</span>`).join('')}</div>${p.detail}`;
  modal.showModal();
});
modal.addEventListener('click', e => { if (e.target === modal) modal.close(); });

// close mobile menu after navigating
document.querySelectorAll('#links a').forEach(a =>
  a.addEventListener('click', () => document.getElementById('links').classList.remove('open')));

// ================= interactivity =================
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

// typing rotator under the headline
(() => {
  const el = document.getElementById('rot');
  const words = ['time-series forecasting', 'anomaly detection', 'LLM narrative mining', 'Tableau dashboards', 'AWS data pipelines'];
  if (reduced) return;
  let w = 0, c = words[0].length, del = true;
  (function tick() {
    const word = words[w];
    c += del ? -1 : 1;
    el.textContent = word.slice(0, c);
    let wait = del ? 35 : 70;
    if (!del && c === word.length) { del = true; wait = 1800; }
    else if (del && c === 0) { del = false; w = (w + 1) % words.length; wait = 300; }
    setTimeout(tick, wait);
  })();
})();

// carousel: autoplay with progress bar, pauses on hover/focus/hidden tab
const progress = document.createElement('div');
progress.className = 'progress';
progress.innerHTML = '<i></i>';
dots.after(progress);
let timer = null, paused = false;
function restartAuto() {
  clearTimeout(timer);
  progress.classList.remove('run');
  if (paused || reduced) return;
  void progress.offsetWidth; // restart CSS transition
  progress.classList.add('run');
  timer = setTimeout(() => go(idx + 1), 6000);
}
const _go = go;
go = i => { _go(i); restartAuto(); };
document.getElementById('prev').onclick = () => go(idx - 1);
document.getElementById('next').onclick = () => go(idx + 1);
[...dots.children].forEach((d, j) => (d.onclick = () => go(j)));
const projectsEl = document.getElementById('projects');
projectsEl.addEventListener('mouseenter', () => { paused = true; restartAuto(); });
projectsEl.addEventListener('mouseleave', () => { paused = false; restartAuto(); });
document.addEventListener('visibilitychange', () => { paused = document.hidden; restartAuto(); });
document.addEventListener('keydown', e => {
  if (modal.open || !projectsEl.matches(':hover')) return;
  if (e.key === 'ArrowRight') go(idx + 1);
  if (e.key === 'ArrowLeft') go(idx - 1);
});
restartAuto();

// skills → jump to the project that uses them
document.querySelectorAll('.skill').forEach(btn => btn.addEventListener('click', () => {
  document.querySelectorAll('.skill').forEach(b => b.classList.toggle('active', b === btn));
  const target = btn.dataset.go;
  if (target.startsWith('#')) {
    document.querySelector(target).scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }
  go(+target);
  paused = true; restartAuto();
  projectsEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const card = track.children[+target].querySelector('.card');
  const label = btn.textContent.trim().toLowerCase();
  card.querySelectorAll('.chip').forEach(ch => {
    const t = ch.textContent.toLowerCase();
    ch.classList.toggle('match', label.includes(t) || t.includes(label.split(' ')[0]));
  });
  card.classList.remove('flash'); void card.offsetWidth; card.classList.add('flash');
  setTimeout(() => { paused = false; restartAuto(); }, 4000);
}));

// count-up numbers in the project modal
const _show = modal.showModal.bind(modal);
modal.showModal = () => {
  _show();
  paused = true; restartAuto();
  if (reduced) return;
  body.querySelectorAll('.stat b').forEach(b => {
    const m = b.textContent.match(/(\d+\.?\d*)(?!.*\d)/); // last number
    if (!m) return;
    const end = parseFloat(m[1]), dec = (m[1].split('.')[1] || '').length, full = b.textContent;
    const t0 = performance.now();
    (function step(t) {
      const k = Math.min(1, (t - t0) / 900), v = (end * (1 - Math.pow(1 - k, 3))).toFixed(dec);
      b.textContent = full.slice(0, m.index) + v + full.slice(m.index + m[1].length);
      if (k < 1) requestAnimationFrame(step);
    })(t0);
  });
};
modal.addEventListener('close', () => { paused = false; restartAuto(); });

// 3D tilt on the photo card
(() => {
  const hero = document.querySelector('.hero-right'), card = document.querySelector('.photo-card');
  if (reduced || !matchMedia('(hover: hover)').matches) return;
  hero.addEventListener('mousemove', e => {
    const r = hero.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    card.style.transform = `rotateY(${x * 14}deg) rotateX(${-y * 14}deg)`;
  });
  hero.addEventListener('mouseleave', () => (card.style.transform = ''));
})();

// reveal blocks as they scroll into view
(() => {
  const els = document.querySelectorAll('.skill-list li, .cert, .job, .edu-card, .cta > *, .projects .card');
  if (reduced || !('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
  }), { threshold: .15 });
  els.forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${(i % 5) * 70}ms`;
    io.observe(el);
  });
})();

// confetti when the starburst is clicked
document.querySelector('.burst').addEventListener('click', e => {
  const colors = ['#c6f04f', '#ff7d9c', '#7b4dff', '#ff8a3d', '#6ea8dc', '#fff'];
  for (let i = 0; i < 40; i++) {
    const p = document.createElement('span');
    p.className = 'confetti';
    p.style.background = colors[i % colors.length];
    p.style.left = e.clientX + 'px'; p.style.top = e.clientY + 'px';
    if (i % 3 === 0) p.style.borderRadius = '50%';
    document.body.appendChild(p);
    const a = Math.random() * Math.PI * 2, d = 80 + Math.random() * 220;
    p.animate([
      { transform: 'translate(0,0) rotate(0)', opacity: 1 },
      { transform: `translate(${Math.cos(a) * d}px, ${Math.sin(a) * d + 120}px) rotate(${Math.random() * 720}deg)`, opacity: 0 }
    ], { duration: 1100 + Math.random() * 600, easing: 'cubic-bezier(.2,.7,.4,1)' }).onfinish = () => p.remove();
  }
});

// back-to-top button
const toTop = document.getElementById('toTop');
addEventListener('scroll', () => toTop.classList.toggle('show', scrollY > 600), { passive: true });
toTop.onclick = () => scrollTo({ top: 0, behavior: 'smooth' });
