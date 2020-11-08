const menu = document.getElementById("JS_Menu");
const nav = document.getElementById("JS_Nav");

let menuActive = { status: false };
// const menuBlure = (e) => {
//   if (
//     e?.target?.dataset?.id !== "JS_Nav__close" &&
//     nav.style.display === "flex"
//   ) {
//     console.log('asdasdasd');
//     menu.innerHTML = '<img src="/img/menu.svg" alt=""></img>';
//     nav.style.display = "none";
//     document.removeEventListener("click", menuBlure);
//   }
// };
const menuClick = (e) => {
  console.dir(e.currentTarget);
  if (e?.currentTarget) {
    // document.addEventListener("click", menuBlure);
    menuActive.status = !menuActive.status;
    e.currentTarget.innerHTML = menuActive.status
      ? '<img src="/img/close.svg" alt=""></img>'
      : '<img src="/img/menu.svg" alt=""></img>';
    nav.style.display = menuActive.status ? "flex" : "none";
  }
};

menu.addEventListener("click", menuClick);
