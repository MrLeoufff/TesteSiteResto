// detecter le scroll
window.onscroll = function () {
  sticky();
};

// recuperer les element
let header = document.getElementById("sticky-header");
let stickycomponent = header.offsetTop;

//faire la fonction
function sticky() {
  console.log(window.scrollY);
  if (window.scrollY > stickycomponent) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
// pageYOffset à la place de scrollY
