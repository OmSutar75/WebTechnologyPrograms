


let counter = 0;

const list = ["/images/first.jpg","/images/second.jpg","/images/third.jpg","/images/forth.png"];


function PreviousClick()
{

    let img = document.getElementById("image");
    counter = (counter-1)%4;
    if(counter < 0)
        counter = 0;
    img.src = list[counter];
}

function NextClick()
{
    let img = document.getElementById("image");
    counter = (counter+1)%4;
    img.src = list[counter];
    
}