function delay(){
    for(let i = 0; i<100000000; i++);
}
function 도망(){
    delay();
    console.log("🐱‍🏍앗!! 얼른 도망가야겠다!! (후다닥~~)");
}
function 태풍(){
    console.log("😁 크하하~ 내가 왔다!! ... 어라 늦었네 🤢");
}
function 예보(){
    delay();
    console.log("🐱‍👤 폭풍이 100ms 뒤에 몰려온다고 합니다. 조심하세요.");
    도망();
}
setTimeout(태풍, 100);
예보();

//1.setTimeout 함수가 콜 스택에 추가된다.
//2.setTimeout이 타이머 이벤트를 요청한 후에 콘 스택에서 제거되고,