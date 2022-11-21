//todo. end가 입력될 때 까지 숫자를 계속해서 입력받아 입력값 합을 출력하고, prompt에는 몇번 수행 했는가에 대한 "x 번째 입력" 이 표시되야함. 

// function whileSum(){//내 풀이
//     var count = 1;
//     var sum = 0;
//     while(true){
//         var num = prompt(count + '번째 입력');
//         if(num=='end'){
//             break;
//         }
//         count++;
//         sum += Number(num);
//         document.write('현재까지의 총합 : ' + sum + '<br>');
//     }
//     alert('입력이 종료되었습니다.');
// }
function sumNumb(){//강사님 풀이
    var i = 1;
    var result = 0;
    while(true){
        var numb = window.prompt(i + '번째 입력');
        if(numb == 'end'){
            alert('입력이 종료되었습니다.');
            break;
        }
        result += parseInt(numb);
        document.write('현재까지의 총합 : ' + result + "<br>");
        i++;
    }
}