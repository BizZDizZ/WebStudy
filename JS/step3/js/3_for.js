/*
    ?for
    *특정구문을 정해진 횟수 만큼 반복해야 할 경우 사용하는 반복문.
    실무사용의 예
    1. 게시판의 게시글 목록 불러올 때
    2. 구글 맵, 네이버 맵 등의 정보를 출력 할 때
    3. 메뉴의 항목(관리자제어가능한) 출력 할 때
    4. 갤러리의 이미지 목록을 출력 할 때
    5. os 등의 파일 탐색기의 파일 목록 출력 할 때...

    *루프
    1. 초기식실행 > 2. 조건식 비교, 조건이 거짓일 경우 반복문 종료 > 
    3. 참일경우 문장 실행 > 4. 종결식 실행 > 5. 2단계

*/
//! 단일 for 문

// *case.1 이름을 10번 출력해보자.
function namePrint10(){
    var userName = "Joy";
    for(var i = 1; i <= 10; i++){
        document.write(i + '.' + userName + '<br>');
    }
}
// *case.2 이름을 1000번 출력해보자.
function namePrint1000(){
    var userName = "Joy";
    for(var i = 1; i <= 1000; i++){
        document.write(i + '.' + userName + '<br>');
    }
}
// *case.3 1000번중에 홀수번째만 출력
function namePrint500(){
    var userName = "Joy";
    for(var i = 1; i <= 1000; i+=2){
        document.write(i + '.' + userName + '<br>');
    }
}
//todo. 머리속에 생각나는 1 ~ 10까지 출력되는 반복문
function answer1(){
    for(var i = 1; i <= 10; i++){
        document.write(i + '<br>');
    }
}
function answer2(){
    for(var i = 10; i >= 1; i--){
        document.write(i + '<br>');
    }
}
function answer3(){
    for(var i = 2, j = 3; i <= 20; i += 2, j += 3){
        document.write(i + ',' + j + '<br>');
    }
}
function answer4(){

}
function answer5(){

}
// *case.4 자신이 좋아하는 과일 4개를 배열로 배치하고, alert 출력
function favorFruit(){
    var array = ['딸기', '자두', '복숭아', '살구', '한라봉', '귤'];
    for(var i = 0; i < array.length; i++){
        document.write(array[i] + '<br>');
    }
}
//todo. 지금까지 배웠던 JS단원명을 배열을 활용해 출력
//? 변수, 연산자, 자료형, 형변환, 조건문if, 조건문switch, 반복문 while, 반복문 for
function arrayFor(){
    var data = ['변수', '연산자', '형변환', '조건문if', '조건문switch', '반복문while', '반복문for'];
    // ? ECMA Script.
    for (let i = 0; i < data.length; i++){ //? 상시변수 - 늘 변할 수 있는 변수
        const element = data[i]; //? 비상시변수 - 개발자가 원할 시에만 변경해야 하는 변수(잠금?)
        document.write((i+1) + '번째 내용 = ' + element + '<br>');
    }
}
// *case.5 역반복 배열
function reverseFavorFruit(){
    var array = ['딸기', '자두', '복숭아', '살구', '한라봉', '귤'];
    for(var i = array.length - 1; i >= 0; i--){
        document.write(array[i] + '<br>');
    }
}
// *case.6 forContinue
function forContinue(){
    for(var i = 0; i < 10; i++){
        continue; //? 위 조건이 참일지라도 continue가 있어서 continue이하 코드 무시
        document.write(i+'<br>');
    }
    document.write('최종 i = ' + i + '<br>');
}
// *case.6-1 forContinue 활용
function runContinue(){
    var output = 0;
    for(var i = 1; i <= 10; i++){
        console.log("현재 i = " + i);
        if(i % 2 == 1){
            continue;//? 홀수 필터
        }
        output += i;
        document.write(output + '<br>');
    }
}
// *case.7 forbreak
function forBreak(){
    for(var i = 1; i <= 10; i++){
        break;
        document.write(i + '<br>');
    }
    document.write("최종 i = " + i + '<br>');
}
// *case.8 forBreak 활용
function runBreak(){
    for(var i = 0; true; i++){
        alert(i + '번째 반복문');
        if(!confirm('계속할래?')){
            break;
        }
    }
}
//* login Process -> 5회이상 틀렸을때 -> 경고창 출력. 이후 매회 경고창출력(10회도달시까지)
//* -> 차단.

//! 다중 for
// *case.9 반절 피라미드
function halfPyramid(){
    var star = '';
    for(var i = 1; i <= 10; i++){
        for(var j = 0; j < i; j++){
            star += '*';
        }
        star += '<br>';
    }
    document.write(star);
}
//todo.1 역반절 피라미드
function reverseHalfPyramid(){
    var star = '';
    for(var i = 10; i >= 1; i--){
        for(var j = 1; j < i; j++){
            star += '*';
        }
        star += '<br>';
    }
    document.write(star);
}
//todo. 피라미드
function Pyramid(){
    var star = '';
    for(var i = 1; i <= 10; i++){
        for(var j = 10; j >= i; j--){
            star += '&nbsp';            
        }
        for(var k = 1; k <= 2*i-1; k++){
            star += '*';
        }
        star += '<br>';
    }
    document.write(star);
}
function PyramidPlus(){
    var n = 6;
    for(var i = 1; i <= n; i++){
        var s = '';
        for(var j = 1; j <= 2*n-1; j++){
            (j >= n+1-i && j <= n-1+i) ? s += '*' : s += ' ';
        }
        console.log(s);
    }
}