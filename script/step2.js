
let msol = document.querySelector("#msolution")
let mcyl = document.querySelector("#mcylinder")
let ms =document.querySelector("#ms")
let dwater = document.querySelector("#distilled")
let dsol = document.querySelector("#dwatersol")

let step1 = document.querySelector("#step1")


let sol1 = document.querySelector("#sol1")
let sol2 = document.querySelector("#sol2")
let sol3 = document.querySelector("#sol3")
let sol4 = document.querySelector("#sol4")
let sol5 = document.querySelector("#sol5")



let beaker=1
let changeins = "Click on measuring cylinder to place this measured water into S1 labelled beaker."
let changeins2 = "Again click on distilled water bottle to measure 50mL of distilled water"
let dsoltest1="translate(-222%,-120%) rotate(-25deg)"
let dsoltest2="translate(-219%,-130%) rotate(-25deg)"
let msolheight="12%"
let dsolheight="20%"





















function diswater(){
    if(f==1){
        f=2
        dwater.style.transform="translate(-150%,-80%) rotate(-25deg)"
        dsol.style.transform=dsoltest1
        setTimeout(function(){
            ms.style.visibility="visible"
            setTimeout(function(){
                msol.style.height=msolheight
                dsol.style.height=dsolheight
                dsol.style.transform=dsoltest2
                setTimeout(function(){
                    dwater.style.transform="translate(0%,0%) rotate(0deg)"
                    dsol.style.transform="translate(0%,0%) rotate(0deg)"
                    ms.style.visibility="hidden"
                    f=3
                    ins.innerText=changeins
                },1000)
            },500)
        },1000)

    }
}


let mcylleft="40%"
let msolleft="41.1%"
let msolleft1="40%"
let msolleft2="39.3%"
let msleft="45.8%"
let solution=sol1

function measure(){
    if(f==3){
        f=4
        ms.style.left=msleft
        ms.style.height="61.5%"
        mcyl.style.bottom="48%"
        msol.style.bottom="49%"
        setTimeout(function(){
            mcyl.style.left=mcylleft
            msol.style.left=msolleft
            setTimeout(function(){
                mcyl.style.rotate="20deg"
                msol.style.rotate="20deg"
                msol.style.left=msolleft1
                msol.style.bottom="49.7%"
                setTimeout(function(){
                    ms.style.visibility="visible"
                    solution.style.height="10.3%"
                    msol.style.height="0%"
                    msol.style.left=msolleft2
                    msol.style.bottom="51%"
                    setTimeout(function(){
                        ms.style.visibility="hidden"
                        mcyl.style.left="8%"
                        mcyl.style.rotate="0deg"
                        msol.style.left="9.1%"
                        msol.style.rotate="0deg"
                        ms.style.height="31%"
                        setTimeout(function(){
                            mcyl.style.bottom="10%"
                            msol.style.bottom="11%"
                            ms.style.left="10.7%"
                            f=1
                            ins.innerText=changeins2
                            beakerverify()
                        },1000)
                    },1000)


                },1000)
            },1000)
        },1000)
    }
}

function beakerverify(){
    if(beaker==1){
        beaker=2
        dsolheight="18%"
        solution=sol2
        mcylleft="51%"
        msolleft="52.1%"
        msolleft1="51%"
        msolleft2="50.3%"
        msleft="56.8%"
        dsoltest1="translate(-219%,-130%) rotate(-25deg)"
        dsoltest2="translate(-218%,-145%) rotate(-25deg)"
        changeins = "Click on measuring cylinder to place this measured water into S2 labelled beaker."
    }
    else if(beaker==2){
        beaker=3
        dsolheight="16%"
        solution=sol3
        mcylleft="62%"
        msolleft="63.1%"
        msolleft1="62%"
        msolleft2="61.3%"
        msleft="67.8%"
        dsoltest1="translate(-218%,-145%) rotate(-25deg)"
        dsoltest2="translate(-215%,-163%) rotate(-25deg)"
        changeins = "Click on measuring cylinder to place this measured water into S3 labelled beaker."
    }
    else if(beaker==3){
        beaker=4
        dsolheight="14%"
        solution=sol4
        mcylleft="73%"
        msolleft="74.1%"
        msolleft1="73%"
        msolleft2="72.3%"
        msleft="78.8%"
        dsoltest1="translate(-215%,-163%) rotate(-25deg)"
        dsoltest2="translate(-210%,-188%) rotate(-25deg)"
        changeins = "Click on measuring cylinder to place this measured water into S4 labelled beaker."
    }
    else if(beaker==4){
        beaker=5
        dsolheight="13%"
        solution=sol5
        mcylleft="84%"
        msolleft="85.1%"
        msolleft1="84%"
        msolleft2="83.3%"
        msleft="89.8%"
        dsoltest1="translate(-210%,-188%) rotate(-25deg)"
        dsoltest2="translate(-210%,-203%) rotate(-25deg)"
        changeins = "Click on measuring cylinder to place this measured water into S5 labelled beaker."
    }
    else if(beaker==5){
        beaker=6
        f=10
        startbutton.style.visibility="visible"
        startbutton.innerText="Next"
        ins.innerText="Click on 'Next' button"
        solution=sol1
    }
}

