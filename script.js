// メインH1アニメーション
const mainLetters = document.querySelectorAll('.mainLetter');
document.addEventListener('scroll',function(){
  for(let i = 0; i < mainLetters.length; i++){
    const getElementDistance = mainLetters[i].getBoundingClientRect().top + mainLetters[i].clientHeight*6
    if (window.innerHeight > getElementDistance){
      mainLetters[i].classList.add('show');
    }
  }
})
const mainLettersA = document.querySelectorAll('.subConb');
document.addEventListener('scroll',function(){
  for(let i = 0; i < mainLettersA.length; i++){
    const getElementDistanceA = mainLettersA[i].getBoundingClientRect().top + mainLettersA[i].clientHeight*6
    if (window.innerHeight > getElementDistanceA){
      mainLettersA[i].classList.add('show');
    }
  }
})

// about
const targetElement = document.querySelectorAll(".animationTarget");
document.addEventListener("scroll",function() {
  for (let i = 0; i < targetElement.length; i++){
    const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * .9
    if (window.innerHeight > getElementDistance) {
      targetElement[i].classList.add("show");
    }
  }
})


// メインRELLAX
document.querySelectorAll('main > section').forEach(element => {
  const circle = document.createElement('div')
  circle.classList.add('circle')
  element.appendChild(circle)
})

const image = new Rellax('.image img',{
  // speed: 5
  center: true
})
const imageA = new Rellax('.imageA img',{
  // speed: 7
  center: true
})

const imageB = new Rellax('.imageB img',{
  // speed: 7
  center: true
})

// スライダー
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay:{
    delay: 2000
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


