function discount(){
    var tariff = document.getElementById('tariff').value;
    var disc = document.getElementById('discount').value;
    var tarifsum = tariff - (tariff * disc) / 100;
    return tarifsum
}
function salary(){
    var inputs = document.querySelectorAll('.salary__input')[0];
    var value = inputs.querySelectorAll('input')
    var sum = 0; 
    for(var i=0; i<value.length; i++) {
        var ip = value[i].value;
        if (ip) {
            sum += parseInt(ip) || 0;
        }
    }
    return sum
}
function extraServices(){
    var inputs = document.querySelectorAll('.salary__input')[1];
    var value = inputs.querySelectorAll('input')
    var sum = 0; 
    for(var i=0; i<value.length; i++) {
        var ip = value[i].value;
        if (ip) {
            sum += parseInt(ip) || 0;
        }
    }
    return sum
}
function tvAttachments(){
    var e = document.querySelectorAll('select');
    var arr = [];
    for(var i = 0; i < e.length; i++ ){
        var selectVal = e[i].options[e[i].selectedIndex].value;
        arr.push(selectVal)
    }
    
    var tvSum = arr.reduce(function(first, second){
        return parseInt(first) + parseInt(second)
    })
    return tvSum 
}

function sumAll(){
    var result = document.getElementById('total');
    var sumAll = extraServices() + salary() + discount() + tvAttachments()
    result.value = sumAll
}


function firstDate() {
	var startDate = document.getElementById("start").value;
	document.getElementById("out1").innerHTML = startDate;
	
}
function secondDate() {
	var endDate = document.getElementById("end").value;
	document.getElementById("out2").innerHTML = endDate;
	
}


function sumDay(){
	var date1 = new Date(2019, 2, 0).getDate();
	var fromDate = new Date('2019/02/01');
	var fromYear = fromDate.getYear();
	var fromMonth = fromDate.getMonth();
	var firstMonthDaysTotal = new Date(fromYear, fromMonth + 1, 0).getDate();
	var fromDay = fromDate.getDate();
	var toDay = fromDate.getDate();
	var perMonth = 300;
	var perDay = perMonth / firstMonthDaysTotal;
	var result = (toDay - fromDay + 1) * perDay
	// var date1 = new Date(2019, 2, 0).getDate();
	// var date2 = new Date(2019, 3, 0).getDate();
	// var timeDiff = Math.abs(date2.getTime() - date1.getTime());
	// var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
	console.log(date1);
	console.log(result);
	// console.log(diffDays);
	
	}


function outDate(){
	var res = document.getElementById("outDate");
	var outDate = firstDate() + secondDate() + sumDay();
	res.value = outDate;
	
}




// sumInputs = function () {
    // var discount = document.querySelector('.salary__input--top input').value;
    // var inputs = document.querySelector('.salary__inner input').value;
    // var result = document.getElementById('total');
    // var tarif = document.getElementById('tariff').value;
    // tarif = parseInt(tarif);
    // var disc = document.getElementById('discount').value;
    // disc = parseInt(disc);
    // var tarifsum = tarif - ((tarif * disc) / 100);
    // console.log(tarifsum);

    //     sum = 0;            

    // for(var i=0; i<inputs.length; i++) {
    //     var ip = inputs[i];

    //     if (ip.id && ip.id.indexOf("total")  ) {
    //         sum += parseInt(ip.value) || 0;

    //     }
    // console.log(discount);
    // console.log(inputs);
    // console.log(result);
// }

    // console.log(result.value =  sum);
    // console.log(result.value =  tarifsum);
    // result.value = parseInt(tarifsum+sum);
