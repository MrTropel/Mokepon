let ataqueJugador = []
let ataqueEnemigo = []
let vidasJugador = 3
let vidasEnemigo = 3
let victoriasJugador = 0
let victoriasEnemigo = 0
let mokepones = []
let opcionDeMokepones
let inputCapipepo
let inputHipodoge
let inputRatigueya
let mascotaJugador
let ataquesMokeponEnemigo 
let ataquesMokepon
let botonFuego
let botonAgua
let botonTierra
let botones = []
let indexAtaqueJugador;
let indexAtaqueEnemigo;


const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar = document.getElementById("reiniciar")
const botonMascotaJugador = document.getElementById("boton-mascota")
const botonReinciar = document.getElementById("reiniciar")
sectionReiniciar.style.display = "none" 

const spanMascotaJugador = document.getElementById ("mascota-jugador")
const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")

const spanMascotaEnemigo = document.getElementById ("mascota-enemigo")

const spanvidasJugador = document.getElementById("vidas-jugador")
const spanvidasEnemigo = document.getElementById("vidas-enemigo")

const sectionMensajes = document.getElementById("resultado")
const ataqueDelJugador = document.getElementById("ataques-jugador")
const ataqueDelEnemigo = document.getElementById("ataques-enemigo")
const contenedorAtaques = document.getElementById("contenedor-ataques")
const contenedorTarjetas = document.getElementById("contenedor-tarjetas")

class Mokepon{
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon("Hipodoge", "./assets/HIPODOGE.png", 5)
let capipepo = new Mokepon("Capipepo", "./assets/CAPIPEPO.png", 5)
let ratigueya = new Mokepon("Ratigueya", "./assets/RATIGUEYA.png", 5)

hipodoge.ataques.push(
    { nombre: "💧", id: "boton-agua"},
    { nombre: "💧", id: "boton-agua"},
    { nombre: "💧", id: "boton-agua" },
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "🌱", id: "boton-tierra" },
)

capipepo.ataques.push(
    { nombre: "🌱", id: "boton-tierra" },
    { nombre: "🌱", id: "boton-tierra" },
    { nombre: "🌱", id: "boton-tierra" },
    { nombre: "💧", id: "boton-agua" },
    { nombre: "🔥", id: "boton-fuego" },
    
)

ratigueya.ataques.push(
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "💧", id: "boton-agua" },
    { nombre: "🌱", id: "boton-tierra" },
)

mokepones.push(hipodoge, capipepo, ratigueya)


function iniciarJuego(){
    
    sectionSeleccionarAtaque.style.display = "none" 

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
            <input type="radio" name="mascota" id=${mokepon.nombre} />
            <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
                <p>${mokepon.nombre}</p>
                <img src=${mokepon.foto} alt=${mokepon.nombre}>
            </label>
            `
        contenedorTarjetas.innerHTML+= opcionDeMokepones

         inputCapipepo = document.getElementById("Capipepo")
         inputHipodoge = document.getElementById("Hipodoge")
         inputRatigueya = document.getElementById("Ratigueya")

    })

    
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    
    botonReinciar.addEventListener("click", reiniciarJuego)
}

function seleccionarMascotaJugador(){
    
    sectionSeleccionarAtaque.style.display = "flex"   

    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    } else {
        alert("Porfavor selecciona a tu mascota")
    } 

    sectionSeleccionarMascota.style.display = "none"

    extraerAtaques (mascotaJugador)
    seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador) {
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
        
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class="BAtaque"> ${ataque.nombre} </button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })

    botonFuego = document.getElementById("boton-fuego")
    botonAgua = document.getElementById("boton-agua")
    botonTierra = document.getElementById("boton-tierra")
    botones = document.querySelectorAll(".BAtaque")
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (event) => {
        if (event.target.textContent === ' 🔥 ') {
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
            } else if (event.target.textContent === ' 💧 ') {
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
            } else {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
            }
            ataqueAleatorioEnemigo()
        })
    })
}


function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(0 ,mokepones.length -1)  

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
    ataquesMokeponEnemigo= mokepones[mascotaAleatoria].ataques
    secuenciaAtaque()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length - 1)

    if (ataqueAleatorio == 0 || ataqueAleatorio ==1) {
        ataqueEnemigo.push("FUEGO")
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push("AGUA")
    } else {
        ataqueEnemigo.push("TIERRA")
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
}

function iniciarPelea() {
    if (ataqueJugador.lenght === 5){
        combate()
    }
}

function indexAmbosOponentes(jugador,enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate() {
    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponentes(index, index)
            crearMensaje("EMPATE")
        } else if(ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'TIERRA'){
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            vidasJugador.innerHTML = victoriasJugador
        } else if(ataqueJugador[index] === 'AGUA' && ataqueEnemigo[index] === 'FUEGO'){
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            vidasJugador.innerHTML = victoriasJugador
        } else if(ataqueJugador[index] === 'TIERRA' && ataqueEnemigo[index] === 'AGUA'){
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            vidasJugador.innerHTML = victoriasJugador
        } else {
            indexAmbosOponentes(index, index)
            crearMensaje("PERDISTE!")
            victoriasEnemigo++
            vidasEnemigo.innerHTML = victoriasEnemigo
        }
    }
    
    crearMensaje()
    revisarVidas()
}

function revisarVidas(){
    if (victoriasJugador === victoriasEnemigo){
        crearMensajeFinal("EMPATE!")
    } if (victoriasJugador > victoriasEnemigo){
        crearMensajeFinal("FELICITACIONES! Haz ganado :)")
    } else {
        crearMensajeFinal("HAZ PERDIDO")  
    }
}

function crearMensaje() {
    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo
    
    ataqueJugador.appendChild(nuevoAtaqueDelJugador)
    ataqueEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal){
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo)

    botonFuego.disabled = true
    
    botonAgua.disabled = true
   
    botonTierra.disabled = true
   
    sectionReiniciar.style.display = "flex"
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio (min,max) {
    return Math.floor(Math.random() * (min + max + 1) + min)
}

window.addEventListener("load", iniciarJuego)