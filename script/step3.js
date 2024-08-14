

let stirrer = document.querySelector("#stirrer")
let poweron = document.querySelector("#poweron")
let poweroff = document.querySelector("#poweroff")
let rpm = document.querySelector("#rpm")
let timerbtn = document.querySelector("#timerbtn")
let startbtn = document.querySelector("#startbtn")
let nob = document.querySelector("#nob")
let bit = document.querySelector("#bit")
let blade = document.querySelector("#blade")
let values = document.querySelector("#values")
let srpm = document.querySelector("#srpm")
let vrpm = document.querySelector("#vrpm")
let mindigit = document.querySelector("#minset")
let secdigit = document.querySelector("#secset")
let nobleft = document.querySelector("#nobleft")
let nobright = document.querySelector("#nobright")
let cyclone = document.querySelector("#cyclone")













function power(){
    if(f==100){
        f=101
        poweron.style.visibility="visible"
        poweroff.style.opacity="0%"
        poweron.style.opacity="100%"
        values.style.opacity="100%"
        setTimeout(function(){
            ins.innerText="Press 'RPM' button to set rpm"
        },800)
    }
    else if(f==101){
        f=100
        poweroff.style.opacity="100%"
        poweron.style.opacity="0%"
        poweron.style.visibility="hidden"
        values.style.opacity="0%"
        setTimeout(function(){
            ins.innerText="Press the power button on whipping machine to turn it ON."
        },800)
    }
}


function rpm1(){
    if(f==101){
        f=102
        srpm.style.animationIterationCount="infinite";
        ins.innerText="Click on Blue nob's left and right sides to rotate and set rpm to 200"
        nobright.style.animationIterationCount="infinite"
        nobleft.style.animationIterationCount="infinite"
    }
}

let angle = 0
let timecounter = 0


function nobright1(){
    if(f==102){
        f=103
        nobright.style.animationIterationCount="0"
        nobleft.style.animationIterationCount="0"
        angle+=2
        nob.style.rotate = angle+"deg"
        srpm.innerText=(parseInt(srpm.innerText)+10)
        ins.innerText="Press 'TIMER' button to set Timer."
        if(parseInt(srpm.innerText)<200){
            f=102
            ins.innerText="rotate more to 200 RPM"
        }
    }
    else if( mindigit.style.animationIterationCount=="infinite"){
        if(parseInt(mindigit.innerText)<59){
            if(parseInt(mindigit.innerText)<=8){
                mindigit.innerText="0"+(parseInt(mindigit.innerText)+1)
            }
            else{
                mindigit.innerText=parseInt(mindigit.innerText)+1
            }
            timecounter+=60000
            angle+=1
            nob.style.rotate = angle+"deg"
        }

    }
    else if( secdigit.style.animationIterationCount=="infinite"){
        if(parseInt(secdigit.innerText)<59){
            if(parseInt(secdigit.innerText)<=8){
                secdigit.innerText="0"+(parseInt(secdigit.innerText)+1)
            }
            else{
                secdigit.innerText=parseInt(secdigit.innerText)+1
            }
            timecounter+=1000
            angle+=1
            nob.style.rotate = angle+"deg"
        }
    }
}

function nobleft1(){
    if(f==102){
        // f=103
        nobright.style.animationIterationCount="0"
        nobleft.style.animationIterationCount="0"
        if(parseInt(srpm.innerText)>0){
            angle-=2
            nob.style.rotate = angle+"deg"
            srpm.innerText=(parseInt(srpm.innerText)-10)
            ins.innerText="Now set timer by pressing 'TIMER' button."
            // if(parseInt(srpm.innerText)<200){
            //     f=102
            //     ins.innerText="rotate more"
            // }
        }
        else{
            f=102
            ins.innerText="rotate more to 200 RPM"
        }
    }
    else if(mindigit.style.animationIterationCount=="infinite"){
        if(parseInt(mindigit.innerText)>0){
            if(parseInt(mindigit.innerText)<=10){
                mindigit.innerText="0"+(parseInt(mindigit.innerText)-1)
            }
            else{
                mindigit.innerText=parseInt(mindigit.innerText)-1
            }
            timecounter-=60000
            angle-=1
            nob.style.rotate = angle+"deg"
        }
    }
    else if(secdigit.style.animationIterationCount=="infinite"){
        if(parseInt(secdigit.innerText)>0){
            if(parseInt(secdigit.innerText)<=10){
                secdigit.innerText="0"+(parseInt(secdigit.innerText)-1)
            }
            else{
                secdigit.innerText=parseInt(secdigit.innerText)-1
            }
            timecounter-=1000
            angle-=1
            nob.style.rotate = angle+"deg"
        }
    }
}





function timer1(){
    if(f==103){
        f=104
        secdigit.style.animationIterationCount="0"
        srpm.style.animationIterationCount="0";
        mindigit.style.animationIterationCount="infinite"
        ins.innerText="Click on nob to rotate it and set time to 2 minutes only. If wants to set in seconds press 'TIMER' once again. "
        resizer()
        setTimeout(function(){
            ins.innerText="After setting timer click on beaker S1 to place under whipping machine."
        },5000)
    }
    else if(f==104){
        f=103
        mindigit.style.animationIterationCount="0"
        secdigit.style.animationIterationCount="infinite"
        ins.innerText="Click on nob to rotate it and set time in seconds. If wants to set again in minutes then press 'TIMER' again."
        resizer()
        setTimeout(function(){
            ins.innerText="After setting timer click on beaker S1 to place under whipping machine."
        },5000)
    }
}


function resizer(){
    eflask=s1
    powder=sample1
    solution=sol1
    eflaskleft="40%"
    solutionleft="41.35%"

}








// ///////////////////////////////////////     whipping start / stop function      /////////////////////////////////////////////////////////




let animator = 1
let op=100
function start1(){
    if(f==203){
        f=205
        if(running==false){
            startBtntimer()
            foam.style.transitionDuration="110s"
            foam.style.bottom="4%"
            foam.style.height=foamheight
            powder.style.opacity="0%"
            ins.innerText="Wait to completing the whipping process."
            if(eflask!=s1){
                powder1.style.opacity="0%"
            }

        }
        srpm.style.animationIterationCount="0";
        blade.style.animationIterationCount="infinite"
        cyclone.style.animationIterationCount="infinite"
        completestirrer.style.animationIterationCount="infinite"
        cyclone.style.height="10%"
        if(animator==-8.205242041370298e-16){
            f=204
        }
        if(animator>0.001){
            blade.style.animationDuration=animator+"s"
            cyclone.style.animationDuration=animator+"s"
            completestirrer.style.animationDuration=animator+"s"
            vrpm.innerText=parseInt(vrpm.innerText)+1
            bit.style.opacity=op+"%"
            setTimeout(function(){
                animator-=0.005
                op-=1
                f=203
                start1()
            },20)
        }
        setTimeout(function(){
            stopBtn()
            start1()
            setTimeout(function(){
                completestirrer.style.top="-2%"
                ins.innerText="Click on beaker to remove it from under the whipping machine."
                timecounter=0
                console.log(f)
            },5000)
        },120000)
    }
    else if(f==204){
        f=210
        cyclone.style.height="0%"
        srpm.style.animationIterationCount="0";
        blade.style.animationIterationCount="infinite"
        if(animator==1){
            blade.style.animationIterationCount="0"
            cyclone.style.animationIterationCount="0"
            completestirrer.style.animationIterationCount="0"
            foam.style.transitionDuration="1s"
            solution.style.opacity="0%"
            f=211
        }
        if(animator<1){
            blade.style.animationDuration=animator+"s"
            cyclone.style.animationDuration=animator+"s"
            completestirrer.style.animationDuration=animator+"s"
            vrpm.innerText=parseInt(vrpm.innerText)-1
            bit.style.opacity=op+"%"
            setTimeout(function(){
                animator+=0.005
                op+=1
                f=204
                start1()
            },20)
        }
    }
}