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
//鼠标悬停小箭头实现特效
function arrowhover(base){
	document.getElementById("arrow").firstElementChild.style.borderColor="#DDDD6E";
	document.getElementById("arrow").firstElementChild.nextElementSibling.style.borderColor="#DDDD6E";
	document.getElementById("arrow").lastElementChild.style.borderColor="#DDDD6E";
	base.lastElementChild.style.color="#DDDD6E";
	document.getElementById("arrow").className="arrowhover";
}
function arrowleave(base){
	document.getElementById("arrow").firstElementChild.style.borderColor="#63AF8C";
	document.getElementById("arrow").firstElementChild.nextElementSibling.style.borderColor="#63AF8C";
	document.getElementById("arrow").lastElementChild.style.borderColor="#63AF8C";
	base.lastElementChild.style.color="#63AF8C";
	document.getElementById("arrow").className="arrowleave";
}
function columnhover(column){
	column.firstElementChild.style.color="#63AF8C";
	column.style.borderColor="#63AF8C";
	column.lastElementChild.firstElementChild.style.borderColor="#63AF8C";
	column.lastElementChild.lastElementChild.style.borderColor="#63AF8C";
}
function columnleave(column){
	column.firstElementChild.style.color="#5D6666";
	column.style.borderColor="#5D6666";
	column.lastElementChild.firstElementChild.style.borderColor="#DEDEDE";
	column.lastElementChild.lastElementChild.style.borderColor="#DEDEDE";
}
window.onscroll = function(){ 
  var t = document.documentElement.scrollTop || document.body.scrollTop; 
  var top_div = document.getElementById( "named" ); 
  if( t >= 800 ) { 
    top_div.style.display = "inline"; 
    top_div.className="nameddisplay";
  } else { 
    top_div.style.display = "none"; 
  } 
} 