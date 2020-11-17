$(function(){
$("#html5_1da550j8t1trc15hs1nrq11e51rcp3").change(function(){
	var fileName = $(this)[0].files[0].name;
	var fileType = fileName.substr(fileName.lastIndexOf(".")).toUpperCase();
	if (fileType != ".MP4" && fileType != ".MOV" && fileType != ".AVI") {
	     $("#errey p").html("视频限于mp4,mov,avi格式");
		erreyshow();
	} else {
		$(".upload-before").hide();
		$("#publish .upload-action").show();
	}
	//获取上传的文件
// 	 				var uploadFile = $(this).get(0).files[0];
// 	 				var formdata = new FormData();
// 	 				formdata.append('fileInfo', uploadFile);
//				    $.ajax({
//				        url:null,
//				        type: 'post',
//				        dataType: 'json',
//				        processData: false,
//				        contentType: false,
//				        xhr: function() {
//				            var xhr = new XMLHttpRequest();
//				            //使用XMLHttpRequest.upload监听上传过程，注册progress事件，打印回调函数中的event事件
//				            xhr.upload.addEventListener('progress', function (e) {
//				                console.log(e);
//				                //loaded代表上传了多少
//				                //total代表总数为多少
//				                var progressRate = (e.loaded / e.total) * 100 + '%';
//				
//				                //通过设置进度条的宽度达到效果
//				                $('.progress-striped').css('width', progressRate);
//				            })
//				
//				            return xhr;
//				        }
//				    })
	})
	//点击谁都可以看到
	$(".title").click(function(){
		$(".title").next().hide();
		$(this).next().show();
		$(this).next().children(".content-1").show();
	})
	//选中一级菜单
	$(".content-1 li").hover(function(){
		$(this).siblings().css("color","#333");
		$(this).siblings().attr("class","none");
		$(this).css("color","orangered");
		$(this).attr("class","choose");
	})
	$(document).click(function(){
	    $(".title").next().hide();
	    $(this).next().children(".content-1").hide();
	    $(".job-list").css("display","none");
	})
	$(".job-list").click(function(event){
	    event.stopPropagation();
	});
	$(".title").click(function(event){
	    event.stopPropagation();
	});
	$(".scroll-d1").hover(function(){
		$(this).children(".scroll-d3").show();
	},function(){
		$(this).children(".scroll-d3").hide();
	})
	//点击菜单传递内容
	$(".content li").click(function(){
		$(this).parents(".content").prev().children(".public-select-cur").html($(this).html());
	})
	//点击二级菜单实现
	$(".scroll-d3 li").click(function(){
		var type1=$(this).parent().prev().children(".choose").html();
		var type2=$(this).html();
		if(type1==type2){
			$(this).parents(".type-select").children(".title").children(".public-select-cur").html(type2);
		}else{
			$(this).parents(".type-select").children(".title").children(".public-select-cur").html(type1+"-"+type2);
		}
	})
	//点击上传图片
	$("#titleimgUrl").change(function(e){
		var $file = $(this);
	    var fileObj = $file[0];
	    var windowURL = window.URL || window.webkitURL;
	    var dataURL;
	    var $img = $("#titleimg");
		if (fileObj && fileObj.files && fileObj.files[0]) {
			var fileType = fileObj.files[0].name.substr(fileObj.files[0].name.lastIndexOf(".")).toUpperCase();
			if (fileType != ".BMP" && fileType != ".PNG" && fileType != ".GIF" && fileType != ".JPG" && fileType != ".JPEG") {
		    	$("#errey p").html("图片限于bmp,png,gif,jpeg,jpg格式");
				erreyshow();
			} else {
		        dataURL = windowURL.createObjectURL(fileObj.files[0]);
		        $img.attr('src', dataURL);
		        $img.show();
		        $(".upload-cover-con").hide();
		        $(".upload-again-wrap").show();
	       	}
	    } else {
	        dataURL = $file.val();
	        var imgObj = document.getElementById("preview");
	        // 两个坑:
	        // 1、在设置filter属性时，元素必须已经存在在DOM树中，动态创建的Node，也需要在设置属性前加入到DOM中，先设置属性在加入，无效；
	        // 2、src属性需要像下面的方式添加，上面的两种方式添加，无效；
	        imgObj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
	        imgObj.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = dataURL;
	
	    }
	})
	$("#titleimgUrl").hover(function(){
		$(".upload-again-wrap").css("opacity","1");
	},function(){
		$(".upload-again-wrap").css("opacity","0");
		$(".mei:nth-of-type")
	})
	//按下Enter添加
	$(document).keyup(function(event){
		if(event.keyCode == 13){
			var titlevalue=$(".taginput").val();
			if(titlevalue!=""&&titlevalue!=null){
				if($(".tagtxt").size()<5){
					var isNot=true;
					$(".tagtxt").each(function(){
						if($(this).html()==titlevalue){
							isNot=false;
						}
					})
					if(isNot){
						$(".tagbox").append($("<span class='videotag J_tag_item'><a class='J_tagtxt tagtxt'>"+titlevalue+"</a><i class='closebtn J_deltag icon-close'></i></span>"));
						$(".tagbox").on("click",".closebtn",function(){
							var titletext=$(this).prev().html();
							$(".J-select-tag").each(function(){
								if($(this).html()==titletext){
									$(this).attr("class","default-tag J-select-tag");
								}
							})
							$(this).parent().remove();
							$(".taginput").show();
							$(".J-select-tag").each(function(){
								if($(this).attr("class")!="default-tag J-select-tag selected"){
									$(this).css({"background-color":"transparent","color":"#333"});
								}
							})
						})
						$(".taginput").val("");
						$(".J-select-tag").each(function(){
							if($(this).html()==titlevalue){
								$(this).attr("class","default-tag J-select-tag selected");
							}
						})
						if($(".tagtxt").size()==5){
							$(".taginput").val("");
							$(".J-select-tag").each(function(){
								if($(this).attr("class")!="default-tag J-select-tag selected"){
									$(this).css({"background-color":"#E3E4E5","color":"#999"});
								}
							})
							$(".taginput").hide();
						}
					}else{
						alert("该标签已经存在")
					}
				}
			}
		}
	})
	//点击推荐标签事件
	$(".J-select-tag").click(function(){
		var tagtext=$(this);
		var isNot=true;
		$(".tagtxt").each(function(){
			if($(this).html()==tagtext.html()){
				tagtext.attr("class","default-tag J-select-tag");
				$(this).parent().remove();
				$(".taginput").show();
				$(".J-select-tag").each(function(){
					if($(this).attr("class")!="default-tag J-select-tag selected"){
						$(this).css({"background-color":"transparent","color":"#333"});
					}
				})
				isNot=false;
			}
		})
		if(isNot){
			if($(".tagtxt").size()<5){
				$(".tagbox").append($("<span class='videotag J_tag_item'><a class='J_tagtxt tagtxt'>"+tagtext.html()+"</a><i class='closebtn J_deltag icon-close'></i></span>"));
				$(".tagbox").on("click",".closebtn",function(){
					var titletext=$(this).prev().html();
					$(".J-select-tag").each(function(){
						if($(this).html()==titletext){
							$(this).attr("class","default-tag J-select-tag");
						}
					})
					$(this).parent().remove();
					$(".taginput").show();
					$(".J-select-tag").each(function(){
						if($(this).attr("class")!="default-tag J-select-tag selected"){
							$(this).css({"background-color":"transparent","color":"#333"});
						}
					})
				})
				$(this).attr("class","default-tag J-select-tag selected");
				if($(".tagtxt").size()==5){
					$(".taginput").val("");
					$(".J-select-tag").each(function(){
						if($(this).attr("class")!="default-tag J-select-tag selected"){
							$(this).css({"background-color":"#E3E4E5","color":"#999"});
						}
					})
					$(".taginput").hide();
				}
			}
		}
	})
	//点击片中职务事件
	$(".hob-tile").click(function(){
		$(".job-list").css("display","block");
	})
	$(".job-list ul li").click(function(){
		var chupr=$(this);
		var isNot=true;
		$(".public-select-job").each(function(){
			if($(this).text()==chupr.html()){
				$(this).parent().remove();
				chupr.attr("class","");
				isNot=false;
			}
		})
		if(isNot){
			if($(".hob-tile span").size()<=4){
				$(".hob-tile").append($("<span class='public-select-cur'><i class='public-select-job'>"+chupr.html()+"<span class='public-select-job-close'></span></i></span>"))
				$(".hob-tile").on("click",".public-select-job",function(){
					var titletext=$(this).text();
					$(this).parent().remove();
					$(".job-list li").each(function(){
						if($(this).html()==titletext){
							$(this).attr("class","");
						}
					})
				})
				chupr.attr("class","active");
			}else{
				$("#errey p").html("职位不能多余三个!");
				erreyshow();
			}
		}
	})
	//异常特效
	function erreyshow(){
		$("#errey").animate({"top":0,"opacity":1},1000);
		setTimeout("$('#errey').animate({'top':-50,'opacity':0},1000)",2000);
	}
	//表单验证
	$(".submit-btn").click(function(){
		var isNot=true;
		if(!videoCheck()){
			isNot=false;
		}else if(!titleCheck()){
			isNot=false;
		}else if(!coverCheck()){
			isNot=false;
		}else if(!typeCheck()){
			isNot=false;
		}else if(!tagsCheck()){
			isNot=false;
		}else if(!textCheck()){
			isNot=false;
		}else if(!warrantyCheck()){
			isNot=false;
		}
	})
	//视频验证
	function videoCheck(){
		var uploadFile = $("#html5_1da550j8t1trc15hs1nrq11e51rcp3").get(0).files[0];
		if(uploadFile==null||uploadFile==""){
			$("#errey p").html("请选择文件!");
			erreyshow();
			return false;
		}else{
			var fileType = uploadFile.name.substr(uploadFile.name.lastIndexOf(".")).toUpperCase();
			if(fileType != ".MP4" && fileType != ".MOV" && fileType != ".AVI") {
			    $("#errey p").html("视频限于mp4,mov,avi格式");
			    erreyshow();
			    return false;
			}else{
				return true;
			}
		}
	}
	//标题验证
	function titleCheck(){
		var title=$("[name='title']").val();
		if(title==null || title==""){
			$("#errey p").html("请输入视频标题");
		    erreyshow();
		    return false;
		}else{
			return true;
		}
	}
	//封面验证
	function coverCheck(){
		var uploadFile = $("#titleimgUrl").get(0).files[0];
		if(uploadFile==null||uploadFile==""){
			$("#errey p").html("请选择封面!");
			erreyshow();
			return false;
		}else{
			var fileType = uploadFile.name.substr(uploadFile.name.lastIndexOf(".")).toUpperCase();
			if(fileType != ".BMP" && fileType != ".PNG" && fileType != ".GIF" && fileType != ".JPG" && fileType != ".JPEG") {
			    $("#errey p").html("图片限于bmp,png,gif,jpeg,jpg格式");
			    erreyshow();
			    return false;
			}else{
				return true;
			}
		}
	}
	//分类验证
	function typeCheck(){
		var type=$("#id-first .title .J_cateSelect").html();
		if(type=="" ||type==null){
			$("#errey p").html("至少选择一个分类!");
			erreyshow();
			return false;
		}else{
			return true;
		}
	}
	//标签验证
	function tagsCheck(){
		if($(".tagbox span").size()<1){
			$("#errey p").html("请填写标签!");
			erreyshow();
			return false;
		}else{
			return true;
		}
	}
	//片中职位验证
	function textCheck(){
		if($(".hob-tile span").size()<1){
			$("#errey p").html("请填写职位!");
			erreyshow();
			return false;
		}else{
			return true;
		}
	}
	//授权方式验证
	function warrantyCheck(){
		var warranty=$(".authority-select .title .public-select-cur .authority-text").html();
		if(warranty=="请选择作品的授权方式"){
			$("#errey p").html("请选择授权方式!");
			erreyshow();
			return false;
		}else{
			return true;
		}
	}
})