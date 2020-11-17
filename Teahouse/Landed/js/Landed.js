var b=1;
function menuhover(doc){
	if(doc.id!="click"){
		doc.parentNode.style.animation="menuhover 0.2s linear forwards";
		doc.style.color="rgb(0,0,0)";
	}
}
function menuleave(doc){
	if(doc.id!="click"){
		doc.parentNode.style.animation="menuleave 0.2s linear forwards";
		doc.style.color="rgb(255,255,255)";
	}
}
function menuclick(doc){
	if(doc.id!="click"){
		b=document.getElementById("click").parentNode.id;
		doc.parentNode.style.backgroundColor="rgba(255,255,255,0.6)";
		doc.style.color="rgb(0,0,0)";
		document.getElementById("click").parentNode.style.animation="menuleave 0.2s linear forwards";
		document.getElementById("click").style.color="rgb(255,255,255)";
		document.getElementById("click").id="a";
		doc.id="click";
	}
}
function bodyclick(boy){
	var t=boy.id;
	var q=document.getElementById("content1");
	var w=document.getElementById("content2");
	var e=document.getElementById("content3");
	var r=document.getElementById("content4");
	if(b==1 && t==2){
		document.body.className="backimg1-2";
		q.style.display="none";
		w.style.display="block";
	}
	if(b==1 && t==3){
		document.body.className="backimg1-3";
		q.style.display="none";
		e.style.display="block";
	}
	if(b==1 && t==4){
		document.body.className="backimg1-4";
		q.style.display="none";
		r.style.display="block";
	}
	if(b==2 && t==1){
		document.body.className="backimg2-1";
		w.style.display="none";
		q.style.display="block";
	}
	if(b==2 && t==3){
		document.body.className="backimg2-3";
		w.style.display="none";
		e.style.display="block";
	}
	if(b==2 && t==4){
		document.body.className="backimg2-4";
		w.style.display="none";
		r.style.display="block";
	}
	if(b==3 && t==1){
		document.body.className="backimg3-1";
		e.style.display="none";
		q.style.display="block";
	}
	if(b==3 && t==2){
		document.body.className="backimg3-2";
		e.style.display="none";
		w.style.display="block";
	}
	if(b==3 && t==4){
		document.body.className="backimg3-4";
		e.style.display="none";
		r.style.display="block";
	}
	if(b==4 && t==1){
		document.body.className="backimg4-1";
		r.style.display="none";
		q.style.display="block";
	}
	if(b==4 && t==2){
		document.body.className="backimg4-2";
		r.style.display="none";
		w.style.display="block";
	}
	if(b==4 && t==3){
		document.body.className="backimg4-3";
		r.style.display="none";
		e.style.display="block";
	}
}
function goshititleclick(gsc){
	var c=document.defaultView.getComputedStyle(gsc.nextElementSibling,null).opacity;
	if(c==0){
		gsc.style.animation="kaishi-yidong 0.3s linear forwards";
		gsc.nextElementSibling.style.animation="kaishi-shosuo 0.3s linear forwards";
	}else if(c==1){
		gsc.nextElementSibling.style.animation="jieshu-shosuo 0.3s linear forwards";
		gsc.style.animation="jieshu-yidong 0.3s linear forwards";
	}
}
function difangtitleclick(dfl){
	var c=document.defaultView.getComputedStyle(dfl.nextElementSibling,null).opacity;
	if(c==0){
		dfl.style.animation="kaishi-yidong 0.3s linear forwards";
		dfl.nextElementSibling.style.animation="kaishi-shosuo 0.3s linear forwards";
	}else if(c==1){
		dfl.nextElementSibling.style.animation="jieshu-shosuo 0.3s linear forwards";
		dfl.style.animation="jieshu-yidong 0.3s linear forwards";
	}
}
function dengluclick(dfl){
	var c=document.defaultView.getComputedStyle(dfl.nextElementSibling,null).opacity;
	if(c==0){
		dfl.style.animation="kaishi-yidong 0.3s linear forwards";
		dfl.nextElementSibling.style.animation="kaishi-shosuo 1s ease-in forwards";
		
	}else if(c==1){
		dfl.nextElementSibling.style.animation="jieshu-shosuo 0.3s linear forwards";
		dfl.style.animation="jieshu-yidong 0.5s ease-in forwards";
	}
}