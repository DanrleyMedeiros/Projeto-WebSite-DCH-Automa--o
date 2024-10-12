const form = document.querySelector(".formulario-fale-conosco")
const mask = document.querySelector(".mascara-formulario")
const voltaForm = document.querySelector(".volta-formulario")
const mapa = document.querySelector("iframe")



if (window.innerWidth <= 1200) {
        function chamaFormulario(){
            form.style.left = "50%"
            form.style.transform = "translateX(-50%)"
            mask.style.visibility = "visible"
            voltaForm.style.left = "35%"
            mapa.style.visibility ="hidden"
        }
        function voltaFormulario(){
            mask.style.visibility = "hidden"
            form.style.left = "-75%"
            form.style.transform = "translateX(0%)"
            voltaForm.style.left = "150%"
            mapa.style.visibility ="visible"
        }
      
      
    } else {
        function chamaFormulario(){
            form.style.left = "50%"
            form.style.transform = "translateX(-50%)"
            mask.style.visibility = "visible"
            voltaForm.style.left = "30%"
            mapa.style.visibility ="hidden"
        }
        function voltaFormulario(){
            mask.style.visibility = "hidden"
            form.style.left = "-22%"
            form.style.transform = "translateX(0%)"
            voltaForm.style.left = "150%"
            mapa.style.visibility ="visible"
        }
      
    }
  
  
  
/*   adjustForScreenWidth();
  
 
  window.addEventListener("resize", adjustForScreenWidth); */