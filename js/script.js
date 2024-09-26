"use strict";

const mmm = document.getElementById('lfbtn');

function sliding() {
  mmm.classList.add('newClass');
  if (true) {
    setTimeout(function(){
      document.location.href = 'coins.html';
      mmm.classList.remove('newClass');
     },500);
  }
}

let BurgerWindow = document.getElementById("BurgerWindow");
function menu(){
  BurgerWindow.classList.toggle('BurgerUp');
}


const swiper1 = document.getElementById('swiper1');
const swiper2 = document.getElementById('swiper2');
const swiper3 = document.getElementById('swiper3');

function svipe() {
  setInterval(function print(){
      swiper1.style.display="block";
      swiper2.style.display="none";
      swiper3.style.display="none";
      console.log(1);
    setTimeout(function print(){
      swiper1.style.display="none";
      swiper2.style.display="block";
      swiper3.style.display="none";
      console.log(2);
    }, 3000);
    setTimeout(function print(){
      swiper1.style.display="none";
      swiper2.style.display="none";
      swiper3.style.display="block";
      console.log(3);
    }, 6000);
  },9000);
}
  // svipe();