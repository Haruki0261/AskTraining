const ham = $("#js-hamburger");
const nav = $("#js-nav");
ham.on("click", function () {
  ham.toggleClass("active"); // ハンバーガーメニューにactiveクラスを付け外し
  nav.toggleClass("active"); // ナビゲーションメニューにactiveクラスを付け外し
});

