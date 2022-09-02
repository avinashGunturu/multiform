const next = document.querySelector("#next");
const back = document.querySelector("#back");

const formContainer = document.querySelector("#form-container");
const formContainer1 = document.querySelector("#form-container1");
const iyear = document.querySelector("#iyear");
const cyear = document.querySelector("#cyear");

const issuedYear = document.querySelector("#issuedYear");
const closeYear = document.querySelector("#closeYear");
const selected = document.querySelector(".selected");
const selected1 = document.querySelector(".selected1");

const optionsList = document.querySelectorAll(".option");
const optionsList1 = document.querySelectorAll(".option1");

const namee = document.querySelector("#name");
const place = document.querySelector("#place");
const progressbar = document.querySelector("#progress-bar");
const privatee = document.querySelector("#private");
const commerciall = document.querySelector("#commercial");
const paper = document.querySelector("#paper");
const smart = document.querySelector("#smart");

next.addEventListener("click", () => {
  formContainer.classList.remove("active");
  formContainer1.classList.add("active");
});
back.addEventListener("click", () => {
  formContainer.classList.add("active");
  formContainer1.classList.remove("active");
});

iyear.addEventListener("click", () => {
  issuedYear.classList.toggle("active");
});
cyear.addEventListener("click", () => {
  closeYear.classList.toggle("active");
});
optionsList.forEach((o) => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    iyear.classList.remove("active");
    const w = progressbar.style.width.slice(0, 3);
    progressbar.style.width = `${+w < 600 ? +w + 100 : +w}px`;
  });
});

optionsList1.forEach((o) => {
  o.addEventListener("click", () => {
    selected1.innerHTML = o.querySelector("label").innerHTML;
    cyear.classList.remove("active");
    const w = progressbar.style.width.slice(0, 3);
    progressbar.style.width = `${+w < 600 ? +w + 100 : +w}px`;
  });
});

namee.addEventListener("change", (e) => {
  const n = e.target.value;
  const w = progressbar.style.width.slice(0, 3);
  if (n.length >= 3) {
    progressbar.style.width = `${+w + 100}px`;
  } else {
    progressbar.style.width = `${+w}px`;
  }
});
place.addEventListener("change", (e) => {
  const n = e.target.value;
  const w = progressbar.style.width.slice(0, 3);
  if (n.length >= 3) {
    progressbar.style.width = `${+w + 100}px`;
  } else {
    progressbar.style.width = `${+w}px`;
  }
});

privatee.addEventListener("click", (e) => {
  const w = progressbar.style.width.slice(0, 3);
  const v = e.target.value;
  v != ""
    ? (progressbar.style.width = `${+w + 100}px`)
    : (progressbar.style.width = `${+w}px`);
});

commerciall.addEventListener("click", (e) => {
  const w = progressbar.style.width.slice(0, 3);
  const v = e.target.value;
  v != ""
    ? (progressbar.style.width = `${+w + 100}px`)
    : (progressbar.style.width = `${+w}px`);
});

paper.addEventListener("click", (e) => {
  const w = progressbar.style.width.slice(0, 3);
  const v = e.target.value;
  v != ""
    ? (progressbar.style.width = `${+w + 100}px`)
    : (progressbar.style.width = `${+w}px`);
});

smart.addEventListener("click", (e) => {
  const w = progressbar.style.width.slice(0, 3);
  const v = e.target.value;
  v != ""
    ? (progressbar.style.width = `${+w + 100}px`)
    : (progressbar.style.width = `${+w}px`);
});
