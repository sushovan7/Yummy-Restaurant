scrollAnimations()
hamburgerDisplay()

function scrollAnimations(){
  ScrollReveal().reveal('.nav',{
    origin:'bottom',
    distance:'20px',
    duration:1000,
    opacity:0,
    delay:500,
  })
  
  ScrollReveal().reveal('.load',{
    origin:'bottom',
    distance:'50px',
    duration:2000,
    opacity:0,
   
  })
  
  ScrollReveal().reveal('.title',{
    origin:'bottom',
    distance:'20px',
    duration:1000,
    opacity:0,
    delay:1000,
  })
  
  ScrollReveal().reveal('.section',{
    origin:'bottom',
    distance:'20px',
    opacity:0,
    duration:1300,
    delay:100,
  })
  
}

function hamburgerDisplay(){
  let hamBurgerMenu = document.querySelector('.ham-burger');
let navLink = document.querySelector('.nav-links');
let crossBtn = document.querySelector('.cross-btn');

hamBurgerMenu.addEventListener('click',displayHamburgerMenu)
function displayHamburgerMenu(){
  navLink.style.display = 'block'
}

crossBtn.addEventListener('click',removeHamBurgerMenu)
function removeHamBurgerMenu(){
navLink.style.display = 'none'
}
}





