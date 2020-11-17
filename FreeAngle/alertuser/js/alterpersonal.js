$(function(){
	//点击文本框出现焦点
    $("label input,.I24N,._3xVR,textarea").click(function () {
        $("label input,.I24N,._3xVR,textarea").css("border",".5px solid #dfdfdf");
        $(this).css("border","1px solid #7C7C7C");
    })
    $(document).click(function(e){
        var target = $(e.target);
        if(target.closest("input").length != 0||target.closest(".I24N").length != 0||target.closest("._3xVR").length != 0||target.closest("textarea").length != 0||target.closest("._2B3Z").length != 0) return;
        $("label input,.I24N,._3xVR,textarea").css("border",".5px solid #dfdfdf");
        $("._3caY,._2Xm-").hide();
        if($("#mapSearch").val()!=$("#ismapSearch").val()){
            $("#mapSearch").val("");
        }
    })
    $("._2eAS").click(function(){
    	$("._27sX").show();
    })
    $("._3YFh").click(function(){
    	$("._3tMe").val($(this).children().children().text());
    	$(".country").val($(this).children().children().attr("value"));
    })
    $("._2DQI:not(_2Y8n)").click(function(){
    	$(this).siblings().attr("class","_2DQI _1RS_");
    	$(this).attr("class",$(this).attr("class")+" _2Y8n");
    })
})
