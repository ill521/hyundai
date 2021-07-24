$(".message_contents ul li").mouseenter(function(){
  $(this).addClass("active")
})
$(".message_contents ul li").mouseleave(function(){
  $(this).removeClass("active")
})