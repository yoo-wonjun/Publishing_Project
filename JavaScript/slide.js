var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}

function already(){
    alert("준비중인 페이지입니다.")
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
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


function myMap() {
	var mapProp = {
		center: new google.maps.LatLng(37.50003533841325, 127.03558519438549), zoom: 17,}
    var mapProp2 = {
        center: new google.maps.LatLng(37.555277430011685, 126.9355793079038), zoom: 17,}
	var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
	var myPos1 = {lat: 37.50003533841325, lng: 127.03558519438549};
	var marker1 = new google.maps.Marker({position: myPos1});
	marker1.setMap(map);
	google.maps.event.addListener(marker1, 'click', function(){
		map.setZoom(map.getZoom() - 1);  
		map.setCenter(marker1.getPosition());
	});
    var map = new google.maps.Map(document.getElementById("googleMap2"), mapProp2);
	var myPos2 = {lat: 37.555277430011685, lng: 126.9355793079038};
	var marker2 = new google.maps.Marker({position: myPos2});
	marker2.setMap(map);
	google.maps.event.addListener(marker2, 'click', function(){
		map.setZoom(map.getZoom() - 1);  
		map.setCenter(marker1.getPosition());
	});

}
