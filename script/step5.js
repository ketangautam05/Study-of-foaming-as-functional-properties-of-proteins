


let capacity1=54
let stability1=74.026
let j="#j1"
let k="#k1"

let ftext = 1


function formula1(){
    if(ftext==1){
        document.querySelector("#formulaimg").style.height="25%"
        document.querySelector("#clicker").innerText="click to hide formula---"
        ftext+=1
    }
    else if(ftext==2){
        document.querySelector("#formulaimg").style.height="0%"
        document.querySelector("#clicker").innerText="click to show formula---"
        ftext-=1
    }

}

function capacitychecker(){
    if(document.querySelector("#capacityinput").value==capacity1){
        document.querySelector(j).innerText=capacity1
        document.querySelector("#checktext1").innerText="Right answer"
        document.querySelector("#checktext1").style.color="rgb(0,128,0)"
        capacityincrease()
    }
    else{
        document.querySelector("#checktext1").innerHTML='Wrong answer<button class="results" id="result1" onclick="result11()">Result</button>'
        document.querySelector("#checktext1").style.color="red"
    }
}

function result11(){
    document.querySelector(j).innerText=capacity1
    document.querySelector("#checktext1").innerHTML=""
    capacityincrease()
}



function stabilitychecker(){
    if(document.querySelector("#stabilityinput").value==stability1){
        document.querySelector(k).innerText=stability1
        document.querySelector("#checktext2").innerText="Right answer"
        document.querySelector("#checktext2").style.color="rgb(0,128,0)"
        stabilityincrease()
        
    }
    else{
        document.querySelector("#checktext2").innerHTML='Wrong answer<button class="results" id="result2" onclick="result22()">Result</button>'
        document.querySelector("#checktext2").style.color="red"
    }
}

function result22(){
    document.querySelector(k).innerText=stability1
    document.querySelector("#checktext2").innerHTML=""
    stabilityincrease()
}

function stabilityincrease(){
    document.querySelector("#stabilityinput").value=""
    nextstep()
    if(stability1==74.026){
        document.querySelector('#stabilityinput').placeholder="S2"
        stability1=88.462
        ins.innerText="Now check 'Foaming stability' for sample S2"
        k="#k2"
    }
    else if(stability1==88.462){
        document.querySelector('#stabilityinput').placeholder="S3"
        stability1=90.511
        ins.innerText="Now check 'Foaming stability' for sample S3"
        k="#k3"
    }
    else if(stability1==90.511){
        document.querySelector('#stabilityinput').placeholder="S4"
        stability1=92.254
        ins.innerText="Now check 'Foaming stability' for sample S4"
        k="#k4"
    }
    else if(stability1==92.254){
        document.querySelector('#stabilityinput').placeholder="S5"
        stability1=93.651
        ins.innerText="Now check 'Foaming stability' for sample S5"
        k="#k5"
    }
    else if(stability1==93.651 && capacity1!=152){
        ins.innerText="Complete all calculations of 'Foam capacity' for remaining samples."
    }

}

function capacityincrease(){
    nextstep()
    document.querySelector('#capacityinput').value=""
    if(capacity1==54){
        document.querySelector('#capacityinput').placeholder="S2"
        capacity1=108
        ins.innerText="Now check 'Foaming capacity' for sample S2"
        j="#j2"
    }
    else if(capacity1==108){
        document.querySelector('#capacityinput').placeholder="S3"
        capacity1=174
        ins.innerText="Now check 'Foaming capacity' for sample S3"
        j="#j3"
    }
    else if(capacity1==174){
        document.querySelector('#capacityinput').placeholder="S4"
        capacity1=184
        ins.innerText="Now check 'Foaming capacity' for sample S4"
        j="#j4"
    }
    else if(capacity1==184){
        document.querySelector('#capacityinput').placeholder="S5"
        capacity1=152
        ins.innerText="Now check 'Foaming capacity' for sample S5"
        j="#j5"
    }
    else if(capacity1==152 && stability1!=93.651){
        ins.innerText="Complete all calculations of 'Foam Stability' for remaining samples."
    }

}

function nextstep(){
    if(stability1==93.651 && capacity1==152){
        f=450
        startbutton.innerText="Inference"
        startbutton.style.visibility="visible"
        ins.innerText="All tests and calculations are done. Please Press 'Inference' button to know the outcome of this experiment"
    }
}
