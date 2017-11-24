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
};

// función para el botón "SD" (elegir origen de mp3)
elegirSD = function() {
elegido = "SD";
document.getElementById("boton_net_source").className = "botonInicial";
document.getElementById("boton_sd_source").className = "botones";
};

// función para el botón "comenzar": elimina los botones, y carga la música
comenzar = function() { 
	document.getElementById("botonera").className = 'dosMovil';
	document.getElementById("botonera").innerHTML = "<br>";
	if (control_boton === 0) { // es la primera vez que pulsa el botón
		control_boton = 1; 
		cargar();
	}
};
// el elemento 'sonido' es cargado en la variable 'reproductorMusica', y qué pasa en las pausas (pausa o final)

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
	document.getElementById("tema").innerText = temas[click_numero];// nombre de la canción que suena
	document.getElementById("disco").innerText = discos[click_numero];     // nombre del álbum que contiene la canción
	document.getElementById("avisos").innerHTML = estado[click_numero];    // fase dentro del ciclo de canciones

	// ahora, comienza a sonar la música de la canción
	// genera un link al almacenamiento tarjeta SD
	var songLink = links[click_numero].split("\/");
	var fichero = "file:///storage/sdcard1/music/BrotesDeOlivo/" + songLink[songLink.length-1] ; 

	// detiene el sonido si lo hay
    document.getElementById("sonido").pause();
	// carga la canción que debe comenzar, desde la variable fichero
    reproductorMusica.src = links[click_numero]; 

	// aumenta el contador para la siguiente canción
	click_numero +=1;
// que suene!
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
				cargar();
				break;

				case "primera canción":
				cargar();
				break;

				case "primera pausa":
				cargar();
				break;

				case "segunda canción":
				cargar();
				break;

				case "segunda pausa":
				cargar();
				break;

				case "tercera canción":
				cargar();
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


