//lvar
let SetofUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let SetofLowwercase = 'abcdefghijklmnopqrstuvwxyz'
let SetofNumber = '0123456789'
let SetofSpecail = ''

let NumofPassword = 0;
let CountUppercase = 0;
let CountLowwercase = 0;
let CountNumber = 0;
let CountSpecial = 0;

var Points = 0; 

////////////////////////////////////////////////////////////////
function CheckPassword(inputString){
  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];
    if (char >= 'a' && char <= 'z') {
      CountLowwercase += 1;
    }else if(char >= 'A' && char <= 'Z'){
      CountUppercase += 1;
    } else if (char >= '0' && char <= '9') {
      CountNumber += 1;
    } else{
      CountSpecial += 1;
    }
  }
  // console.log(CountLowwercase);
  // console.log(CountUppercase);
  // console.log(CountNumber);
  // console.log(CountSpecial);
  SetPionts(CountUppercase,CountLowwercase,CountNumber,CountSpecial,inputString)
}

function SetPionts(U,L,N,S,inputString){
  //Good
  Points += (inputString.length*4);

  if(U != 0){
    Points += ((inputString.length-U)*2);
  }
  if(L != 0){
    Points += ((inputString.length-L)*2);
  }

  if(N != inputString.length){
    Points += (N*4);
  }
  if(S != inputString.length){
    Points += (S*6);
  }

  //Bad
  //char only or number only
  if(U == inputString.length || L == inputString.length){
    Points -= inputString.length;
  }else if(N == inputString.length){
    Points -= inputString.length;
    
  }

  //repeat type
  if(U > 1){
    U -=1 ;
    Points -= U*2;
  }
  if(L > 1) {
    L -=1;
    Points -= L*2;
  }
  if(N > 1) {
    N -=1;
    Points -= N*2;
  }
  if(S > 1) {
    S -=1;
    Points -= S*2;
  }

  console.log(Points);
}
/////////////////////////////////////////////////////////////////

//input section
let input = "Asdg?fg1223";
CheckPassword(input);

//การแสดงคพแนนเป็นแถบๆ ให้ทำเป็นช่วงๆ ช่วงคพแนนที่ควรกำหนดต่างๆ