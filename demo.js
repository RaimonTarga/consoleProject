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
                animateOutput("Crea una aplicación que nos cuente el número de cifras de un número entero positivo (hay que confirmar que no haya introducido un número negativo y deberemos quitar los decimales) pedido por teclado. Crea un método que realice esta acción: pasando el número por parámetro, devolverá el número de cifras.", "red");
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
            case "ejercicio 13":
                animateOutput("Escribe un programa que pregunte al usuario su edad. Mostrar en pantalla “Feliz cumpleaños” repetido tantas veces como años tenga.","red");
                startExercise(13);
            break;
            case "ejercicio 14":
                animateOutput("Crear un programa que muestre el valor de sumar todos los números desde 1 hasta el número que introduzca el usuario.","red");
                startExercise(14);
            break;
            case "ejercicio 15":
                animateOutput("Mostrar en pantalla los números del 10 al 20 (incluidos los dos) con una línea vacía entre ellos.","red");
                startExercise(15);
                ejercicioQuinze();
                finishExercise();
            break;
            case "ejercicio 16":
                animateOutput("Escribe un programa que pida 10 valores. Al final mostrar la media de esos valores.","red");
                startExercise(16);
            break;
            case "ejercicio 17":
                animateOutput("Escribe un programa que muestre el resultado de sumar todos los números del 1 hasta el número introducido y que vuelva a pedirle al usuario otro número hasta que el usuario introduzca un 0.","red");
                startExercise(17);
            break;
            case "ejercicio 18":
                animateOutput("Un número factorial es el resultado de multiplicar todos los números de 1 a ese mismo número (por ejemplo el factorial de 4 es 1 x 2 x 3 x 4 = 24). Haz un programa que muestre los números del 1 al 10 en una columna con el resultado de su factorial en la columna de al lado.","red");
                startExercise(18);
                ejercicioDieciocho();
                finishExercise();
            break;
            case "ejercicio 19":
                animateOutput("Escribe un programa que pida valores. Si introduce un valor negativo, mostrar un mensaje diciendo que se ignoran los valores negativos.Seguir pidiendo hasta que el usuario introduzca un 0, entonces mostrar la suma de los valores introducidos.","red");
                startExercise(19);
            break;
            case "ejercicio 20":
                animateOutput("Escribe un programa que muestre todos los valores pares o impares entre 1 y 100 dependiendo de si el usuario introduce P o I . Si introduce otra cosa, decir que ese valor no es correcto y pedirle otra vez.","red");
                startExercise(20);
            break;
            case "ejercicio 21":
                animateOutput("Escribe un programa que muestre los números de 1 a 12 en una columna. En la columna de al lado de los números impares mostrar el cuadrado de ese valor y en la de los pares mostrar el cubo.","red");
                startExercise(21);
                ejercicioVeintiuno();
                finishExercise();
            break;
            case "ejercicio 22":
                animateOutput("Realiza un programa que muestre por pantalla los números del 1 al 100 sin mostrar aquellos números múltiplos de 5.","red");
                startExercise(22);
                ejercicioVeintidos();
                finishExercise();
            break;
            case "ejercicio 23":
                animateOutput("Escribe un programa que muestre el número entero positivo que el usuario introduzca pero al revés (si introduce 1478 que muestre 8741), hasta que el usuario introduzca 0. Si introduce 0 la primera vez, debería mostrarlo al revés (es decir, mostrar 0) y acabar el programa.","red");
                startExercise(23);
            break;
            case "ejercicio 24":
                animateOutput("Escribe un programa que pida un número de 3 dígitos y muestre el resultado de sumar sus dígitos.","red");
                startExercise(24);
            break;
            case "ejercicio 25":
                animateOutput("Se desea conocer el lucky number (número de la suerte) de cualquier persona. El número de la suerte se consigue reduciendo la fecha de nacimiento a un número de un solo dígito.","red");
                animateOutput("Sintaxis: <u>dd-mm-yyyy</u>","blue");
                startExercise(25);
            break;
            case "ejercicio 26":
                animateOutput("14. Pedir al usuario un número. Mostrar en pantalla el dibujo con tantas líneas como las que haya introducido","red");
                startExercise(26);
            break;
            case "ejercicio 27":
                animateOutput("Escribe un programa el cual analizará si la contraseña introducida es correcta o no. Para que la contraseña sea correcta deberá cumplir estas directivas:<br>● Debe tener 8 caracteres como mínimo.<br>● La contraseña deberá contener números.<br>● La primera letra tiene que ser en mayúsculas.","red");
                startExercise(27);
            break;
            case "ejercicio 28":
                animateOutput("Escribe un programa que te indique la fecha del día siguiente a la que el usuario haya introducido por teclado. Habrá que verificar que la fecha introducida es correcta.","red");
                animateOutput("Sintaxis: <u>MM/DD/YYYY</u>","blue");
                startExercise(28);
            break;
            case "ejercicio 29":
                animateOutput("Mostrar en pantalla una pirámide hecha con un símbolo. El usuario introduce el símbolo que se usa y un valor que indica la altura en líneas de la pirámide.","red");
                animateOutput("Sintaxis: <u>-simbolo-</u><u>-numero</u> (ejemplo: #7)","blue");
                startExercise(29);
            break;
        }
    }
    //force scroll of consoleOutput to the bottom
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
}

function processCurrentExercise(input){
    switch (currentExercise){
        case 1:
            //no input
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
                        //two inputs
                        if (savedInput.length < 2){
                            savedInput.push(input);
                        }
                        if (savedInput.length == 2) {
                            ejercicioDiez(savedInput);
                            finishExercise();
                        }
                    break;
                    case "triangulo":
                        //three inputs
                        if (savedInput.length < 3){
                            savedInput.push(input);
                        }
                        if (savedInput.length == 3) {
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
            if (Number(input) == 0) finishExercise();
            else ejercicioDoce(input);
        break;
        case 13:
            if (!isNaN(input)) ejercicioTrece(input);
            else animateOutput("Error: el numero no es valido","red");
            finishExercise();
        break;
        case 14:
            if (!isNaN(input)) ejercicioCatorze(input);
            else animateOutput("Error: el numero no es valido","red");
            finishExercise();
        break;
        case 15:
            //no input
        break;
        case 16:
            //10 inputs
            if (savedInput.length < 10 && !isNaN(input)){
                savedInput.push(input);
            }
            else animateOutput("Error: el numero no es valido","red");
            if (savedInput.length == 10) {
                ejercicioDieciseis(savedInput);
                finishExercise();
            }
        break;
        case 17:
            if (!isNaN(input)){
                if (input == 0) finishExercise();
                else ejercicioDiecisiete(input);
            } 
            else animateOutput("Error: el numero no es valido","red");
        break;
        case 18:
            //no input
        break;
        case 19:
            if (Number(input) >= 0){
                if (Number(input) == 0){
                    ejercicioDiezinueve(savedInput);
                    finishExercise();
                }
                else savedInput.push(input);
            } 
            else animateOutput("Error: el numero no puede ser negativo","red");
            
        break;
        case 20:
            if (input == "P" || input == "I") {
                ejercicioVeinte(input);
                finishExercise();
            }
            else animateOutput("Error: el input debe ser P o I","red");
        break;
        case 21:
            //no input
        break;
        case 22:
            //no input
        break;
        case 23:
            if (Number(input) >= 0){
                ejercicioVeintitres(input);
                if (Number(input) == 0) finishExercise();
            } 
            else animateOutput("Error: el numero no puede ser negativo","red");
        break;
        case 24:
            if (input.length == 3 && !isNaN(input)){
                ejercicioVeinticuatro(input);
            }
            else animateOutput("Error: el numero no es valido","red");
            finishExercise();
        break;
        case 25:
            if (input.split("-").length == 3){
                ejercicioVeinticinco(input);
            }
            else animateOutput("Error: la fecha no es valida","red");
            finishExercise();
        break;
        case 26:
            if (!isNaN(input)){
                ejercicioVeintiseis(input)
            }
            else animateOutput("Error: el numero no es valido","red");
            finishExercise();
        break;
        case 27:
            ejercicioVentisiete(input);
            finishExercise();
        break;
        case 28:
            ejercicioVeintiocho(input);
            finishExercise();
        break;
        case 29:
            ejercicioVeintinueve(input);
            finishExercise();
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

function selectExerciseByClick(evt, exercise){
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
    const valorSuma = Number(input[0]) + Number(input[1]);
    animateOutput("La suma de " + input[0] + " y " + input[1] + " es " + valorSuma, "green");
}
function ejercicioCuatro(input){
    const valorUno = Number(input[0]);
    const valorDos = Number(input[1]);
    const valorSuma = suma(valorUno,valorDos);
    animateOutput("La suma de " + valorUno + " y " + valorDos + " es " + valorSuma, "green");
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
    else return 1 + numeroCifras(Math.floor(valor/10));
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

function esBisiesto(year){
    return (((year % 4 == 0) && !(year % 100 == 0)) || (year % 400 == 0));
}

/* Ejercicios bucles optativos */

function ejercicioTrece(input){
    const numeroVeces = Number(input);
    for (let i = 0; i < numeroVeces; i++){
        animateOutput("Feliz cumpleaños" , "green");
    }
}

function ejercicioCatorze(input){
    const numero = Number(input);
    let sum = numero;
    for(let i = numero-1; i > 0; i--){
        sum += i;
    }
    animateOutput("La suma de los numeros es " + sum , "green");
}

function ejercicioQuinze(){
    let output = "";
    for (let i = 10; i <= 20; i++){
        output = output.concat(i + " ");
    }
    animateOutput(output,"green");
}

function ejercicioDieciseis(input){
    let media = 0;
    for (let i = 0; i < input.length; i++){
        media += Number(input[i]);
    }
    media /= input.length;
    animateOutput("La media de los numeros es " + media,"green");
}

function ejercicioDiecisiete(input){
    const numero = Number(input);
    let sumaValores = numero;
    for (let i = 1; i < numero; i++){
        sumaValores += i;
    }
    animateOutput("La suma de los numeros es " + sumaValores,"green");
}

function ejercicioDieciocho(){
    let output = "";
    for (let i = 1; i <= 10; i++){
        let valorFactorial = i;
        for (let j = 1; j < i; j++){
            valorFactorial *= j; 
        }
        output = output.concat(i + ": factorial :" + valorFactorial + "<br>")
    }
    animateOutput(output,"green");
}

function ejercicioDiezinueve(input){
    let sumaValores = 0;
    for (let i = 0; i < input.length; i++){
        sumaValores += Number(input[i]);
    }
    animateOutput("La suma de los numeros es " + sumaValores,"green");
}

function ejercicioVeinte(input){
    let output = "";
    const pares = (input == "P");
    for (let i = 1; i <= 100; i++){
        if (i % 2 == 0 && pares){
            output = output.concat(i + " ")
        }
        if (i % 2 == 1 && !pares){
            output = output.concat(i + " ")
        }
    }
    animateOutput(output,"green");
}

function ejercicioVeintiuno(){
    let output = "";
    for (let i = 1; i <= 12; i++){
        let valor = i;
        if (i % 2 == 0) valor *= valor*valor;
        else valor *= valor;
        output = output.concat(i + ": " + valor + "<br>")
    }
    animateOutput(output,"green");
}

function ejercicioVeintidos(){
    let output = "";
    for (let i = 1; i <= 100; i++){
        if (i % 5 != 0) output = output.concat(i + " ");
    }
    animateOutput(output,"green");
}

function ejercicioVeintitres(input){
    let output = "";
    for (let i = input.length-1; i >= 0 ; i--){
        output = output.concat(input.charAt(i));
    }
    animateOutput(output,"green");
}

function ejercicioVeinticuatro(input){
    let sumaValores = 0;
    for (let i = 0; i < input.length; i++){
        sumaValores += Number(input.charAt(i));
    }
    animateOutput("La suma de los numeros es " + sumaValores,"green");
}

function ejercicioVeinticinco(input){
    let partes = input.split("-");
    let sumaValores = 0;
    //first sum
    for (let i = 0; i < partes.length; i++){
        let numeroParte = Number(partes[i]);
        while (numeroParte > 0){
            sumaValores += numeroParte%10;
            numeroParte = Math.floor(numeroParte/10);
        }
    }
    //sum until we only have one digit left
    while(sumaValores > 10){
        let valor = 0;
        while (sumaValores > 0){
            valor += sumaValores%10;
            sumaValores = Math.floor(sumaValores/10);
        }
        sumaValores = valor;
    }
    animateOutput("Tu numero de la suerte es " + sumaValores , "green");
}

function ejercicioVeintiseis(input){
    let numero = Number(input);
    let output = "";
    for (let i = 1; i <= numero; i++){
        for (let j = 0; j < i; j++){
            output = output.concat("*");
        }
        output = output.concat("<br>");
    }
    animateOutput(output, "green");
}

function ejercicioVentisiete(input){
    let tieneNumero = false;
    let tieneMayuscula = false;
    if (input.length >= 8){
        for (let i = 0; i < input.length; i++){
            let letra = input.charAt(i);
            if (letra >= 'A' && letra <= 'Z') tieneMayuscula = true;
            if (letra >= '0' && letra <= '9') tieneNumero = true;
        }
        if (!tieneNumero) animateOutput("Error: la contraseña no tiene numeros","red");
        if (!tieneMayuscula) animateOutput("Error: la contraseña no tiene mayusculas","red");
        if (tieneNumero && tieneMayuscula) animateOutput("la contraseña cumple los requisitos","green");
    }
    else animateOutput("Error: la contraseña es demasiado corta","red");
}

function ejercicioVeintiocho(input){
    let fecha = new Date(input);
    if (!isNaN(fecha)){
        fecha.setDate(fecha.getDate() + 1);
        animateOutput("La fecha del dia siguiente es:<br>" + fecha , "green");
    }
    else {
        animateOutput("Error: La fecha no es valida","red");
    }
}

function ejercicioVeintinueve(input){
    if (input.length == 2){
        const simbolo = input[0];
        const numero = Number(input[1]);
        let output = "";
        for (let i = 1; i < numero*2; i+=2){
            for (let j = i; j > 0; j--){
                output = output.concat(" ");
            }
            for (let k = i + 1; k < (i*2 + 1); k++){
                output = output.concat(simbolo);
            }
            output = output.concat(i + "<br>");
        }
        animateOutput(output,"green");
        //evil hack to make the output figure display properly (don't do this at home)
        consoleOutput.lastChild.style = "text-justify: none; text-align:center;";
    }
    else {
        animateOutput("Error: El valor de entrada no es valido","red");
    }
}