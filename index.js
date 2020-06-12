const team = [
  {
    name: "Andrea",
    description: "Andrea is a full stack developer at School of Applied Technology. She is a language enthusiast, dedicated lifelong learner and experienced bug-hunter. She is aspiring to connect nature and technology. She believes if you can't explain it simply, you don't understand it well enough.",
  },
  {
    name: "Filip",
    description: "Filip is a full stack javascript developer with 4 years of experience in brand management and data analytics, having worked with everything from large national brands to small niche businesses. Filip is looking to combine this experience with software development to create great products and services.",
  },
  {
    name: "Michal",
    description: "He is full stack developer working in School of Applied Technology. He has experience in programming, both in software development and training programs to become stronger. He enjoys any kind of physical activity, various sort of games and developing awesome apps. ",
  },
  {
    name: "Njaal",
    description: "Njaal is a full stack developer with a MSc in Business Analytics and has 3+ years experience in the finance and startup industry. His projects have ranged from calculating CLV with machine learning to creating a software tool with more than 600 users.",
  },
  {
    name: "Sandra",
    description: "Sandra worked for two years at a tech startup as a UX writer and consultant, before she was promoted to Training and Development Manager. After gaining experience with software production, she decided to become a developer. She now works for Salt as a full stack developer",
  },
];

const createCard = () => {
  const mainCardDiv = document.querySelector(".card-main");
  team.forEach((person) => {
    const cardDiv = document.createElement("div");
    cardDiv.innerHTML = 
    `<div class="card m-3" style="width: 21rem;">
      <img src="/images/${person.name}.png" class="card-img-top p-3" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">${person.name}</h5>
        <p class="card-text text-justify">${person.description}</p>
      </div>
    </div>`;
    mainCardDiv.appendChild(cardDiv);
  });
};

createCard();
