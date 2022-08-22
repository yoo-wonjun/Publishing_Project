function already(){
    alert("준비중인 페이지입니다.")
}

var modal_box = document.getElementById('modal_box');
var btn_login = document.getElementById('login');
var btn_close = document.getElementsByClassName("close")[0];
var btn_cancel = document.getElementsByClassName("cancelbtn")[0];

btn_login.onclick = function(){modal_box.style.display = "block"}
btn_close.onclick = function(){modal_box.style.display = "none"}
btn_cancel.onclick = function(){modal_box.style.display = "none"}

window.onclick = function(event){
    if(event.target == modal_box){
        modal_box.style.display = "none"
    }
}

var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');

var one1 = document.getElementById('one1');
var two1 = document.getElementById('two1');
var three1 = document.getElementById('three1');
var four1 = document.getElementById('four1');
var five1 = document.getElementById('five1');
var six1 = document.getElementById('six1');
var seven1 = document.getElementById('seven1');

two1.style.display = "none", 
three1.style.display = "none",
four1.style.display = "none",
five1.style.display = "none",
six1.style.display = "none",
seven1.style.display = "none"

one.onclick = function(){
	one1.style.display = "block"
	two1.style.display = "none", 
	three1.style.display = "none",
	four1.style.display = "none",
	five1.style.display = "none",
	six1.style.display = "none",
	seven1.style.display = "none"
}
two.onclick = function(){
	two1.style.display = "block"
	one1.style.display = "none", 
	three1.style.display = "none",
	four1.style.display = "none",
	five1.style.display = "none",
	six1.style.display = "none",
	seven1.style.display = "none"
}
three.onclick = function(){
	three1.style.display = "block"
	one1.style.display = "none", 
	two1.style.display = "none",
	four1.style.display = "none",
	five1.style.display = "none",
	six1.style.display = "none",
	seven1.style.display = "none"
}
four.onclick = function(){
	four1.style.display = "block"
	one1.style.display = "none", 
	two1.style.display = "none",
	three1.style.display = "none",
	five1.style.display = "none",
	six1.style.display = "none",
	seven1.style.display = "none"
}
five.onclick = function(){
	five1.style.display = "block"
	one1.style.display = "none", 
	two1.style.display = "none",
	three1.style.display = "none",
	four1.style.display = "none",
	six1.style.display = "none",
	seven1.style.display = "none"
}
six.onclick = function(){
	six1.style.display = "block"
	one1.style.display = "none", 
	two1.style.display = "none",
	three1.style.display = "none",
	five1.style.display = "none",
	four1.style.display = "none",
	seven1.style.display = "none"
}
seven.onclick = function(){
	seven1.style.display = "block"
	one1.style.display = "none", 
	two1.style.display = "none",
	three1.style.display = "none",
	five1.style.display = "none",
	six1.style.display = "none",
	four1.style.display = "none"
}

// function aa(){
// 	var one = document.getElementById('one');
// 	var two = document.getElementById('two');
// 	var three = document.getElementById('three');
// 	var four = document.getElementById('four');
// 	var five = document.getElementById('five');
// 	var six = document.getElementById('six');
// 	var seven = document.getElementById('seven');

// 	if(one.onclick()){
// 		two.style.display = "none";
// 	}

// }