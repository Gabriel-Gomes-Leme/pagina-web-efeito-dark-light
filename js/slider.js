var sliderPosition = 0
var sliderItem = document.getElementsByClassName('slider-item')
var totalSlides = sliderItem.length

var prev = document.querySelector('.back')
var next = document.querySelector('.next')

var navigation = document.querySelector('.slider-navigation')


next.addEventListener("click", function(){
    nextSlide()
})
prev.addEventListener("click", function(){
    prevSlide()
})

function nextSlide(){
    updatePosition()

    if (sliderPosition === totalSlides -1){
        sliderPosition = 0
    }
    else {
        sliderPosition++
    }
}
function prevSlide(){
    updatePosition()
    
    if (sliderPosition === 0){
        sliderPosition = 0
    }
    else {
        sliderPosition--
    }
}
function updatePosition(){
    for (let slide of sliderItem){
        slide.classList.remove('slider-item--visible')
        slide.classList.add('slide-item--hidden')
    }
    sliderItem[sliderPosition].classList.add('slider-item--visible')
}

console.log(totalSlides)