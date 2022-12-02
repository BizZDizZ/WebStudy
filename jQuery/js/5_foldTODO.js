// $(document).ready(function(){
//     gallery();//? 초기배치
//     //? n열 버튼 눌렀을때(열 매개변수, 너비, 높이)
//     //! 너비 높이는 1열에 들어가는 수치가 기준
// });
// function gallery(){
//     //? 기존에 풀었던 문제들처럼
//     //? image's 선언, length(forfor),xpos,xpos
//     //? for loop 잡아서 알아서 작동될 수 있는 logic
//     //? css 적용(기존에 했던것 left, top 말고도 width, height)
//     var img = $('#imgContainer img');
//     var xpos = 0;
//     var ypos = 0;
    
//     $('button').click(function(){
//         var imgLength = img.length;
//         var imgWidth = img.width();
//         var imgHeight = img.height();
        
//         var column = parseInt($(this).attr('class'));

//         for(var i = 0; i < imgLength; i++){
//             var image = img.eq(i);
//             xpos = (i%column) * imgWidth;
//             ypos = parseInt(i/column) * imgHeight;
//             image.css({
//                 "left" : xpos,
//                 "top" : ypos,
//                 "width" : imgWidth,
//                 "height" : imgHeight
//             });
//         }
//     });
// }
$(document).ready(function(){//강사님 풀이
    gallery(0,200,200);
    $(".1way").click(function(){gallery(1,1000,1000)});
    $(".2way").click(function(){gallery(2,500,500)});
    $(".3way").click(function(){gallery(3,333,333)});
    $(".4way").click(function(){gallery(4,250,250)});
    $(".5way").click(function(){gallery(5,200,200)});
    $(".6way").click(function(){gallery(6,166,166)});
    $(".7way").click(function(){gallery(7,142,142)});
    $(".8way").click(function(){gallery(8,125,125)});
    $(".9way").click(function(){gallery(9,111,111)});
    $(".10way").click(function(){gallery(10,100,100)});
});

function gallery(count, imgWidth, imgHeight){
    var $images = $("#imgContainer img");
    var $imgLength = $images.length;

    var xpos, ypos;

    for(i = 0; i<$imgLength; i++){
        var $image = $images.eq(i);
        //? eq = DOM 요소 세트를 나타내는 jQuery 객체가 주어지면 .eq()메소드는 해당 세트 내의 한 요소에서 새 jQuery 객체를 구성한다.
        
        xpos = (i % count) * imgWidth;
        ypos = parseInt(i / count) * imgHeight;

        $image.css({
            'left' : xpos,
            'top' : ypos,
            'width' : imgWidth,
            'height' : imgHeight
        })
    }
}