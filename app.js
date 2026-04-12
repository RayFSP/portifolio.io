const topo = document.getElementById("topo");
const cardHero = document.getElementById("cardHero");

window.addEventListener("scroll", () => {
    if (window.scrollY > 180) {
        topo.classList.add("ativo");
        cardHero.classList.add("sumindo");
    } else {
        topo.classList.remove("ativo");
        cardHero.classList.remove("sumindo");
    }
});