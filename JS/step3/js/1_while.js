/*
    ? while
    while 반복문은 조건이 참일 경우 무한 반복한다.
    (물론 조건이 정해진다면 for문 처럼도 사용 가능하지만, 
        용도를 구분지어 사용하는 것이 좋다.)
    정해진 횟수만큼의 반복은 for를 사용하지만, 무한반복처리, 파일 읽고쓰기 및 
    전송(java,php...), DB데이터 출력하기.

*/
function pwCheck(){
    whild(true){
        var value = window.prompt('password를 입력하세요.');
        if(value == 1234){
            alert('접속승인');
        }else{
            alert('잘못 입력하였습니다.');
        }
    }
}