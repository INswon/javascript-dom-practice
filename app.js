//背景を変更で変更できるように記述
//1.domデータを取得(querysetを使う)、
//2.addeventlistnerで変更できるように設定

document.querySelector("#change-button").addEventListener("click",function(){
    document.querySelector("#change-box").style.backgroundColor = "#ccc";
});

document.querySelector("#reset-button").addEventListener("click",function(){
    document.querySelector("#change-box").style.backgroundColor = "#eea000";
});
