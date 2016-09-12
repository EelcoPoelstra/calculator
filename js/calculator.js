var keys = document.querySelectorAll('.number');
//console.log(keys);

var operator = document.querySelectorAll('.operator');
console.log(operator);

for (var i = 0; i < keys.length; i++) {
	clicking(i);
}

function clicking(i){
	var test = keys[i].innerHTML;
	console.log(test);
	keys[i].onclick = function() {
		document.getElementById("input").value = test;
	}
};





// document.getElementById("clear").addEventListener('click', clear);
// function clear(){
// 	document.getElementById("input").value = "";
// }
