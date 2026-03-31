/* ============================================
TITANX LABS — script.js
============================================ */

// ── NAV SCROLL STATE ──
const nav = document.getElementById(‘nav’);
window.addEventListener(‘scroll’, () => {
nav.classList.toggle(‘scrolled’, window.scrollY > 50);
});

// ── MOBILE BURGER ──
const burger = document.getElementById(‘burger’);
const navLinks = document.querySelector(’.nav__links’);
burger.addEventListener(‘click’, () => {
navLinks.classList.toggle(‘open’);
});
// Close menu on link click
navLinks.querySelectorAll(‘a’).forEach(a => {
a.addEventListener(‘click’, () => navLinks.classList.remove(‘open’));
});

// ── SCROLL REVEAL ──
const revealElements = document.querySelectorAll(
’.section-tag, .section-title, .section-lead, .intro__text, .intro__stats, ’ +
’.stat-card, .problem__card, .solution__item, .solution__hydrogen, ’ +
’.tech__col, .phase-card, .timeline__node, .markets__side, ’ +
’.adv-card, .biz__card, .benefit, .invest__highlight, ’ +
‘.contact__title, .contact__sub, .contact__actions’
);

revealElements.forEach((el, i) => {
el.classList.add(‘reveal’);
// Stagger siblings
const parent = el.parentElement;
const siblings = […parent.children].filter(c => c === el);
const idx = […parent.children].indexOf(el);
if (idx > 0 && idx < 5) {
el.classList.add(⁠ reveal-delay-${idx} ⁠);
}
});

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add(‘visible’);
}
});
}, { threshold: 0.1, rootMargin: ‘0px 0px -40px 0px’ });

revealElements.forEach(el => observer.observe(el));

// ── HERO PARTICLES ──
const container = document.getElementById(‘particles’);
const count = window.innerWidth > 768 ? 40 : 18;

for (let i = 0; i < count; i++) {
const p = document.createElement(‘div’);
p.className = ‘hero__particle’;
const size = Math.random() * 2 + 1;
const left = Math.random() * 100;
const duration = Math.random() * 15 + 10;
const delay = Math.random() * 15;
const drift = (Math.random() - 0.5) * 200;

p.style.cssText = ⁠ left: ${left}%; width: ${size}px; height: ${size}px; animation-duration: ${duration}s; animation-delay: -${delay}s; --drift: ${drift}px; opacity: ${Math.random() * 0.5 + 0.1}; ⁠;
container.appendChild(p);
}

// ── SMOOTH SCROLL for CTA ──
document.querySelectorAll(‘a[href^=”#”]’).forEach(a => {
a.addEventListener(‘click’, e => {
const target = document.querySelector(a.getAttribute(‘href’));
if (target) {
e.preventDefault();
target.scrollIntoView({ behavior: ‘smooth’, block: ‘start’ });
}
});
});

// ── STAT COUNTER ANIMATION ──
const statNums = document.querySelectorAll(’.stat-card__num’);
const countObserver = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.style.animation = ‘fade-up 0.6s ease forwards’;
countObserver.unobserve(entry.target);
}
});
}, { threshold: 0.5 });
statNums.forEach(el => countObserver.observe(el));

// ── TIMELINE PROGRESSIVE REVEAL ──
const timelineNodes = document.querySelectorAll(’.timeline__node’);
const timelineObserver = new IntersectionObserver((entries) => {
entries.forEach((entry, i) => {
if (entry.isIntersecting) {
setTimeout(() => {
entry.target.classList.add(‘visible’);
}, i * 150);
timelineObserver.unobserve(entry.target);
}
});
}, { threshold: 0.2 });
timelineNodes.forEach(el => {
el.classList.add(‘reveal’);
timelineObserver.observe(el);
});