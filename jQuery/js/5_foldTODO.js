$(document).ready(function(){
    gallery();//? 초기배치
    //? n열 버튼 눌렀을때(열 매개변수, 너비, 높이)
    //! 너비 높이는 1열에 들어가는 수치가 기준
});
function gallery(){
    //? 기존에 풀었던 문제들처럼
    //? image's 선언, length(forfor),xpos,xpos
    //? for loop 잡아서 알아서 작동될 수 있는 logic
    //? css 적용(기존에 했던것 left, top 말고도 width, height)
    var img = $('#imgContainer img');
    var xpos = 0;
    var ypos = 0;
    
    $('button').click(function(){
        var imgLength = img.length;
        var imgWidth = img.width();
        var imgHeight = img.height();
        
        var column = parseInt($(this).attr('class'));

        for(var i = 0; i < imgLength; i++){
            var image = img.eq(i);
            xpos = (i%column) * imgWidth;
            ypos = parseInt(i/column) * imgHeight;
            image.css({
                "left" : xpos,
                "top" : ypos,
                "width" : imgWidth,
                "height" : imgHeight
            });
        }
    });
}
