  AOS.init();


var swiper = new Swiper(".mySwiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 4000,              // يقف 4 ثواني
    disableOnInteraction: false,
    waitForTransition: true,  // ما يعدش الـ delay غير بعد ما يخلص الانتقال
  },
  speed: 1000, // سرعة الانتقال (1 ثانية)
});

let nav = document.querySelector("nav")
let nav_btn = document.querySelector(".nav-btn")
let nav_top = document.querySelector(".top")
let up_btn = document.querySelector(".up-btn")
window.onscroll = ()=>{
  if(this.scrollY > 0){
    nav.classList.add("active")
    up_btn.classList.add("active")
  }else{
    nav.classList.remove("active")
    up_btn.classList.remove("active")

  }
  if(nav.classList.contains("active")){
    nav_btn.classList.add("active")
  }else{
    
    nav_btn.classList.remove("active")
  }
}

const burger = document.querySelector(".burger")
const side_menu = document.querySelector(".side-menu")
const close_btn = document.querySelector(".close i")
const overlay = document.querySelector(".overlay")
overlay.addEventListener("click" ,() => {
  side_menu.classList.remove("active")
  overlay.classList.remove("active")
})
burger.addEventListener("click" , ()=>{
  side_menu.classList.add("active")
  overlay.classList.add("active")
  
})
close_btn.addEventListener("click" , ()=>{
  side_menu.classList.remove("active")
  overlay.classList.remove("active")
})

const links = document.querySelectorAll(".link")
links.forEach((link) => {
  link.addEventListener("click" , () => {
    side_menu.classList.remove("active")
    overlay.classList.remove("active")
  })
})

const pre_loader = document.querySelector(".pre-loader")

window.addEventListener("load",()=>{
    pre_loader.style.opacity = "0"
    pre_loader.style.zIndex = "-1"
    
})

const nav_links = document.querySelectorAll(".links a")

nav_links.forEach((link) => {
  link.addEventListener("click" , () => {
    nav_links.forEach((l) => l.classList.remove("active"))
    link.classList.add("active")
  })
})


