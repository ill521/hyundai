// $(".main_tab li").click(function(e){
//   e.preventDefault();
//   $(".main_tab li").removeClass("active")
//   $(this).addClass("active")
  
// })

$(".main_tab li").click(function(e){
  e.preventDefault();
  var idx = $(this).index();
  $(".main_tab li").removeClass("active")
  $(".main_tab li").eq(idx).addClass("active");
  $(".main_contents > div").stop().hide(1000);
  $(".main_contents > div").eq(idx).stop().show(1000);
})







