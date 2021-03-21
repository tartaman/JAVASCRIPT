const cuadro = document.querySelectorAll('.cuadro')
const topo = document.querySelectorAll('.topo')
const tiempoRestante = document.querySelector('#tiempoRestante')
let puntuacion = document.querySelector('#puntuacion')
let resultado = 0
let tiempoActual = tiempoRestante.textContent

 function cuadroAleatorio(){
     cuadro.forEach(nombreClase => {
         nombreClase.classList.remove('topo')
     })
     let posicionAleatoria = cuadro[Math.floor(Math.random() * 16)]
     posicionAleatoria.classList.add('topo')


     /* asignar el id posicionAleatoria a acertaPosicion para usar después*/
     acertaPosicion = posicionAleatoria.id

}
cuadro.forEach(id => {
    id.addEventListener('mouseup', () => {
        if(id.id === acertaPosicion){
            resultado = resultado + 1
            puntuacion.textContent = resultado
        }
    })
})


function moverTopo() {
    let idTiempo = null
    idTiempo = setInterval(cuadroAleatorio , 500)
}
moverTopo()



function cronometro() {
    tiempoActual--
    tiempoRestante.textContent = tiempoActual

    if(tiempoActual === 0){
        clearInterval(idTiempo)
        alert('Se te acabó el tiempo, tu puntuación fue de: ' + resultado)
    }
}

let idTiempo = setInterval(cronometro, 1000)
        switch (new Date().getDay()) {
        case 1:
        day = "Monday" 
        alert("Hoy es lunes")
        break;

        case 2:
            day = "Tuesday"
            alert("Hoy es martes")
            break;
            
        case 3:
            day = "Wednesday"
            alert("Hoy es miercoles")
            break;

        case 4:
            day = "Thursday"
            alert("Hoy es jueves")
            break;

        case 5:
            day = "Friday" 
            alert("Hoy es viernes")
            break;
        case 6:
            day = "Saturday"
            alert("Hoy es sabado")
            break;
        case 7:
            day = "Sunday"
            alert("Hoy es domingo")
            break;
    } 