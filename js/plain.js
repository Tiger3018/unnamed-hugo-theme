
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// if user allow js
el_header = document.getElementById("header");
mq_width = window.matchMedia("(min-width:768px)");
//el_header.dataset.visit = false

// navbar shrink LISTEN scroll
navbarShrink = () => {
  if (document.documentElement.scrollTop > 80) {
    el_header.dataset.visit = true;
  }
  else {
    el_header.dataset.visit = false;
  }
  console.log("a"); 
}

// main
mq_width.addEventListener("change",() => {
   if(mq_width.matches) {
    window.addEventListener("scroll", navbarShrink);
    navbarShrink();
  }
  else {
    window.removeEventListener("scroll", navbarShrink);
    el_header.dataset.visit = true;
  }
});


if(mq_width.matches) {
  window.addEventListener("scroll", navbarShrink);
  navbarShrink();
  setTimeout(() => {
    el_header.classList.add("la-tran-js");
  }, 100); 
}