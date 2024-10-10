const form = document.querySelector(".formulario-fale-conosco")
const mask = document.querySelector(".mascara-formulario")


function chamaFormulario(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mask.style.visibility = "visible"
    
}

function ocultarMascaraFormulario(){
    mask.style.visibility = "hidden"
    form.style.left = "-22%"
    form.style.transform = "translateX(0%)"
}
