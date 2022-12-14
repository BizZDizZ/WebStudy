$(document).ready(function(){
    // *case. 1 원 움직이기 (xAxis)
    $("#btnMoveCircle").click(moveCircle);
    // *case. 2 원 움직이기 (x,yAxis)
    // $("#btnDetailMove").click(detailMoveCircle);
    // *case. 2-1 원 움직이기 (함수구조분리)
    detailMoveCircleExt();

    // *case. 3
    keyControl();
});

function moveCircle(){
    // ? 선 / 처 / 출
    var $circle = $(".circle");
    var xpos = window.prompt("0부터 380이하의 숫자만 입력하시오.");
    // ? 선언부 - ? 1. 움직일놈 2. 값을 입력받을 놈.
    xpos = parseInt(xpos);

    if(xpos >= 0 && xpos <= 380){
        $circle.css("left",xpos);
    }else{
        alert('잘못된 수치입니다.');
    }
    // ? 처리부
}
// *exp.2
function detailMoveCircle(){
    var $circle = $(".circleDetail"); //? 움직일 대상 선언.
    var xpos = $("#xpos").val(); //? 각 id에 담긴 value를 가져오라.
    var ypos = $("#ypos").val(); //? 각 id에 담긴 value를 가져오라.

    xpos = parseInt(xpos); //? 형변환
    ypos = parseInt(ypos); //? 형변환

    if(xpos > 380 || ypos > 380 || xpos < 0 || ypos < 0){
        alert('잘못된 수치입니다. 0 ~ 380이내로 입력하세요.');
    }else{
        $circle.css({
            "left" : xpos,
            "top" : ypos
        });
    }
}
function detailMoveCircleExt(){
    var $circle = null;
    circleInit();
    $('#btnDetailMove').click(circleEvent);
}
function circleInit(){
    $circle = $(".circleDetail");
}
function circleEvent(){
    var xpos = $("#xpos").val();
    var ypos = $("#ypos").val();
    xpos = parseInt(xpos);
    ypos = parseInt(ypos);
    circleMoveCommand(xpos, ypos);
}
function circleMoveCommand(xpos, ypos){
    if(xpos > 380 || ypos > 380 || xpos < 0 || ypos < 0){
        alert('잘못된 수치입니다.');
    }else{
        $circle.css({
            "left" : xpos,
            "top" : ypos
        });
    }
}

function keyControl(){
    var $circle = $(".circleKey");
    var range = 50;
    var currentXpos = 0;
    var currentYpos = 0;
    $(document).keydown(function(e){
        console.log("입력한 키" + e.keyCode);
        //? w: 87(-y), d: 68(+x), s: 83(+y), a:65(-x)
        //todo. 움직임 완성 시키기
        switch(e.keyCode){
            case 87:
                currentYpos -= range;
                if(currentYpos < 0){
                    currentYpos += range;
                }
                break;
            case 68:
                currentXpos += range;
                if(currentXpos > 400){
                    currentXpos -= range;
                }
                break;
            case 83:
                $circle.css("top", currentYpos + range)
                currentYpos += range;
                if(currentYpos > 400){
                    currentYpos -= range;
                }
                break;
            case 65:
                $circle.css("left", currentXpos - range)
                currentXpos -= range;
                if(currentXpos < 0){
                    currentXpos += range;
                }
                break;
        }
        $circle.css('left', currentXpos);
        $circle.css('top', currentYpos);
    });
}