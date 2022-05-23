"use strict"


//hero__listの横移動----------------------------------------

const hero_lists = document.getElementsByClassName("hero__list")

// スクロールするたびに判定
window.addEventListener("scroll",to_side);

function to_side(){
  for(let i = 0;i < hero_lists.length;i++){
    const y = hero_lists[i].getBoundingClientRect().y;
    if(i%2){
      if(y < 250){
        hero_lists[i].style.transform = `translateX(${(y - 250) * (-1)}px)`;
      } else {
        hero_lists[i].style.transform = "translateX(0)";
      };
    } else {
      if(y < 250){
        hero_lists[i].style.transform = `translateX(${y - 250}px)`;
      } else {
        hero_lists[i].style.transform = "translateX(0)";
      };
    };
  };
};




//SKILLの遅延表示----------------------------------------
const lists = document.querySelectorAll("li");

function callback(entries,obj){
  entries.forEach(entry=>{

    if(!entry.isIntersecting){
      return;
    };

    entry.target.classList.add("appear");
    obj.unobserve(entry.target);
  });
};

const option = {
  threshold : .5,
};

const observer = new IntersectionObserver(callback,option);

lists.forEach(li=>{
  observer.observe(li);
});


//TOPボタンの遅延表示---------------------------------------
const target = document.getElementById("target");
const header = document.querySelector("header");
const toTop = document.getElementById("top");

function callback2(e){
  if(!e[0].isIntersecting){
    toTop.classList.add("scrolled");
    header.classList.add("scrolled");
  } else {
    toTop.classList.remove("scrolled");
    header.classList.remove("scrolled");
  };
};

const observer2 = new IntersectionObserver(callback2);

toTop.addEventListener("click",e =>{
  e.preventDefault();

  window.scrollTo({
    top:0,
    behavior:"smooth",
  });
});

observer2.observe(target);
