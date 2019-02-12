sumInputs = function() {
    var inputs = document.getElementsByTagName('.salary__inner input');
        result = document.getElementById('total');

    var tarif = document.getElementById('tariff').value;
    tarif = parseInt(tarif);
    var disc = document.getElementById('discount').value;
    disc = parseInt(disc);
    var tarifsum = tarif - ((tarif * disc) / 100);
    // console.log(tarifsum);

        sum = 0;            
    
    for(var i=0; i<inputs.length; i++) {
        var ip = inputs[i];
    
        if (ip.id && ip.id.indexOf("total")  ) {
            sum += parseInt(ip.value) || 0;
            
        }
    
    }
    console.log(result.value =  parseInt(tarifsum+sum));
    console.log(result.value =  sum);
    console.log(result.value =  tarifsum);
    result.value = parseInt(tarifsum+sum);
}
