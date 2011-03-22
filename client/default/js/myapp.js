window.onload = init_all;

function init_all(){
	var el = document.getElementById("clicker");
	el.onclick = doit;
}

function doit(){
	var my_info_div = document.getElementById("infoarea");
	my_info_div.innerHTML = "you clicked the correct spot";
}
