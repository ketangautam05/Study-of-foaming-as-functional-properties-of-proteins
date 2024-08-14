let minute2 = 0; 
let second2 = 0; 
// let running2 = false
// let timer

function startBtntimer2() { 
    timer2 = true; 
    stopWatch2(); 
}
  
function stopBtn2() { 
    timer2 = false; 
}
  
function resetBtn2() { 
    timer2 = false; 
    minute2 = 0; 
    second2 = 0; 
    document.getElementById('min2').innerHTML = "00"; 
    document.getElementById('sec2').innerHTML = "00"; 
}
  
function stopWatch2() { 
    // running2 = true
    if (timer2) { 
        second2++; 
  
  
        if (second2 == 60) { 
            minute2++; 
            second2 = 0; 
        } 
  
        if (minute2 == 60) { 
            minute2 = 0; 
            second2 = 0; 
        } 
  
        let min2String = minute2; 
        let sec2String = second2; 
  
  
        if (minute2 < 10) { 
            min2String = "0" + min2String; 
        } 
  
        if (second2 < 10) { 
            sec2String = "0" + sec2String; 
        } 
        
        
        document.getElementById('min2').innerHTML = min2String; 
        document.getElementById('sec2').innerHTML = sec2String; 
        if(minute2==59 && second2==59){
            stopBtn2()
            document.querySelector(dataselector).innerHTML='<button class="tblbutton" id="b1" onclick="mbutton()">MEASURE'
            document.querySelector(buttonselector).style.opacity="100%"
            alert("Time's Up!");
            ins.innerText="Click on 'MEASURE' button appeared in table to get volume of foam after 60 minutes."
            f=420
        }
        setTimeout(stopWatch2, 20); 
    } 
}