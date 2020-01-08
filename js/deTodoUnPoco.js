{
    //RAFAEL URBANO ESTEPA
    let elementoBoton, elementoMuestraFecha, elementoMuestraHora;

    let informar = function() {
        let diaActual = new Date;
        fechaActual = diaActual.toDateString();
        horaActual = diaActual.toLocaleTimeString();
        dia = fechaActual.split(/ /, 1);
        console.log(dia)
        if (dia == "Mon") {
            dia = "Lunes";
        }
        if (dia == "Tue") {
            dia = "Martes";
        }
        if (dia == "Wed") {
            dia = "Miércoles";
        }
        if (dia == "Thu") {
            dia = "jueves";
        }
        if (dia == "Fri") {
            dia = "Viernes";
        }
        if (dia == "Sat") {
            dia = "Sabado";
        }
        if (dia == "Sun") {
            dia = "Domingo";
        }


        hora = horaActual.split(/:/, 1);
        elementoMuestraFecha.innerText = "El día actual es: " + dia;

        switch (hora) {
            case hora < 18:
                elementoMuestraHora.innerText = "Son las " + horaActual + " Ya es hora de que dejes de trabajar. Hay que conciliar la vida laboral con la familiar";
                break;

            case hora < 8:
                elementoMuestraHora.innerText = "Son las" + horaActual + " Ya es hora de que comiences a trabajar. Hay que levantar el país";
                break;

            default:
                elementoMuestraHora.innerText = "Son las " + horaActual + " Pronto llegan las vacaciones. Aguanta ";
                break;
        }
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
    };

    document.addEventListener("click", init);


}