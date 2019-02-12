sumInputs = function() {
    var inputs = document.getElementsByTagName('input'),
        result = document.getElementById('total'),
        sum = 0;            
    
    for(var i=0; i<inputs.length; i++) {
        var ip = inputs[i];
    
        if (ip.id && ip.id.indexOf("total")) {
            sum += parseInt(ip.value) || 0;
        }
    
    }
    
    result.value = sum;
}