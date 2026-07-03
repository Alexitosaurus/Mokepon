function iniciarjuego () {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

     let botonMascotaEnemigo = document.getElementById('boton-mascota')
    botonMascotaEnemigo.addEventListener('click', seleccionarMascotaEnemigo)
    
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

window.addEventListener('load', iniciarjuego)


//prueba de rama