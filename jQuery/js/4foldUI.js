$(document).ready(function(){
    imgAlignHori();
    imgAlignMix();
});

function imgAlignHori(){
    var img = $(".imgContainer img");
    var xpos = 0; //? position left 운용

    $(".alignHori").click(function(){
        var imgLength = img.length;
        var imgWidth = img.width();

        // console.log(imgLength, imgWidth);
        for(var i = 0; i < imgLength; i++){
            var image = img.eq(i);//? n번째 이미지 구하기
            // console.log(i + '번째 이미지' + image.attr("src"));
            xpos = i * imgWidth;
            image.css("left",xpos);
        }
    });
    $(".reset").click(function(){
        img.css("left",0);
    });
}

function imgAlignMix(){
    var img = $(".imgContainerMix img");
    var xpos = 0;
    var ypos = 0;

    $(".alignMix").click(function(){
        var imgLength = img.length;
        var imgWidth = img.width();
        var imgHeight = img.height();

        for(var i = 0; i < 3; i++){
            for(var j = 0; j < 3; j++){
                var image = img.eq(3*i+j);
                // console.log((3*i+j) + '번째 이미지');
                xpos = j * imgWidth;
                ypos = i * imgHeight;
                image.css({
                    "left" : xpos,
                    "top" : ypos
                })
            }
        }
    });
    $(".resetMix").click(function(){
        img.css({
            "left" : 0,
            "top" : 0
        });
    });
}