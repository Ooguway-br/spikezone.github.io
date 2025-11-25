const teams = [
  {
    id: 1,
    name: "• Acend • <br> Champions 2021",
    colors: { primary: "#8A2BE2", secondary: "#8A2BE2" },
    img:"/images/acend.png",
    players: [
      { id: 1, name: "cNed", role: "<br> Duelista", img: '/agents/Jett.png',},
      { id: 2, name: "BONECOLD", role: "<br> Controlador/Iniciador", img: '/agents/Sova.png',},
      { id: 3, name: "starxo", role: "<br> Sentinela/Iniciador", img: '/agents/Astra.png',},
      { id: 4, name: "Kiles", role: "<br> Sentinela", img: '/agents/Cypher.webp',},
      { id: 5, name: "zeek", role: "<br> Flex", img: '/agents/KAYO.png',},
    ]
  },

  {
    id: 2,
    name: "• LOUD • <br> Champions 2022",
    colors: { primary: "#00FF9C", secondary: "#00FF9C" },
    img:"/images/LOUD_logo.png",
    players: [
      { id: 1, name: "aspas", role: "<br> Duelista", img: '/agents/Jett.png',},
      { id: 2, name: "Sacy", role: "<br> Iniciador", img: '/agents/Sova.png',},
      { id: 3, name: "saadhak", role: "<br> IGL/Iniciador", img: '/agents/KAYO.png',},
      { id: 4, name: "Less", role: "<br> Sentinela", img: '/agents/Cypher.webp',},
      { id: 5, name: "pANcada", role: "<br> Controlador", img: '/agents/Omen.webp'},
    ]
  },

  {
    id: 3,
    name: "• Evil Geniuses • <br> Champions 2023",
    colors: { primary: "#4169E1", secondary: "#4169E1" },
    img:"/images/eg.png",
    players: [
      { id: 1, name: "Demon1", role: "<br> Duelista", img: '/agents/Jett.png',},
      { id: 2, name: "jawgemo", role: "<br> Duelista/Controlador" , img: '/agents/Omen.webp',},
      { id: 3, name: "Boostio", role: "<br> Controlador/Sentinela", img: '/agents/Killjoy.png',},
      { id: 4, name: "C0M", role: "<br> Controlador/Iniciador", img: '/agents/Sova.png',},
      { id: 5, name: "Ethan", role: "<br> Flex", img: '/agents/Skye.webp',},
    ]
  },

  {
    id: 4,
    name: "• EDward Gaming • <br> Champions 2024",
    colors: { primary: "#E60012", secondary: "#E60012" },
    img:"/images/edg.png",
    players: [
      { id: 1, name: "nobody", role: "<br> Iniciador", img: '/agents/Fade.webp',},
      { id: 2, name: "CHICHOO", role: "<br> Sentinela/Controlador", img: '/agents/Cypher.webp',},
      { id: 3, name: "ZmjjKK", role: "<br> Duelista", img: '/agents/Neon.webp',},
      { id: 4, name: "Smoggy", role: "<br> Controlador", img: '/agents/Clove.webp',},
      { id: 5, name: "S1Mon", role: "<br> Flex", img: '/agents/Breach.webp',},
    ]
  },

  {
    id: 5,
    name: "• NRG •<br> Champions 2025",
    colors: { primary: "#FF5A00", secondary: "#FF5A00" },
    img:"/images/nrg-s-fun.png",
    players: [
      { id: 1, name: "mada", role: "<br> Duelista", img: '/agents/Yoru.webp',},
      { id: 2, name: "s0m", role: "<br> Controlador", img: '/agents/Omen.webp',},
      { id: 3, name: "brawk", role: "<br> Iniciador", img: '/agents/Sova.png',},
      { id: 4, name: "skuba", role: "<br> Sentinela", img: '/agents/Vyse.webp',},
      { id: 5, name: "Ethan", role: "<br> IGL/Flex", img: '/agents/KAYO.png',},
    ]
  },
];

const events = [
  { 
    id: 1, 
    name: 'VCT EMEA',
    color: '#E8FF00',
    img: '/images/vct-emea.png',
    events: [
      { id: 1, name: "Kickoff", start: "2026-01", end: "2026-02", color: '#E8FF00', details: 'O torneio inicial que define as seeds para o Stage 1.',},
      { id: 2, name: "Masters", start: "2026-02", end: "2026-03", color: '#8C6BFF', details: 'Masters Santiago que ocorrerá no Chile'},
      { id: 3, name: "Stage 1", start: "2026-03", end: "2026-05", color: '#E8FF00', details: 'Primeira fase classificatória do circuito EMEA'},
      { id: 4, name: "Masters", start: "2026-06", end: "2026-06", color: '#8C6BFF', details: 'Masters Londres que ocorrerá na Inglaterra'},
      { id: 5, name: "Stage 2", start: "2026-07", end: "2026-08", color: '#FF6B00', details: 'Segunda fase classificatória do circuito Americas'},
      { id: 6, name: "Champions", start: "2026-09", end: "2026-08", color: '#C8B273', details: 'O Principal campeonato de Valorant do ano'}
    ],
  }, 

  {
    id: 2, 
    name: 'VCT China',
    color: '#E6324B',
    img: '/images/vct-china.png',
    events: [
      { id: 1, name: "Kickoff", start: "2026-01", end: "2026-02", color: '#E6324B', details: 'O torneio inicial que define as seeds para o Stage 1.',},
      { id: 2, name: "Masters", start: "2026-02", end: "2026-03", color: '#8C6BFF', details: 'Masters Santiago que ocorrerá no Chile'},
      { id: 3, name: "Stage 1", start: "2026-03", end: "2026-05", color: '#E6324B', details: 'Primeira fase classificatória do circuito China'},
      { id: 4, name: "Masters", start: "2026-06", end: "2026-06", color: '#8C6BFF', details: 'Masters Londres que ocorrerá na Inglaterra'},
      { id: 5, name: "Stage 2", start: "2026-07", end: "2026-08", color: '#FF6B00', details: 'Segunda fase classificatória do circuito Americas'},
      { id: 6, name: "Champions", start: "2026-09", end: "2026-08", color: '#C8B273', details: 'O Principal campeonato de Valorant do ano'}
    ],
  },

  {
    id: 3, 
    name: 'VCT Pacific',
    img: '/images/vct-pacific.png',
    color: '#00C8D9',
    events: [
      { id: 1, name: "Kickoff", start: "2026-01", end: "2026-02", color: '#00C8D9', details: 'O torneio inicial que define as seeds para o Stage 1.',},
      { id: 2, name: "Masters", start: "2026-02", end: "2026-03", color: '#8C6BFF', details: 'Masters Santiago que ocorrerá no Chile'},
      { id: 3, name: "Stage 1", start: "2026-03", end: "2026-05", color: '#00C8D9', details: 'Primeira fase classificatória do circuito Pacific'},
      { id: 4, name: "Masters", start: "2026-06", end: "2026-06", color: '#8C6BFF', details: 'Masters Londres que ocorrerá na Inglaterra'},
      { id: 5, name: "Stage 2", start: "2026-07", end: "2026-08", color: '#00C8D9', details: 'Segunda fase classificatória do circuito Pacific'},
      { id: 6, name: "Champions", start: "2026-09", end: "2026-08", color: '#C8B273', details: 'O Principal campeonato de Valorant do ano'}
    ],
  }, 

  {
    id: 4, 
    name: 'VCT Americas',
    color: '#FF6B00',
    img: '/images/vct-americas.png',
    events: [
      { id: 1, name: "Kickoff", start: "2026-01", end: "2026-02", color: '#FF6B00', details: 'O torneio inicial que define as seeds para o Stage 1.',},
      { id: 2, name: "Masters", start: "2026-02", end: "2026-03", color: '#8C6BFF', details: 'Masters Santiago que ocorrerá no Chile'},
      { id: 3, name: "Stage 1", start: "2026-03", end: "2026-05", color: '#FF6B00', details: 'Primeira fase classificatória do circuito Americas'},
      { id: 4, name: "Masters", start: "2026-06", end: "2026-06", color: '#8C6BFF', details: 'Masters Londres que ocorrerá na Inglaterra'},
      { id: 5, name: "Stage 2", start: "2026-07", end: "2026-08", color: '#FF6B00', details: 'Segunda fase classificatória do circuito Americas'},
      { id: 6, name: "Champions", start: "2026-09", end: "2026-08", color: '#C8B273', details: 'O Principal campeonato de Valorant do ano'}
    ],
  },
];


// Marca qual time está aberto
let currentOpenTeam = null;

// Marca qual região está aberta
let currentOpenRegion = null;

function renderTeamsList() {
  const container = document.getElementById('teams-list');
  container.innerHTML = '';

  teams.forEach(team => {
    const div = document.createElement('div');
    div.className = 'card team-card';
    div.innerHTML = `<img src="${team.img}"<strong>${team.name}</strong>`;
    div.style.color = team.color;
    div.style.textShadow = `0 0 10px ${team.color}, 0 0 20px ${team.color}`;
    div.style.border = `1px solid ${team.colors.primary}`;
    div.style.background = `linear-gradient(190deg, ${team.colors.secondary}, #0a0d10)`;
    
    div.addEventListener('click', () => {
      renderTeam(team.id);
    });

    container.appendChild(div);
  });
}

function renderTeam(teamId) {
  const container = document.getElementById('players-list');

  // Fecha caso clique no mesmo time
  if (currentOpenTeam === teamId) {
    container.classList.remove('open');
    audioClose.play();
    setTimeout(() => container.innerHTML = '', 350);
    currentOpenTeam = null;
    return;
  }

  const team = teams.find(t => t.id === teamId);
  currentOpenTeam = teamId;

  // Fecha o que está aberto antes
  container.classList.remove('open');

  setTimeout(() => {
    container.innerHTML = '';

    const playersTitle = document.createElement('h2');
    playersTitle.textContent = 'Jogadores';
    playersTitle.classList.add('champions-text');
    playersTitle.style.textAlign = 'center';
    playersTitle.style.marginBottom = '20px';
    playersTitle.style.fontWeight = '600';
    playersTitle.style.letterSpacing = '1px';
    playersTitle.style.opacity = '0';
    playersTitle.style.transition = 'opacity 0.4s ease';
    playersTitle.style.color = team.color;
    playersTitle.style.textShadow = `0 0 10px ${team.color}, 0 0 20px ${team.color}`;

    container.appendChild(playersTitle);

    // animação de fade-in no título
    setTimeout(() => {
      playersTitle.style.opacity = '1';
    }, 100);

    // animação pulsante do brilho
    playersTitle.animate(
      [
        { textShadow: `0 0 10px ${team.color}, 0 0 20px ${team.color}` },
        { textShadow: `0 0 20px ${team.color}, 0 0 40px ${team.color}` },
        { textShadow: `0 0 10px ${team.color}, 0 0 20px ${team.color}` }
      ],
      {
        duration: 3000,
        iterations: Infinity,
        easing: 'ease-in-out'
      }
    );

    team.players.forEach((p, index) => {
      const div = document.createElement('div');
      div.className = 'card player-card';
      div.innerHTML = `
        <img src="${p.img}" alt="${p.name}" class="player-photo">
        <strong>${p.name}</strong>
        <span>${p.role}</span>
      `;

      div.style.border = `1px solid ${team.colors.primary}`;
      div.style.background = `linear-gradient(190deg, ${team.colors.secondary}, #0a0d10)`;

      div.addEventListener('click', () => {
        window.location.href = `/pagina_central/eventos/player/player.html?id=${p.id}&team=${team.id}`;
      });

      container.appendChild(div);

      // Animação de aparição com delay
      setTimeout(() => {
        div.classList.add('show');
      }, 100 * index);
    });

    container.classList.add('open');
  }, 700);
}



function renderEventsList() {
  const container = document.getElementById('events-list');
  container.innerHTML = '';

  events.forEach(region => {
    const regionDiv = document.createElement('div');
    regionDiv.className = 'region-card card';
    regionDiv.style.border = `2px solid ${region.color}`;
    regionDiv.style.color = region.color;

    // Card principal com imagem + nome
    regionDiv.innerHTML = `
      <div class="region-header" style="text-align:center;">
        <img src="${region.img}" alt="${region.name}" class="region-logo">
      </div>
    `;

    const eventsContainer = document.createElement('div');
    eventsContainer.className = 'events-container';
    eventsContainer.style.display = 'none';
    eventsContainer.style.transition = "max-height .35s ease";
    regionDiv.appendChild(eventsContainer);

    // Clique → abrir / fechar região
    regionDiv.addEventListener('click', (e) => {
      if (e.target.closest('.event-detail')) return;

      if (currentOpenRegion === region.id) {
        eventsContainer.style.display = 'none';
        eventsContainer.removeAttribute('open');
        if (window.audioClose) audioClose.play();
        currentOpenRegion = null;
        return;
      }

      if (currentOpenRegion !== null) {
        const previousOpen = document.querySelector('.events-container[open]');
        if (previousOpen) {
          previousOpen.removeAttribute('open');
          previousOpen.style.display = 'none';
        }
      }

      // → Renderiza eventos da região
      renderEventDetails(region, eventsContainer);
      currentOpenRegion = region.id;
      eventsContainer.setAttribute('open', '');
      eventsContainer.style.display = 'block';
    });

    container.appendChild(regionDiv);
  });
}

function renderEventDetails(region, container) {
  container.innerHTML = '';

  region.events.forEach((event, index) => {
    const div = document.createElement('div');
    div.className = 'card event-detail';
    div.style.border = `1px solid ${region.color}`;
    div.style.color = region.color;
    div.style.padding = `17px`
    div.innerHTML = `
      <strong style="color: ${event.color}">${event.name.toUpperCase()}</strong><br>
      <span>${event.start} → ${event.end}</span>
    `;

    // Impede que o clique no evento feche o container
    div.addEventListener('click', (e) => {
      e.stopPropagation();
    });

    container.appendChild(div);

    // Animação suave de entrada
    div.style.opacity = '0';
    div.style.transform = 'translateY(12px)';
    setTimeout(() => {
      div.style.opacity = '1';
      div.style.transform = 'translateY(0)';
      div.style.transition = '0.3s ease';
    }, 100 * index);
  });
}

function updateFooterColor(team) {
  const footer = document.querySelector(".valorant-footer");
  const footerLogo = document.querySelector(".footer-logo");
  const footerLinks = document.querySelectorAll(".footer-links a");
  const footerSocial = document.querySelectorAll(".footer-social a");

  if (!footer || !team) return;

  footer.style.borderTop = `2px solid ${team.colors.primary}`;
  footer.style.boxShadow = `0 -2px 20px ${team.colors.primary}40`;
  footerLogo.style.color = team.colors.primary;
  footerLogo.style.textShadow = `0 0 12px ${team.colors.primary}80`;

  footerLinks.forEach(link => {
    link.style.color = team.colors.primary;
  });

  footerSocial.forEach(icon => {
    icon.style.color = team.colors.primary;
  });
}

// Seleciona todos os cards de time
const teamCards = document.querySelectorAll(".team-card");

// Quando o mouse passa por cima de um time, muda o tema
teamCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    const teamName = card.getAttribute("data-team"); // exemplo: "loud", "nrg", etc.
    document.documentElement.setAttribute("data-team", teamName);
  });

  // Quando o mouse sai, volta para o tema padrão
  card.addEventListener("mouseleave", () => {
    document.documentElement.removeAttribute("data-team");
  });
});

document.addEventListener('DOMContentLoaded', () => {
  renderTeamsList();
  renderEventsList();
});

document.addEventListener("DOMContentLoaded", () => {
  const contactButton = document.getElementById("contact-button");

  if (contactButton) {
    contactButton.addEventListener("click", () => {
      // Redireciona para a página de contatos
      window.location.href = "/pagina_central/contato/contato.html";
      // OU, se for uma seção na mesma página:
      // document.getElementById("contato").scrollIntoView({ behavior: "smooth" });
    });
  }
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

  video.src = "/video/Valorant Video-Player/Valorant Video-Player.mp4";
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