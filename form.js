function calculateT(){
    let y = parseFloat(document.getElementById("f").value);
    let i = parseFloat(document.getElementById("m").value);
    let result = y * 150.95;
    let result1 = i * 189.95;
    document.getElementById("female").innerHTML = result.toFixed(2);
    document.getElementById("male").innerHTML = result1.toFixed(2);
    total= result + result1;
    document.getElementById("total").innerHTML = total.toFixed(2);  
    
}