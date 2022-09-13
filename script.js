function moneyConvector(e){
    console.log(e.target.value);
 const output = document.getElementById("output");
 output.textContent = parseFloat(e.target.value) * 35; 
}
