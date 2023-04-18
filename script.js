let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

//cv download

// Dark Mode / light mode
let moon = document.querySelector("#moon");

moon.onclick = () => {
  if (moon.classList.contains("bx-moon")) {
    moon.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");

  } else {
    moon.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }

};
