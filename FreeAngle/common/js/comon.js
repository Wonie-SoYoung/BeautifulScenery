$(function(){
	//悬停事件
	$("._2eAS").mouseover(function(){
		$(this).children("._27sX").show();
	})
	$("._2eAS").mouseout(function(){
		$(this).children("._27sX").hide();
	})
	$("._3st1").mouseover(function(){
		$(this).children("svg").children("path").attr("fill","#FFFFFF")
	})
	$("._3st1").mouseout(function(){
		$(this).children("svg").children("path").attr("fill","#9fa3a6")
	})
	$("._1wq2").mouseover(function(){
		$(this).css({"width":"180px","background-color":"#1A1A1A"});
	})
	$("._1wq2").mouseout(function(){
		if($(this).children("input").val()==''){
			$(this).css({"width":"0px","background-color":"transparent"});
		}
	})
})