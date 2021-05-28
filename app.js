const navIcon = document.querySelector('.nav-icon');
const links = document.querySelector('.links');
const body = document.querySelector('body')
const navHeight = document.querySelector('header')

navIcon.addEventListener('click',function(){
links.classList.toggle('nav-toggle');
})

window.addEventListener('scroll',function(){
  const scrollHeight = window.pageYOffset
  const height = navHeight.getBoundingClientRect().height;
if(scrollHeight > height){
navHeight.classList.add('fixed')
}
else{
  navHeight.classList.remove('fixed')
}
})





