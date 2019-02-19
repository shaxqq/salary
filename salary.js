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
	document.getElementById("out3").innerHTML = parseFloat(result.toFixed(2))+parseInt(minus());	
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
	document.querySelector(".newSum").innerHTML = newSum
}






































// function discount(){
//     var tariff = document.getElementById('tariff').value;
//     var disc = document.getElementById('discount').value;
//     var tarifsum = tariff - (tariff * disc) / 100;
//     return tarifsum
// }
// function salary(){
//     var inputs = document.querySelectorAll('.salary__input')[0];
//     var value = inputs.querySelectorAll('input')
//     var sum = 0; 
//     for(var i=0; i<value.length; i++) {
//         var ip = value[i].value;
//         if (ip) {
//             sum += parseInt(ip) || 0;
//         }
//     }
//     return sum
// }
// function extraServices(){
//     var inputs = document.querySelectorAll('.salary__input')[1];
//     var value = inputs.querySelectorAll('input')
//     var sum = 0; 
//     for(var i=0; i<value.length; i++) {
//         var ip = value[i].value;
//         if (ip) {
//             sum += parseInt(ip) || 0;
//         }
//     }
//     return sum
// }
// function tvAttachments(){
//     var e = document.querySelectorAll('select');
//     var arr = [];
//     for(var i = 0; i < e.length; i++ ){
//         var selectVal = e[i].options[e[i].selectedIndex].value;
//         arr.push(selectVal)
//     }
    
//     var tvSum = arr.reduce(function(first, second){
//         return parseInt(first) + parseInt(second)
//     })
//     return tvSum 
// }

// function sumAll(){
//     var result = document.getElementById('total');
//     var sumAll = extraServices() + salary() + discount() + tvAttachments()
//     result.value = sumAll
// }




// function firstDate() {
// 	var startDate = document.getElementById("start").value;
// 	document.getElementById("out1").innerHTML = startDate;
// 	return startDate
// }
// function secondDate() {
// 	var endDate = document.getElementById("end").value;
// 	document.getElementById("out2").innerHTML = endDate;
// 	return endDate
// }


// function sumDay(){
// 	var date1 = new Date(firstDate());
// 	var date2 = new Date(secondDate());
// 	var timeDiff = Math.abs(date2 - date1);
// 	var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
// 	var allSum = sumAll();
// 	var fromYear = date1.getYear();
// 	var fromMonth = date1.getMonth();
// 	var toDay = date2.getDate();
// 	var firstMonthDaysTotal = new Date(fromYear, fromMonth + 1, 0).getDate();
// 	var perDay = allSum / firstMonthDaysTotal;
// 	var result = diffDays * perDay
// 	// var date1 = document.getElementById("start").value
// 	// var fromDate = new Date(date1);
// 	// var date2 = document.getElementById("end").value
// 	// var fromDate2 = new Date(date2);
// 	// var fromYear = fromDate.getYear();
// 	// var fromMonth = fromDate.getMonth();
// 	// var firstMonthDaysTotal = new Date(fromYear, fromMonth + 1, 0).getDate();
// 	// var fromDay = fromDate.getDate();
// 	// var toDay = fromDate.getDate();
// 	// var perMonth = 300;
// 	// var perDay = perMonth / firstMonthDaysTotal;
// 	// var result = (toDay - fromDay + 1) * perDay
// 	console.log("разниці мс", timeDiff);
// 	console.log("номер месяца", date1.getMonth());
// 	console.log("дни в сумме ", diffDays);
// 	console.log(fromYear);
// 	console.log(fromMonth);
// 	console.log("Дней в вибранном месяце",firstMonthDaysTotal);
// 	console.log(" Один день ", perDay);
// 	console.log("За все дни", result);
// 	// console.log(perOneday);
// 	}


// function outDate(){
// 	var res = document.getElementById("outDate");
// 	var outDate = firstDate() + secondDate() + sumDay();
// 	res.value = outDate;
// }































































// // function firstDate() {
// // 	var startDate = document.getElementById("start").value;
// // 	document.getElementById("out1").innerHTML = startDate;
	
// // }
// // function secondDate() {
// // 	var endDate = document.getElementById("end").value;
// // 	document.getElementById("out2").innerHTML = endDate;
	
// // }


// // function sumDay(){
// // 	var date1 = document.getElementById("start").value
// // 	var fromDate = new Date(date1);
// // 	var date2 = document.getElementById("end").value
// // 	var fromDate2 = new Date(date2);
// // 	var fromYear = fromDate.getYear();
// // 	var fromMonth = fromDate.getMonth();
// // 	var firstMonthDaysTotal = new Date(fromYear, fromMonth + 1, 0).getDate();
// // 	var fromDay = fromDate.getDate();
// // 	var toDay = fromDate.getDate();
// // 	var perMonth = 300;
// // 	var perDay = perMonth / firstMonthDaysTotal;
// // 	var dayRange = firstMonthDaysTotal / (date1 - fdate2);
// // 	// var perDayRange = fromDate2 * 
// // 	var result = (toDay - fromDay + 1) * perDay
// // 	// var date1 = new Date(2019, 2, 0).getDate();
// // 	// var date2 = new Date(2019, 3, 0).getDate();
// // 	// var timeDiff = Math.abs(date2.getTime() - date1.getTime());
// // 	// var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
// // 	// console.log(firstMonthDaysTotal);
// // 	console.log(date1);
// // 	console.log(date2);
// // 	console.log(fromDate);

// // 	console.log(fromMonth);
// // 	console.log(firstMonthDaysTotal);
// // 	console.log(dayRange);
	
// // 	console.log(fromDay);
// // 	console.log(toDay);
// // 	console.log(perDay);
// // 	// console.log(date2);
// // 	console.log(result);
// // 	// console.log(diffDays);
	
// // 	}


// // function outDate(){
// // 	var res = document.getElementById("outDate");
// // 	var outDate = firstDate() + secondDate() + sumDay();
// // 	res.value = outDate;
	
// // }




// // sumInputs = function () {
//     // var discount = document.querySelector('.salary__input--top input').value;
//     // var inputs = document.querySelector('.salary__inner input').value;
//     // var result = document.getElementById('total');
//     // var tarif = document.getElementById('tariff').value;
//     // tarif = parseInt(tarif);
//     // var disc = document.getElementById('discount').value;
//     // disc = parseInt(disc);
//     // var tarifsum = tarif - ((tarif * disc) / 100);
//     // console.log(tarifsum);

//     //     sum = 0;            

//     // for(var i=0; i<inputs.length; i++) {
//     //     var ip = inputs[i];

//     //     if (ip.id && ip.id.indexOf("total")  ) {
//     //         sum += parseInt(ip.value) || 0;

//     //     }
//     // console.log(discount);
//     // console.log(inputs);
//     // console.log(result);
// // }

//     // console.log(result.value =  sum);
//     // console.log(result.value =  tarifsum);
//     // result.value = parseInt(tarifsum+sum);
