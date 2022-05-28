"use strict"

// ↓↓ カーニング自動変換 ↓↓ ---------------

  const p = document.getElementsByTagName("p");
  const dt = document.getElementsByTagName("dt");
  const dd = document.getElementsByTagName("dd");
  const small = document.getElementsByTagName("small");

  function translate16px(tag){
    // <p><dd><small>の"、「　」『　』"を変換
    
    const left_bracket_16 = "<span class=\"left-bracket-16px\">「</span>";
    const right_bracket_16 = "<span class=\"right-bracket-16px\">」</span>";
    const left_double_bracket_16 = "<span class=\"left-bracket-16px\">『</span>";
    const right_double_bracket_16 = "<span class=\"right-bracket-16px\">』</span>";
    const punctuation = "<spna class=\"punctuation\">、</spna>";
    
    for(let i = 0;i < tag.length;i++){
      tag[i].innerHTML = tag[i].innerHTML.replace(/「/g,left_bracket_16);
      tag[i].innerHTML = tag[i].innerHTML.replace(/」/g,right_bracket_16);
      tag[i].innerHTML = tag[i].innerHTML.replace(/『/g,left_double_bracket_16);
      tag[i].innerHTML = tag[i].innerHTML.replace(/』/g,right_double_bracket_16);
      tag[i].innerHTML = tag[i].innerHTML.replace(/、/g,punctuation);
    };
  };

  translate16px(p);
  translate16px(dt);
  translate16px(dd);
  translate16px(small);

// ↑↑ カーニング自動変換 ↑↑ ---------------

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
  
  setInterval(load_anime,300);

// ↑↑ loadingアニメーション ↑↑ ---------------


// ↓↓ loading画面の終了 ↓↓ ---------------

  const body = document.querySelector("body");
  const loading = document.getElementById("loading");

  function loaded(){
    loading.classList.add("loaded");
    body.classList.add("loaded");
  };
  function loaded_delay(){
    setTimeout(()=>{
      body.classList.add("loaded");
      loading.classList.add("loaded");
    },1500);//1.5秒くらいは表示したい
  };

  window.addEventListener("load",loaded_delay);
  setTimeout(loaded,5000); //遅くても5秒で強制終了

// ↑↑ loading画面の終了 ↑↑ ---------------


// ↓↓ TOPへ戻るボタンの表示 ↓↓ ---------------

  const target = document.getElementById("target");
  const to_top = document.getElementById("to_top");
  const border_tr = document.getElementById("border_tr");
  const border_bl = document.getElementById("border_bl");

  // 位置を確認してクラスを制御
  function top_button(){
    if(target.getBoundingClientRect().y < -100){
      to_top.classList.add("show");
      border_tr.classList.add("short");
      border_bl.classList.add("short");
    } else {
      to_top.classList.remove("show");
      border_tr.classList.remove("short");
      border_bl.classList.remove("short");
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

      if(i%2){ //SKILLとCONTACTは右に
        if(y < point){
          hero_lists[i].style.transform = `translate(${-move}px,${-move / 2}px)`;
        } else {
          hero_lists[i].style.transform = "translate(0)";
        };
      } else { //ABOUTとWORKSは左に
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


