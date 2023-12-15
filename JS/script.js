const carouselItems = document.querySelectorAll('.carousel-item');//sélectionne ele
let currentIndex = 0;

function showSlide(index) {//appelle img en fcontion de indice, ici 0
    carouselItems.forEach(item => {
        item.style.display = 'none';//masque autres img
    });

    carouselItems[index].style.display = 'block';
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showSlide(currentIndex);
}

setInterval(nextSlide, 4001);

//Menu Hamburger
function toggleMenu() {
    var x = document.getElementById("idmenuresp");//select element with id menuresp
    if (x.style.display === "block") {//vérifie si display visible
        x.style.display = "none";//si oui, il est caché
    } else {
        x.style.display = "block";//sinon affiche le
    }
}