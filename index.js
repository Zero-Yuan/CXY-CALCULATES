
function get(num){
	var shownums=document.getElementById("display");
    shownums.value+=num;
}


var cc=document.getElementById("clear");
function clear(){
	document.getElementById("display").value="";
}
cc.addEventListener("click",clear,false);

var dd=document.getElementById("delete");
function backspace(){
	var shownums=document.getElementById("display");
    shownums.value=shownums.value.substring(0,shownums.value.length-1);
}
dd.addEventListener("click",backspace,false);

var re=document.getElementById("cal");
function calculates(){
	var result=0;
    result=document.getElementById("display").value;
    //document.getElementById("display").value="";
    document.getElementById("display").value=eval(result);
}
re.addEventListener("click",calculates,false);


function showTime(){
			var today=new Date();
    		var y=today.getFullYear();
    var M=today.getMonth()+1;
    var d=today.getDate();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    m=checkTime(m);
    s=checkTime(s);
    var week=today.getDay();
    var w=new Array("星期天","星期一","星期二","星期三","星期四","星期五","星期六");
    document.getElementById("time").innerHTML=y+"年"+M+"月"+d+"日"+"</br>"+h+":"+m+":"+s+"  "+w[week];
    setTimeout("showTime()",1000);
}

function checkTime(i){
	if(i<10){
    i="0"+i;
    
    }
	return i;
}
window.onload=function(){
showTime();

};








