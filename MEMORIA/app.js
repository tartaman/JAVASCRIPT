document.addEventListener('DOMContentLoaded', () => {

    /*cartas*/
    const arrayCartas = [
        {
            name: 'Gengar',
            img: 'Imagenes/Gengar.png',
        },
        {
            name: 'Gengar',
            img:'Imagenes/Gengar.png',
        },
        {
            name: 'Silveon',
            img: 'Imagenes/Sylveon.png',

        },
        {
            name: 'Silveon',
            img: 'Imagenes/Sylveon.png',

        },
        {
            name: 'Blastoise',
            img: 'Imagenes/Blastoise.png',

        },
        {
            name: 'Blastoise',
            img: 'Imagenes/Blastoise.png',

        },
        {
            name: 'Pikachu',
            img: 'Imagenes/Pikachu.png',
        },
        {
            name: 'Pikachu',
            img: 'Imagenes/Pikachu.png',
        },
        {
            name: 'Torchic',
            img: 'Imagenes/Torchic.png',
        },        
        {
            name: 'Torchic',
            img: 'Imagenes/Torchic.png',
        },
        {
            name: 'Minccino',
            img: 'Imagenes/Minccino.png',
        },
        {
            name: 'Minccino',
            img: 'Imagenes/Minccino.png',
        },
    ]

    arrayCartas.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    var cartaEscogida = []
    var cartaEscogidaId = []
    var cartasGanadas = []
    const displayResultados = document.querySelector('#result')

    /*tablero*/
    function crearTablero() {
        for (let i = 0; i < arrayCartas.length; i++){
            var carta = document.createElement('img')
            carta.setAttribute('src', 'Imagenes/Atrás.png')
            carta.setAttribute('data-id', i)
            carta.addEventListener('click', voltearCarta)
            grid.appendChild(carta)
        }
    }
    crearTablero()

    //ver iguales
    function verIguales(){
        var cartas = document.querySelectorAll('img')
        const opcionUnoId = cartaEscogidaId[0]
        const opcionDosId = cartaEscogidaId[1]
        if(cartaEscogidaId[0] === cartaEscogidaId[1]){
            alert("encontraste un par!!!")
            cartaEscogidaId[0].setAttribute('src', 'Imagenes/blank.jpg')
            cartasGanadas.push(cartaEscogida)
        } else {
            cartas[opcionUnoId].setAttribute('src', 'Imagenes/Atrás.png')
            cartas[opcionDosId].setAttribute('src', 'Imagenes/Atrás.png')
            alert('nimodo wacho')
        }
        cartaEscogida = []
        cartaEscogidaId = []
        displayResultados.textContent = cartasGanadas.length
        if (cartasGanadas.length === arrayCartas.length/2){
            displayResultados.textContent = "web0s, te mamaste, las encontraste"
        }
    }


    //voltear la carta

    function voltearCarta() {
        var cardId = this.getAttribute('data-id')
        cartaEscogida.push(arrayCartas[cardId].name)
        cartaEscogidaId.push(cardId)
        this.setAttribute('src', arrayCartas[cardId].img)
        if (cartaEscogida.length === 2){
            setTimeout(verIguales, 500)
        }

    } 
})

    


