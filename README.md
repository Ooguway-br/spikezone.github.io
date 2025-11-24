<!DOCTYPE html>
<html lang="pt-BR" data-team="loud">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SpikeZone</title>
  <link rel="stylesheet" href="inicio.css">
  <link rel="icon" href="/images/favicon_io/android-chrome-512x512.png">
  <link rel="appel-touch-icon" href="/images/favicon_io/apple-touch-icon.png">
  <meta name="theme-color" content="#FF4500">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Rajdhani:wght@600;700&display=swap" rel="stylesheet">
<style>
  /* Variaveis*/
:root {
  --color-bg: #0c0c0c;
  --color-surface: #111;
  --color-surface-alt: #151515;
  --color-border: #333;
  --color-text: #f1f1f1;
  --color-text-muted: #888;
  --color-text-soft: #ccc;
  --color-shadow: rgba(0, 0, 0, 0.4);
  --color-highlight: #FFD54A;
  --color-shadow-highlight: rgba(255, 213, 74, 0.25);
  --color-shadow-soft: rgba(255, 213, 74, 0.05);
  --color-accent-red: rgba(255, 70, 85, 0.2);
  --color-primary: #ff3c00;
  --color-dark: #0f0f0f;
  --color-light: #fff;
  --font-main: "Poppins", sans-serif;
  --font-title: "Rajdhani", sans-serif;
}


/* Base Geral */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-main);
  overflow-x: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

html {
  scroll-behavior: smooth;
}

.neon-particles {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

/* Partículas neon */
.neon-particles::before,
.neon-particles::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle, var(--color-highlight) 2px, transparent 4px),
    radial-gradient(circle, var(--color-shadow-highlight) 2px, transparent 4px);
  background-size: 120px 120px, 180px 180px;
  animation: floatParticles 18s linear infinite;
  opacity: 0.25;
  mix-blend-mode: screen;
}

.neon-particles::after {
  background-size: 160px 160px, 130px 130px;
  animation-duration: 28s;
  opacity: 0.15;
}

@keyframes floatParticles {
  from { transform: translateY(0); }
  to   { transform: translateY(-300px); }
}


/* Header */
header {
  width: 100%;
  padding: 20px 60px;
  background-color: var(--color-surface);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 8px var(--color-shadow);
  position: sticky;
  top: 0;
  z-index: 10;
  transition: background 0.3s, box-shadow 0.3s;
}

header h1 {
  color: var(--color-highlight);
  font-weight: 700;
  font-size: 1.8rem;
  text-shadow: 0 0 8px var(--color-shadow-highlight);
}

/* Logo */
.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  cursor: pointer;
  transition: transform 0.4s ease, filter 0.4s ease;
}

.logo-container img {
  width: 140px;
  height: auto;
  filter: drop-shadow(0 0 4px rgba(255, 60, 0, 0.5));
  transition: transform 0.3s ease, filter 0.3s ease;
}

.logo-container:hover img {
  transform: scale(1.05);
  filter: drop-shadow(0 0 8px var(--color-primary));
}

.logo-text {
  font-family: "Orbitron", sans-serif;
  font-weight: 700;
  font-size: 1.6rem;
  letter-spacing: 2px;
  color: var(--color-light);
  text-transform: uppercase;
  transition: color 0.3s ease;
}

.logo-container:hover .logo-text {
  color: var(--color-primary);
}

/* Navegar */
.navbar {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background: rgba(20, 20, 22, 0.45);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--color-border);
    padding: 12px 0;
}

.nav-content {
    width: 100%;
    max-width: 1500px;
    margin: auto;
    padding: 0 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

/* Links */
.nav-links {
    display: flex;
    gap: 40px;
}

.nav-links a {
    color: var(--color-text-soft);
    font-size: 17px;
    font-weight: 500;
    text-decoration: none;
    padding-bottom: 6px;
    transition: 0.25s ease;
    position: relative;
}

/* Linha neon ao passar o mouse */
.nav-links a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0%;
    height: 2px;
    background: #ff4500;
    box-shadow: 0 0 6px #ff4500;
    transition: 0.3s ease;
}

.nav-links a:hover {
    color: var(--color-text);
}

.nav-links a:hover::after {
    width: 100%;
}

.nav-links .active {
    color: #ff4500;
}

.nav-links .active::after {
    width: 100%;
}

/* HERO SECTION */

.hero-riot {
    position: relative;
    width: 100%;
    height: 650px;
    overflow: hidden;
}

/* Imagem */
.hero-riot-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

/* Gradiente escuro inferior */
.hero-riot::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 45%;
    background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.9));
    z-index: 1;
}

/* Conteúdo por cima da imagem */
.hero-riot-content {
    position: absolute;
    z-index: 2;
    bottom: 90px;
    left: 80px;
    max-width: 600px;
    color: #fff;
}

/* Título */
.hero-riot-content h1 {
    font-size: 3.2rem;
    font-weight: 800;
    margin-bottom: 15px;
}

/* Texto */
.hero-riot-content p {
    font-size: 1.1rem;
    line-height: 1.5;
    margin-bottom: 25px;
    opacity: 0.9;
}

/* Video */
.event-hero {
  position: relative;
  width: 100%;
  height: 70vh;
  overflow: hidden;
}

#event-video {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

#paused-overlay {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.35);
  backdrop-filter: blur(4px), brightness(0.4);
  opacity: 0;
  transition: 0.3s ease;
  pointer-events: none;
}

#paused-overlay.visible {
  opacity: 1;
  pointer-events: all;
}

/* Controles do vídeo */
.video-controls {
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  z-index: 10;
}

/* Botão de som */
.sound-toggle {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background: #ff4d00;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 12px #ff4d00;
    transition: none; /* impede o botão de mexer no hover */
}

/* Ícones */
.sound-icon {
  display: none;
  font-size: 24px;
  color: white;
  position: absolute;
  opacity: 0;
  transition: opacity 0.25s ease, transform 0.25s ease;
  transform: scale(0.5);
}

/* Ícone ativo */
.sound-icon.active {
  opacity: 1;
  transform: scale(1);
  display: inline-block;
}

/* Estado mutado */
.sound-toggle.muted {
  background: rgba(150, 0, 0, 0.9);
  box-shadow: 0 0 20px rgba(150, 0, 0, 0.9);
}

/* Botão base */
#playPauseBtn {
  position: absolute;
  z-index: 20;
  width: 55px;
  left: 20px;
  height: 55px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--color-primary);
  cursor: pointer;
  transition: all 0.25s ease;
}

#playPauseBtn i {
  position: absolute;
  font-size: 30px;
  color: var(--color-primary);
}

#playPauseBtn.paused {
  top: 50%;
  display: flex;
  left: 50%;
  box-shadow: 0 0 30px var(--color-primary);
}

#playPauseBtn.playing {
  top: 90px;
  display: flex;
  left: 20px;
  box-shadow: 0 0 20px var(--color-primary);
}


/* Tela média (tablets) */
@media (max-width: 900px) {
  .center-toggle {
    width: 70px;
    height: 70px;
    font-size: 28px;
  }
}

/* Tela pequena (celulares) */
@media (max-width: 600px) {
  .center-toggle {
    width: 60px;
    height: 60px;
    font-size: 24px;
  }
}

/* RESPONSIVIDADE */
@media (max-width: 768px) {
    .hero-riot {
        height: 480px;
    }
    .hero-riot-content {
        left: 30px;
        bottom: 60px;
        max-width: 90%;
    }
    .hero-riot-content h1 {
        font-size: 2.4rem;
    }
    .hero-riot-content p {
        font-size: 1rem;
    }
}


/* Seções Gerais */
.section {
  padding: 80px 20px;
  text-align: center;
  background: var(--color-bg);
}

.section-title {
  font-family: var(--font-title);
  color: var(--color-highlight);
  text-shadow: 0 0 8px var(--color-shadow-highlight);
  font-size: 2rem;
  margin-bottom: 40px;
}

/* Card */
.card-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
}

/* Times */
.teams {
  gap: 30px;
}

.team-card {
  border-radius: 16px;
  padding: 25px;
  width: 180px;
  cursor: pointer;
  text-align: center;
  border: 2px solid;
  color: var(--team-primary);
  border-color: var(--team-secondary);
  box-shadow: 0 0 15px var(--team-primary)55;
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.6s ease, transform 0.6s ease, all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 240px;
}

.team-card img {
  width: 100px;
  height: auto;
  margin-bottom: 10px;
  transition: transform 0.3s ease, filter 0.3s ease;
}

.team-card strong {
  margin-top: auto;
  font-size: 1rem;
  color: #fff;
  text-align: center;
  padding-top: 12px;
}

.team-card:hover {
  transform: scale(1.05);
}

.team-card.show {
  opacity: 1;
  transform: translateY(0);
}

[data-team="acend"] {
  --team-primary: #8A2BE2;
  --team-secondary: #8A2BE2;
}

[data-team="loud"] {
  --team-primary: #00FF9C;
  --team-secondary: #00FF9C;
}

[data-team="eg"] {
  --team-primary: #4169E1;
  --team-secondary: #4169E1;
}

[data-team="edg"] {
  --team-primary: #E60012;
  --team-secondary: #E60012;
}

[data-team="nrg"] {
  --team-primary: #FF5A00;
  --team-secondary: #FF5A00;
}

/*  SOBRE */

.about {
  max-width: 1000px;
  margin: 60px auto;
  padding: 40px 35px;
  background: rgba(18, 18, 18, 0.6);
  backdrop-filter: blur(6px);
  border-radius: 18px;
  border: 2px solid var(--color-highlight);
  box-shadow: 0 0 25px var(--color-shadow-highlight);
  animation: aboutFadeIn 1.2s ease forwards;
  opacity: 0;
  transform: translateY(30px);
}

/* Animação de entrada */
@keyframes aboutFadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* TÍTULO com neon */
.about .section-title {
  font-size: 2.4rem;
  text-align: center;
  color: var(--color-highlight);
  margin-bottom: 25px;
  text-shadow: 0 0 12px var(--color-highlight), 0 0 25px var(--color-shadow-highlight);
  position: relative;
}

/* Linha neon abaixo do título */
.about .section-title::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -10px;
  width: 140px;
  height: 4px;
  background: var(--color-highlight);
  transform: translateX(-50%);
  border-radius: 4px;
  box-shadow: 0 0 12px var(--color-highlight);
}

/* PARÁGRAFOS */
.about p {
  font-size: 1.08rem;
  line-height: 1.7rem;
  color: #ddd;
  margin-bottom: 18px;
  animation: fadeSlide 0.8s ease forwards;
  opacity: 0;
  transform: translateY(15px);
}

/* animação suave para cada parágrafo */
.about p:nth-child(2) { animation-delay: 0.2s; }
.about p:nth-child(3) { animation-delay: 0.35s; }
.about p:nth-child(4) { animation-delay: 0.5s; }
.about p:nth-child(5) { animation-delay: 0.65s; }

@keyframes fadeSlide {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* LISTA ESTILIZADA */
.about-list {
  margin: 20px 0 30px;
  padding-left: 20px;
}

.about-list li {
  list-style: none;
  margin-bottom: 14px;
  padding-left: 28px;
  color: #e6e6e6;
  position: relative;
  font-size: 1.05rem;
  line-height: 1.6rem;
  animation: fadeSlide 0.8s ease forwards;
  opacity: 0;
  transform: translateY(15px);
}

/* animação progressiva da lista */
.about-list li:nth-child(1) { animation-delay: 0.75s; }
.about-list li:nth-child(2) { animation-delay: 0.9s; }
.about-list li:nth-child(3) { animation-delay: 1.05s; }
.about-list li:nth-child(4) { animation-delay: 1.2s; }

/* MARCADOR NEON */
.about-list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 8px;
  width: 12px;
  height: 12px;
  background: var(--color-highlight);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--color-shadow-highlight);
}

/* RESPONSIVIDADE */
@media (max-width: 768px) {
  .about {
    padding: 30px 22px;
  }

  .about .section-title {
    font-size: 2rem;
  }

  .about p,
  .about-list li {
    font-size: 1rem;
  }
}


.section {
  padding: 80px 7%;
}

.section-title {
  font-size: 2.2rem;
  font-family: var(--font-title);
  color: var(--color-highlight);
  text-align: center;
  margin-bottom: 40px;
  text-shadow: 0 0 15px var(--color-shadow-highlight);
}

/* Glow externo aplicado em todos os blocos */
.neon-border {
  background: var(--color-surface-alt);
  border-radius: 16px;
  border: 1px solid var(--color-highlight);
  box-shadow: 
    0 0 15px var(--color-shadow-highlight),
    0 0 30px var(--color-shadow-soft);
  padding: 25px;
}

/* Ícones padrão dos cards */
.section i {
  font-size: 2.2rem;
  color: var(--color-highlight);
  margin-bottom: 15px;
  text-shadow: 0 0 12px var(--color-shadow-highlight);
}

/* Títulos das seções com efeito neon */
.section-title {
  position: relative;
  font-size: 2.4rem;
  text-align: center;
  color: var(--color-highlight);
  text-shadow: 0 0 10px var(--color-shadow-highlight),
               0 0 20px var(--color-shadow-soft);
  opacity: 0;
  animation: fadeTitle 1.2s ease forwards;
}

@keyframes fadeTitle {
  0% {
    opacity: 0;
    transform: translateY(20px);
    text-shadow: none;
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    text-shadow: 0 0 10px var(--color-shadow-highlight),
                 0 0 20px var(--color-shadow-soft);
  }
}

/* Linha animada abaixo do título */
.section-title::after {
  content: "";
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 4px;
  border-radius: 4px;
  background: var(--color-highlight);
  box-shadow: 0 0 15px var(--color-shadow-highlight);
  animation: expandLine 1.4s ease forwards;
}

@keyframes expandLine {
  0% { width: 0; }
  100% { width: 120px; }
}

/* ──────────────────────────────
   1 — CARDS DA HISTÓRIA
────────────────────────────── */

.history-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  background: rgba(10,10,10,0.95);
  backdrop-filter: blur(3px);
  position: relative;
  z-index: 5;
  gap: 30px;
}

.history-card {
  text-align: center;
  padding: 35px;
  transition: 0.3s ease;
}

.history-card h3 {
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: var(--color-text);
}

.history-card p {
  color: var(--color-text-muted);
  line-height: 1.6;
}

.history-card:hover {
  transform: translateY(-6px);
  box-shadow:
    0 0 25px var(--color-shadow-highlight),
    0 0 45px var(--color-shadow-soft);
}

/* ──────────────────────────────
   2 — LINHA DO TEMPO (TIMELINE)
────────────────────────────── */

.timeline-section {
    width: 100%;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    gap: 80px;
}

.timeline-title {
    text-align: center;
    font-size: 2.5rem;
    color: var(--main-color);
    margin-bottom: 70px;
    text-shadow: 0 0 12px var(--main-color);
}

/* ====== TIMELINE ====== */
.timeline {
    position: relative;
    width: 80%;
    margin: 0 auto;
}

/* linha vertical */
.timeline::before {
    content: "";
    position: absolute;
    left: 50%;
    width: 4px;
    background: var(--color-highlight);
    height: 100%;
    transform: translateX(-50%);
    box-shadow: 0 0 15px var(--main-color);
}

/* ====== ITENS ====== */
.timeline-item {
    width: 50%;
    position: relative;
    margin: 40px 0;
    color: var(--color-highlight);
}

/* círculos */
.timeline-item::before {
    content: "";
    position: absolute;
    top: 20px;
    width: 15px;
    height: 15px;
    background: var(--color-highlight);
    border-radius: 50%;
    box-shadow: 0 0 12px var(--main-color);
}

/* ====== LADO ESQUERDO ====== */
.timeline-item.left {
    left: 0;
    text-align: left;
    padding-right: 40px;
    color: var(--color-highlight);
}

.timeline-item.left::before {
    right: -8px;
}

/* ====== LADO DIREITO ====== */
.timeline-item.right {
    left: 50%;
    text-align: left;
    padding-left: 40px;
    color: var(--color-highlight);
}

.timeline-item.right::before {
    left: -8px;
}

/* ====== CARDS ====== */
.timeline-content {
    background: #111;
    padding: 25px;
    border-radius: 15px;
    border: 1px solid var(--main-color);
    box-shadow: 0 0 20px rgba(255, 174, 0, 0.25);
}

.timeline-content h3 {
    font-size: 1.3rem;
    margin-bottom: 10px;
    color: var(--main-color);
}

.timeline-content p {
    color: #dcdcdc;
    font-size: 1rem;
}

/* ====== RESPONSIVO ====== */
@media (max-width: 900px) {
    .timeline {
        width: 95%;
    }
    .timeline::before {
        left: 20px;
    }
    .timeline-item {
        width: 100%;
        padding-left: 50px;
    }
    .timeline-item.left, 
    .timeline-item.right {
        left: 0;
    }
    .timeline-item::before {
        left: 12px !important;
    }
}

/* ──────────────────────────────
   3 — DESTAQUES (FEATURES)
────────────────────────────── */

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 30px;
  background: rgba(10,10,10,0.95);
  backdrop-filter: blur(3px);
  position: relative;
  z-index: 5;
}

.feature-card {
  text-align: center;
  padding: 35px;
  transition: 0.3s ease;
}

.feature-icon {
  font-size: 2.5rem !important;
}

.feature-card h3 {
  margin-top: 10px;
  margin-bottom: 8px;
  color: var(--color-text);
}

.feature-card p {
  color: var(--color-text-muted);
  line-height: 1.6;
}

.feature-card:hover {
  transform: translateY(-6px);
  box-shadow:
    0 0 25px var(--color-shadow-highlight),
    0 0 45px var(--color-shadow-soft);
}

/* ──────────────────────────────
   RESPONSIVIDADE
────────────────────────────── */

@media (max-width: 900px) {
  .timeline-line {
    left: 8px;
  }

  .timeline-item {
    width: 100%;
    margin-left: 30px !important;
  }

  .timeline-item::before {
    left: -35px !important;
  }
}

@media (max-width: 600px) {
  .section-title {
    font-size: 1.7rem;
  }

  .history-card,
  .feature-card {
    padding: 25px;
  }
}

/* ============================================================
   🔸 CONTATO
============================================================ */
#contact-btn {
  display: inline-block;
    background: linear-gradient(90deg, #00b7ff, #007bff);
    padding: 15px 32px;
    font-size: 1.1rem;
    border-radius: 12px;
    color: #fff;
    font-weight: 700;
    text-decoration: none;
    transition: 0.3s ease;
}     /* brilho inicial */

/* hover neon */
#contact-btn:hover {
  background-color:#fff;
  color: #fff;
  box-shadow:
    0 0 12px #00b7ff,
    0 0 25px #007bff;
  transform: scale(1.05);
}

/* ============================================================
   🔸 FOOTER
============================================================ */
.valorant-footer {
  margin-top: 60px;
  background: linear-gradient(180deg, var(--color-surface, #0e0e0e) 0%, #000 100%);
  border-top: 2px solid var(--color-primary);
  box-shadow: 0 -4px 25px var(--color-glow);
  color: #ccc;
  text-align: center;
  padding: 60px 20px 30px;
  font-family: 'Poppins', sans-serif;
  position: relative;
  transition: all 0.5s ease;
}

.footer-inner {
  max-width: 900px;
  margin: 0 auto;
}

.footer-logo {
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: var(--color-primary);
  text-shadow: 0 0 15px var(--color-glow);
  margin-bottom: 8px;
  transition: all 0.3s ease;
}

.footer-text {
  font-size: 0.95rem;
  color: #aaa;
  margin-bottom: 30px;
}

.footer-links, .social-links {
  display: flex;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.footer-links a, .social-links a {
  color: #aaa;
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.footer-links a:hover, .social-links a:hover {
  color: var(--color-primary);
  text-shadow: 0 0 10px var(--color-glow);
}

.social-links i {
  font-size: 1.2rem;
}

.footer-divider {
  width: 80%;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--color-primary), transparent);
  margin: 25px auto;
  opacity: 0.7;
}

.footer-copy {
  font-size: 0.85rem;
  color: #777;
  line-height: 1.5;
}

.footer-copy span {
  color: var(--color-primary);
  font-weight: 600;
}

.dev-name {
  color: #fff;
  text-shadow: 0 0 8px var(--color-glow, #00ff9c70);
}

/* ============================================================
   🔸 RESPONSIVIDADE
============================================================ */
@media (max-width: 1024px) {
  nav {
    gap: 20px;
  }
  .hero-content h1 {
    font-size: 2.5rem;
  }
  .card {
    width: 230px;
  }
}

@media (max-width: 768px) {
  header {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }

  .hero {
    height: auto;
    padding: 80px 20px;
  }

  .hero-content h1 {
    font-size: 2rem;
  }

  .card-grid {
    flex-direction: column;
    align-items: center;
  }

  .team-card {
    width: 150px;
  }
}

@media (max-width: 480px) {
  .hero-content h1 {
    font-size: 1.8rem;
  }
  .btn-primary {
    padding: 10px 20px;
  }
  .section-title {
    font-size: 1.5rem;
  }
}
</style>
</head>
<body>
  <div class="neon-particles"></div>

  <!-- ============================ HEADER ============================ -->
  <header>
    <div class="logo-container">
      <img src="/images/Logo SpikeZone.png" alt="Logo SpikeZone">
    </div>
    <nav class="nav-links">
      <a href="/pagina_central/inicio/inicio.html">Inicio</a>
      <a href="/pagina_central/eventos/eventos.html">Eventos</a>
      <a href="#sobre">Sobre</a>
      <a href="/pagina_central/contato/contato.html">Contato</a>
    </nav>
  </header>

  <!-- ============================ HERO ============================ -->
  <section class="hero-riot">
    <img src="/images/bg-valorant.jpg" alt="Banner" class="hero-riot-img">
    <div class="hero-riot-content">
        <h1>Onde os agentes se tornam lendas</h1>
        <p>
            Descubra os melhores times, eventos e jogadores do universo competitivo de Valorant.
        </p>
    </div>
</section>

  <!-- ============================ TIMES ============================ -->
  <section id="times" class="section">
    <h2 class="section-title">Times Lendários</h2>
    <div class="card-grid teams">
      <a href="/pagina_central/eventos/eventos.html" class="team-link">
        <div class="team-card" data-team="acend">
          <img src="/images/acend.png" alt="Acend">
          <strong>Acend</strong>
        </div>
      </a>
      <a href="/pagina_central/eventos/eventos.html" class="team-link">
        <div class="team-card" data-team="loud">
          <img src="/images/LOUD_logo.png" alt="LOUD">
          <strong>LOUD</strong>
        </div>
      </a>
      <a href="/pagina_central/eventos/eventos.html" class="team-link">
        <div class="team-card" data-team="eg">
          <img src="/images/eg.png" alt="Evil Geniuses">
          <strong>Evil Geniuses</strong>
        </div>
      </a>
      <a href="/pagina_central/eventos/eventos.html" class="team-link">
        <div class="team-card" data-team="edg">
          <img src="/images/edg.png" alt="EDward Gaming">
          <strong>EDG</strong>
        </div>
      </a>
      <a href="/pagina_central/eventos/eventos.html" class="team-link">
        <div class="team-card" data-team="nrg">
          <img src="/images/nrg-s-fun.png" alt="NRG">
          <strong>NRG</strong>
        </div>
      </a>
    </div>
  </section>
  <section id="champ-video">
    <div class="event-hero">
      <video id="event-video" autoplay muted playsinline></video>
      <div id="paused-overlay"></div>
      <div class="video-controls">
        <button id="sound-btn" class="sound-toggle">
          <i class="fa-solid fa-volume-high sound-icon sound-on active"></i>
          <i class="fa-solid fa-volume-xmark sound-icon sound-off"></i>
        </button>
      </div>
      <button id="playPauseBtn" class="sound-toggle">
        <i class="fa-solid fa-play"></i>
      </button>
    </div>
  </section>

  <!-- ============================ SOBRE ============================ -->
  <section class="section about">
  <h2 id="sobre" class="section-title">Sobre a SpikeZone</h2>

  <p>
    A <strong>SpikeZone</strong> é uma plataforma criada para conectar fãs, jogadores e equipes do universo de Valorant.
    Nosso objetivo é oferecer um ambiente moderno, dinâmico e informativo onde todos possam acompanhar suas organizações
    favoritas, explorar estatísticas, analisar jogadores e ficar por dentro dos principais campeonatos do cenário.
  </p>

  <p>
    Inspirada na estética futurista e competitiva do jogo, a SpikeZone foi desenvolvida com foco em 
    <strong>performance</strong>, <strong>design</strong> e <strong>imersão</strong>. Cada elemento visual foi pensado
    para trazer uma experiência semelhante ao universo neon e tecnológico que define Valorant.
  </p>

  <p>
    Nosso time busca constantemente atualizar conteúdos, trazer novos times, destacar talentos emergentes e manter a
    comunidade informada sobre as maiores disputas do cenário internacional — desde Challengers até eventos Masters e Champions.
  </p>

  <p>
    Além disso, a SpikeZone foi construída para ser mais do que um site: queremos criar um ponto de encontro para apaixonados pelo FPS da Riot Games. 
    Aqui você encontra:
  </p>

  <ul class="about-list">
    <li><strong>Perfis completos de jogadores</strong> com papéis, estatísticas e histórico competitivo.</li>
    <li><strong>Análises de equipes</strong> com cores personalizadas, logos oficiais e informações atualizadas.</li>
    <li><strong>Cobertura de eventos</strong> com datas, formato e maiores destaques.</li>
    <li><strong>Artigos e curiosidades</strong> sobre o cenário, estratégias e evolução das composições.</li>
  </ul>

  <p>
    A SpikeZone continua em evolução. Em breve, novos recursos serão adicionados, como rankings interativos,
    comparadores de jogadores, linha do tempo competitiva e ferramentas para análise de desempenho.
  </p>

  <p>
    Nosso compromisso é entregar uma plataforma que celebre a comunidade, valorize o cenário competitivo 
    e mantenha vivo o espírito de rivalidade saudável que torna Valorant único.
  </p>

  <p><strong>SpikeZone — Onde os agentes se tornam lendas.</strong></p>
</section>

  <section class="section history">
  <h2 id="section history" class="section-title">Nossa História</h2>

  <div class="history-cards">
    <div class="history-card neon-border">
      <i class="fas fa-bolt"></i>
      <h3>O Começo</h3>
      <p>A SpikeZone nasceu com a ideia de unir fãs do cenário competitivo de Valorant em uma plataforma visual,
      dinâmica e fiel ao universo do jogo.</p>
    </div>
    <div class="history-card neon-border">
      <i class="fas fa-users"></i>
      <h3>Crescimento da Comunidade</h3>
      <p>Com o aumento de jogadores e torcedores, expandimos nossos recursos, trazendo perfis completos,
      comparações e informações detalhadas sobre times e eventos.</p>
    </div>
    <div class="history-card neon-border">
      <i class="fas fa-trophy"></i>
      <h3>Conexão com o Competitivo</h3>
      <p>Integramos dados de grandes campeonatos, permitindo que fãs acompanhem suas equipes com precisão
      e imersão total.</p>
    </div>

  </div>
</section>

<section class="timeline-section">
    <h2 class="timeline-title">Evolução do SpikeZone</h2>
    <div class="timeline">
        <!-- 2020 -->
        <div class="timeline-item left">
            <div class="timeline-content neon-card">
                <h3>2020 – A Ideia</h3>
                <p>Primeiros esboços da plataforma surgem, inspirados na estética futurista de Valorant.</p>
            </div>
            <div class="timeline-center">
                <span class="dot"></span>
                <span class="line"></span>
            </div>
        </div>
        <!-- 2021 -->
        <div class="timeline-item right">
            <div class="timeline-center">
                <span class="dot"></span>
                <span class="line"></span>
            </div>
            <div class="timeline-content neon-card">
                <h3>2021 – Protótipo</h3>
                <p>Versão inicial com cards de jogadores e equipes é lançada experimentalmente.</p>
            </div>
        </div>
        <!-- 2023 -->
        <div class="timeline-item left">
            <div class="timeline-content neon-card">
                <h3>2023 – Expansão</h3>
                <p>Nova interface, mais responsiva e imersiva, atrai milhares de visitantes.</p>
            </div>
            <div class="timeline-center">
                <span class="dot"></span>
                <span class="line"></span>
            </div>
        </div>
        <!-- 2025 -->
        <div class="timeline-item right">
            <div class="timeline-center">
                <span class="dot"></span>
                <span class="line"></span>
            </div>
            <div class="timeline-content neon-card">
                <h3>2025 – SpikeZone Atual</h3>
                <p>Plataforma completa com dados competitivos, visual neon e experiência única.</p>
            </div>
        </div>

    </div>
</section>

<section id="section features" class="section features">
  <h2 class="section-title">Destaques da Plataforma</h2>

  <div class="feature-grid">
    <div class="feature-card neon-border">
      <i class="fas fa-database feature-icon"></i>
      <h3>Banco de Jogadores</h3>
      <p>Informações detalhadas de atletas, completo com estatísticas e histórico competitivo.</p>
    </div>
    <div class="feature-card neon-border">
      <i class="fas fa-shield-alt feature-icon"></i>
      <h3>Equipes Oficiais</h3>
      <p>Times atualizados com paletas personalizadas, logos e dados dos campeonatos.</p>
    </div>
    <div class="feature-card neon-border">
      <i class="fas fa-broadcast-tower feature-icon"></i>
      <h3>Eventos e Torneios</h3>
      <p>Calendário visual e organizado, incluindo Masters, Champions e regionais.</p>
    </div>
  </div>
</section>

  <!-- ============================ FOOTER ============================ -->
  <footer class="valorant-footer">
    <div class="footer-logo">SPIKEZONE</div>
    <p>Onde os agentes se tornam lendas.</p>
    <div class="footer-links">
      <a href="/pagina_central/inicio/inicio.html">Inicio</a>
      <a href="/pagina_central/eventos/eventos.html">Eventos</a>
      <a href="/pagina_central/contato/contato.html">Contato</a>
    </div>
    <div class="social-links">
                <a href="https://x.com" title="x"><i class="fab fa-x"></i></a>
                <a href="https://instagram.com" title="Instagram"><i class="fab fa-instagram"></i></a>
                <a href="https://github.com" title="GitHub"><i class="fab fa-github"></i></a>
                <a href="https://linkedin.com" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
                <a href="https://discord.com" title="Discord"><i class="fab fa-discord"></i></a>
            </div>
    <div class="footer-divider"></div>
    <p class="footer-copy">
      © 2025 <span>SpikeZone</span> | Inspirado no universo Valorant<br>
      Desenvolvido por <span class="dev-name">TechEd</span>
    </p>
  </div>
  </footer>

  <script src="inicio.js" defer></script>
</body>
</html>

