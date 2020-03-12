var saB = document.querySelector(".saB");
var suB = document.querySelector(".suB");
var fuB = document.querySelector(".fuB");

var clearB=document.createElement("div");


var close = document.querySelector(".close")
var cos="cos",sin="sin";

const resize = () => {
    canvas.width=window.innerWidth
    canvas.height=window.innerHeight
}

resize()
window.addEventListener('resize',resize)


saB.addEventListener("click", () => {
    
    anim(drawSat);
    designChosen("saB")
})

suB.addEventListener("click", () => {
    anim(drawSun);
    designChosen("suB")
})

fuB.addEventListener("click", () => {
    anim(drawFull);
    designChosen("fuB")
})




clearB.addEventListener("click", () => {
    window.location.reload()
})
close.addEventListener("click",() => {
    document.querySelector(".perlinSelector").style.display="none"
})


function designChosen(elem){

    var target=document.querySelector("."+elem);
    var choice=document.querySelector(".choice");
    var choiceActive=document.querySelector(".choiceActive");


    target.classList.add("chosen")
    clearB.classList.add("buttonC");
    clearB.classList.add("clearB");
    choice.style.display="none";
    choiceActive.style.display="block";
    clearB.innerHTML="  clear ";
    choiceActive.appendChild(target);
    choiceActive.appendChild(clearB);
    close.style.visibility="visible"

}
