{
    //RAFAEL URBANO ESTEPA

    let elementoEnlace, elementoBoton;

    let abrirDeTodoUnPoco = function() {
        let ventanaTodo = window.open();
        ventanaTodo.document.write(
            `
        <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="./js/deTodoUnPoco.js"></script>
    <title>Rafael Urbano Estepa</title>
</head>

<body>
    <h1>Rafael Urbano Estepa</h1>
    <button id="informa">Informa</button>
    <button id="salir">Salir</button>
    <p id="muestraFecha"></p>
    <p id="muestraHora"></p>
</body>
</html>
        `
        )
        ventanaTodo.document.close();
    }

    let abrirFormularioEmpleado = function() {
        let ventanaFormulario = window.open();
        ventanaFormulario.document.write(
            `
            <!DOCTYPE html>
            <html lang="en">
            
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <link rel="stylesheet" href="./css/main.css">
                <script src="./js/empleado.js"></script>
                <script src="./js/validar.js"></script>
                <title>Rafael Urbano Estepa</title>
            </head>
            
            <body>
                <h1>Rafael Urbano Estepa</h1>
                <form action="post">
                    <span>Nombre del Empleado: <input type="text"></span>
                    <span>Fecha de nacimento: <input type="text"></span>
                    <span>Dni: <input type="text"></span>
                   
                </form>
                <button id="validar">nuevo Empleado</button>
            </body>
            
            </html>
        `
        )
        ventanaFormulario.document.close();
    }

    document.addEventListener("DOMContentLoaded", function init() {
        elementoEnlace = document.getElementsByTagName("a");
        elementoEnlace[0].addEventListener("click", abrirDeTodoUnPoco);
        elementoBoton = document.getElementsByTagName("button");
        elementoBoton[0].addEventListener("click", abrirFormularioEmpleado);
    });


}