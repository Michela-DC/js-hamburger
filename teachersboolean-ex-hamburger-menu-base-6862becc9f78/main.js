/* Quando clicko su 
<a href="#">
    <i class="fas fa-bars"></i>
</a>
compare pagina con class="hamburger-menu"
*/

// Per farlo:
// devo usare addEventListener() per rilevare quando ci cliccano sopra
// devo dire che .hamburger-menu da display = none diventa block quindi devo usare .style per riassegnare il display


const ICON_HAMBURGER = document.querySelector(".fa-bars")
console.log(ICON_HAMBURGER)

const HAMBURGER_MENU = document.querySelector(".hamburger-menu")
console.log(HAMBURGER_MENU)

ICON_HAMBURGER.addEventListener('click', 

    function() {
        HAMBURGER_MENU.style.display = 'block'
    }
);