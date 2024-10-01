let minute = 0; 
let second = 0; 
let running = false
let itrcount = 0
  
function startBtntimer() { 
    timer = true; 
    stopWatch(); 
}
  
function stopBtn() { 
    timer = false; 
}
  
function resetBtn() { 
    timer = false; 
    minute = 0; 
    second = 0; 
    document.getElementById('min').innerHTML = "00"; 
    document.getElementById('sec').innerHTML = "00"; 
}
  
function stopWatch() { 
    running = true
    if (timer) { 
        second++; 
        itrcount++;
  
  
        if (second == 60) { 
            minute++; 
            second = 0; 
        } 
  
        if (minute == 60) { 
            minute = 0; 
            second = 0; 
        } 
  
        let minString = minute; 
        let secString = second; 
  
  
        if (minute < 10) { 
            minString = "0" + minString; 
        } 
  
        if (second < 10) { 
            secString = "0" + secString; 
        } 
  

        if(itrcount==120){
            stopBtn()
            start1()
            setTimeout(function(){
                completestirrer.style.top="-2%"
                ins.innerText="Click on beaker to remove it from under the whipping machine."
                timecounter=0
                // console.log(f)
            },5000)
        }
  
        document.getElementById('min').innerHTML = minString; 
        document.getElementById('sec').innerHTML = secString; 
        setTimeout(stopWatch, 250); 
    } 
}