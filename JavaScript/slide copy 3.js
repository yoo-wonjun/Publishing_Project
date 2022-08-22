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

var api_key = "584b4a576b736b713239727876647a";

$(document).ready(function(){
	$("#btn_load").click(function(){
		var START_INDEX = document.getElementById("START_INDEX").value.trim();
		var END_INDEX = document.getElementById("END_INDEX").value.trim();
	
        if(START_INDEX < 1 || START_INDEX > 10){
            alert("페이징 시작번호는 1 ~ 10 사이의 정수이어야 합니다.");
            frm.itemPerPage.focus();
        }
		if(END_INDEX < 1 || END_INDEX > 10){
            alert("페이징 끝 번호는 1 ~ 10 사이의 정수이어야 합니다.");
            frm.itemPerPage.focus();
        }

        var url = `http://openapi.seoul.go.kr:8088/${api_key}/json/InnerGmnsmInfo/${START_INDEX}/${END_INDEX}/`;
        
        $.ajax({
            url: url,
            type: "GET",
            cache: false,
            success: function(data, status){
                if(status == "success") parseJSON(data);
            }
        })
        });
        $("#btn_remove").click(function(){
        $("#demoJSON").html("");
	});
});

function parseJSON(jsonObj) {
	var row = jsonObj.InnerGmnsmInfo.row;

	var table = "<tr><th>사업장명</th><th>소재지 전체주소</th><th>개관년도</th><th>위생업태명</th><th>전화번호</th></tr>";
	for (var i = 0; i < row.length; i++) {
		table += "<tr>"; 
		table += "<td>" + row[i].NM + "</td>";
		table += "<td>" + row[i].ADDR_OLD + "</td>";
		table += "<td>" + row[i].YEAR + "</td>";
		table += "<td>" + row[i].HYGIENE_CONDITIONS + "</td>";
		table += "<td>" + row[i].TEL.split(" ").join("") + "</td>";
		table += "</tr>"; 
	}
	$("#demoJSON").html(table);
}