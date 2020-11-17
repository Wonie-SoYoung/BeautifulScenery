$(function(){
				$(".vjs-play-control span").addClass("vjs-play-control-span-hide");
	//悬停播放按钮事件
	$(".vjs-play-control").hover(function(){
		$(this).css("background-color","#44BBFF");
	},function(){
		$(this).css("background-color","rgba(23, 35, 34, 0.746094)");
	})
	//视频像素事件
	$(".hd").hover(function(){
		$(this).css("background-color","#44BBFF");
		$(".oc").css("display","block");
	},function(){
		$(this).css("background-color","#666666");
	})
	$().mouseenter()
	$(".vjs-origin-control").mouseleave(function(){
		$(".oc").css("display","none");
	})
	$(".oc-item").hover(function(){
		var name=$(".hd-num").html();
		if(parseInt($(this).html())!=parseInt(name)){
			$(this).css("color","#44BBFF");
		}
		
	},function(){
		var name=$(".hd-num").html();
		if(parseInt($(this).html())!=parseInt(name)){
			$(this).css("color","#fff");
		}
	})
	//悬停全屏按钮
	$(".exit-fullscreen").hover(function(){
		$(this).css("background-position","0px 0px");
	},function(){
		$(this).css("background-position","-20px 0px");
	})
	//点击播放按钮
	var context=1;
	$(".vjs-play-control").click(function(){
		if(context==1){
			$(".vjs-play-control span").removeClass("vjs-play-control-span-hide");
			$(".vjs-play-control span").addClass("vjs-play-control-span-show");	
			$(".vjs-poster").hide();
			$("#xpc_video").get(0).play();
			context=0;
		}else if(context==0){
			$(".vjs-play-control span").removeClass("vjs-play-control-span-show");
			$(".vjs-play-control span").addClass("vjs-play-control-span-hide");	
			$(".vjs-poster").hide();
			$("#xpc_video").get(0).pause();
			context=1;
		}
	})
});
window.onscroll = function(){ 
			  var t = document.documentElement.scrollTop || document.body.scrollTop; 
			  var top_div = document.getElementById( "header-common" ); 
  if( t <= 300 ) { 
    top_div.style.display = "inline"; 
  } else { 
    top_div.style.display = "none"; 
  } 
} 