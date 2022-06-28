let colors = ['green', 'yellow', 'teal', 'purple', 
'pink', 'orange', 'black', 'white','red', 'turquoise',
'grey', 'lightblue', 'brown','blue'];

var ballonsMap = [];
let amount = window.prompt("How many baloons?");
parseInt(amount);

let reventados = 0;

let boton = document.getElementById("number");
boton.addEventListener('change', (e) => {
    setgame(boton.value);
    boton.value = "";
    render();
})

const popBalloon = (position) => {

    ballonsMap[position] = null;
    reventados++;
    render();
}

const render = () => {
    
    const ballons = ballonsMap.map((color, position) => {
        if(color !== null){
        return `<div class="balloon active" onClick="popBalloon(${position})" style="background:${color}"></div>`; // <--- render each balloon
        }
        else {
            return `<div class="balloon popped" style="background:${color}"></div>`;
        }  
    });
    let activeBalloons = ballons.length - reventados;
    document.querySelector("#balloon-count").innerHTML = activeBalloons; // <-- render the balloon count into the DOM
    document.querySelector("#balloon-map").innerHTML = ballons.join(''); // <-- render the balloons into the DOM
    if(activeBalloons == 0) window.location.reload();
}

const setgame = (num) => {
    for(let i = 0; i < num; i++){
        let index = Math.floor(Math.random() * 14);
        ballonsMap.push(colors[index]);
    }
}
window.onload =
setgame(amount);
render();