
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


const ing = "Eitensheim"
const pfaf = "Pfaffenhofen"
const srcIng = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1268.75431623215!2d11.313755440487705!3d48.827385065672274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6bb7026a15da48eb%3A0x462d1c2dc7ea33b6!2sMiA%20Lounge%20-%20Ganzheitliches%20Gesundheits-%20und%20Familienzentrum%20Eitensheim!5e0!3m2!1sde!2sde!4v1771447887711!5m2!1sde!2sde"
const srcPfaf = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2635.497985716309!2d11.469880600000002!3d48.6577182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e57c763772459%3A0x738c7e1fa71a886f!2sTwenty%20One!5e0!3m2!1sde!2sde!4v1752326023506!5m2!1sde!2sde"
let srcCurrent = srcIng
let locCurrent = ing
let cookieConfirmed = false


document.getElementById('location-btn-ing').addEventListener('click', () => {
  if (locCurrent != ing) {
    srcCurrent = srcIng
    locCurrent = ing
  }

  if (cookieConfirmed) {
  const container = document.getElementById('iframe-container');
    container.removeAttribute("style")
    container.setAttribute("style", "height:100%; width:100%")

    container.innerHTML = `
          <iframe
            id=iframeElement
            src=${srcCurrent}
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          `
}
})

document.getElementById('location-btn-pfa').addEventListener('click', () => {
  if (locCurrent != pfaf) {
    srcCurrent = srcPfaf
    locCurrent = pfaf
  }

  if (cookieConfirmed) {
  const container = document.getElementById('iframe-container');
    container.removeAttribute("style")
    container.setAttribute("style", "height:100%; width:100%")

    container.innerHTML = `
          <iframe
            id=iframeElement
            src=${srcCurrent}
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          `
  }
})

document.getElementById('load-map-btn').addEventListener('click', () => {

    cookieConfirmed = true
    const container = document.getElementById('iframe-container');
    container.removeAttribute("style")
    container.setAttribute("style", "height:100%; width:100%")

    container.innerHTML = `
          <iframe
            id=iframeElement
            src=${srcCurrent}
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          `
  });


const copyright = document.getElementById("copyright")
copyright.innerText = `© ${new Date().getFullYear()} Emilie Schulz. Alle Rechte vorbehalten.`