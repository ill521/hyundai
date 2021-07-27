$('.case_slider').slick({
  centerMode: true,
  centerPadding: '300px',
  slidesToShow: 3,
  prevArrow: $('#arrow_prev2'),
  nextArrow: $('#arrow_next2'),
  responsive:[
    {
      breakpoint:1240,
      settings:{
        slidesToShow:2,
        centerPadding: '100px',
      }
    },
    {
      breakpoint:800,
      settings:{
        slidesToShow:2,
        centerPadding: 0,
        dots:true
      }
    },
    {
      breakpoint:520,
      settings:{
        slidesToShow:1,
        centerPadding: '5px',
        dots:true
      }
    }
  ]
});