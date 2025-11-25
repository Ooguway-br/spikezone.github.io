
const teams = [
  {
    id: 1,
    name: "Acend",
    colors: { primary: "#8A2BE2", secondary: "#5D3FD3" },
    short: "acend",
    players: [
      { id: 1, 
        name: "cNed", 
        role: "Duelista",
        bio: "Duelista de explosão mecânica, conhecido por sua mira fria e confiança absoluta em duelos diretos.",
        avatar: '/agents/Jett.png',
      },
      { id: 2, 
        name: "BONECOLD", 
        role: "Controlador/Iniciador",
        bio: "Capitão estratégico e flexível, atuando como controlador e iniciador conforme necessidade.",
        avatar: '/agents/Sova.png',
      },
      { id: 3, 
        name: "starxo", 
        role: "Sentinela/Iniciador",
        bio: "Jogador versátil com talento para antecipar rotações e jogadas adversárias.",
        avatar: '/agents/Astra.png',
      },
      { id: 4, 
        name: "Kiles", 
        role: "Sentinela",
        bio: "Sentinela seguro e consistente, sua principal característica é o posicionamento impecável e capacidade de atrasar pushs inteiros sozinho.",
        avatar: '/agents/Cypher.webp',
      },
      { id: 5, 
        name: "zeek", 
        role: "Flex",
        bio: "Jogador agressivo e adaptável, capaz de alternar entre funções sem perder impacto.",
        avatar: '/agents/KAYO.png',
      }
    ]
  },

  {
    id: 2,
    name: "LOUD • Champions 2022",
    colors: { primary: "#00FF9C", secondary: "#0F332E" },
    short: "loud",
    players: [
      { 
        id: 1, 
        name: "aspas", 
        role: "Duelista",
        bio: "Conhecido por sua mira cirúrgica e confiança absurda em espaços curtos. Foi a estrela principal da LOUD na Champions 2022, carregando rounds decisivos e ditando o ritmo agressivo do time.",
        avatar: '/agents/Jett.png',
      },
      { 
        id: 2, 
        name: "Sacy", 
        role: "Iniciador",
        bio: "Ex-jogador profissional de League of Legends, Sacy se tornou referência mundial em setups inteligentes, leitura de mapa e controle de ritmo. O cérebro defensivo da LOUD.",
        avatar: '/agents/Sova.png',
      },
      { 
        id: 3, 
        name: "saadhak", 
        role: "IGL / Iniciador",
        bio: "Líder dentro e fora do servidor, responsável pela identidade disciplinada da LOUD. Seu estilo combina calma estratégica com explosões de agressividade cirúrgica.",
        avatar: '/agents/KAYO.png',
      },
      { 
        id: 4, 
        name: "Less", 
        role: "Sentinela",
        bio: "Menor do time em idade, maior em frieza. Less se destacou pela consistência absurda e posicionamento impecável. Um dos melhores sentinelas do mundo na época.",
        avatar: '/agents/Cypher.webp',
      },
      { 
        id: 5, 
        name: "pANcada", 
        role: "Controlador",
        bio: "Responsável pelas smokes que garantiram espaço e domínio de mapa. pANcada foi o alicerce invisível da equipe, garantindo suporte impecável às entradas.",
        avatar: '/agents/Omen.webp',
      }
    ]
  },

  {
    id: 3,
    name: "Evil Geniuses • Champions 2023",
    colors: { primary: "#4169E1", secondary: "#1B1F3B" },
    short: "eg",
    players: [
      { id: 1, 
        name: "Demon1", 
        role: "Duelista",
        bio: "Um dos maiores ascensos do competitivo do VALORANT. Explosão mecânica, confiança e frieza contra os melhores do mundo.",
        avatar: '/agents/Jett.png',
      },
      { id: 2, 
        name: "jawgemo", 
        role: "Duelista/Controlador",
        bio: "Jogador energético com estilo imprevisível. Sua criatividade em rotações e timings tornou o EG um time de ritmo quebrado e difícil de ler.",
        avatar: '/agents/Omen.webp',
      },
      { id: 3, 
        name: "Boostio", 
        role: "Controlador/Sentinela",
        bio: "Líder emocional da equipe, responsável por estabilidade dentro do servidor. Atua como controlador e sentinela com leitura madura e foco estratégico.",
        avatar: '/agents/Killjoy.png',
      },
      { id: 4, 
        name: "C0M", 
        role: "Controlador/Iniciador",
        bio: "Jogador técnico, especializado em setups de utilidade e controle de espaço.",
        avatar: '/agents/Sova.png',
      },
      { id: 5, 
        name: "Ethan", 
        role: "Flex",
        bio: "Veterano do FPS tático, vindo do CS. Experiente e inteligente, sempre aparece em momentos críticos com impacto silencioso porém decisivo.",
        avatar: '/agents/Skye.webp',
      },
    ]
  },

  {
    id: 4,
    name: "EDward Gaming • Champions 2024",
    colors: { primary: "#E60012", secondary: "#1B0F0F" },
    short: "edg",
    players: [
      { id: 1, 
        name: "nobody", 
        role: "Iniciador",
        bio: "Iniciador metódico, exímio em criar janelas de entrada para o time. Mestre em setups e leitura defensiva.",
        avatar: '/agents/Fade.webp',
      },
      { id: 2, 
        name: "CHICHOO", 
        role: "Sentinela/Controlador",
        bio: "Jogador inteligente e adaptável, alterna entre controlador e sentinela com fluidez rara.",
        avatar: '/agents/Cypher.webp',
      },
      { id: 3, 
        name: "ZmjjKK", 
        role: "Duelista",
        bio: "Ícone do servidor chinês, duelista explosivo com tomada de decisão agressiva e mecânica afiada. Uma estrela ascendente global.",
        avatar: '/agents/Neon.webp',
      },
      { id: 4, 
        name: "Smoggy", 
        role: "Controlador",
        bio: "Controlador com foco em influência de área e negação de espaço. Estilo paciente e eficiente.",
        avatar: '/agents/Clove.webp',
      },
      { id: 5, 
        name: "S1Mon", 
        role: "Flex",
        bio: "Jogador flex com grande capacidade de adaptação. Simples, mortal e consistente.",
        avatar: '/agents/Breach.webp',
      },
    ]
  },

  {
    id: 5,
    name: "NRG • Champions 2025",
    colors: { primary: "#FF5A00", secondary: "#111" },
    short: "nrg",
    players: [
      { id: 1, 
        name: "mada", 
        role: "Duelista",
        bio: "Duelista de ritmo acelerado e extremamente confiante.",
        avatar: '/agents/Yoru.webp',
      },
      { id: 2, 
        name: "s0m", 
        role: "Controlador",
        bio: "Controlador experiente com precisão mecânica acima da média. Sua calma sob pressão é uma das maiores forças do time.",
        avatar: '/agents/Omen.webp',
      },
      { id: 3, 
        name: "brawk", 
        role: "Iniciador",
        bio: "Iniciador com excelente timing e suporte objetivo.",
        avatar: '/agents/Sova.png',
      },
      { id: 4, 
        name: "skuba", 
        role: "Sentinela",
        bio: "Sentinela excelente no controle de território. Não desperdiça utilidade, joga para maximizar vantagem de mapa.",
        avatar: '/agents/Vyse.webp',
      },
      { id: 5, 
        name: "Ethan",
        role: "Flex",
        bio: "Veterano respeitado, sua experiência transita entre CS e Valorant. É a voz equilibrada do time e fecha rounds decisivos. Foi o primeiro a ganhar duas vezes o Champions",
        avatar: '/agents/KAYO.png',
      },
    ]
  },
];

const urlParams = new URLSearchParams(window.location.search);
const teamId = parseInt(urlParams.get("team"));
const playerId = parseInt(urlParams.get("id"));

// Encontra o time e o jogador
const team = teams.find(t => t.id === teamId);
const player = team ? team.players?.find(p => p.id === playerId) : null;

// ============================
// ATUALIZA OS DADOS NA PÁGINA
// ============================
if (team && player) {
  document.getElementById("player-name-title").textContent = player.name;
  document.getElementById("player-role").textContent = player.role;
  document.getElementById("player-team").innerHTML = team.name;
  document.getElementById("player-bio").textContent = player.bio;
  document.getElementById("player-avatar").src =
    player.avatar || "https://via.placeholder.com/200";
  document.documentElement.style.setProperty('--color-primary', team.colors.primary);
  document.documentElement.style.setProperty('--color-surface', team.colors.secondary);
  document.documentElement.style.setProperty('--color-glow', `${team.colors.primary}60`);

  // ============================
  // APLICA AS CORES DO TIME
  // ============================
  const colorPrimary = team.colors.primary;
  const colorSecondary = team.colors.secondary;
  const colorShadow = `${colorPrimary}50`;

  // Define gradiente no fundo do container
  const playerContainer = document.querySelector(".profile-container");
  playerContainer.style.background = `linear-gradient(145deg, ${colorSecondary}, #0a0a0a)`;
  playerContainer.style.border = `1px solid ${colorPrimary}`;
  playerContainer.style.boxShadow = `0 0 25px ${colorShadow}`;

  // Atualiza textos e bordas
  const nameTitle = document.getElementById("player-name-title");
  const teamName = document.getElementById("player-team");
  const avatar = document.getElementById("player-avatar");

  nameTitle.style.color = colorPrimary;
  nameTitle.style.textShadow = `0 0 12px ${colorShadow}`;
  teamName.style.color = colorPrimary;
  teamName.style.textShadow = `0 0 12px ${colorShadow}`;
  avatar.style.border = `3px solid ${colorPrimary}`;
  avatar.style.boxShadow = `0 0 20px ${colorShadow}`;

  const footer = document.querySelector(".valorant-footer");
  const footerLogo = footer.querySelector(".footer-logo");
  const footerBorder = `${colorPrimary}`;
  const footerGlow = `${colorPrimary}70`;

  footer.style.borderTop = `2px solid ${footerBorder}`;
  footer.style.boxShadow = `0 -4px 20px ${footerGlow}`;
  footerLogo.style.color = colorPrimary;
  footerLogo.style.textShadow = `0 0 12px ${footerGlow}`;

// se quiser aplicar gradiente no fundo do footer
  footer.style.background = `linear-gradient(180deg, ${colorSecondary} 0%, #000 100%)`;

  const backButton = document.querySelector(".back-button");

  if (backButton) {
    backButton.style.background = colorPrimary;
    backButton.style.color = "#000"; // texto escuro pra contraste
    backButton.style.border = `2px solid ${colorPrimary}`;
    backButton.style.boxShadow = `0 0 15px ${colorShadow}`;
    backButton.style.fontWeight = "600";
    backButton.style.transition = "all 0.3s ease";
    backButton.style.textShadow = `0 0 8px ${colorShadow}`;

  // Efeito ao passar o mouse
    backButton.addEventListener("mouseenter", () => {
    backButton.style.background = colorSecondary;
    backButton.style.color = colorPrimary;
    backButton.style.boxShadow = `0 0 25px ${colorPrimary}`;
  });

    backButton.addEventListener("mouseleave", () => {
    backButton.style.background = colorPrimary;
    backButton.style.color = "#000";
    backButton.style.boxShadow = `0 0 15px ${colorShadow}`;
  });
}

  // Animação de entrada suave
  playerContainer.style.opacity = "0";
  playerContainer.style.transition = "opacity 0.8s ease";
  setTimeout(() => (playerContainer.style.opacity = "1"), 100);
} else {
  document.body.innerHTML = `
    <h1 style="
      text-align:center;
      margin-top:40px;
      color:#f1f1f1;
      font-family:Poppins,sans-serif;
    ">Jogador não encontrado</h1>
  `;
}