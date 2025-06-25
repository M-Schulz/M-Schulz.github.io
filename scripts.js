
const scrollBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
if (window.scrollY > 300) {
    scrollBtn.classList.add('show');
} else {
    scrollBtn.classList.remove('show');
}
});

scrollBtn.addEventListener('click', () => {
window.scrollTo({
    top: 0,
    behavior: 'smooth'
});
});

  const burger = document.getElementById("burger");
  const menu = document.getElementById("navbar");

  burger.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  // Klick außerhalb erkennt
  document.addEventListener("click", (e) => {
    const isClickInside = menu.contains(e.target) || burger.contains(e.target);
    if (!isClickInside ) {
      menu.classList.remove("active");
    }
  });

// const signupBtn = document.getElementById("signup-btn")
// signupBtn.addEventListener("click", ()=> {
//     alert("Anmeldefunktion derzeit nicht verfügbar. Bitte schreib mir eine E-Mail.");
// })

function berechneAlter(geburtsdatum) {
    const heute = new Date();
    const gebDatum = new Date(geburtsdatum);
    let alter = heute.getFullYear() - gebDatum.getFullYear();

    const m = heute.getMonth() - gebDatum.getMonth();
    if (m < 0 || (m === 0 && heute.getDate() < gebDatum.getDate())) {
      alter--;
    }
    // console.log({heute}, {gebDatum}, {alter})
    return alter;
}

const alter = berechneAlter("1986-12-31");
document.getElementById("alter").textContent = alter;