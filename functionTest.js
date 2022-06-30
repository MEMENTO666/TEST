function stringCombine (a,b) {
  return a+b;
}

function consoleLoop (string,count) {
  for (let i =0; i<count; i++) {
    console.log(string);
  
}}


function one (ipgu,ipgu2,count) {
  let strings = stringCombine (ipgu, ipgu2)
  consoleLoop(strings, count);
  return "메롱";
  }


one("div", "</div>", 5);


//! 입구, 출구, 실행 구성 해보는 것
//! 동작하는지 확인
//! 함수로 써먹을 수 있겠다 ==> 리팩토링

//todo 매개변수를 활용해서 재사용성을 높힘.

