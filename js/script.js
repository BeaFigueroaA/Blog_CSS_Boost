// CONSTANTES MODAL
const modal = document.getElementById("modal");
const tituloModal = document.getElementById("tituloModal");
const ejercicioModal = document.getElementById("ejercicioModal");
const respuesta = document.getElementById("respuesta");
const btnVerificar = document.getElementById("verificar");
const mensaje = document.getElementById("mensaje");
const btnCerrar = document.getElementById("cerrar");

//CONSTANTES A CADA BOTON
//CONDICIONALES
const btnParImpar = document.getElementById("btnParImpar");
const btnMayorEdad = document.getElementById("btnMayorEdad");
const btnNota = document.getElementById("btnNota");
const btnClasificador = document.getElementById("btnClasificador");

//CICLOS
const btnTabla = document.getElementById("btnTabla");
const btnTContar = document.getElementById("btnTContar");
const btnNperfecto = document.getElementById("btnNperfecto");
const btnCadena = document.getElementById("btnCadena");


let funcionEjercicioActual = null;

//EVENTOS CONDICIONALES
btnParImpar.addEventListener("click", function(){
    abrirModal("Número Par o Impar", "Ingresa un número para verificar si es par o impar", verificarParImpar);
});

btnMayorEdad.addEventListener("click", function(){
    abrirModal("Mayor de edad", "Ingresa un número para verificar si eres MAYOR de edad.", VerifEdad);
});

btnNota.addEventListener("click", function(){
    abrirModal("Notas - Aprobado / Reprobado", "Ingresa una NOTA para verificar.", verificarNota);
});

btnClasificador.addEventListener("click", function(){
    abrirModal("Clasificador de edad.", "Ingresa una EDAD para verificar a qué grupo perteneces.", verificarClasificador);
});

//EVENTOS CICLOS

btnTabla.addEventListener("click", function(){
    abrirModal("Generador de tabla.", "Ingresa un NUMERO, generar tabla (10).", generarTabla);
});

btnTContar.addEventListener("click", function(){
    abrirModal("Contar hasta el número.", "Ingresa NUMERO < 20, contar hasta número.", contarNumeros);
});

btnNperfecto.addEventListener("click", function(){
    abrirModal("Verificar si el número es Perfecto.", "Ingresa NUMERO, para verificar si es PERFECTO.", verificarPerfecto);
});

btnDescendente.addEventListener("click", function(){
    abrirModal("Generador de tabla descendente", "Ingresa un NUMERO, generar tabla (10) descendente.", descendente);
});

btnCerrar.addEventListener("click", function(){
    abrirModal("Cerrar", "", Cerrar);
});

//MODAL
function abrirModal(titulo, descripcion, funcionEjercicio){
    tituloModal.textContent = titulo;
    ejercicioModal.textContent = descripcion;
    respuesta.value = "";
    mensaje.textContent = "";
     funcionEjercicioActual = funcionEjercicio;
    modal.classList.add("activarModal");
}

// FUNCONES
// CONDICIONALES

//FUNCION SECCION 1
function verificarParImpar(){
    let numero = parseInt(respuesta.value);
    if(isNaN(numero)){
        mensaje.textContent = "Ingresa un número válido.";
    }
    else{
        mensaje.textContent = (numero % 2 === 0) ? "Es un número PAR" : "Es un número IMPAR";
    }
}
//FUNCION SECCION 2
function VerifEdad (){
    let numero = parseInt(respuesta.value);

    if(isNaN(numero)){
        mensaje.textContent = "Ingresa una nota válida.";
    }
    else if (numero >= 18) {
        mensaje.textContent ="MAYOR de edad..";
    }
    else if (numero < 18) {
        mensaje.textContent ="MENOR de edad.";
    }
}

//FUNCION SECCION 3
function verificarNota(){
    let numero = parseInt(respuesta.value);
    if(isNaN(numero)){
        mensaje.textContent = "Ingresa una nota válida.";
    }
    else if (numero >= 61) {
        mensaje.textContent ="APROBADO.";
    }
    else if (numero < 61) {
        mensaje.textContent ="REPROBADO.";
    }
}

//FUNCION SECCION 4
function verificarClasificador(){
    let numero = parseInt(respuesta.value);
    if(isNaN(numero)){
        mensaje.textContent = "Ingresa una edad válida.";
    }
    else if (numero < 13) {
        mensaje.textContent ="Grupo de edad correspondiente: NIÑO";
    }
    else if (numero < 20) {
        mensaje.textContent ="Grupo de edad correspondiente: ADOLESCENTE";
    }
    else if (numero < 65) {
        mensaje.textContent ="Grupo de edad correspondiente: ADULTO";
    }
    else {
        mensaje.textContent ="Grupo de edad correspondiente: ANCIANO";
    }
}

// CICLOS
function generarTabla(){
    let numero = parseInt(respuesta.value);
    let multi = parseInt(respuesta.value);
    let numerosTabla = [];

    if(isNaN(numero)){
        mensaje.textContent = "Ingresa una edad válida.";
    }

    console.log("Tabla del " + numero + ":");
    for (let i = 1; i <= 10; i++) {
        multi=i * numero
        console.log(i + " x " + numero + " = " + (multi));

        numerosTabla.push(multi); // Almacenar en el array
    }
    console.log(numerosTabla);
    alert("El resutado de los multiplos del numero: "+ numero+ " son: " + numerosTabla);
}

function contarNumeros (){
    let numero = parseInt(respuesta.value);
    let conteo = [];

    if(isNaN(numero)){
        mensaje.textContent = "Ingresa una edad válida.";
    }

    for (let i = 1; i <= numero; i++) {
        console.log(i);
        conteo.push(i);
    }
    console.log(conteo);
    alert("El resutado del conteo de numeros es: "+ conteo);

}

function verificarPerfecto (){
    let numero = parseInt(respuesta.value);
    let perfecto=[];

    if(isNaN(numero)){
        mensaje.textContent = "Ingresa una edad válida.";
    }
    else if (numero == 6) {
        mensaje.textContent ="Es un número perfecto.";
    }
    else if (numero == 28) {
        mensaje.textContent ="Es un número perfecto.";
    }
    else if (numero == 496) {
        mensaje.textContent ="Es un número perfecto.";
    }
    else if (numero == 8128) {
        mensaje.textContent ="Es un número perfecto.";
    }
    else{
        mensaje.textContent ="No es un número perfecto."; 
    }


    for (let numero = 1; numero <= 1000; numero++) {
        let sumaDivisores = 0;
        
        for (let i = 1; i < numero; i++) {
            if (numero % i === 0) {
                sumaDivisores += i;
            }
        }
        
        if (sumaDivisores === numero) {
            console.log(numero + " es un número perfecto.");
            perfecto.push(numero);
            alert("Estos son los numeros perfectos: "+ perfecto);
        }
    }

    //alert("verificarPerfecto");
    //console.log(perfecto);
}

 function descendente(){
    let numero = parseInt(respuesta.value);
    let multi = parseInt(respuesta.value);
    let numerosDes = [];

    if(isNaN(numero)){
        mensaje.textContent = "Ingresa una edad válida.";
    }

    console.log("Tabla del " + numero + ":");
    for (let i = 10; i >= 1; i--) {
        multi=i * numero
        console.log(i + " x " + numero + " = " + (multi));

        numerosDes.push(multi); // Almacenar en el array
    }
    console.log(numerosDes);
    alert("El resutado de los multiplos del numero: "+ numero+ " son: " + numerosDes);

 }

 //CERRAR
    function Cerrar(){
    document.getElementById('cerrar').addEventListener('click', function() {
        // Ocultar el contenedor del mensaje
        document.getElementById('mensaje').style.display = 'none'; 
    });
}  

// FUNCIONES DE DESPLIEGUE AL PRESIONAR VERIFICAR

btnVerificar.addEventListener("click", function(){
    if(funcionEjercicioActual == verificarParImpar){
        verificarParImpar();
       // alert("si pasa par impar");
    }
    else if (funcionEjercicioActual == VerifEdad){
        VerifEdad();
       // alert("si pasa edad");
    }
    else if (funcionEjercicioActual == verificarNota){
        verificarNota();
        //alert("si pasa nota");
    }
    else if (funcionEjercicioActual == verificarClasificador){
        verificarClasificador();
        //alert("si pasa CLASIFICADOR");
    }
    else if (funcionEjercicioActual == generarTabla){
        generarTabla();
        //alert("si pasa TABLA");
    }
    else if (funcionEjercicioActual == contarNumeros){
        contarNumeros(respuesta);
        //alert("si pasa CONTAR NUMEROS");
    }
    else if (funcionEjercicioActual == verificarPerfecto){
        verificarPerfecto(respuesta);
       // alert("si pasa PERFECTO");
    }
    else if (funcionEjercicioActual == descendente){
        descendente(respuesta);
       // alert("si pasa DESCENDENTE");
    }
}

);


