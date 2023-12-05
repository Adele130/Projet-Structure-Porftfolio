const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function showSlide(index) {
    carouselItems.forEach(item => {
        item.style.display = 'none';
    });

    // Faire appraitre et bloquer l'image?
    carouselItems[index].style.display = 'block';
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showSlide(currentIndex);
}

function previousSlide() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    showSlide(currentIndex);
}

// Première Image pour l'ouverture du Site
showSlide(currentIndex);
document.querySelector('.nextBtn').addEventListener('click', nextSlide);
document.querySelector('.prevBtn').addEventListener('click', previousSlide);

//Menu Toggle
//function toggleMenu() {
    //var navigation = document.querySelector('.menu .Navigation'); // Correction ici
    //navigation.classList.toggle('show-menu');
//}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("MENU");
    if (x.className === "menu") {
      x.className += " responsive";
    } else {
      x.className = "menu";
    }
  }