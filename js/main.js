"use strict"

// ↓↓ TOPへ戻るボタンの表示 ↓↓ 

  const target = document.getElementById("target");
  const to_top = document.getElementById("to_top");

  // 位置を確認してクラスを制御
  function top_button(){
    if(target.getBoundingClientRect().y < -100){
      to_top.classList.add("show");
    } else {
      to_top.classList.remove("show");
    };
  };

  // スクロールするたびに判定
  window.addEventListener("scroll",top_button);

// ↑↑ TOPへ戻るボタンの表示 ↑↑ 


// ↓↓ hero__listの横移動 ↓↓ 

  const hero_lists = document.getElementsByClassName("hero__list");

  function to_side(){
    for(let i = 0;i < hero_lists.length;i++){

      const y = hero_lists[i].getBoundingClientRect().y;
      const point = 240;

      if(i%2){
        if(y < point){
          hero_lists[i].style.transform = `translateX(${(y - point) * (-1)}px)`;
        } else {
          hero_lists[i].style.transform = "translateX(0)";
        };
      } else {
        if(y < point){
          hero_lists[i].style.transform = `translateX(${y - point}px)`;
        } else {
          hero_lists[i].style.transform = "translateX(0)";
        };
      };
    };
  };

  // スクロールするたびに判定
  window.addEventListener("scroll",to_side);

// ↑↑ hero__listの横移動 ↑↑ 


