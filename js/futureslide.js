$(window).resize(function(e){
  if(window.innerWidth < 800) {
      if(!$('.futurenet_contents').hasClass('slick-initialized')){
          mobileOnlySlider();
      }

  }else{
      if($('.futurenet_contents').hasClass('slick-initialized')){
          $('.futurenet_contents').slick('unslick');
      }
  }
});

$('.futurenet_contents').slick({
  slidesToShow: 2,
  arrows:false,
  dots: true,
  responsive:[
    {
      breakpoint:520,
      settings: {
        slidesToShow:1
      }
    }
  ]
})