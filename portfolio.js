eggHeading = document.getElementById('egg-head');

function enableEggHead(){
    eggHeading.innerHTML = "YES DO IT!";
}
function disableEggHead(){
    eggHeading.innerHTML = "NO COME BACK!!";
}

eggHeading.addEventListener('mouseover', enableEggHead)
eggHeading.addEventListener('mouseout', disableEggHead);



function triggerEasterEggs(){
    document.getElementById('egg-head').innerHTML = "Lets play a game :)";
    eggHeading.removeEventListener('mouseout',disableEggHead)
    eggHeading.removeEventListener('mouseover', enableEggHead)

}

eggHeading.onclick = triggerEasterEggs;



//about.addEventListener('mousedown', change);