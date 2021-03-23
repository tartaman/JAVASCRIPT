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




    //Inicia Roba riñones
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
        alert("Capitulo 2 La Bandida roba riñones: Eso va a dejar marca \n \n \tcheckpoint")
        function capitulo2() {
            alert(`“Solía pensar que las cosas no podían salir peor, nunca estuve más equivocada” La bandida roba riñones se encontraba en medio de una batalla campal contra la mafia “Los medichini”, una familia que reinaba bajo las aguas, ella por error se había metido en un asunto del cual no sabría si podría escapar.
        En un lado se encontraban 6 hombres armados hasta el alma y mucha munición, del lado de la bandida: ella y 2 de sus compinches con balas reducidas y algunas armas que quizá y les permitirían ganar.`)
            alert(`Las balas iban y venían, ellos se guardaban y disparaban con estrategia, tumbaron a 2 y ellos seguían completos, la bandida sabía que tenia que hacer, le indico a sus compañeros que distrajeran a los que quedaban y se escabullo por un lateral.`)
            alert(`Ella logro llegar a un buen punto, pero tenía una duda, que hacer, podía rodar hacia el cuerpo de 1 de los mafiosos, tomar una granada y esperar a darle a todos o disparar hasta dar de baja a todos`)
            var queVasAHacer = prompt(`¿Qué debe hacer?\n1.Rodar hacia la granada \n 2.dispararle a 2`)
            if (queVasAHacer == 1) {
                alert(`activas y la lanzas, todos los mafiosos terminan muertos, huyes del lugar con tus compañeros (SUPREME VICTORY *cuak*)`)
                alert(`Al huir se dirigen a su base, un pequeño almacen ubicado en las afueras de la ciudad, es ahí donde guardan todo, descansan, comen, ahí viven. La bandida salió de su hogar el año anterior cuando los problemas empezaron, ahora no podía cuidar a sus hermanos era demasiado peligroso, por lo cual solo les mandaba dinero cada cierto tiempo, lo suficiente para que pudieran vivir bien.`)
                alert("Los extrañaba, pero no podía regresas y arriesgarlos no otra vez, ellos aun no sabían que era o quien era ella, y eso le bastaba a ella para no regresar, preferiría que no se enteraran nunca.")
                alert("  -Ok, esta vez nos emboscaron y ganamos, pero necesitamos más armas y tal vez un miembro más, solo para cuidar la espalda.")
                alert("-Glad, ¡como planeas ganar esto?, estamos contra algo que tiene demasiado poder, es demasiado incluso para 4 personas.")
                alert(`-Algo se nos ocurrirá o a mí se me ocurrirá.`)
            } else if (queVasAHacer == 2) {
                alert(`revelas tu posición por lo cual te resguardas atrás de una pared que estaba detrás, 1 de tus compañeros es abatido y el otro termina de rematando a los mafiosos que quedaban,Tú, la bandida junto con tu único compañero sobreviviente carga a tu otro compañero que ya ha muerto y huyen de ahí.`)
                alert(`Corriendo por la ciudad, nadie se dio cuenta de la presencia de ellos 2, se saben todos los caminos para evitar ser notados, en el día y en la noche. Llegando a su base que es un pequeño almacen a las afueras de la ciudad, dejan el cuerpo de su compañero y amigo en uno de los sofas.`)
                alert(' -No podemos seguir así -Menciona su compañero')
                alert('-Claro que si, solo necesitamos mas armas, una buena estrategia y mas personas, con eso lograremos vencerlos y además nos vengaremos')
                alert('  -¡No!, yo ya no participare en esto, me entregare, nos entregare a la policía, nos condenaran e iremos a la cárcel o nos condene a muerte es baiscamente lo mismo a enfrentarse a esta mafia en realidad.')
                alert('   -¡No puedes hacer eso!')
                alert("   -¡Claro que puedo!")
                alert("-Entonces, si es claro que puedes, solo queda una opción.")
                prompt(`Elige que hacer:\n1-Dispararle
            \n2- Dispararle
            \n3- Dispararle
            \n4- Dispararle
            \n5- Dispararle`)
                alert("La bandida le dispara en la cabeza a su compañero, a sangre fría y sin remordimiento, su compañero cae al piso dejando un charco de sangre que marcara el suelo como un lugar donde alguna vez hubo vida.")
                alert("-Nadie va a ir a la cárcel, le voy a ganar a esa mafia. Sola o acompañada, lo hare y nadie me va a detener")
            } else {
                alert("wei porfa")
                capitulo2()
            }
        }
        capitulo2()
        //Inicia Roba corazones
    } else if (BCoBR == 2) {
        function Capitulo1() {
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
                Capitulo1()
            }
        }
        Capitulo1()
        alert('Capitulo 2 La Bandida roba corazones: El arte del latido')
        function Capitulo2() {
            alert('La bandida se encontraba leyendo el libro que lo había iniciado todo, bueno no exactamente el libro sino ella, pero prefería saltar ese detalle. ')
            alert('  -Como pretendes que un libro del cual ni siquiera sabes su nombre nos ayude a resolver esto?')
            alert(' -Este libro me ha enseñado todo lo que se sobre mis habilidades y esas cosas monstruosas, debe tener una solución para esto.')
            alert("-Bien, como quieras creer")
            alert('Stolen Heart seguía ojeando cada página que ya había revisado y las que aun no, pero no había respuesta, hasta que llego a un cierto capitulo del libro, del cual solamente veía el título: El destino. Se le hizo interesante que sea el único capitulo que no podía ver, creía que era algún tipo de hechizo, solo tenia que buscar como romperlo y quizás pueda traer el orden de nuevo.')
            alert(`Era difícil de descifrar, era un libro que mínimo llevaba 200 años de haberse escrito, aun que dudaba al tener algunas paginas más viejas que otras, pero incluso a veces se encontraban fechas más allá de lo que esperaba, ya no se hablaba de cientos si no de miles de años, le extrañaba pues su idioma no había existido en esos tiempos, ¿cómo podría estar esos textos en español?, bueno ella suponía que era la magia, era la única respuesta.
            Este libro contenía información valiosa sobre los poderes que los destrokers tenían y los que ella tenía claro, información la cual ya había memorizado, pero no la suficiente pues era demasiada realmente el libro era su mejor arma, ni la magia ni otra cosa más que ese libro.`)
            alert(`Un ruido venia del exterior, algo sacudía la casa y una explosión se hizo presente en la puerta, haciendo que esta estallara en mil pedazos. Stolen agarro el y estaba dispuesta a luchar.`)
            alert(`-Huye con en libro, sea lo que sea no lo pierdas.`)
            alert('Stolen no estaba muy convencida de dejar a sus compañeros, pero igual sabía que si alguien tomaba el libro esto se podía poner feo.')
            var queVasAHacer = prompt('¿Qué debería hacer?\n 1.Tomar el libro y huir\n 2.Tomar el libro y luchar')
            if (queVasAHacer == 1) {
                alert(`Stolen toma el libro y usando un truco nuevo que aprendió se fusiona con ella misma imbuida con el poder de la piedra corazón que le brindó todos sus poderes, se convierte en una masa de energía, brillante y etérea que se ha fusionado incluso con el libro, esto le permite salir a una gran velocidad de la casa sin ser atrapada, se mueve entre las calles dejando una estela mística por donde pasa hasta alejarse tanto como para considerarlo seguro, en medio del bosque es donde crea un pequeño refugio, la naturaleza esta de su lado, ese es uno de los secretos de su magia.`)
                alert('Del suelo se crea una pequeña ventanilla que se camufla perfectamente con el entorno, la abre y se dejan ver unas escaleras, empieza a bajar, cierra la ventanilla y sigue bajando, con un pequeño chasquido crea una bola de energía que le ilumina el camino, al final de las escaleras se encuentra una base subterránea, difícil de encontrar y perfecta para entender lo que estaba pasando.')
                alert('El libro sale disparado de las manos de Stolen, y se pone exactamente en el centro de la habitación empezando a levitar y se abre justamente en el capítulo que había visto hace, letras empiezan a aparecer de ninguna parte, se impregnan en el libro, ese está escribiendo algo.')

            } else if (queVasAHacer == 2) {
                alert(`Stolen toma el libro y lo guarda en su chaqueta previamente encantada para guardar cosas y se dispone a luchar. Son 2 destrokers pero vienen acompañados de un tipo, alto y que impone temor, de los cuales te encuentras en la calle y dan miedo. Los destrokers atacan a sus compañeros y el chico a Stolen. `)
                alert(`La compañera más joven de Stolen, Mica le toca un destroker con telequinesis, uno difícil. EL destroker lanza escombros a diestra y siniestra, por suerte Mica a aprendido a crear barreras de energía, es así como usa las barreras a su favor. Empieza a rodear el destroker sin dejar de crear la barrera, es así como el destroker queda encerrado en una cúpula de la cual no puede salir, Mica igual aprendió un increíble truco con barreras: sobrecarga. Es así como concentra toda su energía para sobrecargar el escudo y este explota dejando al destroker desmayado y des imbuido, ahora solo es una persona normal.`)
                var queVasAHacer = prompt("Alevitia, la otra compañera de Stolen le toco un destroker al cual le gustan las explosiones, es así como ella con grandes saltos esquiva las explosiones, necesita un plan para lograr vencerlo, pero ¿Cuál?\n1.Fuego con Fuego, explotar cosas\n2.Telequinesis plan")
                if (queVasAHacer == 1) {
                    alert(`Alevitia logra atrapar una bola explosiva que había lanzado el destroker y concentrando su energía aumento el poder de la bomba y con una impecable puntería se lo devolvió al destroker, este se dio cuenta muy tarde y termino explotando, el peligro había pasado, pero a cambio el destroker había muerto el cual des imbuido era solo una persona normal.`)
                } else if (queVasAHacer == 2) {
                    alert("Alevitia enfoca un escombro que se encontraba al lado del destroker y con una gran fuerza energética se lo lanza, des imbuyéndolo y noqueándolo, es así como el segundo destroker queda fuera de juego.")
                } else {
                    alert('nomameswey')
                }
            }
            alert(`Stolen se queda a enfrentar al tipo que se había quedado con ella, sin preguntas directo a la acción.
            Stolen se oculta en las sombras, un nuevo truco que aprendió, el tipo gira en su propio eje preparado para contraatacar, pero es Stolen la que ataca justo cuando el tipo le da la espalda y con una explosión de energía este salió volando hacia la pared, Stolen no era una chica de pocos trucos, reuniendo fuerzas logro estancar el cuerpo del tipo con telequinesis, ya no se podía mover, no podría hacer nada.`)
            alert(`- ¿Qué es lo que buscas?`)
            alert(`- ¿Enserio crees que te lo diría?`)
            alert(`Es así como una explosión de energía fue emitida del cuerpo del chico, una energía diferente a la de los destrokers y a la de Stolen o cualquiera de sus compañeras. Stolen salió disparada pero puro recuperar la postura rápidamente.`)
            alert(`El tipo con un poder negro logro controlar telequinéticamente los escombros y los lanzo hacia Stolen, ella le copio el truco al chico y reuniendo toda su energía y dejándola salir abruptamente logro hacer una explosión mucho mas fuerte que pulverizo los escombros y lazo al tipo tan fuerte que no solo choco con la pared si no que la atravesó, Stolen rápidamente salió para no perderle el paso.`)
            alert(`-Igual tengo mis trucos y creo que son mejores que los tuyos.
            El chico sin decir nada se empezó a convertir en una especie de humo denso y negro, que cubrió todo su cuerpo y simplemente se esfumo.`)
        } Capitulo2()


    } else {
        alert("wey sabes leer?")
        ufas()
    }


    ////////////////////////////////////////////
})