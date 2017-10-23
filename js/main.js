var sliderImages = document.querySelectorAll('.slide'),
            arrowRight = document.querySelector('#arrow-right'),
            arrowLeft = document.querySelector('#arrow-left'),
            current = 0;
        
// počistit će sve fotke
function reset(){
    for (var i = 0; i < sliderImages.length; i++) {
            sliderImages[i].style.display = 'none';
        }
}
        
// pokretanje slidera
function startSlide(){
    reset();
    sliderImages[0].style.display = 'block';
}
        
// pokaži prethodnu
function slideLeft(){
    reset();
    sliderImages[current -1].style.display = 'block';
    current--;
}

// pokaži sljedeću
function slideRight(){
    reset();
    sliderImages[current +1].style.display = 'block';
    current++;
}

// klik desna strelica
arrowRight.addEventListener('click', function(){
    if(current === sliderImages.length -1) {
        current = -1;
    } 
    slideRight();
});
        
// klik lijeva strelica
arrowLeft.addEventListener('click', function(){
    if(current===0) {
        current = sliderImages.length;
    } 
    slideLeft();
});
        
startSlide();  