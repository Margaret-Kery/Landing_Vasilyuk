const modal = document.getElementById("JS_MODAL");
const modalClose = document.getElementById("JS_MODAL_close");

const closeModal = (e) => {
  e.preventDefault();
  modal.removeEventListener("click", lisenerClose);
  modal.style.display = "none";
};

const lisenerClose = (e) => {
  // e.preventDefault();
  if (e?.currentTarget === e?.target) {
    closeModal(e);
  }
};

const openModal = (e) => {
  const btnOpenModal=e?.target?.dataset?.modal
  if(btnOpenModal){
  modal.addEventListener("click", lisenerClose);
  modal.style.display = "flex";
}};

modalClose.addEventListener("click", closeModal);

document.addEventListener("click", openModal);
