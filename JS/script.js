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