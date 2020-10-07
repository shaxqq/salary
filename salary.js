function discount() {
	var tariff = document.getElementById('tariff').value;
	var disc = document.getElementById('discount').value;
	var tarifsum = tariff - (tariff * disc) / 100;
	return tarifsum
}
function salary() {
	var inputs = document.querySelectorAll('.salary__input')[0];
	var value = inputs.querySelectorAll('input')
	var sum = 0;
	for (var i = 0; i < value.length; i++) {
		var ip = value[i].value;
		if (ip) {
			sum += parseInt(ip) || 0;
		}
	}
	return sum
}
function extraServices() {
	var inputs = document.querySelectorAll('.salary__input')[1];
	var value = inputs.querySelectorAll('input')
	var sum = 0;
	for (var i = 0; i < value.length; i++) {
		var ip = value[i].value;
		if (ip) {
			sum += parseInt(ip) || 0;
		}
	}
	return sum
}
function tvAttachments() {
	var e = document.querySelectorAll('select');
	var arr = [];
	for (var i = 0; i < e.length; i++) {
		var selectVal = e[i].options[e[i].selectedIndex].value;
		arr.push(selectVal)
	}

	var tvSum = arr.reduce(function (first, second) {
		return parseInt(first) + parseInt(second)
	})
	return tvSum
}


function sumAll() {
	var result = document.getElementById("out3").innerHTML;
	var sumAll = extraServices() + salary() +  discount() + tvAttachments();
	result.value = sumAll;
	return sumAll
}



function firstDate() {
	var startDate = document.getElementById("start").value;
	return startDate
}
function secondDate() {
	var endDate = document.getElementById("end").value;
	return endDate
}

function minus() {
	var minus = document.getElementById('minus').value;
	if(minus == null || minus == '' || minus == undefined){
		minus = 0;
	} else {
		minus =  parseInt(minus);
	}
	console.log("minus", minus)
	return minus
	// return m
}

function sumDay() {
	document.getElementById("out3").innerHTML = "Сумма : "
	var date1 = new Date(firstDate());
	var date2 = new Date(secondDate());
	var timeDiff = Math.abs(date2 - date1);
	var diffDays = timeDiff / (1000 * 3600 * 24) + 1;
	var allSum = sumAll();
	var fromYear = date1.getFullYear();
	var fromMonth = date1.getMonth();
	var firstMonthDaysTotal = new Date(fromYear, fromMonth + 1, 0).getDate();
	var perDay = allSum / firstMonthDaysTotal;
	var result = diffDays * perDay || 0;
	document.getElementById("out3").innerHTML +=  parseFloat(result.toFixed(2))+parseInt(minus());	
	// console.log("разниці мс", timeDiff);
	// console.log(date2.getFullYear());
	// console.log("номер месяца", date1.getMonth());
	// console.log("дни в сумме ", diffDays);
	// console.log(fromYear);
	// console.log(fromMonth);
	// console.log("Дней в вибранном месяце", firstMonthDaysTotal);
	// console.log(" Один день ", perDay);
	// console.log("За все дни", result);	
}

function minus() {
	var minus = document.getElementById('minus').value;
	if(minus == null || minus == '' || minus == undefined){
		minus = 0;
	} else {
		minus =  parseInt(minus);
	}
	return minus

	// return m
}
function outDate() {
	var res = document.getElementById("outDate");
	var outDate = firstDate() + secondDate() + sumDay();
	res.value = outDate;
}

function newDiscount(){
	
	var oldSum = document.getElementById("oldSum").value;
	var percent = document.getElementById("percent").value;
	var newSum = (oldSum / 100) * parseFloat(percent) - oldSum
	document.querySelector(".newSum").innerHTML = newSum || 0;
	
}

