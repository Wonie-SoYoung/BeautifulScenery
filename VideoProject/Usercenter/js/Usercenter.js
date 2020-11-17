$(function(){
				//点击下拉菜单事件
	$(".ant-select-selection--single").focus(function(){
		$(this).children(".zhi").slideDown();
	})
	$(".ant-select-selection--single").blur(function(){
		$(this).children(".zhi").slideUp();
	})
	//点击菜单
	$(".zhi li").click(function(){
		$(this).parent().parent().prev().prev().children().html($(this).html());
		$(this).parent().parent().prev().prev().children().css("color","#595959");
		$(this).parent().parent().parent().blur();
	})
	//勾选认证
	$(".ant-checkbox-wrapper").click(function(){
		var ant=$(this).children(".ant-checkbox").children(".ant-checkbox-inner");
		if(ant.attr("class")=="ant-checkbox-inner bagcolor"){
			ant.attr("class","ant-checkbox-inner");
		}else{
			ant.attr("class","ant-checkbox-inner bagcolor");
		}
	})
	//表单验证
	$(".ant-btn-primary").click(function(){
		var isNot=true;
		
		if(! checkName()) isNot=false;
		if(! checkidType()) isNot=false;
		if(! checknickname()) isNot=false;
		if(! checkrole()) isNot=false;
		if(! checkyear()) isNot=false;
		if(! checklocation()) isNot=false;
		if(! checkremark()) isNot=false;
		if(! checkmaterials()){
			isNot=false;
		}else if(! checkceh()){
			isNot=false;
		}
		
		$("#credential").change(checkmaterials);
		$("#verifyName").blur(checkName);
		$("#idType").blur(checkidType);
		$("#nickname").blur(checknickname);
		$("#role").blur(checkrole);
		$("#originYear").blur(checkyear);
		$("#location").blur(checklocation);
		$("#remark").blur(checkremark);
		
		return isNot;
	})
	
	//姓名验证
	function checkName(){
		var verifyName=$("#verifyName");
		var errey=verifyName.parent().next();
		verifyName.css("border-color","#BBBBBB");
		errey.html("");
		errey.hide();
		if(verifyName.val()==""||verifyName.val()==null){
			errey.html("请输入真实姓名");
			errey.show();
			verifyName.css("border-color","#e74b3b");
			return false;
		}else if(verifyName.val().length>20){
			errey.html("真实姓名非空且长度不能超过20个字");
			errey.show();
			verifyName.css("border-color","#e74b3b");
			return false;
		}else{
			return true;
		}
	}
	//身份证号验证
	function checkidType(){
		var idType=$("#idType");
		var errey=idType.parent().next();
		idType.css("border-color","#BBBBBB");
		var exp=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
		errey.html("");
		errey.hide();
		if(idType.val()==""||idType.val()==null){
			errey.html("请输入身份证号");
			errey.show();
			idType.css("border-color","#e74b3b");
			return false;
		}else if(exp.test(idType.val())==false){
			errey.html("请输入正确的身份证号");
			errey.show();
			idType.css("border-color","#e74b3b");
			return false;
		}else{
			return true;
		}
	}
	//昵称验证
	function checknickname(){
		var nickname=$("#nickname");
		nickname.css("border-color","#BBBBBB");
		var errey=nickname.parent().next();
		errey.html("");
		errey.hide();
		if(nickname.val()==""||nickname.val()==null){
			errey.html("请输入昵称");
			errey.show();
			nickname.css("border-color","#e74b3b");
			return false;
		}else if(nickname.val().length>20){
			errey.html("昵称非空且长度不能超过20个字");
			errey.show();
			nickname.css("border-color","#e74b3b");
			return false;
		}else{
			return true;
		}
	}
	//职业验证
	function checkrole(){
		var role=$("#role").children(".ant-select-selection__rendered").children();
		$("#role").css("border-color","#BBBBBB");
		var errey=$("#role").parent().parent().next();
		errey.html("");
		errey.hide();
		if(role.html()=="请选择职业"||role.html()==null){
			errey.html("请选择职业");
			errey.show();
			$("#role").css("border-color","#e74b3b");
			return false;
		}else{
			return true;
		}
	}
	//年份证明
	function checkyear(){
		var role=$("#originYear").children(".ant-select-selection__rendered").children();
		$("#originYear").css("border-color","#BBBBBB");
		var errey=$("#originYear").parent().parent().next();
		errey.html("");
		errey.hide();
		if(role.html()=="请选择入行年份"||role.html()==null){
			errey.html("请选择年份");
			errey.show();
			$("#originYear").css("border-color","#e74b3b");
			return false;
		}else{
			return true;
		}
	}
	//地区证明
	function checklocation(){
		var locations=$("#location");
		locations.css("border-color","#BBBBBB");
		var errey=locations.parent().next();
		errey.html("");
		errey.hide();
		if(locations.val()==""||locations.val()==null){
			errey.html("请输入地区");
			errey.show();
			locations.css("border-color","#e74b3b");
			return false;
		}else{
			return true;
		}
	}
	//认证描述
	function checkremark(){
		var remark=$("#remark");
		remark.css("border-color","#BBBBBB");
		var errey=remark.parent().next();
		errey.html("");
		errey.hide();
		if(remark.val()==""||remark.val()==null){
			errey.html("请输入认证描述");
			errey.show();
			remark.css("border-color","#e74b3b");
			return false;
		}else{
			return true;
		}
	}
	//材料证明
	function checkmaterials(){
		var uploadFile = $("#credential").get(0).files[0];
		var windowURL = window.URL || window.webkitURL;
		var errey=$("#credential").parent().parent().parent().parent().parent().next();
		errey.html("请上传名片、工牌、学生证、作品署名的图片或其他能证明你职业的材料，最多三张。");
		errey.css("color","#333333");
		$("#credential").next().next(".imgcreden").attr("src","");
		$("#credential").next().next(".imgcreden").hide();
		if(uploadFile==null||uploadFile==""){
			errey.css("color","#e74b3b");
			return false;
		}else{
			var fileType = uploadFile.name.substr(uploadFile.name.lastIndexOf(".")).toUpperCase();
			if(fileType != ".BMP" && fileType != ".PNG" && fileType != ".GIF" && fileType != ".JPG" && fileType != ".JPEG") {
			    errey.html("图片限于bmp,png,gif,jpeg,jpg格式");
			    errey.css("color","#e74b3b");
			    return false;
			}else{
				$("#credential").next().next(".imgcreden").attr("src",windowURL.createObjectURL(uploadFile));
				$("#credential").next().next(".imgcreden").show();
				return true;
			}
		}
	}
	//我同意签约
	function checkceh(){
		var checkBox=$("#agree");
		if(checkBox.is(":checked")){
			return true;
		}else{
			alert("认证需同意新片场指导原则");
			return false;
		}
	}
})