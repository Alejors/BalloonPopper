let ballonsMap = ['green', 'yellow', 'teal', 'purple', 
'pink', 'orange', 'black', 'white','red', 'turquoise',
'grey', 'lightblue', 'brown','green', 'yellow', 'teal', 
'purple', 'blue', 'black', 'turquoise'];
let reventados = 0;

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

window.onload = render();