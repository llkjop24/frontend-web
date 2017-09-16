//1

for(i=0; i<100; i++){
  console.log(i+1);
}

//2

for(j=1; j<=100; j++){
  if(j%2==1) {
    console.log(j);
  }
}

//3

for(var i=1; i<10; i++){
  for(var j=1; j<10; j++){
    console.log(i + "x" + j + "="+ i*j);
  }
}
//4

var num, total = 0, end = true;

while(end){
  num = prompt("숫자를 입력하세요 '0'을 입력하면 총 합을 보여줍니다.");
  if(num == '0'){
    alert("총합은" + total+"입니다.");
    end=false;
  }

  total = total + parseInt(num);
}

alert(total);
