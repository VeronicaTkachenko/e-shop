$(function () {
  $(".banner-section__slider").slick({
    dots: true,
    prevArrow:
      '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="./images/arrow-left.svg" alt=""></button>',
    nextArrow:
      '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="./images/arrow-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 969,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  $(".tab").on("click", function (e) {
    e.preventDefault();
    $($(this).siblings()).removeClass("tab--active");
    $($(this).closest(".tabs-wrapper").siblings().find("div")).removeClass(
      "tabs-content--active"
    );
    $(this).addClass("tab--active");
    $($(this).attr("href")).addClass("tabs-content--active");

    $(".product-slider").slick("setPosition");
  });

  $(".product-item__favorite").on("click", function () {
    $(this).toggleClass("product-item__favorite--active");
  });

  $(".product-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="./images/arrow-black-left.svg" alt=""></button>',
    nextArrow:
      '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="./images/arrow-black-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 1301,
        settings: {
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  });

  $(".filter-style").styler();

  $(".filter__item-drop, .filter__extra").on("click", function () {
    $(this).toggleClass("filter__item-drop--active");
    $(this).next().slideToggle("200");
  });

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 100000,
    max: 500000,
  });

  $(".catalog__filter-btngrid").on("click", function () {
    $(this).addClass("catalog__filter-button--active");
    $(".catalog__filter-btnline").removeClass("catalog__filter-button--active");
    $(".product-item__wrapper").removeClass("product-item__wrapper--list");
  });

  $(".catalog__filter-btnline").on("click", function () {
    $(this).addClass("catalog__filter-button--active");
    $(".catalog__filter-btngrid").removeClass("catalog__filter-button--active");
    $(".product-item__wrapper").addClass("product-item__wrapper--list");
  });

  $(function () {
    $(".rate-yo").rateYo({
      ratedFill: "#1c62cd",
      normalfill: "#c4c4c4",
      spacing: "7px",
    });
  });

  $(".menu__btn").on("click", function () {
    $(".menu-mobile__list").toggleClass("menu-mobile__list--active");
  });

  $(".footer__topdrop").on("click", function () {
    $(this).next().slideToggle();
    $(this).toggleClass("footer__topdrop--active");
  });

  $(".aside__btn").on("click", function () {
    $(this).next().slideToggle();
  });
});

// $($(this).siblings()).removeClass("tab--active");
//Когда мы кликаем на .tab  всё ок, убираем класс "tab--active", но нужно убнать не у всех табов
//а у соседних элементов
// $($(this).parent().siblings().find('div')).removeClass("tabs-content--active");
// У родителя: "tabs" есть сосед "tabs-container", а в нем либо поиск div(как в нашем случае), либо по классам

// Схема
//  <div class="tabs-wrapper">
// 	<div class="tabs">
// 		<a href="#" class="tab tab--active"></a>
// 	</div>
// 	<div class="tabs-container">
// 		<div class="tabs-content"></div>
// 	</div>
// </div>
