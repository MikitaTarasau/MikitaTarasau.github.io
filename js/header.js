const header = document.getElementsByClassName('header')[0];

function addScrollClasses() {
  header.classList.add('header--scrolled');
}

function removeScrollClasses() {
  header.classList.remove('header--scrolled');
}

window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const headerHeight = header.offsetHeight;
    if(scrollPosition > headerHeight) {
      addScrollClasses();
    }
    if (scrollPosition <= headerHeight) {
      removeScrollClasses();
    }
});
