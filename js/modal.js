function closeModal() {
  const modal = document.getElementById("JS_MODAL");
  modal.removeEventListener("click", lisenerClose);
  modal.style.display = "none";
}

const lisenerClose=(e)=> {
  console.log(e);
}

function openModal() {
  console.log("asdasdasd");
  const modal = document.getElementById("JS_MODAL");
  modal.style.display = "block";
}
