 var Tab = document.querySelectorAll('ul li');
 var list = document.getElementById('list');
 var More = document.querySelector('.btn');
 var pageNo = 1;

 var str = '';
 var loadingimg = document.getElementById('loading').outerHTML;

 console.log(Tab);
 console.log(list);

 window.onload=start;

 function start(){  //윈도우가 시작해서 로드 될때 tab내용을 가지고 와서 리스트를 부려줍니다.
   var activeTab = document.querySelector('.active');
   JudgeTab(activeTab.textContent);
 }

 function Tabselect(event){ //tab을 선택했을 때 발생하는 이벤트
   console.log(event.target);
   console.log(event.target.parentNode);
   console.log(event.target.text);

   list.innerHTML = loadingimg; //londing 마크업을 다시 나타나게 해줍니다.

   var liclass = event.target.parentNode;  //이벤트가 발생한 개체의 부모노드를 선택합니다. 여기서는 선택한 a태그위에 li 태그를 선택합니다.
   var active = document.querySelector('.active'); //active가 되어 있는 탭은 'inactive' 상태로 바꾸어 주어야 되서 active인 개체를 선택합니다.

   if(liclass.className === 'inactive'){ //inactie 인 거 선택하면 active 바꿔주고 active inactive로 바꿔주기
     liclass.setAttribute('class','active');

     console.log(active);
     active.setAttribute('class','inactive');
   }

   str = '';

   JudgeTab(event.target.text)
 }

 function JudgeTab(TabName){  //어떤 탭을 눌렀는지 확인하고 그에 따른 리스트를 출력해준다.

   if(TabName === '트렌딩'){
    getJSON('http://1boon.kakao.com/ch/trending.json?pagesize=10&page='+pageNo,done);
   }
   else if(TabName ==='이슈'){
     getJSON('http://1boon.kakao.com/ch/issue.json?pagesize=10&page='+pageNo,done);
   }
   else{
     getJSON('http://1boon.kakao.com/ch/enter.json?pagesize=10&page='+pageNo,done);
   }
 }

 function done(result){   //받은 Json을 html로 출력해준다.

  console.log(result);

  for(var i=0; i < result.data.length; i++){

    str += '<h3>'+result.data[i].title+'</h3>\n';
    str += '<img src='+result.data[i].coverImage+' width="300"><br>\n';
    str += '<a href='+'http://1boon.kakao.com/'+result.data[i].path+'>링크보기</a><br>\n';
    str += '<span> 조회수: '+result.data[i].totalView+'</span>\n';
  }

  list.innerHTML = str;
}

var tmpstr ='';

 function Morelist(event){  //더보기를 누를경우 원래 있던 리스트에 추가적으로 리스트가 로드 됩니다.
  pageNo++;
  tmpstr += str;
  JudgeTab(event.target.text);
  list.innerHTML += tmpstr;
}

 for(var i=0; i<Tab.length; i++){
  Tab[i].addEventListener('click',Tabselect);
}

More.addEventListener('click',Morelist);
