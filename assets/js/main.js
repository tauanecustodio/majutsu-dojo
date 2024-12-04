const mages = [
  {
    id: 1,
    name: "Kazuo Yamada",
    abilities: ["Treinamento de Combate com Magia de Fogo"],
    description: "Kazuo é um mago de fogo conhecido por sua maestria em feitiços destrutivos.",
    category: "elementalMagic",
    img: "Kazuo1.jpg"
  },
  {
    id: 2,
    name: "Rina Hoshizaki",
    abilities: ["Magia de Cura Avançada"],
    description: "Rina é uma curandeira altamente habilidosa que se especializa em restaurar ferimentos físicos e mágicos.",
    category: "supportMagic",
    img: "Rina1.jpg"
  },
  {
    id: 3,
    name: "Yuto Okamoto",
    abilities: ["Magia Aérea", "Treinamento de Voo"],
    description: "Yuto é um mago do vento, sua magia envolve a invocação de rajadas de vento e criação de poderosos vórtices.",
    category: "elementalMagic",
    img: "Yuto1.jpg"
  },
  {
    id: 4,
    name: "Satsuki Kuroda",
    abilities: ["Magia das Sombras","Invocação"],
    description: "Satsuki é uma feiticeira, sua magia invoca criaturas das trevas e pode manipular sombras para prender ou proteger.",
    category: "darkMagic",
    img: "Satsuki1.jpg"
  },
  {
    id: 5,
    name: "Hiroshi Takahashi",
    abilities: ["Treinamento de Magia Elemental (Fogo, Terra, Água, Ar)"],
    description: "Hiroshi é um mestre de todos os elementos clássicos, equilibrando fogo, terra, água e ar. Ele é conhecido por criar tempestades elementares poderosas, utilizando sua magia tanto para combate quanto para defesa.",
    category: "elementalMagic",
    img: "Hiroshi1.jpg"
  },
  {
    id: 6,
    name: "Aya Mizuno",
    abilities: ["Magia de Gelo e Formação de Geleiras"],
    description: "Aya é uma maga de gelo, conhecida por sua habilidade de congelar grandes áreas e criar esculturas de gelo intricadas. Sua magia envolve a criação de grandes paredes de gelo, congelamento de inimigos e invocação de nevascas.",
    category: "elementalMagic",
    img: "Aya1.jpg"
  },
  {
    id: 7,
    name: "Rei Saito",
    abilities: ["Manipulação de Luz","Treinamento de Iluminação"],
    description: "Rei é um mago da luz radiante cujos feitiços são baseados na manipulação da luz pura. Ele é capaz de criar feixes de luz deslumbrantes, escudos protetores e até manipular a luz para fins furtivos.",
    category: "supportMagic",
    img: "Rei1.jpg"
  },
  {
    id: 8,
    name: "Keiko Fujimoto",
    abilities: ["Manipulação","Anti-Gravidade"],
    description: "Keiko é uma maga da gravidade energética e aventureira, capaz de manipular as forças gravitacionais. Sua magia permite fazer objetos e pessoas flutuarem ou esmagá-los sob uma força gravitacional intensa, além de criar zonas de gravidade zero.",
    category: "specializedMagic",
    img: "Keiko1.jpg"
  },
  {
    id: 9,
    name: "Taro Nakamura",
    abilities: ["Magia Temporal", "Manipulação do Tempo"],
    description: "Taro é um mago sábio que pode desacelerar, acelerar ou reverter o tempo. Sua magia frequentemente distorce a realidade, fazendo momentos se repetirem ou avançarem rapidamente, manipulando o tempo em áreas localizadas.",
    category: "specializedMagic",
    img: "Taro1.jpg"
  },
  {
    id: 10,
    name: "Haruka Sakamoto",
    abilities: ["Magia Botânica", "Crescimento de Plantas"],
    description: "Haruka é uma maga da natureza especializada em crescimento de plantas e comunicação com o mundo natural. Sua magia envolve a criação de jardins exuberantes, crescimento rápido de plantas e controle de criaturas baseadas em plantas.",
    category: "specializedMagic",
    img: "Haruka1.jpg"
  }
];


document.addEventListener('click', function (event) {
  const navCollapse = document.querySelector('.navbar-collapse');
  if (navCollapse.classList.contains('show') && !event.target.closest('.navbar-toggler')) {
    const bsCollapse = new bootstrap.Collapse(navCollapse, { toggle: false });
    bsCollapse.hide();
  }
});

const categories = {
  elementalMagic: document.querySelector("#elemental-magic .row"),
  supportMagic: document.querySelector("#support-magic .row"),
  darkMagic: document.querySelector("#dark-magic .row"),
  specializedMagic: document.querySelector("#specialized-magic .row"),
};

mages.forEach((mage) => {
  const cardHTML = `
    <div class="col-6 col-md-4 col-lg-3">
      <div class="card p-0 border-0">
        <img
          src="./assets/images/character/${mage.img}"
          alt="${mage.name}"
          class="card-img-top"
        />
        <div class="card-body">
          <h3 class="card-title text-center">${mage.name}</h3>
          <p class="card-text text-light text-justify">${mage.description}</p>
          <div>
            ${mage.abilities.map((ability) => `<span class="badge me-1 text-wrap p-1 lh-base">${ability}</span>`).join("")}
          </div>
        </div>
      </div>
    </div>
  `;

  if (categories[mage.category]) {
    categories[mage.category].innerHTML += cardHTML;
  }
});