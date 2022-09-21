$(function(){
    // アコーディオンメニューのラベルがクリックされた場合
    $("#ac-menu .label").on("click", function() {
      // labelクラスの次の要素（detailクラス）の表示・非表示を切り替える
      $(this).next().slideToggle();
      // labelクラスにopenクラスを追加したり削除したりする
      // openクラスの追加、削除を行うことでラベルの「－」と「＋」の切り替えを行う
      $(this).toggleClass("open");
    });
});

$(function(){
  // アコーディオンメニューのラベルがクリックされた場合
  $(".flow .flex .left").on("click", function() {
    // labelクラスの次の要素（detailクラス）の表示・非表示を切り替える
    $(this).next().slideToggle();
    // labelクラスにopenクラスを追加したり削除したりする
    // openクラスの追加、削除を行うことでラベルの「－」と「＋」の切り替えを行う
    $(this).toggleClass("open");
  });
});

$(function () {
    var headerHight = 50;
    $('a[href^="#"]').click(function () {
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? "html" : href);
      var position = target.offset().top - headerHight;
      $("html, body").animate({ scrollTop: position }, 550, "swing");
      return false;
    });
});

$(function(){
  var pagetop = $('#page-top');
  pagetop.hide();
  $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
});