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
function sumAll(){
    var result = document.getElementById('total');
    var sumAll = extraServices() + salary() + discount()
    result.value = sumAll
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
