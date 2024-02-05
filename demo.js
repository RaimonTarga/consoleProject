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

function processInput(text){
    if (waitingForInput){
        processCurrentExercise(text);
    }
    else  {
        switch (text){
            case "help":
                const helpMessage = "clear<br>Clears the console<br>help<br>Displays the help message";
                animateOutput(helpMessage, "green");
            break;
            case "clear":
                clearConsole();
            break;
            case "ejercicio 1":
                startExercise(1);
                animateOutput("Escribe una función que escriba “Hola” 3 veces.", "red");
                ejercicioUno();
                finishExercise();
            break;
            case "ejercicio 2":
                animateOutput("Escribe una función que escriba “Hola” tantas veces como el número que le pasamos de parámetro.", "red");
                startExercise(2);
            break;
            case "ejercicio 3":
                animateOutput("Escribe una función que devuelva el resultado de sumar los dos parámetros que le pasamos.", "red");
                startExercise(3);
            break;
            case "ejercicio 4":
                animateOutput("Escribe una función que devuelva el resultado de sumar los dos parámetros que le pasamos. Pide al usuario 2 números. Usa esos 2 números como parámetros de la función y después asigna el valor que devuelve la función a una tercera variable.", "red");
                startExercise(4);
            break;
            case "ejercicio 5":
                animateOutput("Escribe una función a la que le damos dos números y que devuelva true si el primer número es más grande que el segundo número y false en el caso contrario. Pide dos números al usuario, y pasalos a la función.", "red");
                startExercise(5);
            break;
            case "ejercicio 6":
                animateOutput("Escribe un programa que pida al usuario dos números. Usa esos 2 números en una función que divide el primero por el segundo y devuelve el resultado. Muestra el resultado que devuelve la función en un alert. Después vuelve a pedir los números y hacer todo otra vez hasta que el usuario introduzca un 0 como segundo número.", "red");
                startExercise(6);
            break;
            case "ejercicio 7":
                animateOutput("Diseña una función esPar() que reciba como parámetro un número y devuelva si ese número es par o no.", "red");
                startExercise(7);
            break;
            case "ejercicio 8":
                animateOutput("Crea una aplicación que nos calcule el factorial de un número pedido por teclado, lo realizará mediante una función al que le pasamos el número como parámetro. Para calcular el factorial, se multiplica los números anteriores hasta llegar a uno. Por ejemplo, si introducimos un 5, realizará esta operación 5*4*3*2*1=120.", "red");
                startExercise(8);
            break;
            case "ejercicio 9":
                animateOutput("Crea una aplicación que nos cuente el número de cifras de un número entero positivo (hay que confirmar que no haya introducido un número negativo y deberemos quitar los decimales) pedido por teclado. Crea un método que realice esta acción: pasando elnúmero por parámetro, devolverá el número de cifras.", "red");
                startExercise(9);
            break;
            case "ejercicio 10":
                animateOutput("Crea una aplicación que nos calcule el área de un <u>círculo, cuadrado o triángulo</u>. Pediremos de qué figura queremos calcular su área y según lo introducido pedirá los valores necesarios para calcular el área. Crea un método por cada figura para calcular cada área, este devolverá un número entero(sin decimales).","red");
                startExercise(10);
            break;
            case "ejercicio 11":
                animateOutput("Crea un aplicación que nos convierta una cantidad de euros introducida por teclado a otra moneda, estas pueden ser a <u>dólares, yenes o libras</u>. El método tendrá como parámetros, la cantidad de euros y la moneda a pasar que será una cadena, este no devolverá ningún valor, mostrará un mensaje indicando el cambio.","red");
                animateOutput("Sintaxis: <u>-valor en euros-</u> a <u>dollares/yenes/libras</u>","blue");
                startExercise(11);
            break;
            case "ejercicio 12":
                animateOutput("Escribe una función a la que le pasamos un año y devuelve true si es bisiesto. En el programa principal, pídele al usuario un número y muestra en pantalla “El año … es bisiesto” o “El año … no es bisiesto” y sigue pidiendo números y diciendo si es o no bisiesto hasta que introduzca un 0.","red");
                startExercise(12);
            break;
        }
    }
    //force scroll of consoleOutput to the bottom
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
}

function processCurrentExercise(input){
    switch (currentExercise){
        case 1:
            
        break;
        case 2:
            ejercicioDos(input);
            finishExercise();
        break;
        case 3:
            // two inputs
            if (savedInput.length < 2){
                savedInput.push(input);
            }
            if (savedInput.length == 2) {
                ejercicioTres(savedInput);
                finishExercise();
            }
        break;
        case 4:
            // two inputs
            if (savedInput.length < 2){
                savedInput.push(input);
            }
            if (savedInput.length == 2) {
                ejercicioCuatro(savedInput);
                finishExercise();
            }
        break;
        case 5:
            // two inputs
            if (savedInput.length < 2){
                savedInput.push(input);
            }
            if (savedInput.length == 2) {
                ejercicioCinco(savedInput);
                finishExercise();
            }
        break;
        case 6:
            // two inputs
            if (savedInput.length < 2){
                savedInput.push(input);
                //acabamos el ejercicio si el usuario entra 0
                if (Number(savedInput[0]) == 0){
                    finishExercise();
                }
            }
            if (savedInput.length == 2) {
                ejercicioSeis(savedInput);
                savedInput = [];
            }
        break;
        case 7:
            ejercicioSiete(input);
            finishExercise();
        break;
        case 8:
            if (Number(input) >= 0) ejercicioOcho(input);
            else animateOutput("Error: el numero no puede ser negativo","red");
            finishExercise();
        break;
        case 9:
            ejercicioNueve(input);
            finishExercise();
        break;
        case 10:
            if (savedInput.length == 0) savedInput.push(input);
            else {
                switch(savedInput[0]){
                    case "circulo":
                    case "cuadrado":
                        if (savedInput.length < 2){
                            savedInput.push(input);
                        }
                        if (savedInput.length == 2) {
                            animateOutput("calculating " + savedInput[0] + " " + savedInput[1],"blue");
                            ejercicioDiez(savedInput);
                            finishExercise();
                        }
                    break;
                    case "triangulo":
                        if (savedInput.length < 3){
                            savedInput.push(input);
                        }
                        if (savedInput.length == 3) {
                            animateOutput("calculating " + savedInput[0] + " " + savedInput[1] + " "+ savedInput[2],"blue");
                            ejercicioDiez(savedInput);
                            finishExercise();
                        }
                    break;
                    default:
                        animateOutput("Error: input no valido","red");
                        savedInput = [];
                }
            }
            
        break;
        case 11:
            ejercicioOnce(input);
            finishExercise();
        break;
        case 12:
            
            if (Number(input) == 0 ) finishExercise();
            else ejercicioDoce(input);
        break;
    }
}

/* sample multiple inputs 
            if (savedInput.length < 2){
                savedInput.push(input);
                animateOutput("Got your input #" + savedInput.length + ", value is " + input, "green");
            }
            if (savedInput.length == 2) {
                animateOutput("We have 2 inputs, first one is " + savedInput[0] + ", second one is " + savedInput[1], "green");
                finishExercise();
            }

*/

function startExercise(exerciseNumber){
    waitingForInput = true;
    currentExercise = exerciseNumber;
}

function finishExercise(){
    waitingForInput = false;
    savedInput = [];
    let exerciseTabs = document.getElementsByClassName("tab-element");
    for (let i = 0; i < exerciseTabs.length; i++) {
        exerciseTabs[i].className = exerciseTabs[i].className.replace(" selected", "");
    }
}

function clearConsole(){
    while (consoleOutput.firstChild) consoleOutput.removeChild(consoleOutput.lastChild);
}

function selectExerciseByClick(evt, exercise) {
    finishExercise();
    evt.currentTarget.className += " selected";
    processInput(exercise);
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
        //might be extremely evil, don't do this at home, kids
        consoleOutput.scrollTop = consoleOutput.scrollHeight;
        setTimeout(function() { typingAnimation(partialText, text, node); }, 10);
    }
}

/* EJERCICIOS FUNCIONES */

function ejercicioUno(){
    for (let i = 0; i < 3; i++){
        decirHola();
    }
}

function decirHola(){
    animateOutput("Hola","green");
}

function ejercicioDos(input){
    const numeroVeces = Number(input);
    for (let i = 0; i < numeroVeces; i++){
        decirHola();
    }
}

function ejercicioTres(input){
    const suma = Number(input[0]) + Number(input[1]);
    animateOutput("La suma de " + input[0] + " y " + input[1] + " es " + suma, "green");
}
function ejercicioCuatro(input){
    const valorUno = Number(input[0]);
    const valorDos = Number(input[1]);
    const suma = suma(valorUno,valorDos);
    animateOutput("La suma de " + valorUno + " y " + valorDos + " es " + suma, "green");
}

function suma(valorUno, valorDos){
    return (valorUno+valorDos);
}

function ejercicioCinco(input){
    const valorUno = Number(input[0]);
    const valorDos = Number(input[1]);
    if (esMasGrande(valorUno,valorDos)){
        animateOutput("El primer número es más grande","green");
    }
    else {
        animateOutput("El primer número no es más grande","green");
    }
}

function esMasGrande(valorUno, valorDos){
    return (valorUno > valorDos);
}

function ejercicioSeis(input){
    const valorUno = Number(input[0]);
    const valorDos = Number(input[1]);
    animateOutput("La division de " + valorUno + " entre " + valorDos + " es " + divide(valorUno, valorDos), "green");
}

function divide(valorUno, valorDos){
    return (valorUno / valorDos);
}

function ejercicioSiete(input){
    if (esPar) animateOutput("El número es par");
    else animateOutput("El número es impar");
}

function esPar(valor){
    return (valor % 2 == 0);
}

function ejercicioOcho(input){
    const valor = Number(input);
    animateOutput("El factorial de " + valor + " es " + factorial(valor), "green");
}

function factorial(valor){
    if (valor == 1) return valor;
    else return (valor * factorial(valor-1));
}

function ejercicioNueve(input){
    const valor = Math.trunc(Number(input));
    animateOutput("El numero de cifras de " + valor + " es " + numeroCifras(valor), "green");
}

function numeroCifras(valor){
    if (valor == 0) return 0;
    else return 1 + numeroCifras((valor/10));
}

function ejercicioDiez(input){
    switch(input[0]){
        case "circulo":
            let radio = Number(input[1]);
            animateOutput("La area del circulo es " + areaCirculo(radio), "green");
        break;
        case "triangulo":
            let base = Number(input[1]);
            let altura = Number(input[2]);
            animateOutput("La area del triangulo es " + areaTriangulo(base, altura), "green");
        break;
        case "cuadrado":
            let lado = Number(input[1]);
            animateOutput("La area del cuadrado es " + areaCuadrado(lado), "green");
        break;
    }
}

function areaCirculo(valor){
    return Math.trunc(valor*valor * Math.PI)
}

function areaTriangulo(base, altura){
    return Math.trunc((base * altura)/2);
}

function areaCuadrado(valor){
    return Math.trunc(valor * valor);
}

function ejercicioOnce(input){
    const valores = input.split(" ");
    let euros = Number(valores[0]);
    switch(valores[2]){
        case "libras":
            animateOutput(euros + " euros son " + eurosALibras(euros) + " libras", "green");
        break;
        case "dollares":
            animateOutput(euros + " euros son " + eurosADollares(euros) + " dollares", "green");
        break;
        case "yenes":
            animateOutput(euros + " euros son " + eurosAYenes(euros) + " yenes", "green");
        break;
        default:
            animateOutput("Error: El valor no es valido", "red");
    }
}

function eurosALibras(euros){
    return euros * 0.86;
}

function eurosADollares(euros){
    return euros * 1.28611;
}

function eurosAYenes(euros){
    return euros * 129.852;
}

function ejercicioDoce(input){
    if (esBisiesto(Number(input))) animateOutput("El año " + input + " es bisiesto", "green");
    else animateOutput("El año " + input + " no es bisiesto", "green");
}

function esBisiesto(ano){
    return (((ano % 4 == 0) && !(ano % 100 == 0)) || (ano % 400 == 0));
}
