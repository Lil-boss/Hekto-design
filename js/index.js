let slideIndex = 0;
function slider() {
  let i;

  let slides = document.getElementsByClassName("slider");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(slider, 2000);
}

let search = document.getElementById("search");
let btn = document.getElementById("searchBtn");
function OpenSearchBar() {
  btn.addEventListener("click", function () {
    if (search.style.display === "block") {
      search.style.display = "none";
    } else {
      search.style.display = "block";
    }
  });
}

OpenSearchBar();
slider();
