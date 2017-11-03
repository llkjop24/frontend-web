// $('body').fadeOut().delay(1000).fadeIn();
//
// $('div').addClass('blue');

// $('div').css("background-color", 'yellow');

// console.log($('img').attr('src'));
//
// console.log($('div').height());
//
// $('div').height(200);
//
// console.log($('div').offset());
//
// console.log($('div').position());
//
// var divd = $('div');
//
// $('div').html('<h1>div</h1>');
//
// console.log($('input').val());
//
// $('div').addClass('blue').html('<h2>div</h2>'); //이건 되는데
//
// $('div').html('<h2>div</h2>').addClass('blue');// 이건 안되 .html 이 스트링으로 리턴하는거라서 스트링ㅇ는 addClass 함수 쓸수 없어


// $('#btn').click(function(){
//
// })
// $('#btn').on('click',function(){
//   $('div').animate({left: 200},5000);
// })


// $( "#dataTable tbody" ).on( "click", "tr", function() {
//   console.log( $( this ).text() );
// })  // 이게 더 효율적일 수 있다 상위 테이블에 이벤트를 주고 그안에 속성에 줌으로써 일일이 주는게 아니라서 좀더 효율적인 방법이 된다.;

$('#login').on('click',function(){
  window.open($(event.currentTarget).attr('href'),'login','width=400,height=400');
  event.stopPropagation();
  event.preventDefault();
})

$('#login1').on('click',function(){
  window.open('http://daum.net','login','width=400,height=400');
})
