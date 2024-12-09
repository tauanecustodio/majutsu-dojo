const mages = [
  {
    id: 1,
    name: "Kazuo Yamada",
    abilities: ["Treinamento de Combate com Magia de Fogo"],
    description:
      "Kazuo é um mago de fogo conhecido por sua maestria em feitiços destrutivos.",
    category: "elementalMagic",
    img: "Kazuo1.webp",
    imgHover: "Kazuo2.webp",
  },
  {
    id: 2,
    name: "Rina Hoshizaki",
    abilities: ["Magia de Cura Avançada"],
    description:
      "Rina é uma curandeira altamente habilidosa que se especializa em restaurar ferimentos físicos e mágicos.",
    category: "supportMagic",
    img: "Rina1.webp",
    imgHover: "Rina2.webp",
  },
  {
    id: 3,
    name: "Yuto Okamoto",
    abilities: ["Magia Aérea", "Treinamento de Voo"],
    description:
      "Yuto é um mago do vento, sua magia envolve a invocação de rajadas de vento e criação de poderosos vórtices.",
    category: "elementalMagic",
    img: "Yuto1.webp",
    imgHover: "Yuto2.webp",
  },
  {
    id: 4,
    name: "Satsuki Kuroda",
    abilities: ["Magia das Sombras", "Invocação"],
    description:
      "Satsuki é uma feiticeira, sua magia invoca criaturas das trevas e pode manipular sombras para prender ou proteger.",
    category: "darkMagic",
    img: "Satsuki1.webp",
    imgHover: "Satsuki2.webp",
  },
  {
    id: 5,
    name: "Hiroshi Takahashi",
    abilities: ["Treinamento de Magia Elemental (Fogo, Terra, Água, Ar)"],
    description:
      "Hiroshi é um mestre de todos os elementos clássicos, equilibrando fogo, terra, água e ar. Ele é conhecido por criar tempestades elementares poderosas, utilizando sua magia tanto para combate quanto para defesa.",
    category: "elementalMagic",
    img: "Hiroshi1.webp",
    imgHover: "Hiroshi2.webp",
  },
  {
    id: 6,
    name: "Aya Mizuno",
    abilities: ["Magia de Gelo e Formação de Geleiras"],
    description:
      "Aya é uma maga de gelo, conhecida por sua habilidade de congelar grandes áreas e criar esculturas de gelo intricadas. Sua magia envolve a criação de grandes paredes de gelo, congelamento de inimigos e invocação de nevascas.",
    category: "elementalMagic",
    img: "Aya1.webp",
    imgHover: "Aya2.webp",
  },
  {
    id: 7,
    name: "Rei Saito",
    abilities: ["Manipulação de Luz", "Treinamento de Iluminação"],
    description:
      "Rei é um mago da luz radiante cujos feitiços são baseados na manipulação da luz pura. Ele é capaz de criar feixes de luz deslumbrantes, escudos protetores e até manipular a luz para fins furtivos.",
    category: "supportMagic",
    img: "Rei1.webp",
    imgHover: "Rei2.webp",
  },
  {
    id: 8,
    name: "Keiko Fujimoto",
    abilities: ["Manipulação", "Anti-Gravidade"],
    description:
      "Keiko é uma maga da gravidade energética e aventureira, capaz de manipular as forças gravitacionais. Sua magia permite fazer objetos e pessoas flutuarem ou esmagá-los sob uma força gravitacional intensa, além de criar zonas de gravidade zero.",
    category: "specializedMagic",
    img: "Keiko1.webp",
    imgHover: "Keiko2.webp",
  },
  {
    id: 9,
    name: "Taro Nakamura",
    abilities: ["Magia Temporal", "Manipulação do Tempo"],
    description:
      "Taro é um mago sábio que pode desacelerar, acelerar ou reverter o tempo. Sua magia frequentemente distorce a realidade, fazendo momentos se repetirem ou avançarem rapidamente, manipulando o tempo em áreas localizadas.",
    category: "specializedMagic",
    img: "Taro1.webp",
    imgHover: "Taro2.webp",
  },
  {
    id: 10,
    name: "Haruka Sakamoto",
    abilities: ["Magia Botânica", "Crescimento de Plantas"],
    description:
      "Haruka é uma maga da natureza especializada em crescimento de plantas e comunicação com o mundo natural. Sua magia envolve a criação de jardins exuberantes, crescimento rápido de plantas e controle de criaturas baseadas em plantas.",
    category: "specializedMagic",
    img: "Haruka1.webp",
    imgHover: "Haruka2.webp",
  },
];

const categories = {
  elementalMagic: document.querySelector("#elemental-magic .row"),
  supportMagic: document.querySelector("#support-magic .row"),
  darkMagic: document.querySelector("#dark-magic .row"),
  specializedMagic: document.querySelector("#specialized-magic .row"),
};

// Creat mages cards
const createCard = (mage) => {
  const fragment = document.createDocumentFragment();
  
  // Creat card
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('col-6', 'col-md-4', 'col-lg-3');

  // Creat content card
  const card = document.createElement('div');
  card.classList.add('card', 'p-0', 'border-0');

  const cardCover = document.createElement('div');
  cardCover.classList.add('card-cover', 'position-relative');

  const imgDefault = document.createElement('img');
  imgDefault.src = `./assets/images/character/${mage.img}`;
  imgDefault.alt = `${mage.name} image`;
  imgDefault.classList.add('img-default', 'card-img-top');
  imgDefault.loading = 'lazy';

  const imgHover = document.createElement('img');
  imgHover.src = `./assets/images/character/${mage.imgHover}`;
  imgHover.alt = `${mage.name} image hover`;
  imgHover.classList.add('img-hover', 'card-img-top');
  imgHover.loading = 'lazy';

  cardCover.appendChild(imgDefault);
  cardCover.appendChild(imgHover);

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const cardTitle = document.createElement('h3');
  cardTitle.classList.add('card-title', 'text-center');
  cardTitle.textContent = mage.name;

  const cardText = document.createElement('p');
  cardText.classList.add('card-text', 'text-light', 'text-justify');
  cardText.textContent = mage.description;

  // Creat badges
  const abilitiesContainer = document.createElement('div');
  mage.abilities.forEach(ability => {
    const abilityBadge = document.createElement('span');
    abilityBadge.classList.add('badge', 'me-1', 'mb-1', 'text-wrap', 'p-1', 'lh-base');
    abilityBadge.textContent = ability;
    abilitiesContainer.appendChild(abilityBadge);
  });

  // Add to body
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(abilitiesContainer);

  // Add to card sections
  card.appendChild(cardCover);
  card.appendChild(cardBody);

  // Add card
  cardDiv.appendChild(card);

  fragment.appendChild(cardDiv);
  return fragment;
};


// Insert categorie menu of mages
const insertCards = () => {
  const fragment = document.createDocumentFragment();
  mages.forEach(mage => {
    if (categories[mage.category]) {
      const cardElement = createCard(mage);
      categories[mage.category].appendChild(cardElement);
    }
  });
};

document.addEventListener("DOMContentLoaded", insertCards);

// -----------------------------------------

// button up
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTopButton.style.display = window.scrollY > 300 ? 'block' : 'none';
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// -----------------------------------------

// click menu
document.addEventListener("click", (event) => {
  const navCollapse = document.querySelector(".navbar-collapse");
  if (navCollapse.classList.contains("show") && !event.target.closest(".navbar-toggler")) {
    new bootstrap.Collapse(navCollapse, { toggle: false }).hide();
  }
});

// -----------------------------------------

// load
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
});