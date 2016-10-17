function cambioIdioma(){
	var sesion=document.getElementById('form-signin-heading');
	var remember=document.getElementById('remember');
	var boton=document.getElementById('boton');
	sesion.innerHTML='Por favor inicia sesión';
	document.getElementById('inputEmail').setAttribute('placeholder', 'Correo Electrónico');
	document.getElementById('inputPassword').setAttribute('placeholder', 'Contraseña');
	remember.innerHTML='Recordar datos';
	boton.innerHTML='Iniciar Sesión';
}
