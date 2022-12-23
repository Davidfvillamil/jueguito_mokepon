const express_libreria = require('express') // Primero se improta la libreria

const cors_libreria = require('cors')

const app = express_libreria() // Creamos una applicacion con express

app.use(cors_libreria())
app.use(express_libreria.json())

const jugadores = []

class Jugador {
    constructor (id){
       this.id = id 
    }

    asignarMokepon(mokepon){
        this.Mokepon = mokepon
    }

    actualizarPosicion(x,y){
        this.x = x
        this.y = y
    }
}

class Mokepon {
    constructor(nombre){
        this.nombre = nombre
    }
}

//LE decimos que cuando reciba una petición, responda Hola
app.get('/unirse', (req , res) => {
    
    const id = Math.floor(Math.random() * 1000)


    const jugador = new Jugador(id)
    jugadores.push(jugador)
    
    res.setHeader('Access-Control-Allow-Origin', '*')

    //res.json({id})

    //res.end(JSON.stringify({id}));
    res.status(200).json({jugadorId: id})

})

app.post('/mokepon/:jugadorId', (req, res) =>{
    const jugadorId = req.params.jugadorId || ""
    const nombre = req.body.mokepon || ""
    const mokepon = new Mokepon(nombre)

    
    const jugador = jugadores.find((jugador) => jugadorId == jugador.id)

    if (jugador){
        jugador.asignarMokepon(mokepon)
    }

    //console.log('asignando', mokepon)
    //console.log('a jugador', jugador)
    
    


    res.end()
})

app.post("/mokepon/:jugadorId/posicion" ,(req,res) =>{
    const jugadorId = req.params.jugadorId || ""
    const x = req.body.x || 0
    const y = req.body.y || 0
    //console.log(jugadores)
    //console.log('jugador Id', jugadorId)
    const jugador = jugadores.find((jugador) => jugadorId === jugador.id)

    if (jugador){
        jugador.actualizarPosicion(x, y)
    }

    const enemigos = jugadores.filter((jugador) => jugadorId != jugador.id)
    //console.log(typeof jugadorId)
    //console.log(typeof jugadores[0].id)

    res.send({
        enemigos
    })


})

// Es una función que le dice al servidor que se mantenga atento a escuchar lo que los usuarios requieren
app.listen(8080, (req , res) => {

    console.log('El Servidor ya arranco')
})