const form = document.querySelector(".formulario-fale-conosco")
const mask = document.querySelector(".mascara-formulario")
const voltaForm = document.querySelector(".volta-formulario")


function chamaFormulario(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mask.style.visibility = "visible"
    voltaForm.style.left = "-9%"

    
}


function voltaFormulario(){
    mask.style.visibility = "hidden"
    form.style.left = "-22%"
    form.style.transform = "translateX(0%)"
    voltaForm.style.left = "90%"
    
}