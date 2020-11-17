$(function(){
				//点击注册登录菜单
	$(".genhuan").click(function(){
		var zhi=$(this).attr("id");
		if(zhi=="0"){
			$(".tiaoyue").hide();
			$(".login").css("position","relative");
			$(".register").css("position","absolute");
			$(".register").animate({"left":"-362px"},300);
			$(".login").animate({"right":"0px"},300);
			$(this).attr("id","1");
			$(this).html("没有账号?&nbsp;&nbsp;注册");
		}else if(zhi=="1"){
			$(".tiaoyue").show();
			$(".register").css("position","relative");
			$(".login").css("position","absolute");
			$(".register").animate({"left":"0px"},300);
			$(".login").animate({"right":"-362px"},300);
			$(this).attr("id","0");
			$(this).html("已有账号?&nbsp;&nbsp;登录");
		}
	})
	//登录二级菜单
	$(".login-tab li").click(function(){
		var lizhi=$(this).html();
		if(lizhi=="密码登录"){
			$(".login-form1").show();
			$(".login-form2").hide();
			$(this).css({"border-bottom":"2px solid #E74B3B","color":"#E74B3B"});
			$(this).siblings().css({"border-bottom":"none","color":"#595959"})
		}else if(lizhi=="短信登录"){
			$(".login-form1").hide();
			$(".login-form2").show();
			$(this).css({"border-bottom":"2px solid #E74B3B","color":"#E74B3B"});
			$(this).siblings().css({"border-bottom":"none","color":"#595959"})
		}
	})
	//表单验证
	$(".reg-name").blur(nicknameClick);
	$(".reg-code").blur(codeClick);
	$(".reg-pwd").blur(passwordClick);
	$(".register-form").submit(function(){
		var isNot=true;
		if(!nicknameClick()) isNot=false;
		if(!codeClick()){
			isNot=false;
		}else if(!phoneClick()){
			isNot=false;
		}
		if(!passwordClick()) isNot=false;
		return isNot;
	});
	//昵称表单判断
	function nicknameClick(){
		var $nickname=$(".reg-name").val();
		if($nickname==null || $nickname==""){
			$(".nickname-errey").html("昵称不能为空！");
			return false;
		}else{
			$(".nickname-errey").html("");
			return true;
		}
	}
	//手机号判断
	function phoneClick(){
		var $phone=$(".reg-phone").val();
		var context=/^1(3[0-9]|5[189]|8[6789])[0-9]{8}$/;
		if($phone=="" || $phone==null){
			alert("手机号不能为空！");
			return false;
		}else if(context.test($phone)==false){
			alert("请输入正确的手机号！");
			return false;
		}else{
			return true;
		}
	}
	//验证码验证
	function codeClick(){
		var $code=$(".reg-code").val();
		if($code=="" || $code==null){
			$(".code-errey").html("验证码不能为空！");
			return false;
		}else{
			$(".code-errey").html("");
			return true;
		}
	}
	//密码验证
	function passwordClick(){
		var $password=$(".reg-pwd").val();
		if($password=="" || $password==null){
			$(".password-errey").html("密码不能为空！");
			return false;
		}else if($password.length<6){
			$(".password-errey").html("密码不能小于六位！");
			return false;
		}else{
			$(".password-errey").html("");
			return true;
		}
	}
	/*
	 * 登录验证
	 */
	$(".log-pwd").blur(login_passwordClick);
	//密码登陆验证
	$(".login-form1").submit(function(){
		var isNot=true;
		if(!login_phone1Click()) isNot=false;
		if(!login_passwordClick()) isNot=false;
		return isNot;
	});
	//手机号判断
	function login_phone1Click(){
		var $phone=$(".log-phone1").val();
		var context=/^1(3[0-9]|5[189]|8[6789])[0-9]{8}$/;
		if($phone=="" || $phone==null){
			alert("手机号不能为空！");
			return false;
		}else if(context.test($phone)==false){
			alert("请输入正确的手机号！");
			return false;
		}else{
			return true;
		}
	}
	//密码验证
	function login_passwordClick(){
		var $password=$(".log-pwd").val();
		if($password=="" || $password==null){
			$(".login-password-errey").html("密码不能为空！");
			return false;
		}else if($password.length<6){
			$(".login-password-errey").html("密码不能小于六位！");
			return false;
		}else{
			$(".login-password-errey").html("");
			return true;
		}
	}
	
	//短信登陆验证
	$(".login-form2").submit(function(){
		var isNot=true;
		if(!login_phone2Click()){
			isNot=false
		}else if(!log_codeClick()){
			isNot=false
		}
		return isNot;
	});
	//手机号判断
	function login_phone2Click(){
		var $phone=$(".log-phone2").val();
		var context=/^1(3[0-9]|5[189]|8[6789])[0-9]{8}$/;
		if($phone=="" || $phone==null){
			alert("手机号不能为空！");
			return false;
		}else if(context.test($phone)==false){
			alert("请输入正确的手机号！");
			return false;
		}else{
			return true;
		}
	}
	//验证码验证
	function log_codeClick(){
		var $code=$(".log-code").val();
		if($code=="" || $code==null){
			alert("验证码不能为空！");
			return false;
		}else{
			return true;
		}
	}
	//异常特效
	function erreyshow(){
		$("#errey").animate({"top":15,"opacity":1},500);
		setTimeout("$('#errey').animate({'top':-40,'opacity':0},800)",2000);
	}
	$("#menu").click(function(){
		erreyshow();
	})
})