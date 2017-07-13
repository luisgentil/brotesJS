

window.onload = function() {

var control_boton = 0;
var click_numero = 0;
var fecha = new Date();
var estado = ["sonando_1", "pausa_1", "sonando_2", "pausa_2", "sonando_3", "final"];
var elegido = document.getElementById("file_source").innerText;

// función para el botón "internet" (elegir origen de mp3)
elegir = function() {
if (elegido === "internet") {
	elegido ="SD";
}
else {
	elegido = "internet";
	 }
document.getElementById("file_source").innerText = elegido;
};

// función para el botón "comenzar"
comenzar = function() { 
document.getElementById("botonera").style.visibility = "hidden";
if (control_boton === 0) { // es la primera vez que pulsa el botón
	control_boton = 1; // 
	cargar();
}
};
	
var reproductorMusica = document.getElementById("sonido");
//eventos: pausa, o final
// qué pasa si la música se pausa
    reproductorMusica.onpause = function() {

//si la pausa es natural, porque llegó al final de la canción
    if (reproductorMusica.ended){

    	var momento = document.getElementById("avisos").innerHTML;
		
		switch(momento) {

			case "inicio":
			cargar();
			break;

			case "sonando_1":
			cargar();
			break;

			case "pausa_1":
			cargar();
			break;

			case "sonando_2":
			cargar();
			break;

			case "pausa_2":
			cargar();
			break;

			case "sonando_3":
			cargar();
			break;

			case "final":
			document.getElementById("avisos").innerHTML = "Ha terminado por hoy, ¡hasta mañana!";
      break;
      
			default:
			document.getElementById("comentario").innerHTML = "pulsa el botón para comenzar";
			break;
	}
    	}
	};

// función que cambia la música
cargar = function() {
	//averigua el día del mes, para seleccionar la fila
	var day  	= fecha.getDate(); // buscar formula matematica
	var fila	= enlaces[day]; // el array contiene toda la información de ese día

	// las variables almacenan los datos útiles
	var discos = [enlaces[day][4], enlaces[41][4], enlaces[day][8],  enlaces[41][8],  enlaces[day][12], enlaces[41][12], "Hasta mañana."];
	var temas  = [enlaces[day][5], enlaces[41][5], enlaces[day][9],  enlaces[41][9],  enlaces[day][13], enlaces[41][13], "Hasta mañana."];
	var links  = [enlaces[day][6], enlaces[41][6], enlaces[day][10], enlaces[41][10], enlaces[day][14], enlaces[41][14], "Hasta Mañana."];


// actualiza los contenidos
	document.getElementsByTagName("h3")[0].innerHTML = temas[click_numero];// nombre de la canción que suena
	document.getElementById("album").innerHTML = discos[click_numero];     // nombre del álbum que contiene la canción
	document.getElementById("avisos").innerHTML = estado[click_numero];    // fase dentro del ciclo de canciones

// prueba para archivos locales
	var songLink = links[click_numero].split("\/");
	var fichero = "file:///storage/sdcard1/music/BrotesDeOlivo/" + songLink[songLink.length-1] ;

// ahora, hay que elegir entre reproducción local o desde internet, por defecto internet,

// comprueba la variable global "elegido"
// si es internet, hay que cambiar el valor de "fichero"
	if (elegido === "internet") { 
 	    fichero = links[click_numero]; 
    } 
// si es "SD" no hay que hacer nada

// detiene el sonido si lo hay
    document.getElementById("sonido").pause();
// document.getElementById("avisos").innerText = fichero; // control en desarrollo
// carga la canción que debe comenzar, desde la var fichero
    reproductorMusica.src = fichero; //links[click_numero]; 
// aumenta el contador para la siguiente canción
	click_numero +=1;
// que suene!
   document.getElementById("sonido").play();
};

};

// vamos a dejar la versión de escritorio con música local, no tiene sentido seguir con esto cuando no está el PMV.
// y el PMV es: versión que reproduzca los ficheros en Dropbox. --> terminado
//				- que reproduzca la música                                ok
//				- que sea presentable visualmente                         ok
//				- subir al Git						  ok
// y lo siguiente es: versión Phonegap del PMV.						  ok
// y lo siguiente es: versión Phonegap que reproduzca de la tarjeta SD.			  ok
// y lo siguiente es: que se pueda elegir entre internet y SD				elaborando
// next, en la web código BIDI la descarga de la app, 					pte
// next, instrucciones para descargar las canciones e instalarlas en el movil.		pte
// next, mejorar el diseño CSS								pte
