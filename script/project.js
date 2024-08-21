



let startlab = document.querySelector("#startinglab")
let startlab2 = document.querySelector("#workinglab")
let startbutton = document.querySelector("#start")
let ins = document.querySelector("#text")
let stp1 = document.querySelector("#stp1")
let stp2 = document.querySelector("#stp2")
let stp3 = document.querySelector("#stp3")
let stp4 = document.querySelector("#stp4")
let tablesdiv = document.querySelector("#tablesdiv")
let inftext = document.querySelector("#inftext")
let powders = document.querySelector(".sample")

let statuses = 0
let f=0
let trial=1
let st3

function start(){
    if(statuses==0){
        // startlab.style.visibility="hidden"
        statuses=1
        startbutton.style.visibility="hidden"
        f=11
        ins.innerText="Turn on the weighing scale."
    }
    else if(f==50){
        f=1
        // stp1.style.visibility="hidden"
        machine.style.visibility="hidden"
        spatula.style.visibility="hidden"
        cap.style.visibility="hidden"
        protien.style.visibility="hidden"
        on.style.visibility="hidden"
        tare.style.visibility="hidden"
        reading.style.visibility="hidden"
        startbutton.style.visibility="hidden"
        stp2.style.visibility="visible"
        ins.innerText="Click on distilled water bottle to measure 50mL of distilled water"
    }
    else if(f==10){
        f=100
        stp2.style.visibility="hidden"
        stp3.style.visibility="visible"
        startbutton.style.visibility="hidden"
        ins.innerText="Press the power button on whipping machine to turn it ON."

    }
    else if(f==400){
        f=401
        foamleft="41.4%"
        foambottom="62.3%"
        poweron.style.visibility="hidden"
        stp3.style.visibility="hidden"
        stp4.style.visibility="visible"
        startbutton.style.visibility="hidden"
        ins.innerText="click on beaker S1 to pour foam solution inside a measuring cylinder."
        foam=foam1
        eflask=s1
    }
    else if(f==406){
        f=410
        startBtntimer2()
        ins.innerText="Wait for 60 minutes to complete timer."
        stp1.style.visibility=="hidden"
        document.querySelector("#tableh2").innerText="Volume of foam after 60 min (ml)"
        dataselector="#data1"
        buttonselector="#b1"
        data="57 ml"
        document.querySelector("#data1").innerText=" "
        document.querySelector("#data2").innerText=" "
        document.querySelector("#data3").innerText=" "
        document.querySelector("#data4").innerText=" "
        document.querySelector("#data5").innerText=" "
        document.querySelector("#cfoam1").style.transitionDuration="60s"
        document.querySelector("#cfoam2").style.transitionDuration="60s"
        document.querySelector("#cfoam3").style.transitionDuration="60s"
        document.querySelector("#cfoam4").style.transitionDuration="60s"
        document.querySelector("#cfoam5").style.transitionDuration="60s"
        document.querySelector("#cfoam1").style.height="12%"
        document.querySelector("#cfoam2").style.height="22%"
        document.querySelector("#cfoam3").style.height="32%"
        document.querySelector("#cfoam4").style.height="33.6%"
        document.querySelector("#cfoam5").style.height="29.8%"
        startbutton.style.visibility="hidden"
    }
    else if(f==421){
        f=422
        document.querySelector("#stp5").style.visibility="visible"
        startbutton.style.visibility="hidden"
        ins.innerText="Type 'Foam stability' and 'Foam capacity' in empty input columns one by one and match your answers."
    }
    else if(f==450){
        f=451
        startbutton.style.visibility="hidden"
        document.querySelector("#stp6").style.visibility="visible"
        ins.innerText="Congratulations!!! The whole experiment is completed."
    }
}



// start()

