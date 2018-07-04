window.onload = function() {

var control_boton = 0;
var click_numero = 0;
var fecha = new Date();
var estado = ["primera canción", "primera pausa", "segunda canción", "segunda pausa", "tercera canción", "Terminado."];
var elegido = "internet";

// función para el botón "internet" (elegir origen de mp3)
elegirNet = function() {
elegido = "internet";
document.getElementById("boton_net_source").className = "botones";
document.getElementById("boton_sd_source").className = "botonInicial";
document.getElementById("comentario").innerText ="internet";
};

// función para el botón "SD" (elegir origen de mp3)
elegirSD = function() {
elegido = "SD";
document.getElementById("boton_net_source").className = "botonInicial";
document.getElementById("boton_sd_source").className = "botones";
document.getElementById("comentario").innerText ="SD";

};

// función para el botón "comenzar": elimina los botones, y carga la música
comenzar = function() { 
	document.getElementById("botonera").className = 'dosMovil';
	document.getElementById("botonera").innerHTML = "<br>";
	if (control_boton === 0) { // es la primera vez que pulsa el botón
		control_boton = 1; 
		var elegido = document.getElementById("comentario").innerText;
		cargar(elegido);
	}
};
// el elemento 'sonido' es cargado en la variable 'reproductorMusica', y qué pasa en las pausas (pausa o final)

// función que cambia la música
cargar = function(elegido) {
	if (elegido == "") { elegido = "internet";}

	//averigua el día del mes, para seleccionar la fila
	var day  	= fecha.getDate(); // buscar formula matematica
	var fila	= enlaces[day]; // el array contiene toda la información de ese día

	// las variables almacenan los datos útiles
	var discos = [enlaces[day][4], enlaces[41][2], enlaces[day][8],  enlaces[41][2], enlaces[day][12],  enlaces[41][2],  "Hasta mañana."];
	var temas  = [enlaces[day][5], enlaces[41][5], enlaces[day][9],  enlaces[41][9],  enlaces[day][13], enlaces[41][13], "Hasta mañana."];
	var links  = [enlaces[day][6], enlaces[41][6], enlaces[day][10], enlaces[41][10], enlaces[day][14], enlaces[41][14], "Hasta Mañana."];

// actualiza los contenidos
	document.getElementById("tema").innerText = temas[click_numero];// nombre de la canción que suena
	document.getElementById("disco").innerText = discos[click_numero];     // nombre del álbum que contiene la canción
	document.getElementById("avisos").innerHTML = estado[click_numero];    // fase dentro del ciclo de canciones

	// ahora, comienza a sonar la música de la canción
	// genera un link al almacenamiento tarjeta SD
	var songLink = links[click_numero].split("\/");
	var fichero = "file:///storage/sdcard1/music/BrotesDeOlivo/" + discos[click_numero] + "/" + songLink[songLink.length-1] ; 

	// detiene el sonido si lo hay
    document.getElementById("sonido").pause();
	// carga la canción que debe comenzar, desde la variable fichero
	if (elegido == "internet") {
    	reproductorMusica.src = links[click_numero]; }
    else {
    	reproductorMusica.src = fichero; }

	// aumenta el contador para la siguiente canción
	click_numero +=1;
// que suene!
	document.getElementById("errores").innerText = fichero; // control en desarrollo
	document.getElementById("sonido").play();
};

	var reproductorMusica = document.getElementById("sonido"); 
	// qué pasa si la música se pausa:
	reproductorMusica.onpause = function() {
		//si la pausa es natural, porque llegó al final de la canción
		if (reproductorMusica.ended){
			var momento = document.getElementById("avisos").innerHTML;
			switch(momento) {

				case "inicio":
				cargar(elegido);
				break;

				case "primera canción":
				cargar(elegido);
				break;

				case "primera pausa":
				cargar(elegido);
				break;

				case "segunda canción":
				cargar(elegido);
				break;

				case "segunda pausa":
				cargar(elegido);
				break;

				case "tercera canción":
				cargar(elegido);
				break;

				case "Terminado.":
				document.getElementById("avisos").innerHTML = "Ha terminado por hoy, ¡hasta mañana!";
				break;

				default:
				document.getElementById("comentario").innerHTML = "Pulsa el botón para comenzar.";
				break;
				}
			}
	};
};


