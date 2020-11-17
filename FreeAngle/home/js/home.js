var liW = $('.box_ul li').outerWidth(true)
var len = $('.box_ul li').length
$('.box_ul').css("width", liW * len)
var flag = true
var number=1;

function toLeft() {
	if(flag) {
		if(number>1){
			number-=1;
		}else{
			number=7;
		}
		$(".sign li").eq(number-1).css("background-color","#1088F2");
		$(".sign li").eq(number-1).siblings().css("background-color","#fff");
		flag = false
		$('.box_ul').find("li").eq(len - 1).prependTo($('.box_ul'))
		$('.box_ul').css({
			"marginLeft": -liW
		}).delay(8).queue(function() {
			$('.box_ul').animate({
				"marginLeft": 0
			})
			flag = true
			$(this).dequeue();
		})
	}
}

function toRight() {
	if(flag) {
		if(number<7){
			number+=1;
		}else{
			number=1;
		}
		$(".sign li").eq(number-1).css("background-color","#1088F2");
		$(".sign li").eq(number-1).siblings().css("background-color","#fff");
		flag = false
		$('.box_ul').animate({
			"marginLeft": -liW
		}).delay(8).queue(function() {
			$('.box_ul').find("li").eq(0).appendTo($('.box_ul'));
			$('.box_ul').css({
				"marginLeft": 0
			})
			flag = true
			$(this).dequeue();
		})
	}
}

$(".btn_right").click(function() {
	toRight();
})
$(".btn_left").click(function() {
	toLeft();
})
var timer = setInterval(function() {
	toRight();
}, 3000);



//二次轮播
var liW = $('.box_ul_con1 li').outerWidth(true)
var len = $('.box_ul_con1 li').length
$('.box_ul_con1').css("width", liW * len)
var flag = true
var number2=1;

function toLeft2() {
	if(flag) {
		if(number2>1){
			number2-=1;
		}else{
			number2=7;
		}
		$(".sign_li1 li").eq(number2-1).css("background-color","#1088F2");
		$(".sign_li1 li").eq(number2-1).siblings().css("background-color","#DDDDDD");
		flag = false
		$('.box_ul_con1').find("li").eq(len - 1).prependTo($('.box_ul_con1'))
		$('.box_ul_con1').css({
			"marginLeft": -liW
		}).delay(8).queue(function() {
			$('.box_ul_con').animate({
				"marginLeft": 0
			})
			flag = true
			$(this).dequeue();
		})
	}
}

function toRight2() {
	if(flag) {
		if(number2<4){
			number2+=1;
		}else{
			number2=1;
		}
		$(".sign_li1 li").eq(number2-1).css("background-color","#1088F2");
		$(".sign_li1 li").eq(number2-1).siblings().css("background-color","#DDDDDD");
		flag = false
		$('.box_ul_con1').animate({
			"marginLeft": -liW
		}).delay(8).queue(function() {
			$('.box_ul_con1').find("li").eq(0).appendTo($('.box_ul_con1'));
			$('.box_ul_con1').css({
				"marginLeft": 0
			})
			flag = true
			$(this).dequeue();
		})
	}
}

$(".btn_right2").click(function() {
	toRight2();
})
$(".btn_left2").click(function() {
	toLeft2();
})


//


var liW = $('.box_ul_con2 li').outerWidth(true)
var len = $('.box_ul_con2 li').length
$('.box_ul_con2').css("width", liW * len)
var flag = true
var number3=1;

function toLeft3() {
	if(flag) {
		if(number3>1){
			number3-=1;
		}else{
			number3=7;
		}
		$(".sign_li2 li").eq(number3-1).css("background-color","#1088F2");
		$(".sign_li2 li").eq(number3-1).siblings().css("background-color","#DDDDDD");
		flag = false
		$('.box_ul_con2').find("li").eq(len - 1).prependTo($('.box_ul_con2'))
		$('.box_ul_con2').css({
			"marginLeft": -liW
		}).delay(8).queue(function() {
			$('.box_ul_con2').animate({
				"marginLeft": 0
			})
			flag = true
			$(this).dequeue();
		})
	}
}

function toRight3() {
	if(flag) {
		if(number3<4){
			number3+=1;
		}else{
			number3=1;
		}
		$(".sign_li2 li").eq(number3-1).css("background-color","#1088F2");
		$(".sign_li2 li").eq(number3-1).siblings().css("background-color","#DDDDDD");
		flag = false
		$('.box_ul_con2').animate({
			"marginLeft": -liW
		}).delay(8).queue(function() {
			$('.box_ul_con2').find("li").eq(0).appendTo($('.box_ul_con2'));
			$('.box_ul_con2').css({
				"marginLeft": 0
			})
			flag = true
			$(this).dequeue();
		})
	}
}

$(".btn_right3").click(function() {
	toRight3();
})
$(".btn_left3").click(function() {
	toLeft3();
})


//

var liW = $('.box_ul_con3 li').outerWidth(true)
var len = $('.box_ul_con3 li').length
$('.box_ul_con3').css("width", liW * len)
var flag = true
var number4=1;

function toLeft4() {
	if(flag) {
		if(number4>1){
			number4-=1;
		}else{
			number4=7;
		}
		$(".sign_li3 li").eq(number4-1).css("background-color","#1088F2");
		$(".sign_li3 li").eq(number4-1).siblings().css("background-color","#DDDDDD");
		flag = false
		$('.box_ul_con3').find("li").eq(len - 1).prependTo($('.box_ul_con3'))
		$('.box_ul_con3').css({
			"marginLeft": -liW
		}).delay(8).queue(function() {
			$('.box_ul_con3').animate({
				"marginLeft": 0
			})
			flag = true
			$(this).dequeue();
		})
	}
}

function toRight4() {
	if(flag) {
		if(number4<4){
			number4+=1;
		}else{
			number4=1;
		}
		$(".sign_li3 li").eq(number4-1).css("background-color","#1088F2");
		$(".sign_li3 li").eq(number4-1).siblings().css("background-color","#DDDDDD");
		flag = false
		$('.box_ul_con3').animate({
			"marginLeft": -liW
		}).delay(8).queue(function() {
			$('.box_ul_con3').find("li").eq(0).appendTo($('.box_ul_con3'));
			$('.box_ul_con3').css({
				"marginLeft": 0
			})
			flag = true
			$(this).dequeue();
		})
	}
}

$(".btn_right4").click(function() {
	toRight4();
})
$(".btn_left4").click(function() {
	toLeft4();
})

//

var liW = $('.box_ul_con4 li').outerWidth(true)
var len = $('.box_ul_con4 li').length
$('.box_ul_con4').css("width", liW * len)
var flag = true
var number5=1;

function toLeft5() {
	if(flag) {
		if(number5>1){
			number5-=1;
		}else{
			number5=7;
		}
		$(".sign_li4 li").eq(number5-1).css("background-color","#1088F2");
		$(".sign_li4 li").eq(number5-1).siblings().css("background-color","#DDDDDD");
		flag = false
		$('.box_ul_con4').find("li").eq(len - 1).prependTo($('.box_ul_con4'))
		$('.box_ul_con4').css({
			"marginLeft": -liW
		}).delay(8).queue(function() {
			$('.box_ul_con4').animate({
				"marginLeft": 0
			})
			flag = true
			$(this).dequeue();
		})
	}
}

function toRight5() {
	if(flag) {
		if(number5<4){
			number5+=1;
		}else{
			number5=1;
		}
		$(".sign_li4 li").eq(number5-1).css("background-color","#1088F2");
		$(".sign_li4 li").eq(number5-1).siblings().css("background-color","#DDDDDD");
		flag = false
		$('.box_ul_con4').animate({
			"marginLeft": -liW
		}).delay(8).queue(function() {
			$('.box_ul_con4').find("li").eq(0).appendTo($('.box_ul_con4'));
			$('.box_ul_con4').css({
				"marginLeft": 0
			})
			flag = true
			$(this).dequeue();
		})
	}
}

$(".btn_right5").click(function() {
	toRight5();
})
$(".btn_left5").click(function() {
	toLeft5();
})


//


var liW = $('.box_ul_con5 li').outerWidth(true)
var len = $('.box_ul_con5 li').length
$('.box_ul_con5').css("width", liW * len)
var flag = true
var number6=1;

function toLeft6() {
	if(flag) {
		if(number6>1){
			number6-=1;
		}else{
			number6=7;
		}
		$(".sign_li5 li").eq(number5-1).css("background-color","#1088F2");
		$(".sign_li5 li").eq(number5-1).siblings().css("background-color","#DDDDDD");
		flag = false
		$('.box_ul_con5').find("li").eq(len - 1).prependTo($('.box_ul_con5'))
		$('.box_ul_con5').css({
			"marginLeft": -liW
		}).delay(8).queue(function() {
			$('.box_ul_con5').animate({
				"marginLeft": 0
			})
			flag = true
			$(this).dequeue();
		})
	}
}

function toRight6() {
	if(flag) {
		if(number6<4){
			number6+=1;
		}else{
			number6=1;
		}
		$(".sign_li5 li").eq(number6-1).css("background-color","#1088F2");
		$(".sign_li5 li").eq(number6-1).siblings().css("background-color","#DDDDDD");
		flag = false
		$('.box_ul_con5').animate({
			"marginLeft": -liW
		}).delay(8).queue(function() {
			$('.box_ul_con5').find("li").eq(0).appendTo($('.box_ul_con5'));
			$('.box_ul_con5').css({
				"marginLeft": 0
			})
			flag = true
			$(this).dequeue();
		})
	}
}

$(".btn_right6").click(function() {
	toRight6();
})
$(".btn_left6").click(function() {
	toLeft6();
})