let cfoamheight = "17.5%"
let cfoamselector = "#cfoam1"
let cselector = "#c1"
let cselector1 = "#c2"
let cleft="7%"
let ctop="5%"
let text="#t1"
let buttonselector = "#b1"
let dataselector = "#data1"
let data = "77 ml"

function pourfoam(){
    if(f==401){
        f=402
        foam.style.transitionDuration="1s"
        eflask.style.bottom="47%"
        eflask.style.left="41.5%"
        foam.style.bottom="47.2%"
        foam.style.left="42.88%"
        setTimeout(function(){
            eflask.style.rotate="-45deg"
            foam.style.rotate="-45deg"
            eflask.style.bottom="54.5%"
            eflask.style.left="39.5%"
            foam.style.bottom=foambottom
            foam.style.left=foamleft
            setTimeout(function(){
                eflask.style.transitionDuration="4s"
                foam.style.transitionDuration="4s"
                foam.style.height="0%"
                foam.style.left="43.8%"
                foam.style.bottom="60.5%"
                document.querySelector("#fallingfoam").style.height="55.7%"
                document.querySelector("#fallingfoam").style.bottom="13%"
                setTimeout(function(){
                    document.querySelector("#fallingfoam").style.height="0%"
                },3800)
                setTimeout(function(){
                    document.querySelector(cfoamselector).style.height=cfoamheight
                    document.querySelector(cfoamselector).style.bottom="12%"
                    setTimeout(function(){
                        eflask.style.transitionDuration="1s"
                        document.querySelector(cfoamselector).style.transitionDuration="1s"
                        eflask.style.bottom="10%"
                        eflask.style.rotate="0deg"
                        eflask.style.left="40%"
                        document.querySelector(text).style.opacity="100%"
                        setTimeout(function(){
                            document.querySelector("#fallingfoam").style.bottom="68.7%"
                            eflask.style.opacity="0%"
                            setTimeout(function(){
                                f=403
                                document.querySelector(buttonselector).style.opacity="100%"
                                ins.innerText="Click on 'MEASURE' button appeared in table to know initial volume of foam."
                            },500)
                        },1500)
                    },4000)
                },200)
            },1000)
        },1000)
    }
}

function verify(){
    if(eflask==s1){
        eflask=s2
        foam=foam2
        cfoamheight = "25%"
        cfoamselector = "#cfoam2"
        cselector = "#c2"
        cselector1 = "#c3"
        ctop="0%"
        cleft="41%"
        text="#t2"
        ins.innerText="click on beaker S2 to pour foam solution inside a measuring cylinder."
        buttonselector="#b2"
        dataselector="#data2"
        data="104 ml"
        foambottom="56.4%"
        foamleft="41.5%"

    }
    else if(eflask==s2){
        eflask=s3
        foam=foam3
        cfoamheight = "35%"
        cfoamselector = "#cfoam3"
        cselector = "#c3"
        cselector1 = "#c4"
        ctop="0%"
        cleft="52%"
        text="#t3"
        ins.innerText="click on beaker S3 to pour foam solution inside a measuring cylinder."
        buttonselector="#b3"
        dataselector="#data3"
        data="137 ml"
        foambottom="56.1%"
        foamleft="41.2%"

    }
    else if(eflask==s3){
        eflask=s4
        foam=foam4
        cfoamheight = "36.8%"
        cfoamselector = "#cfoam4"
        cselector = "#c4"
        cselector1 = "#c5"
        ctop="0%"
        cleft="63%"
        text="#t4"
        ins.innerText="click on beaker S4 to pour foam solution inside a measuring cylinder."
        buttonselector="#b4"
        dataselector="#data4"
        data="142 ml"
        foambottom="55.9%"
        foamleft="41%"

    }
    else if(eflask==s4){
        eflask=s5
        foam=foam5
        cfoamheight = "31.5%"
        cfoamselector = "#cfoam5"
        cselector = "#c5"
        ctop="0%"
        cleft="74%"
        text="#t5"
        ins.innerText="click on beaker S5 to pour foam solution inside a measuring cylinder."
        buttonselector="#b5"
        dataselector="#data5"
        data="126 ml"
        foambottom="56.1%"
        foamleft="41.3%"
    }
    else if(eflask==s5){
        resizecylinder()
        startbutton.innerText="Next"
        ins.innerText="Click on Next button to start stopwatch for 60 min and measure foam volume again."
        startbutton.style.visibility="visible"
        document.querySelector("#timevalue2").style.opacity="100%"
        document.querySelector("#timerback").style.opacity="100%"
        f=406
    }
}

function resizecylinder(){
    document.querySelector("#c1").style.left="5%"
    document.querySelector("#c1").style.top="5%"
    document.querySelector("#c2").style.left="15%"
    document.querySelector("#c2").style.top="5%"
    document.querySelector("#c3").style.left="25%"
    document.querySelector("#c3").style.top="5%"
    document.querySelector("#c4").style.left="35%"
    document.querySelector("#c4").style.top="5%"
    document.querySelector("#c5").style.left="45%"
    document.querySelector("#c5").style.top="5%"
}

function mbutton(){
    if(f==403){
        document.querySelector(buttonselector).style.opacity="0%"
        document.querySelector(dataselector).innerHTML=data
        setTimeout(function(){

            if(eflask!=s5){
                document.querySelector(cselector).style.left=cleft
                document.querySelector(cselector).style.top=ctop
                document.querySelector(cselector1).style.left="20%"
                document.querySelector(cselector1).style.top="0%"
                f=401
            }
            verify()
        },200)
    }
    else if(f==420){
        document.querySelector(buttonselector).style.opacity="0%"
        document.querySelector(dataselector).innerText=data
        if(dataselector=="#data1"){
            dataselector="#data2"
            buttonselector="#b2"
            data="92 ml"
            document.querySelector(dataselector).innerHTML='<button class="tblbutton" id="b2" onclick="mbutton()">MEASURE'
            document.querySelector(buttonselector).style.opacity="100%"
        }
        else if(dataselector=="#data2"){
            dataselector="#data3"
            buttonselector="#b3"
            data="124 ml"
            document.querySelector(dataselector).innerHTML='<button class="tblbutton" id="b3" onclick="mbutton()">MEASURE'
            document.querySelector(buttonselector).style.opacity="100%"
        }
        else if(dataselector=="#data3"){
            dataselector="#data4"
            buttonselector="#b4"
            data="131 ml"
            document.querySelector(dataselector).innerHTML='<button class="tblbutton" id="b4" onclick="mbutton()">MEASURE'
            document.querySelector(buttonselector).style.opacity="100%"
        }
        else if(dataselector=="#data4"){
            dataselector="#data5"
            buttonselector="#b5"
            data="118 ml"
            document.querySelector(dataselector).innerHTML='<button class="tblbutton" id="b5" onclick="mbutton()">MEASURE'
            document.querySelector(buttonselector).style.opacity="100%"
        }
        else if(dataselector=="#data5"){
            f=421
            startbutton.innerText="Observations"
            startbutton.style.visibility="visible"
            ins.innerText="Press 'Observations' button to go know all observations and calculations"
            
        }
    }
}