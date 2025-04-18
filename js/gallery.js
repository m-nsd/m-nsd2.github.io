// 画像ギャラリー機能を動かす
// ここでやりたいのは、ギャラリーの各サムネイル画像にイベントリスナーをアタッチして
// クリックされたときにメイン画像をサムネイル画像に対応するものに差し替えること
function activateGallery() {
  // JavaScriptで操作する対象を把握
  // 画像オブジェクト(全サムネイル画像とメイン画像)の捕捉
  //let thumbnails = document.querySelector("#gallery-thumbs").querySelectorAll("img");
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage  = document.querySelector("#gallery-photo img");
  // 画像情報（タイトルと説明）のオブジェクトを捕捉
  let galleryInfo = document.querySelector("#gallery-info");
  let title       = galleryInfo.querySelector(".title");
  let description = galleryInfo.querySelector(".description");

  thumbnails.forEach(function(thumbnail){
    // 大画像をプリロードする 
    let newImageSrc  = thumbnail.dataset.largeVersion;
    let largeVersion = new Image();
    largeVersion.src = newImageSrc;

    thumbnail.addEventListener("click", function() {
      // クリックされたサムネイル画像をメイン画像として設定する
      let newImageSrc = thumbnail.dataset.largeVersion;
      mainImage.setAttribute("src", newImageSrc);
      mainImage.setAttribute("alt", thumbnail.alt);

      // カレントを示すサムネイル画像を変更する
      // let currentClass = "current"; "current"リテラルの重複解消　やり方不明
      document.querySelector(".current").classList.remove("current"); //赤枠を消す
      thumbnail.parentNode.classList.add("current"); //赤枠をつける

      // 画像の情報（タイトルと説明）を更新する
      title.innerHTML = thumbnail.dataset.title;
      description.innerHTML = thumbnail.dataset.description;
    });
  });
}
