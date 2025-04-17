/* preloader */
const preloader = document.getElementById("preloader");
window.addEventListener("load",()=>{
  preloader.style.height = "0"
  preloader.style.overflow = "hidden"
})
// swiper JS
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop:true,
  autoplay:{
    delay:2000,
    dynamicBullests: true,
  }
});

// menu
const buttons = document.querySelectorAll(".btn")
const all = document.querySelector(".btn")
const menu_card = document.querySelectorAll(".menu-card")
all.classList.add("active")
buttons.forEach((button=>{
  button.addEventListener("click",()=>{
    buttons.forEach((button)=>{button.classList.remove("active")})
    button.classList.add("active")
    const category = button.getAttribute("data-category");
    menu_card.forEach((card)=>{
      if(category === "all" || category === card.getAttribute("data-category"))
        {
          card.style.display = "flex"
        }else{
          card.style.display = "none"
        }
    })
  })
}))


/* Show reservation */

const show_right_btn = document.getElementById("show-btn");
const right_reservation = document.querySelector(".reservation-right");
const close_btn = document.querySelector(".close-btn");


close_btn.addEventListener("click",()=>{
  right_reservation.classList.remove("flex")
})
show_right_btn.addEventListener("click",()=>{
  right_reservation.classList.add("flex")
})

/* Validation */
const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const date = document.getElementById("date")

function show_error(input,message){
    const form_control = input.parentElement;
    form_control.className = "form-control error";
    const span = form_control.querySelector("span")
    span.innerText = message;
  }

  function show_success(input,message){
    const form_control = input.parentElement;
    form_control.className = "form-control succes";
    const span = form_control.querySelector("span")
    span.innerText = message;
  }
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  if(username.value.trim() === "")
  {
    show_error(username,"Enter Your Name")
  }else{
    show_success(username ,`Hello ${username.value.trim()}`)
  }
  if(email.value.trim() === "")
  {
    show_error(email,"Enter Your Email")
  }else{
    show_success(email,"")
  }
  if(phone.value.trim() === "")
  {
    show_error(phone,"Enter Your Phone Number")
  }
  else if(phone.value.trim().length < 11)
  {
    show_error(phone,"Enter a Valid Phone Number")
  }
  else{
    show_success(phone,"")
  }
  if(date.value.trim() === "")
  {
    show_error(date,"Enter a Valid Date")
  }else{
    show_success(date,"We are waiting for your honor")
  }
})

/* Accordion */
const accordion = document.querySelectorAll(".accordion")

accordion.forEach((acc)=>{
  const header = acc.querySelector(".accordion-header")
  const content = acc.querySelector(".accordion-content")
  const btn = acc.querySelector(".accordion-btn")
  header.addEventListener("click",()=>{
    content.classList.toggle("visibile")
    if(content.classList.contains("visibile")){
      btn.innerHTML = "-";
    }else{
      btn.innerHTML = "+";
    }
  })
})


/* Scroll functions */

const up = document.querySelector(".up-btn")
const nav = document.querySelector("nav")
window.onscroll = function(){
  
  if(this.scrollY > 0)
  {
    up.classList.add("show");
    nav.classList.add("scroll")
  }else{
    up.classList.remove("show")
    nav.classList.remove("scroll")
  }
}
