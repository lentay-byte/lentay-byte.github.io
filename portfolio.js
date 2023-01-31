
//global variables for easter egg instuction 
boxhead = document.getElementById('box-head');
box = document.getElementById('box');


//functions for easter egg instructions

function enableBoxHead(){
    boxhead.innerHTML = "YES DO IT!";
}

function disableBoxHead(){
    boxhead.innerHTML = "NO COME BACK!!";
}

function triggerEasterEggs(){
    document.getElementById('box-head').innerHTML = "FIND THE EASTER EGGS";
    boxhead.removeEventListener('mouseout',disableBoxHead)
    boxhead.removeEventListener('mouseover', enableBoxHead)
    box.style.width = '40%';
    document.getElementById('egg-instructions').style.display = 'inline'
    enableEasterEggs();
}


// event listener for easter egg isructions 
boxhead.addEventListener('mouseover', enableBoxHead)
boxhead.addEventListener('mouseout', disableBoxHead);

//triggers easter egg game
boxhead.addEventListener('click', triggerEasterEggs);


//contains easter egg functions
function enableEasterEggs(){
        //First Easter egg 

    let changeName = document.getElementById('m-heading');

    function changeHeading (){
        changeName.innerHTML = "Y Pree!";
        changeName.style.color = 'lightgreen';
    }

    changeName.onclick = changeHeading;

    //Second Easter egg 

    let secondEastEgg = document.getElementById('sec-east');

    function changeSymbol(){
        secondEastEgg.innerHTML = '<>';
    }
    function undoSymbol(){
        secondEastEgg.innerHTML = 'HTML<>'
        secondEastEgg.style.color = 'green'
        
    }

    secondEastEgg.onmousedown = changeSymbol;
    secondEastEgg.onmouseup = undoSymbol;

    //third easter egg

    let thirdEastEgg = document.getElementById('aboutid');

    function shrink(){
        thirdEastEgg.style.width = '15%'
        thirdEastEgg.style.backgroundColor = 'lightgreen';
    }

    function cancelShrink(){
        thirdEastEgg.style.width = '72%';
    }

    thirdEastEgg.onmousedown = shrink;
    thirdEastEgg.onmouseup = cancelShrink;

    //fourth easter egg

    let fourthEastEgg = document.getElementById('proj-head')

    function scale (){
        fourthEastEgg.style.fontSize = '12em';
        fourthEastEgg.style.color = 'lightgreen';
    }

    function cancelScale(){
        fourthEastEgg.style.fontSize = '1.8em';
    }
        

    fourthEastEgg.onmousedown = scale;
    fourthEastEgg.onmouseup = cancelScale;

}


