
let completestirrer = document.querySelector("#completestirrer")
let foam1 = document.querySelector("#foam1")
let foam2 = document.querySelector("#foam2")
let foam3 = document.querySelector("#foam3")
let foam4 = document.querySelector("#foam4")
let foam5 = document.querySelector("#foam5")



let solutionleft
let foamleft =  "41.34%"
let foambottom = "9.1%"
let foambottom1= "15.1%"
let foamheight =  "7.8%"
let foam = foam1
let beakerscr = "images/flaskS1new.png"







function placebeaker(){
    if(timecounter==120000){
        f=150
        running=false
        resetBtn()
        // ins.innerText="ok"
        completestirrer.style.top="-2%"
        eflask.style.left="13.5%"
        solution.style.left="14.97%"
        powder.style.left="16%"
        eflask.style.bottom="4%"
        solution.style.bottom="4.2%"
        powder.style.top="92.3%"
        if(eflask!=s1){
            powder1.style.top="92.3%"
            powder1.style.left="17%"
        }
        setTimeout(function(){
            completestirrer.style.top="20%"
            // eflask.src=beakerscr
            f=203
            solution.style.transitionDuration="110s"
            ins.innerText="Press start button on whipping machine to start whipping"
            mindigit.style.animationIterationCount="0"
            secdigit.style.animationIterationCount="0"
        },1000)
    }

    else if(f==211){
        f=500
        eflask.style.bottom="10%"
        eflask.style.left=eflaskleft
        solution.style.bottom="10.2%"
        solution.style.left=solutionleft
        foam.style.left=foamleft
        foam.style.bottom=foambottom1
        completestirrer.style.top="0%"
        setTimeout(function(){
            reverseverify()
        },5000)
    }

    else if((f==103 || f==104) && timecounter!=120000){
        ins.innerText="The timer is not correctly set !!!!.  Please set it to 2 minutes only"
    }
}




function reverseverify(){
    if(eflask==s1){
        eflask=s2
        solution=sol2
        powder=sample2
        powder1=sample3
        eflaskleft="51%"
        solutionleft="52.43%"
        timecounter=120000
        foam=foam2
        foamleft="52.34%"
        foamheight="10.7%"
        foambottom="8.8%"
        foambottom1="14.8%"
        beakerscr = "images/flaskS2new.png"
        ins.innerText="click on beaker S2 to place under whipping machine."
        f=212
    }
    else if(eflask==s2){
        eflask=s3
        solution=sol3
        powder=sample4
        powder1=sample5
        eflaskleft="62%"
        solutionleft="63.43%"
        timecounter=120000
        foam=foam3
        foamleft="63.34%"
        foamheight="13.5%"
        foambottom="8.5%"
        foambottom1="14.5%"
        beakerscr = "images/flaskS3new.png"
        ins.innerText="click on beaker S3 to place under whipping machine."
        f=212
    }
    else if(eflask==s3){
        eflask=s4
        solution=sol4
        powder=sample6
        powder1=sample7
        eflaskleft="73%"
        solutionleft="74.43%"
        timecounter=120000
        foam=foam4
        foamleft="74.34%"
        foamheight="14%"
        foambottom="8.1%"
        foambottom1="14.1%"
        beakerscr = "images/flaskS4new.png"
        ins.innerText="click on beaker S4 to place under whipping machine."
        f=212
    }
    else if(eflask==s4){
        eflask=s5
        solution=sol5
        powder=sample8
        powder1=sample9
        eflaskleft="84%"
        solutionleft="85.43%"
        timecounter=120000
        foam=foam5
        foamleft="85.34%"
        foamheight="13%"
        foambottom="7.5%"
        foambottom1="13.5%"
        beakerscr = "images/flaskS5new.png"
        ins.innerText="click on beaker S5 to place under whipping machine."
        f=212
    }
    else if(eflask==s5){
        // eflask=s6
        timecounter=0
        startbutton.style.visibility="visible"
        startbutton.innerText="Next"
        ins.innerText="Press 'Next' button"
        f=400
    }
}









