let btn = document.querySelector('button');

function getRandomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb( ${red},${green},${blue})`;

    return color;
}

btn.addEventListener('click',function(){
    let h3 = document.querySelector('h3');
    let randColor = getRandomColor();

    h3.innerText = randColor;

    let div = document.querySelector('div');
    div.style.backgroundColor = randColor;
    
    console.log("Color updated");
})