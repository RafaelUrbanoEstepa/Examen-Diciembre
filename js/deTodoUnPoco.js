{
    //RAFAEL URBANO ESTEPA
    let elementoBoton, elementoMuestraFecha, elementoMuestraHora;

    let informar = function() {
        let diaActual = new Date;
        fechaActual = diaActual.toDateString();
        horaActual = diaActual.toLocaleTimeString();

        dia = fechaActual.split(/ /, 1);

        if (dia == "Mon") {
            dia = "Lunes";
        } else if (dia == "Tue") {
            dia = "Martes";
        } else if (dia == "Wed") {
            dia = "Miércoles";
        } else if (dia == "Thu") {
            dia = "jueves";
        } else if (dia == "Fri") {
            dia = "Viernes";
        } else if (dia == "Sat") {
            dia = "Sabado";
        } else if (dia == "Sun") {
            dia = "Domingo";
        }


        hora = horaActual.split(/:/, 1);
        arrayHoraYMinutos = horaActual.split(/:/, 2)
        horaMostrada = arrayHoraYMinutos[0] + ":" + arrayHoraYMinutos[1];
        elementoMuestraFecha.innerText = "El día actual es: " + dia;

        elementoMuestraHora.innerText = escribe(hora);
    }

    let escribe = function(hora) {
        if (hora > 18) {
            return "Son las " + horaMostrada + " Ya es hora de que dejes de trabajar. Hay que conciliar la vida laboral con la familiar";
        }

        if (hora < 8) {
            return "Son las" + horaMostrada + " Ya es hora de que comiences a trabajar. Hay que levantar el país";
        }

        return "Son las " + horaMostrada + " Pronto llegan las vacaciones. Aguanta ";
    }


    let cierraVentana = function() {
        window.close();
    }

    let init = function() {
        elementoBoton = document.getElementsByTagName("button");
        elementoBoton[0].addEventListener("click", informar);
        elementoBoton[1].addEventListener("click", cierraVentana);
        elementoMuestraFecha = document.getElementById("muestraFecha");
        elementoMuestraHora = document.getElementById("muestraHora");
    }

    document.addEventListener("DOMContentLoaded", init);

}