const tourImages = {
    'Карпати': [
        'img/karpaty.jpeg',
        'img/karpaty2.jpeg',
        'img/karpaty3.jpeg'
    ],
    'Париж': [
        'img/france.jpeg',
        'img/france2.jpeg',
        'img/france3.jpeg'
    ],
    'китай': [
        'img/china.jpeg',
        'img/china2.jpeg',
        'img/china3.jpeg'
    ]
};

let currentSlide = 0;
let currentTour = '';

document.addEventListener('DOMContentLoaded', function() {
    const tourLinks = document.querySelectorAll('.tour a.sale');
    
    tourLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const tourName = this.textContent.trim();
            openSlider(tourName);
        });
    });

    const sliderOverlay = document.getElementById('sliderOverlay');
    sliderOverlay.addEventListener('click', function(e) {
        if (e.target === this) {
            closeSlider();
        }
    });

    document.getElementById('prevBtn').addEventListener('click', function(e) {
        e.stopPropagation();
        previousSlide();
    });

    document.getElementById('nextBtn').addEventListener('click', function(e) {
        e.stopPropagation();
        nextSlide();
    });

    document.getElementById('closeBtn').addEventListener('click', function(e) {
        e.stopPropagation();
        closeSlider();
    });
});

function openSlider(tourName) {
    currentTour = tourName;
    currentSlide = 0;
    const sliderOverlay = document.getElementById('sliderOverlay');
    const sliderContainer = document.getElementById('sliderContainer');
    
    sliderOverlay.style.display = 'flex';
    updateSlider();
}

function closeSlider() {
    const sliderOverlay = document.getElementById('sliderOverlay');
    sliderOverlay.style.display = 'none';
    currentSlide = 0;
    currentTour = '';
}

function nextSlide() {
    const images = tourImages[currentTour];
    currentSlide = (currentSlide + 1) % images.length;
    updateSlider();
}

function previousSlide() {
    const images = tourImages[currentTour];
    currentSlide = (currentSlide - 1 + images.length) % images.length;
    updateSlider();
}

function updateSlider() {
    const images = tourImages[currentTour];
    const sliderImage = document.getElementById('sliderImage');
    const slideCounter = document.getElementById('slideCounter');
    
    sliderImage.src = images[currentSlide];
    slideCounter.textContent = `${currentSlide + 1} / ${images.length}`;
}
