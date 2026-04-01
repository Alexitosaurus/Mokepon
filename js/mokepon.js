function iniciarjuego () {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

     let botonMascotaEnemigo = document.getElementById('boton-mascota')
    botonMascotaEnemigo.addEventListener('click', seleccionarMascotaEnemigo)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)

    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)

    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra) 
    
}

function seleccionarMascotaJugador () 
{
    //alert("seleccionaste tu mascota")
 
 let mascota_seleccionada
    
    if (document.getElementById('Hipodogue').checked == true) {

        
        let mascota_seleccionada = 'hipodogue'
        document.getElementById('nombre-mascota').innerHTML = mascota_seleccionada
       
    } else if (document.getElementById('Capipepo').checked == true) {

       
        let mascota_seleccionada = 'capipepo'
        document.getElementById('nombre-mascota').innerHTML = mascota_seleccionada

    } else if (document.getElementById('Ratiguella').checked == true) {

        
        let mascota_seleccionada = 'ratiguella'
        document.getElementById('nombre-mascota').innerHTML = mascota_seleccionada

    } else if (document.getElementById('Langostelvis').checked == true) {

        let mascota_seleccionada = 'langostelvis'
        document.getElementById('nombre-mascota').innerHTML = mascota_seleccionada

    } else if (document.getElementById('Tucapalma').checked == true) {

        
        let mascota_seleccionada = 'tucapalma'
        document.getElementById('nombre-mascota').innerHTML = mascota_seleccionada

    } else if (document.getElementById('Pydos').checked == true) {

        
        let mascota_seleccionada = 'pydos'
        document.getElementById('nombre-mascota').innerHTML = mascota_seleccionada
    }   
    else {

        alert("selecciona una mascota")

         }


}

function seleccionarMascotaEnemigo () {

        let mascotaAleatoria = aleatorio(1,6)

        let mascota_enemigo

        if (mascotaAleatoria == 1) {

            let mascota_enemigo = 'hipodogue'
             document.getElementById('mascotamala').innerHTML = mascota_enemigo
       

        } else if (mascotaAleatoria == 2) { 
            let mascota_enemigo = 'capipepo'
             document.getElementById('mascotamala').innerHTML = mascota_enemigo         

        } else if (mascotaAleatoria == 3) {
            let mascota_enemigo = 'ratiguella'
             document.getElementById('mascotamala').innerHTML = mascota_enemigo 
        } else if (mascotaAleatoria == 4) {
            let mascota_enemigo = 'langostelvis'
             document.getElementById('mascotamala').innerHTML = mascota_enemigo     

        } else if (mascotaAleatoria == 5) {
            let mascota_enemigo = 'tucapalma'
             document.getElementById('mascotamala').innerHTML = mascota_enemigo


        } else if (mascotaAleatoria == 6) {
            let mascota_enemigo = 'pydos'
             document.getElementById('mascotamala').innerHTML = mascota_enemigo 

        }

        function aleatorio (min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min)    
        }

        }

        let ataqueelegido

        if (document.getElementById("boton-fuego").checked == true) {
            let ataqueelegido = 'fuego'
            alert("haz elegido fuego")

        } else if (document.getElementById("boton-agua").checked == true) {
            let ataqueelegido = 'Agua'
            alert("haz elegido agua")
        } else if (document.getElementByid("boton-tierra").checked == true) {
            let ataqueelegido = 'tierra'
            alert("haz elegido tierra")
        } else {
            alert("selecciona un ataque")
        }


window.addEventListener('load', iniciarjuego)