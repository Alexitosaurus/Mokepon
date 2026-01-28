
function iniciarjuego () {

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)




}



function seleccionarMascotaJugador () {
    //alert("seleccionaste tu mascota")

 let mascota_seleccionada

    if (document.getElementById('Hipodogue').checked == true) {

        alert("seleccionaste hipodogue")
        let mascota_seleccionada = 'hipodogue'

    } else if (document.getElementById('Capipepo').checked == true) {

        alert("seleccionaste capipepo")
        let mascota_seleccionada = 'capipepo'

    } else if (document.getElementById('Ratigueya').checked == true) {

        alert("seleccionaste ratigueya")
        let mascota_seleccionada = 'ratigueya'

    } else {

        alert("selecciona una mascota")

    }
    
}







window.addEventListener('load', iniciarjuego)