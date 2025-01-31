let numeroSecreto= 0;
let intentos = 0;
let listaNumerosSorteados= [];
let numeroMaximo= 10;

function asignarTextoElemento(elemento,texto) {
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    return;
}

function intentoDeUsuario() {
    let numeroDeUsuario= parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario==numeroSecreto) {
        asignarTextoElemento('p',`Ps si era bastardo en ${intentos} ${intentos ==1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario<numeroSecreto){
            asignarTextoElemento('p','El numero secreto es mayor puto');
        } else {
            asignarTextoElemento('p','El numero secreto es menor puto');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
   document.querySelector('#valorUsuario').value='';
}

function generarNumeroSecreto() {
    let numeroGenerado= Math.floor(Math.random()*10)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    
    //Si ya sorteamos todos los numeros, entonces:
    if (listaNumerosSorteados.length==numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles')
    } else {
        //Si el numero generado está incluido en la listaNUmerosSorteados
        if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
        }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al 10`);
    numeroSecreto=generarNumeroSecreto();
    console.log(numeroSecreto)
    intentos= 1;
}

function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje inicial
    //Generar el numero aleatorio de nuevo
    //Reiniciar numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton de "nuevo juego"
    document.querySelector('#reiniciar').setAttribute('disabled','true'); 
}

condicionesIniciales();
