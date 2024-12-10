const mages = [
  {
    id: 1,
    name: "Kazuo Yamada",
    abilities: ["Treinamento de Combate com Magia de Fogo"],
    description:
      "Kazuo é um mago de fogo conhecido por sua maestria em feitiços destrutivos.",
    category: "elementalMagic",
    img: "kazuo1.webp",
    imgAlt: "Homem vestindo kimono vermelho, segurando um bastão e com chamas ao redor",
    imgHover: "kazuo2.webp",
    imgHoverAlt: "Homem vestindo um kimono vermelho, segurando um bastão em uma mão e fogo na outra"
  },
  {
    id: 2,
    name: "Rina Hoshizaki",
    abilities: ["Magia de Cura Avançada"],
    description:
      "Rina é uma curandeira altamente habilidosa que se especializa em restaurar ferimentos físicos e mágicos.",
    category: "supportMagic",
    img: "rina1.webp",
    imgAlt: "Jovem vestindo kimono azul, branco e dourado, em frente a um disco dourado",
    imgHover: "rina2.webp",
    imgHoverAlt: "Jovem brancavestindo um kimono azul, branco e dourado, sentada em um trono dourado"
  },
  {
    id: 3,
    name: "Yuto Okamoto",
    abilities: ["Magia Aérea", "Treinamento de Voo"],
    description:
      "Yuto é um mago do vento, sua magia envolve a invocação de rajadas de vento e criação de poderosos vórtices.",
    category: "elementalMagic",
    img: "yuto1.webp",
    imgAlt: "Jovem vestindo kimono branco e verde, segurando uma luz verde nas duas mãos",
    imgHover: "yuto2.webp",
    imgHoverAlt: "Jovem vestindo kimono branco e verde, segurando uma luz verde, voando com grandes asas brancas"
  },
  {
    id: 4,
    name: "Satsuki Kuroda",
    abilities: ["Magia das Sombras", "Invocação"],
    description:
      "Satsuki é uma feiticeira, sua magia invoca criaturas das trevas e pode manipular sombras para prender ou proteger.",
    category: "darkMagic",
    img: "satsuki1.webp",
    imgAlt: "Jovem com chapéu com abas grandes, kimono roxo com efeitos dourados e segura uma luz amarela",
    imgHover: "satsuki2.webp",
    imgHoverAlt: "Jovem vestindo um kimono roxo com efeitos dourados e segurando uma luz amarela em cada uma das mãos"
  },
  {
    id: 5,
    name: "Hiroshi Takahashi",
    abilities: ["Treinamento de Magia Elemental (Fogo, Terra, Água, Ar)"],
    description:
      "Hiroshi é um mestre de todos os elementos clássicos, equilibrando fogo, terra, água e ar.",
    category: "elementalMagic",
    img: "hiroshi1.webp",
    imgAlt: "Jovem com kimono verde, azul, vermelho segurando um cajado com fogo",
    imgHover: "hiroshi2.webp",
    imgHoverAlt: "Jovem com kimono verde, azul, vermelho segurando um chama nas mãos"
  },
  {
    id: 6,
    name: "Aya Mizuno",
    abilities: ["Magia de Gelo e Formação de Geleiras"],
    description:
      "Aya é uma maga de gelo, conhecida por sua habilidade de congelar grandes áreas e criar esculturas de gelo intricadas.",
    category: "elementalMagic",
    img: "aya1.webp",
    imgAlt: "Jovem branca, olhos azuis, cabelo gelo, armadura acizentada e segura um cetro azul na mão",
    imgHover: "aya2.webp",
    imgHoverAlt: "Jovem branca, olhos azuis, cabelo gelo, armadura acizentada"
  },
  {
    id: 7,
    name: "Rei Saito",
    abilities: ["Manipulação de Luz", "Treinamento de Iluminação"],
    description:
      "Rei é um mago da luz radiante cujos feitiços são baseados na manipulação da luz pura.",
    category: "supportMagic",
    img: "rei1.webp",
    imgAlt: "Pequeno jovem com kimono branco e dourado segurando um escudo resplandecente",
    imgHover: "rei2.webp",
    imgHoverAlt: "Pequeno jovem com kimono branco e dourado segurando duas espadas resplandecentes"
  },
  {
    id: 8,
    name: "Keiko Fujimoto",
    abilities: ["Manipulação", "Anti-Gravidade"],
    description:
      "Keiko é uma maga da gravidade energética e aventureira, capaz de manipular as forças gravitacionais.",
    category: "specializedMagic",
    img: "keiko1.webp",
    imgAlt: "Jovem com traje especial preto voando no espaço",
    imgHover: "keiko2.webp",
    imgHoverAlt: "Jovem com traje especial preto voando no espaço"
  },
  {
    id: 9,
    name: "Taro Nakamura",
    abilities: ["Magia Temporal", "Manipulação do Tempo"],
    description:
      "Taro é um mago sábio que pode desacelerar, acelerar ou reverter o tempo.",
    category: "specializedMagic",
    img: "taro1.webp",
    imgAlt: "Homen com kimono azulado ornamentado de relógios",
    imgHover: "taro2.webp",
    imgHoverAlt: "Homen com kimono azulado ornamentado de relógios"
  },
  {
    id: 10,
    name: "Haruka Sakamoto",
    abilities: ["Magia Botânica", "Crescimento de Plantas"],
    description:
      "Haruka é uma maga da natureza especializada em crescimento de plantas e comunicação com o mundo natural.",
    category: "specializedMagic",
    img: "haruka1.webp",
    imgAlt: "Jovem pequena com kimono branco colhendo plantas na floresta",
    imgHover: "haruka2.webp",
    imgHoverAlt: "Jovem pequena com kimono laranja colhendo plantas na floresta com passarinhos ao redor"
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
  imgDefault.alt = `${mage.imgAlt}`;
  imgDefault.classList.add('img-default', 'card-img-top');
  imgDefault.loading = 'lazy';

  const imgHover = document.createElement('img');
  imgHover.src = `./assets/images/character/${mage.imgHover}`;
  imgHover.alt = `${mage.imgHoverAlt}`;
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