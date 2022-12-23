//Lecciones de toda la creacion del Juego: 
// 1. Cargar todo el juego apenas se cargue el juego con window.addEventListener('load', iniciarjuego)
// 2. Crear un boton y asociarle un evento (click)
// 3. InnerHHTML Y <span></span> como metodo para manipular el DOM
// 4. .ckecked que es un metodo para determinar si un elemento dentro de HTML esta seleccioando
// 5. document.getElementByID que trae un elemento de HTML con un ID especifico 
// 6. document.createElement ('p') que crea un elemento en HTML
// 7. AppendChild es un metodo para adiconar algo dentro de un elemento ya existente. Igual funciona para manipular el DOM
// 8. "And" = && "Or" = || "Not" = ! eso en JavaScript
// 9. location.reload location es un sitio y el metodo reload 
// 10. atributo 'disabled'
// 11. .style.display para ocultar secciones del HTML desde java script
// 12. "class" es pare crea clases con el fin de crear objetos. Para crear la clase, se hace con mayuscula
// 13. Los arreglos son un tipo de variable en donde puedo meter varias variables en un mismo lugar. aca hay algp muy importante y es el .push que empuja o mete nuevos objetos dentro de este arreglo. 
// Nombredelobjeto.funcion


//Variables globales (EL hecho de que sean globales, les permite a todas las funciones entrar a esta variables)

const esconder_boton_reiniciar = document.getElementById('reiniciar')
const esconder_ataque = document.getElementById('seleccionar_ataque')
const botonMascota = document.getElementById('boton_mascota')
const boton_reiniciar = document.getElementById('boton-reiniciar')
const contenedor_tarjetas = document.getElementById('contenedor-tarjetas')

let esconder_seleccionar_mascota = document.getElementById('selecion_mascota')


const span_mascota_oponente = document.getElementById('mascota_enemigo')

//variables de la función combate
const span_vidas_jugador = document.getElementById('vidas_jugador')
const span_vidas_oponente = document.getElementById('vida_oponente')

//variables de la función mensajeataue()
const section_mensaje_resultado = document.getElementById('resultado')
const mensaje_ataque_jugador = document.getElementById('mensaje-ataque-jugador')
const mensaje_ataque_enemigo = document.getElementById('mensaje-ataque-enemigo')

const contenedor_ataques = document.getElementById('contenedor-boton-ataques')

const section_vermapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

let mokepones = []

//Variables universales
let ataque_jugador = []
let ataque_enemigo = []
let vidas_jugador = 3
let vidas_oponente = 3
let opcion_de_mokepones
let ataque_enemigo_aleatorio

let input_hypodoge
let input_capipepo
let input_ratigueya
let input_langostelvis

let mascota_jugador
let mokepon_enemigo
let mascota_oponente

let ataques_mokepon

let boton_fuego 
let boton_agua 
let boton_tierra 

let ataques

let botones = []

let ataque_jugador_arreglo = []

let ataques_mokeon_enemigo

let index_ataque_jugador
let index_ataque_enemigo

let vicotorias_jugador = 0
let victorias_oponente = 0

let lienzo = mapa.getContext('2d')

let intervalo

let mapa_background = new Image()

let mokepon_seleccionado_foto
let mokepon_seleccionado_ancho
let mokepon_seleccionado_alto
let mokepone_seleccionado_posicion_x
let mokepone_seleccionado_posicion_y 
let mokepon_seleccionado_velocidad_x
let mokepon_seleccionado_velocidad_y 

let mi_mokepon 
let su_mokepon

//Variables para comparar si hay coalison o no 

let arriba_mascota
let abajo_enemigo
let derecha_mascota
let izqueirda_enemigo
let izquerda_mascota
let derecha_enemigo
let abajo_mascota
let arriba_enemigo

let mokepon_nombre

//Variables para hacer el mapa Responsive

let alturabuscada
let ancho_mapa = window.innerWidth - 20
const ancho_maximo_mapa = 800

if (ancho_mapa > ancho_maximo_mapa){
    ancho_mapa = ancho_maximo_mapa - 20
}

alturabuscada = ancho_mapa*500/600

mapa.width = ancho_mapa
mapa.height = alturabuscada

let jugador_id
let jugadorId

// crear la clase de mokepon
class Mokepon{
    constructor(nombre, foto, vida, foto_mapa, id = null ){
        this.id = id
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.x = aleatoriedad(0,ancho_mapa)
        this.y = aleatoriedad(0,alturabuscada)
        this.ancho = 70
        this.alto = 80
        this.mapafoto = new Image()
        this.mapafoto.src = foto_mapa
        this.velocidadx = 0
        this.velocidady = 0
    }

    pintarMokepon(){
        lienzo.drawImage(
            this.mapafoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }

}

let hipodoge = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5, './assets/hipodoge_cabeza.png')
let capipepo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png',5, './assets/Capipepo_cabeza.png')
let ratigueya = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png', 5, './assets/Ratigueya_cabeza.png')

let hipodoge_enemigo
let capipepo_enemigo
let ratigueya_enemigo


const   HIPODOGE_ATAQUES = [
    {nombre: '💧', id:'boton_agua'}, 
    {nombre: '💧', id:'boton_agua'}, 
    {nombre: '💧', id:'boton_agua'}, 
    {nombre: '🍃', id:'boton_tierra'},
    {nombre: '🔥', id:'boton_fuego'}
]

const CAPIPEPO_ATAQUES = [
    {nombre: '🍃', id:'boton_tierra'},
    {nombre: '🍃', id:'boton_tierra'},
    {nombre: '🍃', id:'boton_tierra'},
    {nombre: '🔥', id:'boton_fuego'}, 
    {nombre: '💧', id:'boton_agua'}
]

const RATIGUEYA_ATAQUES = [
    {nombre: '🔥', id:'boton_fuego'},
    {nombre: '🔥', id:'boton_fuego'},
    {nombre: '🔥', id:'boton_fuego'},
    {nombre: '🍃', id:'boton_tierra'},
    {nombre: '💧', id:'boton_agua'}
]


//Objetos que contienen los ataques de cada uno de los mokepones
hipodoge.ataques.push(...HIPODOGE_ATAQUES)
capipepo.ataques.push(...CAPIPEPO_ATAQUES)
ratigueya.ataques.push(...RATIGUEYA_ATAQUES)

mokepones.push(hipodoge,capipepo,ratigueya)


// Función que permite activar el boton mascota apenas carge la pagina
function iniciarjuego(){

    esconder_boton_reiniciar.style.display = 'none'
    section_vermapa.style.display = 'none'



    mokepones.forEach((mokepon) => {
        opcion_de_mokepones = `

        <input type="radio" name="mascotas" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre} >
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre} >
         </label>
        `
        contenedor_tarjetas.innerHTML += opcion_de_mokepones
        
        input_hypodoge= document.getElementById('Hipodoge')
        input_capipepo = document.getElementById('Capipepo')
        input_ratigueya = document.getElementById('Ratigueya')
        
        
    })

    esconder_ataque.style.display = 'none'
    botonMascota.addEventListener('click', selecionar)
   
    boton_reiniciar.addEventListener('click',reiniciar)

    unirseAlJuego()
}

function unirseAlJuego(){
    fetch('http://localhost:8080/unirse')
        .then(function (respuesta){
            
            if (respuesta.ok){
                respuesta.text()
                    .then(function (res){
                        jugadorId = JSON.parse(res).jugadorId
                        console.log(jugadorId)
                    })
            }
        })
}

// Función para escoger un numero aleatorio 
function aleatoriedad(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// Seleccionar de mascota por parte del jugador
function selecionar(){

    
    esconder_seleccionar_mascota.style.display = 'none'
    
    input_hypodoge = document.getElementById('Hipodoge')
    input_capipepo = document.getElementById('Capipepo')
    input_ratigueya = document.getElementById('Ratigueya')
    
    
    let spanMascotaJugador = document.getElementById('mascota_jugador')

    
    

   if (input_hypodoge.checked){
       spanMascotaJugador.innerHTML = input_hypodoge.id
       mascota_jugador = input_hypodoge.id 
   }else if (input_capipepo.checked){
        spanMascotaJugador.innerHTML = input_capipepo.id
        mascota_jugador = input_capipepo.id
   }else if (input_ratigueya.checked){
        spanMascotaJugador.innerHTML = input_ratigueya.id
        mascota_jugador = input_ratigueya.id
    
    }else{
        alert('Seleccione algo para poder pasar al combate, bobo hpta!')
        reiniciar()
    }

    seleccionarMokepon(mascota_jugador)

    extraerataques(mascota_jugador)
    section_vermapa.style.display = 'flex'
    seleccionarMascotaOponenete()
    iniciarMapa()
}

function seleccionarMokepon(mascota_jugador){
    fetch(`http://localhost:8080/mokepon/${jugadorId}`, {
        method:"post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            mokepon: mascota_jugador
        })
    })
}

//Funcion que busca los ataques de los Mokepones seleccionados. Para ello lo que hacemos es que guardamos los atques en una variable llamada atauqes y hacemos un ciclo para decirle que mientras el seleccionado sea X, muestreme los atauqes de ese seleccionado 
function extraerataques(mascota_jugador){
   
   for (let index = 0; index < mokepones.length; index++) {
    if(mascota_jugador === mokepones[index].nombre){
        ataques = mokepones[index].ataques
    }
   }

   mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
    ataques.forEach((ataque)=>{
        ataques_mokepon= `
        <button id=${ataque.id} class="botones-de-ataque Bataque"> ${ataque.nombre} </button>
        `
        contenedor_ataques.innerHTML += ataques_mokepon
    })

    boton_fuego = document.getElementById('boton_fuego')
    boton_agua = document.getElementById('boton_agua')
    boton_tierra = document.getElementById('boton_tierra')

    botones = document.querySelectorAll('.Bataque')
}

//Funcion que agrega un evento de click, pdoer ver a que elemento se le da click, meterlo en un arreglo que se llama ataque_jugador_arreglo
function secuenciaAtque(){
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if(e.target.id === 'boton_fuego'){
                ataque_jugador_arreglo.push('FUEGO')
                console.log(ataque_jugador_arreglo)
                boton.style.background = '#112f58'
                boton.disabled = true
            }else if(e.target.id === 'boton_agua'){
                ataque_jugador_arreglo.push('AGUA')
                console.log(ataque_jugador_arreglo)
                boton.style.background = '#112f58'
                boton.disabled = true
            }else{
                ataque_jugador_arreglo.push('TIERRA')
                console.log(ataque_jugador_arreglo)
                boton.style.background = '#112f58'
                boton.disabled = true
            }
            ataqueEnemigo()
            
        })
    })

    
}

//Funcion que selecciona un numero aleatorio. 1 = Hypodoge, 2= Capipepo, 3= ratogueya, 4 = langostelvis, 5 = Tucapalma, 6 = Pydos

function seleccionarMascotaOponenete(){
    mascota_oponente = aleatoriedad(0,mokepones.length-1)
    
    span_mascota_oponente.innerHTML = mokepones[mascota_oponente].nombre
    ataques_mokeon_enemigo = mokepones[mascota_oponente].ataques

    for (let index = 0; index < mokepones.length; index++) {
        mokepon_enemigo = mokepones[mascota_oponente].nombre     
    }

    secuenciaAtque()
}

// Función que determina el ataque aleatorio de los enemigos. 1 es ataque tipo fuego, 2 es ataque tipo agua y 3 es ataqye tipo Tierra
function ataqueEnemigo(){
    ataque_enemigo_aleatorio = aleatoriedad(0,ataques_mokeon_enemigo.length-1)

    if(ataque_enemigo_aleatorio == 0 || ataque_enemigo_aleatorio == 1){
        ataque_enemigo.push ('FUEGO')
    }else if(ataque_enemigo_aleatorio == 3 || ataque_enemigo_aleatorio == 4){
        ataque_enemigo.push('AGUA')
    }else{ 
        ataque_enemigo.push('TIERRA')
    }
    console.log(ataque_enemigo)
    iniciarcombate()
}

function iniciarcombate(){
    if(ataque_jugador_arreglo.length === 5){
        combate()
    }
}

function almacenarresultados (jugador, enemigo){
    index_ataque_jugador = ataque_jugador_arreglo[jugador]
    index_ataque_enemigo = ataque_enemigo[enemigo]
}

//Función que ejecuta el combate: El fuego le gana a la tierra, el agua le gana al fuego y la tierra le gana al agua 
function combate(){
    
    for (let index = 0; index < ataque_jugador_arreglo.length; index++) {
        if(ataque_jugador_arreglo[index] === ataque_enemigo[index]){
            almacenarresultados (index,index)
            mensajeAtaque('EMPATE')
        }else if (ataque_jugador_arreglo[index] === 'TIERRA' && ataque_enemigo[index] === 'AGUA'){
            almacenarresultados (index,index)
            mensajeAtaque('GANASTE MADAFAKA')
            vicotorias_jugador = vicotorias_jugador + 1
            span_vidas_jugador.innerHTML = vicotorias_jugador
        }else if (ataque_jugador_arreglo[index] === 'FUEGO' && ataque_enemigo[index] === 'TIERRA'){
            almacenarresultados (index,index)
            mensajeAtaque('GANASTE MADAFAKA')
            vicotorias_jugador = vicotorias_jugador + 1
            span_vidas_jugador.innerHTML = vicotorias_jugador
        }else if (ataque_jugador_arreglo[index] === 'AGUA' && ataque_enemigo[index] === 'FUEGO'){
            almacenarresultados (index,index)
            mensajeAtaque('GANASTE MADAFAKA')
            vicotorias_jugador = vicotorias_jugador + 1
            span_vidas_jugador.innerHTML = vicotorias_jugador
        }else{
            almacenarresultados (index,index)
            mensajeAtaque('PERDISTE PERRA')
            victorias_oponente = victorias_oponente + 1
            span_vidas_oponente.innerHTML = victorias_oponente
        }        
    }
    revisaCombate()
}

//Funcion que revisa la cantidad de vidas que tiene cada jugador 
function revisaCombate(){

    if (vicotorias_jugador < victorias_oponente){
        mensajeFinal('PERDISTE, QUE VERGUENZA, DESHONOR SOBRE TODA TU FAMILIA')
    }else if (vicotorias_jugador > victorias_oponente){
        mensajeFinal('GANASTE!!! VE Y TIRATE UN POLVO REY / REINA')
    }else{
        mensajeFinal('ES EN UN EMPATE! JUEGA DE NUEVO')
    }
}

//Función que manda un mensaje final y avisa quien gano 
function mensajeFinal(resultado_final){

    let section_mensajes = document.getElementById('resultado')
    section_mensajes.innerHTML =  resultado_final
    esconder_boton_reiniciar.style.display = 'block'
}

// Función para reiniciar el juego
function reiniciar(){
    location.reload()
}



//Función que crea un elemento dentor del HTML pero desde javascript
function mensajeAtaque(combate_resultado){

    let nuevo_ataque_jugador = document.createElement('p')
    let nuevo_ataque_enemigo = document.createElement('p')

    section_mensaje_resultado.innerHTML = combate_resultado
    nuevo_ataque_jugador.innerHTML = index_ataque_jugador
    nuevo_ataque_enemigo.innerHTML = index_ataque_enemigo


    mensaje_ataque_jugador.appendChild(nuevo_ataque_jugador)
    mensaje_ataque_enemigo.appendChild(nuevo_ataque_enemigo)
}

function pintarCanvas(){

    
    
    mapa_background.src = './assets/mapa.png'
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapa_background,
        0,
        0,
        mapa.width,
        mapa.height
    )
    
    mi_mokepon.pintarMokepon()

    //su_mokepon.pintarMokepon()

    enviarPosicion(mi_mokepon.x, mi_mokepon.y)

    

    mi_mokepon.x = mi_mokepon.x + mi_mokepon.velocidadx
    mi_mokepon.y = mi_mokepon.y + mi_mokepon.velocidady

    if (mi_mokepon.velocidadx !== 0 || mi_mokepon.velocidady !== 0){
        revisarColision(su_mokepon)

    }
    
}

function enviarPosicion(x,y){
    fetch(`http://localhost:8080/mokepon/${jugadorId}/posicion`, {
        method:"post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            x,
            y
        })
    })
    .then(function (res){
        if (res.ok){
            res.json()
                .then(function ({enemigos}) {
                    //console.log(enemigos)
                    debugger
                    enemigos.forEach( function (enemigo){
                        //console.log(enemigo)
                        debugger
                        if (enemigo.mokepon){
                            mokepon_nombre = enemigo.mokepon.nombre || ""
                            if (mokepon_nombre === "Hipodoge"){
                            su_mokepon = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5, './assets/hipodoge_cabeza.png')  
                            }else if (mokepon_nombre === "Capipepo"){
                            su_mokepon= new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png',5, './assets/Capipepo_cabeza.png')
                            }else if(mokepon_nombre === "Ratigueya"){
                            su_mokepon= new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png', 5, './assets/Ratigueya_cabeza.png')
                            }
                        
                            su_mokepon.x = enemigo.x
                            su_mokepon.y = enemigo.y

                            su_mokepon.pintarMokepon()
                        }
                        
                    })
                    
                    

                })
        }
    })
}

function moverDerecha(){
    mi_mokepon.velocidadx = 7
}

function moverArriba(){
    mi_mokepon.velocidady = -7
}

function moverAbajo(){
    mi_mokepon.velocidady = 7
}

function moverIzquierda(){
    mi_mokepon.velocidadx = -7
}

function detenerMovimiento(){
    mi_mokepon.velocidadx = 0
    mi_mokepon.velocidady = 0 
}


function presionarTeclas(event){
    switch (event.key) {
        case 'ArrowUp': 
            moverArriba()
            break
        case 'ArrowDown':
            moverAbajo()
            break
        case 'ArrowLeft':
            moverIzquierda()
            break
        case 'ArrowRight':
            moverDerecha()
            break
        default:
            break
    }
}

function extraerTodo(){
    for (let index = 0; index < mokepones.length; index++) {
        if(mascota_jugador === mokepones[index].nombre){
             return mokepones[index]
        }
     }
}

//QUede aca. NO se como poner en una sola varible que guarde el Mokepon que seleciono la maquina 
function extraerTodoOponente(){
    for (let index = 0; index < mokepones.length; index++) {
        if(mokepon_enemigo === mokepones[index].nombre){
             return mokepones[index]
        }
     }
}

function iniciarMapa(){

    
    //mapa.width = 700
    //mapa.height = 500
    mi_mokepon = extraerTodo(mascota_jugador)
    //su_mokepon = extraerTodoOponente(mokepon_enemigo)
    intervalo = setInterval(pintarCanvas, 50)
    window.addEventListener('keydown', presionarTeclas)
    window.addEventListener('keyup', detenerMovimiento)


}

function revisarColision(enemigo){
    
    arriba_enemigo = enemigo.y
    abajo_enemigo = enemigo.y + enemigo.alto
    izqueirda_enemigo = enemigo.x
    derecha_enemigo = enemigo.x + enemigo.ancho

    arriba_mascota = mi_mokepon.y
    abajo_mascota = mi_mokepon.y + mi_mokepon.alto
    izquerda_mascota = mi_mokepon.x
    derecha_mascota = mi_mokepon.x + mi_mokepon.ancho
    
    if(arriba_mascota < abajo_enemigo && abajo_mascota > arriba_enemigo && derecha_mascota > izqueirda_enemigo && izquerda_mascota < derecha_enemigo){
        esconder_ataque.style.display = 'flex'
        section_vermapa.style.display = 'none'
    }
}

// Apenas termine de cargar todo el HTML, se carga la función iniciar juego 
window.addEventListener('load', iniciarjuego)
