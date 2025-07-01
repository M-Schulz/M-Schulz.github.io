
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

document.getElementById('load-map-btn').addEventListener('click', function() {
    const container = document.getElementById('map-container');
    container.innerHTML = `
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10519.239559701497!2d11.413027933562223!3d48.7664266864822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479efffee554a62d%3A0x674acfa64085e947!2sFamilienpraxis%20Bodycoaching%20Ingolstadt!5e0!3m2!1sde!2sde!4v1749585640576!5m2!1sde!2sde"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          `
  });