/*
	? 변수란
	데이터를 저장 하는 장소, 데이터를 읽고 쓸 수 있는 장소.

	실무의 예
	1. 로그인 상태정보를 저장.
	2. 사용자가 선택한 항목을 저장.
	3. admin 으로 관리하는 항목을 저장. (메뉴 등)
	4. 게임등에서 기록되는 레코드나 데이터(에너지 등)를 저장.
	5. 쇼핑몰 장바구니의 상품목록 등 저장.
	6. 게시판 목록 등.
	
	주의사항
	1. 숫자로 시작 할 수 없다. ( 에러가 나는 브라우저가 있다. )
	2. 대,소문자를 구분한다. ( 전혀 다른 변수가 된다. )
	3. 변수는 대문자가 아닌 소문자로 시작한다. ( 암묵적인 룰 )
	4. 변하지 않는 환경 변수(상수변수 : 관리자아이디 등)는 모두 대문자 (ex > DB_NAME)로 정하여, 3번의 암묵적인 룰을 이용. 변경이 안되도록 회피한다.
		(java 등은 상수변수를 문법적으로 잠궈버리지만 js는 그렇지 않다.)
	5. js에서 이미 정의된 예약어 사용 금지.
		(break, case, catch, continue, default, delete, do, else, finally, for, function, if, in, instanceof, new, return, switch, this, throw, try, typeof, var, void, while, with)


	변수의 종류
    1. 전역변수 - 밑에 잔뜩 있는 것들. 전체 영역에서 사용 가능 한 변수.
    2. 지역변수 - 정해진 영역 내에서만 사용 할 수 있는 변수.
    var globalVal = "전역변수";
    window.onload=function(){
        var localVal = "지역변수";
        alert(localVal);
    }
    function func1(){
        var localVal = "함수1번내 지역변수";
        alert(localVal);
    }
    function func2(){
        var globalVal = "함수2번내 지역변수";
        alert(globalVal);
    }
    
    3. 매개변수 - 함수 외부에서 내부로 데이터를 전달할 때, 사용 하는 변수.
    var globalVal = "전역변수";
    window.onload=function(){
        var localVal = "지역변수";
        func1(100,200);
    }
    function func1(num1, num2){
        var localVal = "지역변수";
        document.write("매개변수 num1="+num1+", num2 ="+num2);
    }
    4. 멤버변수 - 클래스 내부에 만들어 지며,
    객체에서 사용하는 정보를 담는 변수.
    function Markclass(){
    	this.name = "멤버변수";
    }
    Markclass.prototype.showName=function(){
        document.write("name=",this.name);
    }
    var objClass = new Markclass();
    objClass.showName();
*/

// *case. 1 변수 생성
var name = "Mark", age = 42, gender = "man"; //? 변수 선언과 동시 초기화.
var radius, pi; //? 변수 선언. (한번에)
radius = 10, pi = 3.14159265; //? 변수 초기화(한번에)

// ? ES6 - let, const... 선언하는 경우. (퍼블리셔는 몰라도됨)

// *case. 2 변수의 특성

var cup = 'Coffee'; //? 선언 및 초기화 - 컵을 만들고 그안에 커피를 담았다.
cup = 'Green Tea'; //? 컵에 담긴 커피를 버리고 그안에 녹차를 담았다.
cup = 'Water'; //? 컵에 담긴 녹차를 버리고 그안에 물을 담았다.
// console.log(cup);

// *case. 3 연산자 사용시
var value = 10; //? value변수를 선언하고 10으로 초기화.
value += 20;// ?value에다가 20을 더한 값을 value에 다시 저장해라. -> 복합대입연산자를 통한 간소화.
// console.log(value);// ?출력하기.