/*
    ? 요구사항
    * 시작 버튼을 누르면 경기 시작
*/

var $fishList = null;
var timerID = -1;
var goalLine = 0;
var $fishWidth = 0;
var $info = null;
$(document).ready(function(){
    init();
    fishStartPosition();
    initEvent();
});
function init(){
    $fishList = $(".fish");
    $info = $("#info");
    $fishWidth = $(".fish img").width();
    goalLine = $("#bar").position().left;
}
function fishStartPosition(){
    //? 물고기배치
    for(var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);
        $fish.css({
            left: 0,
            top: 100 + (i * 150)
        })
    }
}
function initEvent(){
    $("#start").click(startGame);
}
function startGame(){
    if(timerID == -1){
        timerID = setInterval(function(){
            updateFishPosition();

            displayFishPositionInfo();

            checkGoalFish();
        },200);
    }
}
function updateFishPosition(){
    console.log("1. 물고기 움직인다")
    for(var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);
        var step = Math.ceil(Math.random()*10);
        var newLeft = $fish.position().left + step;
        $fish.css("left", newLeft);
    }
}
// ? 물고기 움직임 함수

function displayFishPositionInfo(){
    console.log("2. 물고기 정보 출력");
    var info = "";

    for (var i = 0; i < $fishList.length; i++) {
        var $fish = $fishList.eq(i);

        info += i + "번 물고기 : " + $fish.position().left + "px <br>";
    }

    $info.html(info);
}
// ? 물고기 위치 출력 함수
function checkGoalFish(){
    var winnerList = [];

    for (var i = 0; i < $fishList.length; i++) {
        var fishCurrentPosition  = $fishList.eq(i).position().left;

        if(fishCurrentPosition >= goalLine){
            winnerList.push({
                index: (i), position:fishCurrentPosition
            });
        }
        // ? goalLine을 넘은 물고기를 기준으로 winnerList 배열에 position이라는 이름으로 저장
    }

    if(winnerList.length>0){ //? 배열에 position값이 담기고 나면
        winnerList.sort(function(a,b){ 
            return b.position-a.position; //? position 값 기준 내림차순 정렬
        });

        endGame();
        alert('우승 !' + winnerList[0].index + '번 물고기!'); //? 결승선 기준 가장 멀리 이동된 물고기 우승 처리
    }

}
// ? 결승선 통과 물고기 검사 함수

function endGame(){
    console.log("4. 게임 종료 처리");
    clearInterval(timerID); //? interval 초기화
    timerID = -1; //? timerID 초기화
}
// ? 게임 종료 함수