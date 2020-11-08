const reviewsArr = [
  {
    star: 5,
    data: "17.05.2020",
    title: "Maria",
    desc:
      "повинна залишитися приємна пам’ять.",
  },
  {
    star: 5,
    data: "17.05.2020",
    title: "Maria",
    desc:
      "Це тільки підготовка і очікування церемонії здається нескінченно довгими, а сама церемонія проходить за лічені хвилини. Але ці хвилини одні з найважливіших у Вашому житті і звичайно ж про них повинна залишитися приємна пам’ять.",
  },
  {
    star: 5,
    data: "17.05.2020",
    title: "Maria",
    desc:
      "Це тільки підготовка і очікування церемонії здається нескінченно довгими, а сама церемонія проходить за лічені хвилини. Але ці хвилини одні з найважливіших у Вашому житті і звичайно ж про них повинна залишитися приємна пам’ять.",
  },
  {
    star: 5,
    data: "17.05.2020",
    title: "Maria",
    desc:
      "Це тільки підготовка і очікування церемонії здається нескінченно довгими, а сама церемонія проходить за лічені хвилини. Але ці хвилини одні з найважливіших у Вашому житті і звичайно ж про них повинна залишитися приємна пам’ять.",
  },
];
const createReviews = (arr, show) => {
  return arr
    .slice(0, show)
    .map(
      (item) => `
    <li class="reviews_card">
        <div class="reviews_card__title">${item.title}</div>
        <div class="reviews_card__info">
            <div class="reviews_cards__star">${item.star}</div>
            <div class="reviews_cards__data">${item.data}</div>
        </div>
        <div class="reviews_cards__desc">${item.desc}</div>
    </li>
      `
    )
    .join(" ");
};
const createReviewsBtn = (arr) => {
  return arr
    .map((item) => `<button class="reviews_btn__item"></button>`)
    .join(" ");
};
const reviews = document.getElementById("JS_Reviews");
const reviewsBtn = document.getElementById("JS_Reviews__btn");
reviews.innerHTML = createReviews(reviewsArr, 1);
reviewsBtn.innerHTML = createReviewsBtn(reviewsArr);
//   portfolioMore.addEventListener('click', (e)=>{
//       portfolio.innerHTML = createPortfolio(arr,arr.length)
//       portfolioMore.style.display='none'
//   })

//   if(document.defaultView.innerWidth>540){
//       portfolio.innerHTML = createPortfolio(arr,arr.length)
//       portfolioMore.style.display='none'
//   }
