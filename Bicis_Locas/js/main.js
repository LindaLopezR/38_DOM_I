function validateForm(){
	var nombre = document.getElementById('name').value;
	var apellido = document.getElementById('lastname').value;
	var correo = document.getElementById('input-email').value;
	var password = document.getElementById('input-password').value;
	if(nombre === "" || apellido === "" || correo === "" || password === ""){
		alert('Todos los campos son requeridos');
	}
}