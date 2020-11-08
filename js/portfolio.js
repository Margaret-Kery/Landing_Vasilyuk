const portfolioArr = [
  {
    href: "#popup1",
    img: "/img/weading_1.png",
    title: "Весільна фотосесія",
    desc:
      "Це тільки підготовка і очікування церемонії здається нескінченно довгими, а сама церемонія проходить за лічені хвилини. Але ці хвилини одні з найважливіших у Вашому житті і звичайно ж про них повинна залишитися приємна пам’ять.",
  },
  {
    href: "#popup1",
    img: "/img/weading_1.png",
    title: "Весільна фотосесія",
    desc:
      "Це тільки підготовка і очікування церемонії здається нескінченно довгими, а сама церемонія проходить за лічені хвилини. Але ці хвилини одні з найважливіших у Вашому житті і звичайно ж про них повинна залишитися приємна пам’ять.",
  },
  {
    href: "#popup1",
    img: "/img/weading_1.png",
    title: "Весільна фотосесія",
    desc:
      "Це тільки підготовка і очікування церемонії здається нескінченно довгими, а сама церемонія проходить за лічені хвилини. Але ці хвилини одні з найважливіших у Вашому житті і звичайно ж про них повинна залишитися приємна пам’ять.",
  },
  {
    href: "#popup1",
    img: "/img/weading_1.png",
    title: "Весільна фотосесія",
    desc:
      "Це тільки підготовка і очікування церемонії здається нескінченно довгими, а сама церемонія проходить за лічені хвилини. Але ці хвилини одні з найважливіших у Вашому житті і звичайно ж про них повинна залишитися приємна пам’ять.",
  },
  {
    href: "#popup1",
    img: "/img/weading_1.png",
    title: "Весільна фотосесія",
    desc:
      "Це тільки підготовка і очікування церемонії здається нескінченно довгими, а сама церемонія проходить за лічені хвилини. Але ці хвилини одні з найважливіших у Вашому житті і звичайно ж про них повинна залишитися приємна пам’ять.",
  },
  {
    href: "#popup1",
    img: "/img/weading_1.png",
    title: "Весільна фотосесія",
    desc:
      "Це тільки підготовка і очікування церемонії здається нескінченно довгими, а сама церемонія проходить за лічені хвилини. Але ці хвилини одні з найважливіших у Вашому житті і звичайно ж про них повинна залишитися приємна пам’ять.",
  },
];
const createPortfolio = (arr, show) => {
  return arr
    .slice(0, show)
    .map(
      (item) => `
    <li class="portfolio_card flexbox">
        <a href="${item.href}" class="link portfolio-link">
            <div class="portfolio_card__photo">
                <img src="${item.img}" alt="Весільна фотосесія" width="463" height="320px">
            </div>
            <div class="portfolio-card-title">
                <h2 class="title">${item.title}</h2>
                <p class="text nomargin">${item.desc}</p>
            </div>
        </a>
    </li>
    `
    )
    .join(" ");
};

const portfolio = document.getElementById("JS_Portfolio");
const portfolioMore = document.getElementById("JS_Portfolio__Show");
portfolio.innerHTML = createPortfolio(portfolioArr, 3);
portfolioMore.addEventListener("click", (e) => {
  portfolio.innerHTML = createPortfolio(portfolioArr, portfolioArr.length);
  portfolioMore.style.display = "none";
});

if (document.defaultView.innerWidth > 540) {
  portfolio.innerHTML = createPortfolio(portfolioArr, portfolioArr.length);
  portfolioMore.style.display = "none";
}
