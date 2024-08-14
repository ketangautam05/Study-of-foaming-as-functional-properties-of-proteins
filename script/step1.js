let on = document.querySelector("#on")
let tare = document.querySelector("#tare")
let reading = document.querySelector("#reading")
let spatula = document.querySelector("#spatula")
let cap = document.querySelector("#protiencap")


let s1 = document.querySelector("#s1")
let s2 = document.querySelector("#s2")
let s3 = document.querySelector("#s3")
let s4 = document.querySelector("#s4")
let s5 = document.querySelector("#s5")


let sample1 = document.querySelector("#sample1")
let sample2 = document.querySelector("#sample2")
let sample3 = document.querySelector("#sample3")
let sample4 = document.querySelector("#sample4")
let sample5 = document.querySelector("#sample5")
let sample6 = document.querySelector("#sample6")
let sample7 = document.querySelector("#sample7")
let sample8 = document.querySelector("#sample8")
let sample9 = document.querySelector("#sample9")


let eflask = s1
let powder = sample1
let powder1
let powderselect
let sptrial=1
let powderreading = "00.50"
let powderreading1 = "01.00"
let powderleft = "9%"
let powderleft1 = "10%"
let eflaskleft = "40%"
let flaskpowder = "42.5%"
let flaskpowder1 = "43.5%"
let weight = "-50.00"
let instruction = "Click on Spatula and weigh 1g protien isolate powder."


function on1(){
    if(f==11){
        reading.style.opacity="100%"
        f=12
        ins.innerText="Click on S1 beaker to place it on weighing scale."
    }
}



function tare1(){
    if(f==14){
        f=15
        reading.innerText="00.00"
        ins.innerText="Click on 'Whey Protien' container's  cap to open it."
    }
}


function beakerplace(){
    if(f==12){
        f=13
        eflask.style.bottom="40%"
        setTimeout(function(){
            eflask.style.left="6.5%"
            setTimeout(function(){
                eflask.style.bottom="25.5%"
                setTimeout(function(){
                    reading.innerText="00.00"
                    if(eflask==s1){
                        reading.innerText="50.00"
                        f=14
                        ins.innerText="Tare the weighing scale."
                    }
                    else{
                        f=17
                        ins.innerText=instruction
                    }
                },1000)
            },1000)
        },1000)
    }

    else if(f==19){
        f=20
        reading.innerText=weight
        eflask.style.bottom="40%"
        powder.style.top="56.3%"
        if(eflask!=s1){
            powder1.style.top="56.3%"
        }
        setTimeout(function(){
            eflask.style.left=eflaskleft
            powder.style.left=flaskpowder
            if(eflask!=s1){
                powder1.style.left=flaskpowder1
            }
            setTimeout(function(){
                eflask.style.bottom="10%"
                powder.style.top="86.3%"
                if(eflask!=s1){
                    powder1.style.top="86.3%"
                }
                f=12
                flaskverify()
                
            },1000)
        },1000)
    }
    else if(f==103 || f==104 || f==211  || f==212){
        placebeaker()
    }
    else if(f==401){
        pourfoam()
    }
    // console.log(f)
}



function flaskverify(){
    if(eflask==s1){
        eflask=s2
        ins.innerText="Click on S2 beaker to place it on weighing scale."
        powder=sample2
        powderselect=sample3
        powderreading = "00.50"
        powderreading1 = "01.00"
        eflaskleft = "51%"
        flaskpowder = "53.5%"
        flaskpowder1 = "54.5%"
        weight="-50.00"
    }
    else if(eflask==s2){
        eflask=s3
        instruction = "Click on Spatula and weigh 1.5g protien isolate powder."
        ins.innerText="Click on S3 beaker to place it on weighing scale."
        powder=sample4
        powderselect=sample5
        powderreading = "01.00"
        powderreading1 = "01.50"
        powderleft = "9%"
        eflaskleft = "62%"
        flaskpowder = "64.5%"
        flaskpowder1 = "65.5%"
        weight="-50.00"
    }
    else if(eflask==s3){
        eflask=s4
        instruction = "Click on Spatula and weigh 2g protien isolate powder."
        ins.innerText="Click on S4 beaker to place it on weighing scale."
        powder=sample6
        powderselect=sample7
        powderreading = "01.00"
        powderreading1 = "02.00"
        powderleft = "9%"
        eflaskleft = "73%"
        flaskpowder = "75.5%"
        flaskpowder1 = "76.5%"
        weight="-50.00"
    }
    else if(eflask==s4){
        eflask=s5
        instruction = "Click on Spatula and weigh 2.5g protien isolate powder."
        ins.innerText="Click on S5 beaker to place it on weighing scale."
        powder=sample8
        powderselect=sample9
        powderreading = "01.25"
        powderreading1 = "02.50"
        powderleft = "9%"
        eflaskleft = "84%"
        flaskpowder = "86.5%"
        flaskpowder1 = "87.5%"
        weight="-50.00"
    }
    else if(eflask==s5){
        f=30
        ins.innerText="Click on 'Whey Protien' container's  cap to close it."
    }
}














function cap1(){
    if(f==15){
        f=16
        cap.style.top="58%"
        setTimeout(function(){
            cap.style.left="42%"
            setTimeout(function(){
                cap.style.top="93%"
                ins.innerText="Click on Spatula and weigh 0.5g protien isolate powder."
                f=17
            },1000)
        },1000)
    }
    else if(f==30){
        f=31
        cap.style.top="58%"
        setTimeout(function(){
            cap.style.left="31.6%"
            setTimeout(function(){
                cap.style.top="61.5%"
                startbutton.innerText="Next"
                startbutton.style.visibility="visible"
                ins.innerText="Click on next button"
                f=50
            },1000)
        },1000)
    }
}





function spatula1(){
    if(f==17){
        f=18
        if(sptrial==1){
            spatula.style.rotate="0deg"
            spatula.style.top="40%"
            spatula.style.left="20%"
        }
        setTimeout(function(){
            spatula.style.left="33%"
            setTimeout(function(){
                spatula.style.top="50%"
                spatula.style.rotate="-20deg"
                spatula.style.left="31.5%"
                setTimeout(function(){
                    spatula.style.top="27%"
                    spatula.style.rotate="0deg"
                    spatula.style.left="33%"
                    powder.style.top="39.6%"
                    powder.style.left="32.9%"
                    powder.style.rotate="-35deg"
                    setTimeout(function(){
                        spatula.style.left="11%"
                        powder.style.left="10.9%"
                        setTimeout(function(){
                            spatula.style.rotate="-20deg"
                            spatula.style.left="9.5%"
                            powder.style.rotate="0deg"
                            powder.style.top="70.8%"
                            powder.style.left=powderleft
                            powder.style.height="4%"
                            powder.style.width="4.3%"
                            setTimeout(function(){
                                reading.innerText=powderreading
                                if(eflask!=s1 && sptrial==1){
                                    sptrial=2
                                    powderreading=powderreading1
                                    f=17
                                    powder1=powder
                                    powder=powderselect
                                    powderleft=powderleft1
                                    spatula1()
                                }
                                else if(eflask==s1 || sptrial==2){
                                    spatula.style.left="15%"
                                    setTimeout(function(){
                                        spatula.style.top="83%"
                                        spatula.style.rotate="30deg"
                                        f=19
                                        sptrial=1
                                        ins.innerText="Click on beaker to put it back on it's previous place."
                                    },1000)
                                }
                            },1000)
                        },1000)
                    },1000)
                },1500)
            },1000)        
        },1000)
    }
}






