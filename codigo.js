function capturarContacto(){
    let nombre = document.getElementById("txtNombre").value;
    let Email = document.getElementById("txtEmail").value;
    let mensaje = document.getElementById("txtMensaje").value;
    alert("estos son los datos que cargaste... " +nombre +" "+ Email+" "+ mensaje )
    console.log("hola "+ nombre +" "+ Email +" "+ mensaje);
}