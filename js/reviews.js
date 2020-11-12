const rewiewsMedia = 540;
const reviewsArr = [
  {
    star: 5,
    data: "17.05.2020",
    title: "Maria 1",
    desc: "повинна залишитися приємна пам’ять.",
  },
  {
    star: 5,
    data: "17.05.2020",
    title: "Maria 2",
    desc:
      "Це тільки підготовка і очікування церемонії здається нескінченно довгими, а сама церемонія проходить за лічені хвилини. Але ці хвилини одні з найважливіших у Вашому житті і звичайно ж про них повинна залишитися приємна пам’ять.",
  },
  {
    star: 5,
    data: "17.05.2020",
    title: "Maria 3",
    desc:
      "Це тільки підготовка і очікування церемонії здається нескінченно довгими, а сама церемонія проходить за лічені хвилини. Але ці хвилини одні з найважливіших у Вашому житті і звичайно ж про них повинна залишитися приємна пам’ять.",
  },
  {
    star: 5,
    data: "17.05.2020",
    title: "Maria 4",
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

const show = rewiewsMedia >= document.defaultView.innerWidth ? 1 : 3;
const createReviewsBtn = (arr) => {
  return arr.reduce((acc, item, index) => {
    if (+index % +show == 0) {
      console.log(+index / +show);
      return (
        acc +
        `<button class="reviews_btn__item" data-index=${
          +index / +show
        }></button>`
      );
    }
    return acc;
  }, "");
};

const reviews = document.getElementById("JS_Reviews");
const reviewsBtn = document.getElementById("JS_Reviews__btn");

reviews.innerHTML = createReviews(reviewsArr, show);
reviewsBtn.innerHTML = createReviewsBtn(reviewsArr);

reviewsBtn.addEventListener("click", (e) => {
  const index = e?.target?.dataset?.index;
  if (index) {
    reviews.innerHTML =
      rewiewsMedia >= document.defaultView.innerWidth
        ? createReviews([reviewsArr[index]], show)
        : createReviews(
            reviewsArr.slice(show * index, show * index + show),
            show
          );
  }
});

if (document.defaultView.innerWidth > 540) {
  reviews.style.display = "flex";
}
