function validateForm(){
	var nombre = document.getElementById('name').value;
	var apellido = document.getElementById('lastname').value;
	var correo = document.getElementById('input-email').value;
	var password = document.getElementById('input-password').value;
	var indice = document.getElementById("opciones").selectedIndex;
	expresion = /\w+@+\w+\.+[a-z]/;
	if(nombre === "" || apellido === "" || correo === "" || password === ""){
		alert('Todos los campos son requeridos');
	} else if(!expresion.test(correo)){
		alert('El correo no es válido');
	}else if(password.length<6){
		alert('Contraseña debe tener al menos 6 caracteres');
	} else if(password==="password" || password==="123456" || password==="098754"){
		alert('Contraseña no válida');
	} else if(indice == 0 ) {
  		alert('Selecciona un tipo de bici');
	}
}
