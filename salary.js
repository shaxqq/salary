sumInputs = function() {
    var tarif = document.getElementById('tariff').value;
    tarif = parseInt(tarif);
    var disc = document.getElementById('discount').value;
    disc = parseInt(disc);
    var tarifsum = tarif - ((tarif * disc) / 100) || 0;   
    console.log(tarifsum);


    var inputs = document.getElementsByTagName('input');
    result = document.getElementById('total');
    
        sum = tarifsum;
        console.log(sum);
    for(var i=0; i<inputs.length; i++) {
        var ip = inputs[i];
        console.log(ip);

        if (ip.id && ip.id.indexOf("total") < 0 ) {
            sum += parseInt(ip.value) || 0;
        }

    }

    console.log(sum);
    
    
    result.value = sum;
}
