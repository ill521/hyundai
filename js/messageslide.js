$('.message_contents').slick({
 slidesToShow:4,
 responsive: [
   {
    breakpoint: 800,
    settings: {
      slidesToShow:2,
      arrows:false,
      dots: true,
      centerMode: true
    }
   },
   {
    breakpoint: 520,
    settings: {
      slidesToShow:1,
      arrows:false,
      dots: true,
      
    }
   }

 ]
});
