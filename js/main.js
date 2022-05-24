"use strict"

// ↓↓ loadingアニメーション ↓↓ ---------------

  const loading_img = document.getElementsByClassName("loading__img");

  let anime_count = 0;

  function load_anime(){
    loading_img[anime_count].classList.add("show");
    for(let i = 0;i < loading_img.length;i++){
      if(i == anime_count){
        continue;
      };
      loading_img[i].classList.remove("show");
    };
    anime_count++;
    if(anime_count >= loading_img.length){
      anime_count = 0;
    };
  };

  setInterval(load_anime,500);

// ↑↑ loadingアニメーション ↑↑ ---------------


// ↓↓ loading画面の終了 ↓↓ ---------------

  const loading = document.getElementById("loading");

  function loaded(){
    loading.classList.add("loaded");
  };

  window.addEventListener("load",loaded);
  // setTimeout(loaded,2000);

// ↑↑ loading画面の終了 ↑↑ ---------------



// ↓↓ TOPへ戻るボタンの表示 ↓↓ ---------------

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

// ↑↑ TOPへ戻るボタンの表示 ↑↑ ---------------


// ↓↓ hero__listの横移動 ↓↓ ---------------

  const hero_lists = document.getElementsByClassName("hero__list");

  function to_side(){
    for(let i = 0;i < hero_lists.length;i++){

      const y = hero_lists[i].getBoundingClientRect().y;
      const point = 240;
      const move = y - point;

      if(i%2){
        if(y < point){
          hero_lists[i].style.transform = `translate(${-move}px,${-move / 2}px)`;
        } else {
          hero_lists[i].style.transform = "translate(0)";
        };
      } else {
        if(y < point){
          hero_lists[i].style.transform = `translate(${move}px,${-move / 2}px)`;
        } else {
          hero_lists[i].style.transform = "translate(0)";
        };
      };
    };
  };

  // スクロールするたびに判定
  window.addEventListener("scroll",to_side);

// ↑↑ hero__listの横移動 ↑↑ ---------------


