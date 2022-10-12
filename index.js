/*
1 meter = 3.281 feet
1 feet = meter / 3.281
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/




let conversion = document.getElementById("convert") 

conversion.addEventListener("click",function (){
     let inputVal = document.getElementById("inputVal").value
     let meter  = (inputVal * 3.281).toFixed(3) 
     let feet   = (inputVal/3.281).toFixed(3) 
     let liter = (0.264 * inputVal).toFixed(3) 
     let gallon =(inputVal/0.264).toFixed(3) 
     let kilogram = (2.204 * inputVal).toFixed(3) 
     let pound = (inputVal/2.204).toFixed(3) 
     
    document.getElementById("feet-metter-convert").textContent=`${inputVal} meters = ${meter} feet | ${inputVal} feet =  ${feet}  meters`
    
    document.getElementById("liters-gallons-convert").textContent =`${inputVal} liters = ${liter} gallons | ${inputVal} gallons = ${gallon} liters`
    
    document.getElementById("kilos-pounds-convert").textContent =`${inputVal} kilos = ${kilogram} pounds | ${inputVal} pounds = ${pound} kilos`
})

 