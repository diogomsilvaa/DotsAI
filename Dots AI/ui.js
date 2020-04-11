const ui = document.createElement("div");
ui.style.position = "absolute";
ui.style.left = "800px";
ui.style.background = "black";
ui.style.width = "500px";
ui.style.height = "700px"
ui.style.border = "green solid 10px";
ui.style.color = "green";
ui.style.fontFamily = "Arial Black, Gadget, sans-serif";
document.body.appendChild(ui);


//----------------------
const generationText = document.createElement("p");
generationText.innerHTML = "Generation: 0";
ui.appendChild(generationText);
function UI_updateGen(gen){
    generationText.innerHTML = "Generation: " + gen;
}

//----------------------
function UI_start(){
    running = true;
    starting =true;
}

const buttonStart = document.createElement("button");
buttonStart.type = "button";
buttonStart.style.backgroundColor = "green";
buttonStart.style.fontSize = "20px";
buttonStart.innerHTML = "Start Evolution";
buttonStart.onclick = UI_start;
ui.appendChild(buttonStart);
ui.appendChild(document.createElement("p"));



//----------------------
function UI_stop(){
    running = false;
}
const buttonStop = document.createElement("button");
buttonStop.type = "button";
buttonStop.style.backgroundColor = "green";
buttonStop.style.fontSize = "20px";
buttonStop.innerHTML = "Stop Evolution";
buttonStop.onclick = UI_stop;
ui.appendChild(buttonStop);
ui.appendChild(document.createElement("p"));
//----------------------------
ui.appendChild(document.createElement("p")).innerHTML = "Generation Size:";

const popSizeInput = document.createElement("input");
popSizeInput.type = "number";
popSizeInput.value = 1000;
ui.appendChild(popSizeInput);

function UI_popSize(){
    return popSizeInput.value;
}


