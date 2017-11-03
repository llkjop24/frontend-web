var scrollbtn = $('#scroll');
scrollbtn.fadeOut();


$(window).scroll(function(){
  var y = $(this).scrollTop();
  console.log(y);

  if(y >= 20){
    scrollbtn.fadeIn().delay(500);

  }
  else {
    scrollbtn.fadeOut();
  }
});

scrollbtn.on('click',function(){
  console.log('click');
  console.log($(this));
  $('html body').animate({scrollTop : 0},400);
});
