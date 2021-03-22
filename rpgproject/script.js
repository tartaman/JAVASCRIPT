//CHAMPECHE
document.getElementById("button").addEventListener("mouseup", function ufas() {
    console.log("estoy funcionando wacho")
    var riñones = 0
    var corazones = 0
    alert("La bandida, sin padres, al tener que cuidar de sus 4 hermanos menores se ve en la necesidad de encontrar una fuente de dinero. Salia en la noche, la bandida es una cazadora nocturna, sus presas: los pequeños negocios. La bandida arropa a sus hermanos y sale en busca de lo unico que le compra comida y recursos: dinero. Camina por las calles de su pequeño barrio, en busca de sus jugosas presas, localiza una, la pequeña tienda de Don Edgar. Aquella tiendita sobrevivia a base de sus grandes ventas de miel y algunos otros productos.")
    alert(`La bandida se coloca atras de la tienda en busca de una entrada, localiza una ventana entre abierta, con una increible elasticidad y cautela
        logra entrar a la tienda, productos basicos por aqui y por alla, toma algunos como: botellas de leche, huevos y azucar, realmente no le importaba muchos
        estaba a punto de conseguir lo suficiente para comprar eso y más, pero cosas gratis nunca vienen mal.`)
    alert(`Llega a donde tienen el dinero, una caja pequeña sellada con un candado, segura de estar sola minimo a 20 metros a la redonda decide romperlo,
    agarro una lata de comida y le dio de golpes hasta que el candado cedió. Tomo todo el dinero y estaba lista para escapar: un crimen perfecto.`)
    alert(`En ese instante se escucha un ruido viniendo de mas adelante en la tienda, iba directo hacia ella, con los nervios en lo maximo tiene que tomar una desición rapida.`)
    var queVasAHacer = prompt('¿Qué va a hacer? \n1.Correr lo más rápido a la ventana\n2.Tomar otra lata y prepararte para el ataque\n3.Esconderte y guardar silencio\n4.Tratar de rodear el lugar donde se tenia almacenada la caja para un ataque sorpresa\n5.No haces nada, confias que no es nada grave')
    // BR = 1 BC = 2
    if (queVasAHacer == 1) {
        alert(`La bandida corre a toda velocidad y con gran habilidad logra salir en un corto periodo de tiempo pero a cambio de tirar un par de monedas,
        ninguna perdida grave en realidad (tercermundo++)`)
        var BCoBR = Math.floor(Math.random() * 2) + 1
    } else if (queVasAHacer == 2) {
        alert(`La bandida toma la lata y cuando escucha que los pasos llegan se lanza al ataque. No es mas que una enorme rata, se tranquiliza y se va`)
        var BCoBR = 1
    } else if (queVasAHacer == 3) {
        alert(`La bandida escucha los pasos acercarse cada vez mas, su corazón se acelera hasta enviar mas sangre que oxigeno en cada pulso,
        los pasos suenan a su lado. Solo era una rata. Sus nervios pasan de estar en el cielo al infierno, se va tranquilamente.`)
        var BCoBR = 1
    } else if (queVasAHacer == 4) {
        alert(`La bandida logra rodear el lugar, se prepara para la batalla a puño limpio con quien quiera que sea que este ahi, se da cuenta que es 
        solo una rata, la bandida se va tranquilamente`)
        var BCoBR = 2
    } else if (queVasAHacer == 5) {
        alert(`La bandida tenia razón, no era nada. Se mantiene con la misma calma y serenidad, se va de la tienda, se acomoda el pelo y se encamina a su casa (u tha boss)`)
        var BCoBR = 2
    } else {
        alert('wey neta no empieces')
        ufas()
    }





    if (BCoBR == 1) {
        alert("Capitulo 1:La bandida roba riñones: problemas rocosos")
        alert(`La bandida de riñones corría por las calles nocturnas, giraba por las esquinas como una ninja, escurridiza cual gato, nadie la atrapaba.`)
        alert(`“Creo que hoy no necesito ser tan mala, ni matar a nadie, claro si alguien puede sobrevivir sin hígado”. \nElla estaba en búsqueda de un tesoro como les llamaba, de eso viva ella y sus hermanos, solo que aquellos no sabían lo que su hermana mayor hacía.`)
        alert(`Se ocultaba en las sombras esperando a cualquiera que pasara, su estrategia era simple, tomaba el órgano, lo guardaba en su caja que llevaba y se iba lo más sigilosa posible, fácil y rápido como siempre.
        Veía pasar un hombre, joven de no mas de 40, para ella lucia sano, le darían bastante por este. La cuestión era: `)
        var queVasAHacer = prompt(`¿atacarlo o seguir esperando? 1.Atacar 2.Seguir esperando`)
        if (queVasAHacer == 1) {
            alert(`Cuando el hombre lleva ya casi media calle, esta a un poco mas del callejón, casi dejándolo atrás, cuando la bandida lo toma por la espalda, tapándole la boca y ahorcándolo. La falta de oxigeno del tipo le hace desmayar, la bandida aprovecha y le inyecta algún conjunto de químicos, su receta secreta. Con una incisión habilidosa pero poco profesional abre el abdomen del tipo, con cuidado, pero no menor brutalidad extrae el hígado y aprovechando 1 riñón.`)
            alert(`Guarda los órganos y sale lo más rápido del lugar, no sin antes limpiarse la sangre, no dejar rastro es su especialidad.`)
            alert(`Llega a su casa y guarda con cuidado su carga, lo deja en un lugar donde nadie lo pueda ver. Se baña, come algo y se va a dormir, tranquila, como si nada hubiera pasado.`)
            alert(`A la mañana siguiente cuando todos sus hermanos se han ido a la escuela y la noticia del asesinato de ayer se ha expandido, ella se pone a checar la mercancía.`)
            alert(`Victoriosa se da cuenta que tiene uno de los mejores hígados que pudo haber extraído, aun que enojada, demasiado enojada por que los riñones, los órganos diamantes tenían algunas piedras adentro de ellos, eso no solo les restaba valor, se los quitaba por completo.`)
            alert(`Comería bien con el dinero del hígado, pero sus lujos que podría haber comprado con los riñones nadie se lo va a quitar de la mente.`)
            riñones++
        } else if (queVasAHacer == 2) {
            alert("Siguió esperando en el callejón, tranquila como los leones cazan a sus presas, con la mente centrada en esperar a la siguiente víctima, una joven de no mas de 20 años, unas condiciones físicas que aseguraban lo saludable del cuerpo. No espero mas y al pasar la chica por el callejón la halo hacia ella tapándole la boca e inyectándole su mezcla de químicos secreta.")
            alert(`Esperando no mas de 30 segundos procedió a realizar una incisión rápida y recta, pero para nada profesional, una vez hecha saco el hígado de la muchacha y los riñones, los guardo, se limpio y con su agilidad y rapidez típica se fue de la escena sin dejar ningún rastro.`)
            alert("Al llegar a su casa guarda la carga con cuidado y se va a bañar, se dirige a su cuarto para dormir, en eso su hermano de 16 años se levanta y le pregunta el por que esta despierta. ")
            prompt("¿Qué dices?\n 1.¡Oh!, me dio hambre así que fui por algo de comida, además no me había bañado así que aproveché para eso.\n2.Que te importa, bueno solo fui por comida y aproveché para bañarme es todo.")
            alert("Oh, esta bien, hasta mañana Glad.")
            alert("Hasta mañana baboso.")
        }
    } else if (BCoBR == 2) {
        alert("Capitulo 1:La bandida roba corazones: Como por arte de magia")
        alert("Stolen Heart como la habían nombrado los pobladores o como antiguamente se le conocía como La Bandida corría por las calles persiguiendo a 2 destrokers, ella no sabia muy bien aun lo que eran, lo que entendía es que era gente normal pero que había recibido algunas superhabilidades después de infundirse con la energía entropía, de la entropía o para los amigos: del caos.")
        alert("Los destrokers iban corriendo por las paredes, haciendo saltos de aquí a allá, uno canalizaba la energía del otro, creaban pequeñas explosiones con cada salto. Stolen Heart les pisaba los talones, ella no estaba lejos de ser tan poderosa como ellos, de hecho, lo era y más.")
        var queVasAHacer = prompt("Tenia que alcanzar a los destrokers, por lo cual tenia que hacer una jugada, ¿qué debería hacer?\n1.Reunir energía en sus pies para llegar a ellos con un megasalto y enfrentarlos\n2.Reunir energía en cada uno de sus músculos y usarla para correr el doble de rápido que ellos y con ello enfrentarlos.")
        if (queVasAHacer == 1) {
            alert("Al realizar el mega salto cae demasiado enfrente y los destrokers logran esquivarla cambiando su ruta de paredes a techos")
            alert("Stolen Heart se dispuso a reajustar su ruta, primero intento con todas sus fuerzas adelantar a los destrokers, una vez alcanzado una mínima ventaja desato un ataque creando una barrera. Los dos destrokers chocharon con el muro, así es como rápidamente Stolen Heart salto sobre uno de los techos, dándole un golpe a uno de los destrokers, desestabilizándolo y así dejando escapar la energía del caos que lo controlaba y así sin el lazo el cual el otro destroker necesitaba igual dejo escapar la energía del caos.")
            alert("Al final resultaron ser 2 hermanos gemelos que habían sido infectados al mismo tiempo y en el mismo lugar, era eso lo que creaba el lazo tan necesario para la existencia de los 2. Stolen Heart se aseguro de que los hermanos llegaran bien a sus casas y trato de arreglar el desastre que se había causado. Lo hacia sintiendo que le debía algo a todo el pueblo y en realidad no se equivocaba.")
            alert(`Una vez terminado todo regreso a su casa. Sus hermanos seguían en la escuela, por lo que se acostó a descansar. Aprovecho para meditar sobre todo lo que estaba pasando y pensar en una solución:
            “Cómo sellare toda esta magia otra vez, la estúpida piedrita mágica ya no existe, como se supone que encierre algo si la cerradura ya no existe”`)
        } else if (queVasAHacer == 2) {
            alert("Stolen Heart logra alcanzar a 1 de los destrokers y lo hace caer, destruyendo el lazo entre los 2 y dejando escapar la energía del caos que los controlaba, cayendo al suelo los 2")
            alert("Los 2 destrokers eran hermanos gemelos, infectados por la energía oscura al mismo tiempo y en el mismo lugar, los 2 juntos, es por eso el lazo que tenían el uno del otro. Stolen Heart se aseguro de llevar a los 2 hermanos a sus casas y luego de tratar de arreglar el desastre que se hizo. Hacia todo esto por la gente, porque sentía que se los debía, y bueno no es que se equivocara.")
            alert(`Una vez terminado con todo regreso a su casa, sus hermanos seguían en la escuela, así que se dispuso a descansar, aprovecho para meditar sobre todo lo que estaba pasando y pensar en una solución:
            “Cómo sellare toda esta magia otra vez, la estúpida piedrita mágica ya no existe, como se supone que encierre algo si la cerradura ya no existe”`)
        } else {
            alert("we neta no hagas eso, ahora vas a tener que repetir todo o sea no ma&#$")
            ufas()
        }
    } else {
        alert("wey sabes leer?")
        ufas()
    }


    ////////////////////////////////////////////
})