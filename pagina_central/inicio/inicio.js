// ============================
// SCRIPT SPIKEZONE - INÍCIO
// ============================

document.addEventListener("DOMContentLoaded", () => {

  // ======== Rolagem suave ========
  const links = document.querySelectorAll('nav a[href^="#"]');
  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // ======== Destacar link ativo ========
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 80;
      if (pageYOffset >= sectionTop) current = section.getAttribute("id");
    });
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // ======== Efeito neon e clique nos times ========
  const teamCards = document.querySelectorAll(".team-card");
  teamCards.forEach(card => {
    const color = card.style.borderColor;

    // Efeito de hover
    card.addEventListener("mouseenter", () => {
      card.style.boxShadow = `0 0 20px ${color}, 0 0 40px ${color}`;
      card.style.transform = "scale(1.05)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.boxShadow = "none";
      card.style.transform = "scale(1)";
    });

    // Clique no time → redireciona para a página do time
    card.addEventListener("click", () => {
      const teamName = card.querySelector("strong").textContent.trim().toLowerCase().replace(/\s+/g, "-");
      // Como o JS está em /inicio/, subimos uma pasta (../)
      window.location.href = `../times/${teamName}.html`;
    });
  });

  // ======== Tema baseado no time selecionado ========
  const html = document.documentElement;
  const teamTheme = html.dataset.team; // Exemplo: "loud"

  const teamColors = {
    loud: "#00FF85",
    acend: "#8A2BE2",
    eg: "#4169E1",
    edg: "#E60012",
    nrg: "#FF5A00"
  };

  if (teamTheme && teamColors[teamTheme.toLowerCase()]) {
    const color = teamColors[teamTheme.toLowerCase()];
    document.documentElement.style.setProperty("--team-color", color);

    // Aplica a cor do tema em botões e títulos
    document.querySelectorAll(".btn-primary").forEach(btn => {
      btn.style.backgroundColor = color;
      btn.style.boxShadow = `0 0 20px ${color}`;
    });

    document.querySelectorAll(".section-title").forEach(title => {
      title.style.textShadow = `0 0 15px ${color}`;
    });
  }

  // ======== Animação de entrada dos cards ========
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".card, .team-card").forEach(card => observer.observe(card));
});


document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("event-video");
  const soundBtn = document.getElementById("sound-btn");
  const iconOn = document.querySelector(".sound-on");
  const iconOff = document.querySelector(".sound-off");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const overlay = document.getElementById("paused-overlay");
  const icon = playPauseBtn?.querySelector("i");

  if (!video) return;

  let savedVolume = 0.1;

  video.src = "/video/Valorant Video-Player/Die For You.mp4";
  video.volume = savedVolume;
  video.muted = false;

  /* ============================
        BOTÃO DE SOM
  ============================ */
  soundBtn?.addEventListener("click", () => {
    video.muted = !video.muted;

    if (video.muted) {
      iconOn.classList.remove("active");
      iconOff.classList.add("active");
      soundBtn.classList.add("muted");
    } else {
      iconOff.classList.remove("active");
      iconOn.classList.add("active");
      soundBtn.classList.remove("muted");
    }
  });

  /*  PLAY / PAUSE */
  function updatePlayPauseUI() {
    if (!icon) return;

    if (video.paused) {
      playPauseBtn.classList.add("paused");
      playPauseBtn.classList.remove("playing");

      overlay.classList.add("visible");

      icon.classList.remove("fa-pause");
      icon.classList.add("fa-play");
    } else {
      playPauseBtn.classList.remove("paused");
      playPauseBtn.classList.add("playing");

      overlay.classList.remove("visible");

      icon.classList.remove("fa-play");
      icon.classList.add("fa-pause");
    }
  }

  playPauseBtn?.addEventListener("click", () => {
    if (video.paused) video.play();
    else video.pause();
  });

  video.addEventListener("play", updatePlayPauseUI);
  video.addEventListener("pause", updatePlayPauseUI);

  updatePlayPauseUI();

  /* ============================
        PAUSE AO TROCAR DE ABA */
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      video.pause();
    } else {
      video.play().catch(() => {});
    }
  });
});