$(document).ready(function () {
    //Se crea un array para almacenar a los usuarios
    const usuarios = []

    // Al apretar en el botón enviar ...
    $("#enviarInformacion").click(function (event) {
        event.preventDefault();
        //Crea un array para almacenar la informacion de los usuarios
        let usuario = [];

        //Obtengo los valores ingresados por el usuario
        const correo = $("#inputCorreo").val();
        const nombre = $("#inputNombre").val();
        const contraseña = $("#inputPass").val();
        const edad = $("#inputEdad").val();

        //Ingreso los datos del usuario en el array usuario
        usuario.push(correo, nombre, contraseña, edad);
        //Ingreso al usuario en el array usuarios
        usuarios.push(usuario);
        //lo muestro en consola
        console.log(usuarios);
    });

    //Validaciones que no esté el campo vacío (sweet alert)
    //Validación que la edad sea mayor que 0
    
    


});
