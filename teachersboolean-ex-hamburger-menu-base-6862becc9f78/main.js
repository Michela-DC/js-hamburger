//Quando clicko su <i class="fas fa-bars"></i> compare pagina con class="hamburger-menu", quindi:
// --> devo usare addEventListener() per rilevare quando ci cliccano sopra
// --> devo dire che .hamburger-menu da display = none diventa block quindi devo usare .style per riassegnare il display

const OPEN_HAMBURGER = document.querySelector(".fa-bars");
console.log(OPEN_HAMBURGER);

const HAMBURGER_MENU = document.querySelector(".hamburger-menu");
console.log(HAMBURGER_MENU);

OPEN_HAMBURGER.addEventListener('click', 

    function() {
        HAMBURGER_MENU.style.display = 'block';
    }
)

// Quando clicco su .close si chiude .hamburger-menu, quindi:
// -->  .addEventListener() quando clicco su .close
// -->  HAMBURGER_MENU va in display = none

const CLOSE_HAMBURGER = document.querySelector(".close");
console.log(CLOSE_HAMBURGER);

CLOSE_HAMBURGER.addEventListener('click',
    
    function() {
        HAMBURGER_MENU.style.display = 'none';
    }
)

