document.addEventListener("DOMContentLoaded", function() {
   const myTimeout = setTimeout(myGreeting, 1000);

   function myGreeting() {
     document.getElementById("welcome-text").innerHTML = "Welcome"
   };
   const myTimeout1 = setTimeout(myGreeting1, 2000);

   function myGreeting1() {
     document.getElementById("welcome-text").innerHTML = "to"
   };
   const myTimeout2 = setTimeout(myGreeting2, 3000);

   function myGreeting2() {
     document.getElementById("welcome-text").innerHTML = "Pixel"
   };
   const myTimeout3 = setTimeout(myGreeting3, 4000);

   function myGreeting3() {
     document.getElementById("welcome-text").innerHTML = "Quest"
   };
   const myTimeout4 = setTimeout(myGreeting4, 5000);

   function myGreeting4() {
     document.getElementById("welcome-text").innerHTML = ""
   };

   
 });


const navMenu = document.getElementById('nav__menu'),
     navToggle = document.getElementById('nav__toggle'),
      navClose = document.getElementById('nav__close')

navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
 })

 navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
 })


 const search = document.getElementById('search'),
       searchBtn = document.getElementById('search-btn'),
       searchClose = document.getElementById('search-close')
 

 searchBtn.addEventListener('click', () =>{
    search.classList.add('show-search')
 })
 
 
 searchClose.addEventListener('click', () =>{
    search.classList.remove('show-search')
 })

 const login = document.getElementById('login'),
       loginBtn = document.getElementById('login-btn'),
       loginClose = document.getElementById('login-close')
 
 
 loginBtn.addEventListener('click', () =>{
    login.classList.add('show-login')
 })
 

 loginClose.addEventListener('click', () =>{
    login.classList.remove('show-login')
 })


//  document.getElementById('loginform').addEventListener("submit", (event)=>{
//  event.preventDefault()
//  })



//  var swiper = new Swiper(".slide_content", {
//    slidesPerView: 1,
//    spaceBetween: 30,
//    loop: true,
//    pagination: {
//      el: ".swiper-pagination",
//      clickable: true,
//    },
//    navigation: {
//      nextEl: ".swiper-button-next",
//      prevEl: ".swiper-button-prev",
//    },
//  })


// document.getElementById('open_preview').addEventListener('click', function() {
//    var container = document.getElementById('1preview');
//    container.classList.toggle('preview');
//  });
 

// function openWin() {
//   window.open("about NFTs.html");
// }



function fadeOutPage() {
   document.body.classList.add('fade-out');
   setTimeout(function() {
     window.location.href = "about NFTs.html";
   }, 600); 
 }

 const contact = document.getElementById('contact'),
 contactBtn = document.getElementById('uscontact'),
 contactClose = document.getElementById('contact-close')


contactBtn.addEventListener('click', () =>{
contact.classList.add('show-contact')
})


contactClose.addEventListener('click', () =>{
contact.classList.remove('show-contact')
})
 

const cart = document.getElementById('cart'),
cartBtn = document.getElementById('shopping_cart');
cartClose= document.getElementById('cart_close')



cartBtn.addEventListener('click', () =>{
cart.classList.add('show-cart')
})

cartClose.addEventListener('click', () =>{
   cart.classList.remove('show-cart')
   })


   let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


function myCustomer() {
   let person = prompt("Please enter your name", "Harry Potter");
   window.open("customer.html"); 
   }



   function changeIconColor(icon) {
    var currentColor = icon.style.color;
  
    
    if (currentColor === "red") {
      icon.style.color = "#f1f1f1";
    } else {
      icon.style.color = "red";
    }
  }


  

