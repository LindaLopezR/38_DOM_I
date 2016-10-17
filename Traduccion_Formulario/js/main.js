function cambioIdioma(idioma){
	var sesion=document.getElementById('form-signin-heading');
	var remember=document.getElementById('remember');
	var boton=document.getElementById('boton');
	if(idioma=='es'){
		sesion.innerHTML='Por favor inicia sesión';
		document.getElementById('inputEmail').setAttribute('placeholder', 'Correo Electrónico');
		document.getElementById('inputPassword').setAttribute('placeholder', 'Contraseña');
		remember.innerHTML='Recordar datos';
		boton.innerHTML='Iniciar Sesión';
	} else if(idioma=='en') {
		sesion.innerHTML='Please sign in';
		document.getElementById('inputEmail').setAttribute('placeholder', 'Please enter your email');
		document.getElementById('inputPassword').setAttribute('placeholder', 'Password');
		remember.innerHTML='Remember me';
		boton.innerHTML='Sign in';
	}
}
var botonEs=document.getElementById('btnEs');
botonEs.onclick=function(){
	cambioIdioma('es');
}
var botonEn=document.getElementById('btnEn');
botonEn.onclick=function(){
	cambioIdioma('en');
}