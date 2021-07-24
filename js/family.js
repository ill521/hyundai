$(".family_btn").click(function(){
  $(".family_btn").toggleClass("active")
  $(".family ul").stop().slideToggle();
})

$(".family ul").hide();