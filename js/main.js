/* ========================================================
                       Menu function
  ========================================================*/
  jQuery(document).ready(function($) {
    $(".navbar__container--trigger ").click(function() {});
  
    //show menu
    $(".navbar__container--trigger").on("click", function(event) {
      event.preventDefault();
      $("#main-nav").addClass("is-visible");
      $(".navbar__content--a--1").addClass("in--1");
      $(".navbar__content--a--2").addClass("in--2");
      $(".navbar__content--a--3").addClass("in--3");
      $(".navbar__content--a--4").addClass("in--4");
      $(".navbar__content--a--5").addClass("in--5");
      $(".navbar__content--a--6").addClass("in--6");
      $(".navbar__container--trigger").css("display", "none");
  
      $(".bgheader").css("opacity", "0.2");
      $(".header__logo").css("opacity", "0.2");
      $(".header__rightbox--h3").css("opacity", "0");
      $(".header__rightbox--h1").css("opacity", "0");

      /* carnet */
      $(".carnet, .dreher, .menedekhaz, .kava, .pictures").css("opacity", "0.2");
    });
    
    //close menu
    $(".cd-close-menu").on("click", function(event) {
      event.preventDefault();
      $("#main-nav").removeClass("is-visible");
      $(".navbar__content--a--1").removeClass("in--1");
      $(".navbar__content--a--2").removeClass("in--2");
      $(".navbar__content--a--3").removeClass("in--3");
      $(".navbar__content--a--4").removeClass("in--4");
      $(".navbar__content--a--5").removeClass("in--5");
      $(".navbar__content--a--6").removeClass("in--6");
      $(".navbar__container--trigger").css("display", "block");
  
      $(".bgheader").css("opacity", "1");
      $(".header__logo").css("opacity", "1");
      $(".header__rightbox--h3").css("opacity", "1");
      $(".header__rightbox--h1").css("opacity", "1");

      /* carnet */
      $(".carnet, .dreher, .menedekhaz, .kava, .pictures").css("opacity", "1");
    });
  });
  
    /* KONTAKT button click */
    $('.bottom__text--say h1, #contact__close').on('click', function (event) {
      event.preventDefault();
      $('.header__left').toggleClass('visible-left');
      
      
      $('.header__logo').toggleClass('display-block');
      $('.header__rightbox').toggleClass('rightbox-push');
      $('.header__rightbox--h3').toggleClass('rightbox-hide');
      $('.header__rightbox--h1').toggleClass('rightbox-hide');
      $('.navbar__container--trigger ').toggleClass('display-block');
      $('.bottom__text--scroll--h1').toggleClass('display-block');
      $('.bottom__text--scroll').toggleClass('display-block');
    

      //carnet
      $('.carnet__info').toggleClass('rightbox-push');
      $('.carnet__logo').toggleClass('rightbox-OFF');
      $('.carnet__text').toggleClass('rightbox-OFF');
      $('.carnet__info').toggleClass('rightbox-hide');
    

      var text = $('#sayhello').text();
        if (text == 'Hello.'){
      $('#sayhello').text('Bye.');}
  
      if (text == 'Bye.'){
        $('#sayhello').text('Hello.');}
      
  });

  /* About botton open/close */
  $('.bottom__text--scroll--h1, #about__close').on('click', function (event) {
    event.preventDefault();
    $('.header__right').toggleClass('visible-right');

    $('.header__logo').toggleClass('display-block');
    $('.header__rightbox').toggleClass('rightbox-push-left');
    $('.header__rightbox--h3').toggleClass('rightbox-hide');
    $('.header__rightbox--h1').toggleClass('rightbox-hide');
    $('.navbar__container--trigger ').toggleClass('display-block');
    $('.bottom__text--say h1').toggleClass('display-block');


    $('.carnet__info').toggleClass('rightbox-push-left');
    $('.carnet__logo').toggleClass('rightbox-hide');
    $('.carnet__text').toggleClass('rightbox-hide');
    $('.carnet__info').toggleClass('rightbox-OFF');
    $('.kava__right').toggleClass('rightbox-OFF');

});

/* SAY text open/close */
$('.about__textbox--say').on('click', function (event) {
  event.preventDefault();
  $('.header__right').removeClass('visible-right');
  $('.header__left').addClass('visible-left');
  $('.bottom__text--say h1').toggleClass('display-block');
  $('.bottom__text--scroll--h1').toggleClass('display-block');
      $('.bottom__text--scroll').toggleClass('display-block');

  $('.header__rightbox').addClass('rightbox-push');
  $('.header__rightbox').removeClass('rightbox-push-left');

  $('.carnet__info').removeClass('rightbox-OFF');
  $('.carnet__info').addClass('rightbox-hide');
 
  $('.carnet__logo').removeClass('rightbox-hide');
  $('.carnet__logo').addClass('rightbox-OFF');
   
  $('.carnet__text').removeClass('rightbox-hide');
  $('.carnet__text').addClass('rightbox-OFF');

  $('.carnet__info').removeClass('rightbox-push-left');
  $('.carnet__info').addClass('rightbox-push');
});
  
  /* ========================================================
                      Add name to span when write
  ========================================================*/
  $("#input")
      .keyup(function () {
          var value = $(this).val();
          $("#namespan").text(value);
      })
      .keyup();
  
  
  
  // Smooth scroll for the menu and links with .scrollto classes
   $(".smoothscroll").on("click", function(e) {
    e.preventDefault();
    if (
      location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top -70
          },
          1500,
        );
      }
  //link content hide-show
      $("#main-nav").removeClass("is-visible");
      $(".navbar__content--a--1").removeClass("in--1");
      $(".navbar__content--a--2").removeClass("in--2");
      $(".navbar__content--a--3").removeClass("in--3");
      $(".navbar__content--a--4").removeClass("in--4");
      $(".navbar__content--a--5").removeClass("in--5");
      $(".navbar__content--a--6").removeClass("in--6");
      $(".navbar__container--trigger").css("display", "block");
  
      $(".bgheader").css("opacity", "1");
      $(".header__logo").css("opacity", "1");
      $(".header__rightbox--h3").css("opacity", "1");
      $(".header__rightbox--h1").css("opacity", "1");

      /* carnet */
      $(".carnet, .dreher, .menedekhaz, .kava, .pictures").css("opacity", "1");
      
    }
  }); 

  

//Magnetic Pop-Up Gallery INIT
  $(document).ready(function() {
    $('#pictures-section').magnificPopup({
        
        delegate: 'a', 
        type: 'image',
        gallery:{
            enabled:true
          }
        
    });
  });


