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