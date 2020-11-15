const rewiewsMedia = 540;
const reviewsArr = [
  {
    star: "★★★★★",
    data: "02.05.2020",
    title: "Олена",
    desc: "Дякую! Дуже круті фото.",
  },
  {
    star: "★★★★★",
    data: "02.10.2019",
    title: "Андрій",
    desc:
      "Забрали фотки і альбом, дуже класно вийшло. Якість вражає!",
  },
  {
    star: "★★★★★",
    data: "18.03.2020",
    title: "Дарина",
    desc:
      "Олексій, хочу ще раз подякувати за фото. Вони крутееезні! Тепер буду знати до кого звертатися та кого радить друзям! Все супер. Дякую!",
  },
  {
    star: "★★★★★",
    data: "01.11.2020",
    title: "Маргарита",
    desc:
      "Чарівні фото, мені дуже сподобалось! Фотосесія пройшла комфортно та із задоволенням, Олексію, ваша заслуга, Дякую!",
  },
  {
    star: "★★★★★",
    data: "07.11.2020",
    title: "Володимир",
    desc:
      "Якщо хочете бомбезні фото на весіллі, то це до Олексія, а ми з дружиною тепер прийдемо сімейне фото робити))",
  },
   {
    star: "★★★★★",
    data: "09.11.2020",
    title: "Катя",
    desc:
      "Наша осіння фотосесія пройшла дуже цікаво, ми визначились з образом та негайно почали втілювати красу у життя, матеріал отримали швидко, фотограф дбайливо відносився до кожного знімку, за що йому дуже вдячна!",
  },
     {
    star: "★★★★★",
    data: "09.11.2020",
    title: "Алла",
    desc:
      "Олексію! Спасибі, що були з нами в наш день. Дуже приємно було з вами працювати! Дякую за чудові фотографії, вони неймовірні!",
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
