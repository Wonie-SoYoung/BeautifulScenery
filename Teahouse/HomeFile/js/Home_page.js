function hover(objects){
	document.getElementById("click1").firstElementChild.className="div1leaver";
	document.getElementById("click1").lastElementChild.className="div2leaver";
	for (var i=1;i<9;i++) {
		if(objects.id==i){
			document.getElementById(i).firstElementChild.className="divhover";
			continue;
		}
		document.getElementById(i).className="lihover";
		//document.getElementById(i).style.opacity=0.5;
	}
}
function leaver(objects){
	document.getElementById("click1").firstElementChild.className="div1hover";
	document.getElementById("click1").lastElementChild.className="div2hover";
	for (var i=1;i<9;i++) {
		if(objects.id==i){
			document.getElementById(i).firstElementChild.className="divleaver";
			continue;
		}
		document.getElementById(i).className="lileaver";
	}
}
function homecleck1(){
	document.getElementById("navigaion").firstElementChild.style.display="none";
	document.getElementById("shopping").firstElementChild.className="closespan1";
	document.getElementById("pname").className="closespan2";
	for (var i=1;i<9;i++) {
		document.getElementById(i).firstElementChild.className="closediv";
		document.getElementById(i).lastElementChild.className="closeimg";
	}
	document.getElementById("click2").className="div1hover";
	setTimeout(closehome,500);
	
}
function homecleck2(){
	for (var i=1;i<9;i++) {
		document.getElementById(i).firstElementChild.className="opendiv";
		document.getElementById(i).lastElementChild.className="openimg";
	}
	setTimeout(openhome,500);
}
function closehome(){
	document.getElementById("shopping").firstElementChild.style.display="none";
	document.getElementById("pname").style.display="none";
	document.getElementById("xiaomenu").style.display="none";
	document.getElementById("click1").style.display="none";
	document.getElementById("click1").style.top="30%";
	document.getElementById("click2").style.display="block";
	document.getElementById("click2").style.top="45%";
	document.getElementById("navigaion").className="closehome"
}
function openhome(){
	document.getElementById("navigaion").firstElementChild.style.display="block";
	document.getElementById("shopping").firstElementChild.style.display="block";
	document.getElementById("shopping").firstElementChild.className="openspan1";
	document.getElementById("pname").style.display="block";
	document.getElementById("pname").className="openspan2";
	document.getElementById("click2").className="div1hover";
	document.getElementById("xiaomenu").style.display="block";
	document.getElementById("click1").style.display="block";
	document.getElementById("click1").style.top="45%";
	document.getElementById("click2").style.display="none";
	document.getElementById("click2").style.top="30%";
	document.getElementById("navigaion").className="openhome"
}

//主页面小菜单特效
function hover2(objects){
	for (var i=10;i<15;i++) {
		if(objects.id==i){
			document.getElementById(i).firstElementChild.className="divhover";
			continue;
		}
		document.getElementById(i).className="lihover";
		//document.getElementById(i).style.opacity=0.5;
	}
}
function leaver2(objects){
	for (var i=10;i<15;i++) {
		if(objects.id==i){
			document.getElementById(i).firstElementChild.className="divleaver";
			continue;
		}
		document.getElementById(i).className="lileaver";
	}
}