$(document).ready(function() {

  $(".faq").on("click", $(".faq__question"), function(event) {
    $(event.target).toggleClass("active");

  });

  // $(document).on("click", function() {
  //   $('[data-toggle="popover"]').popover("hide");
  // });



  $('[data-toggle="popover"]')
  .popover()
  .on("click", function(event) {
    event.preventDefault();
  });



  $(document).on("click", function (e){
  var div = $('[data-toggle="popover"]');
  if (!div.is(e.target)) {
    div.popover("hide");
  }
  div.popover();
});


  $('body').scrollspy({target: ".navbar", offset: 50});

  // Add smooth scrolling on all links inside the navbar
  $(".nav a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800);

    } // End if

  });

  $(".header__logo").on('click', function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 800);
  });

  $(".navi__toggle").on('click', function() {
    $(this).toggleClass("opened");
  });

  $(".phone-input").mask("+7 (999) 999-99-99");

  $(".name-input").focus(function() {
      $(this).removeClass("fill-error"), $(this).attr("placeholder", "Ваше имя")
    })

    $(".phone-input").focus(function() {
      $(this).removeClass("fill-error"), $(this).attr("placeholder", "Ваш телефон")
    })

    $("form").submit(function() {
      var e = !1,
          t = /[^а-яЁё\s]/i,
          o = $(this).find(".name-input"),
          l = $(this).find(".phone-input");
      if ("" == o.val() ? (o.addClass("fill-error"), o.attr("placeholder", "*Заполните поле"), e = !0) : t.test(o.val()) ? (o.addClass("fill-error"), o.attr("placeholder", "Неверный формат имени"), o.val(""), e = !0) : (o.removeClass("fill-error"), o.attr("placeholder", "Ваше имя")), "" == l.val() ? (l.addClass("fill-error"), l.attr("placeholder", "*Заполните поле"), e = !0) : (l.removeClass("fill-error"), l.attr("placeholder", "Ваш телефон")), e) return !1
    });


});
