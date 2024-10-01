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
let m2solselector = "#m2sol1"

function pourfoam(){
    if(f==401){
        f=402
        foam.style.transitionDuration="1s"
        eflask.style.bottom="47%"
        eflask.style.left="41.5%"
        foam.style.bottom="52.1%"
        foam.style.left="42.88%"
        solution.style.bottom="47.1%"
        solution.style.left="42.96%"
        setTimeout(function(){
            eflask.style.rotate="-45deg"
            foam.style.rotate="-45deg"
            solution.style.rotate="-45deg"
            eflask.style.bottom="54.5%"
            eflask.style.left="39.5%"
            foam.style.bottom=foambottom
            foam.style.left=foamleft
            solution.style.bottom="58.1%"
            solution.style.left="43.6%"
            setTimeout(function(){
                eflask.style.transitionDuration="4s"
                foam.style.transitionDuration="3s"
                foam.style.height="0%"
                foam.style.left="42.6%"
                foam.style.bottom="63.6%"
                document.querySelector("#fallingfoam").style.height="55.7%"
                document.querySelector("#fallingfoam").style.bottom="13%"
                setTimeout(function(){
                    document.querySelector(m2solselector).style.height="11%"
                    document.querySelector(cfoamselector).style.bottom="20%"
                    solution.style.bottom="60.1%"
                    solution.style.left="43.8%"
                    solution.style.height="0%"
                },3000)
                // vis
                setTimeout(function(){
                    document.querySelector("#fallingfoam").style.height="0%"
                },4000)
                setTimeout(function(){
                    document.querySelector(cfoamselector).style.height=cfoamheight
                    document.querySelector(cfoamselector).style.bottom="12%"
                    setTimeout(function(){
                        eflask.style.transitionDuration="1s"
                        document.querySelector(cfoamselector).style.transitionDuration="1s"
                        eflask.style.bottom="10%"
                        eflask.style.rotate="0deg"
                        eflask.style.left="40%"
                        solution.style.rotate="0deg"
                        solution.style.left="41.43%"
                        solution.style.bottom="10%"
                        document.querySelector(text).style.opacity="100%"
                        setTimeout(function(){
                            document.querySelector("#fallingfoam").style.bottom="68.7%"
                            eflask.style.opacity="0%"
                            solution.style.opacity="0%"
                            setTimeout(function(){
                                f=403
                                document.querySelector(buttonselector).style.opacity="100%"
                                ins.innerText="Click on 'MEASURE' button appeared in table to know initial volume of foam."
                                setTimeout(function(){
                                    eflask.style.visibility="hidden"
                                },500)
                            },500)
                        },1500)
                    },5000)
                },200)
            },1000)
        },1000)
    }
}

function verify(){
    if(eflask==s1){
        eflask=s2
        foam=foam2
        solution=sol2
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
        foambottom="61.1%"
        foamleft="41.3%"
        m2solselector = "#m2sol2"

    }
    else if(eflask==s2){
        eflask=s3
        foam=foam3
        solution=sol3
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
        foambottom="60.2%"
        foamleft="41.1%"
        m2solselector = "#m2sol3"

    }
    else if(eflask==s3){
        eflask=s4
        foam=foam4
        solution=sol4
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
        foambottom="59.7%"
        foamleft="41.2%"
        m2solselector = "#m2sol4"

    }
    else if(eflask==s4){
        eflask=s5
        foam=foam5
        solution=sol5
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
        foambottom="59.5%"
        foamleft="41.45%"
        m2solselector = "#m2sol5"
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