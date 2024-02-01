const consoleOutput = document.getElementById("consoleOutput");
const consoleInput = document.getElementById("consoleInput");
const submitButton = document.getElementById("submitButton");
let waitingForInput = false;
let currentExercise;
let savedInput = []; 

consoleInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      submitButton.click();
    }
});


function sendInput(){
    const input = consoleInput.value;
    sendOutput(input);
    consoleInput.value = "";
    processInput(input);
}

function sendOutput(text, fontColor){
    const node = document.createElement("div");
    const textnode = text;
    
    node.className = "console-element"
    if (fontColor != undefined) node.style = "color:"+fontColor;

    node.append(textnode);
    consoleOutput.appendChild(node);
}

function animateOutput(text, fontColor){
    const node = document.createElement("div");
    const textnode = "";
    
    node.className = "console-element"
    if (fontColor != undefined) node.style = "color:"+fontColor;

    node.append(textnode);
    consoleOutput.appendChild(node);
    let partialText = "";
    typingAnimation(partialText, text, node);
}

function typingAnimation(partialText, text, node){
    if (partialText.length < text.length){
        partialText += text.charAt(partialText.length);
        node.innerHTML = partialText;
        setTimeout(function() { typingAnimation(partialText, text, node); }, 10);
    }
}

function processInput(text){
    if (waitingForInput){
        processCurrentExercise(text);
    }
    else  {
        switch (text){
            case "help":
                const helpMessage = "This is the help message";
                animateOutput(helpMessage, "green");
            break;
            case "clear":
                clearConsole();
            break;
            case "ejercicio 1":
                animateOutput("You'll give me an input, right?", "red");
                currentExercise = 1;
                waitingForInput = true;
            break;
            case "ejercicio 2":
                animateOutput("I need several inputs", "green");
                currentExercise = 2;
                waitingForInput = true;
            break;
        }
    }
    
}

function processCurrentExercise(input){
    switch (currentExercise){
        case 1:
            animateOutput("This is working as intended, your input is " + input, "green");
            waitingForInput = false;
        break;
        case 2:
            if (savedInput.length < 2){
                savedInput.push(input);
                animateOutput("Got your input #" + savedInput.length + ", value is " + input, "green");
            }
            if (savedInput.length == 2) {
                animateOutput("We have 2 inputs, first one is " + savedInput[0] + ", second one is " + savedInput[1], "green");
                waitingForInput = false;
                savedInput = [];
            }
        break;
    }
}

function clearConsole(){
    while (consoleOutput.firstChild) consoleOutput.removeChild(consoleOutput.lastChild);
}

function selectExerciseByClick(evt, exercise) {
    let exerciseTabs = document.getElementsByClassName("tab-element");
    for (let i = 0; i < exerciseTabs.length; i++) {
        exerciseTabs[i].className = exerciseTabs[i].className.replace(" selected", "");
    } 
    let test = evt.currentTarget.toString();
    animateOutput(test);
    //evt.currentTarget.firstElementChild.className += " selected";
    processInput(exercise);
}