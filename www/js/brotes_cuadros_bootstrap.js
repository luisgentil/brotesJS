//version: 3.2.2
window.onload = function() {

var control_boton = 0;
var click_numero  = 0;
var fecha 		  = new Date();
var estado 		  = ["primera canción", "primera pausa", "segunda canción", "segunda pausa", "tercera canción", "Final"];
var elegido 	  = "internet";

// función que añade los contenidos antes de empezar

	//averigua el día del mes, para seleccionar la fila
	var day  	= fecha.getDate(); // buscar formula matematica
	var fila	= enlaces[day]; // el array contiene toda la información de ese día

	// las variables almacenan los datos útiles
	var discos = [enlaces[day][4], enlaces[41][4], enlaces[day][8],  enlaces[41][8],  enlaces[day][12], enlaces[41][12], "Hasta mañana."];
	var temas  = [enlaces[day][5], enlaces[41][5], enlaces[day][9],  enlaces[41][9],  enlaces[day][13], enlaces[41][13], "Hasta mañana."];
	var links  = [enlaces[day][6], enlaces[41][6], enlaces[day][10], enlaces[41][10], enlaces[day][14], enlaces[41][14], "Hasta Mañana."];

// actualiza los contenidos
	document.getElementById("tema_1").innerText = temas[0];// nombre de la canción que suena
	document.getElementById("tema_2").innerText = temas[2];// nombre de la canción que suena	
	document.getElementById("tema_3").innerText = temas[4];// nombre de la canción que suena
	document.getElementById("disco_1").innerText = discos[0];     // nombre del álbum que contiene la canción
	document.getElementById("disco_2").innerText = discos[2];     // nombre del álbum que contiene la canción
	document.getElementById("disco_3").innerText = discos[4];     // nombre del álbum que contiene la canción
	var mensajes = []




// función para el botón "internet" (elegir origen de mp3)
elegirNet = function() {
	elegido = "internet";
	document.getElementById("boton_net_source").classList.toggle("btn-success");
	document.getElementById("boton_sd_source").classList.toggle("invisible");
	localStorage.elegido ="internet";
};

// función para el botón "SD" (elegir origen de mp3)
elegirSD = function() {
elegido = "SD";
	document.getElementById("boton_net_source").classList.toggle("invisible");
	document.getElementById("boton_sd_source").classList.toggle("btn-success");
	localStorage.elegido ="SD";
};

// función para el botón "comenzar": elimina los botones, y carga la música
comenzar = function() { 
	document.getElementById("botonera").className = 'invisible';
	document.getElementById("boton_comenzar").className = 'invisible';
	if (control_boton === 0) { // es la primera vez que pulsa el botón
		control_boton = 1; 
		var elegido = localStorage.elegido;
		cargar(elegido);
	}
};
// el elemento 'sonido' es cargado en la variable 'reproductorMusica', y qué pasa en las pausas (pausa o final)
compartir = function() {
	document.getElementById("botonera_compartir").classList.toggle("invisible");
}

// función que cambia la música
cargar = function(elegido) {
	if (elegido == "") { elegido = "internet";}

	document.getElementById("avisos").innerHTML = estado[click_numero];    // fase dentro del ciclo de canciones

	// desde aquí, la función cargar() ya reducida

	// ahora, comienza a sonar la música de la canción
	// genera un link al almacenamiento tarjeta SD
	var songLink = links[click_numero].split("\/");
	var fichero = "file:///storage/sdcard1/music/BrotesDeOlivo/" + discos[click_numero] + "/" + songLink[songLink.length-1] ; 

	// detiene el sonido si lo hay
    document.getElementById("sonido").pause();
	// carga la canción que debe comenzar, desde la variable fichero
	if (elegido == "internet") {
    	reproductorMusica.src = links[click_numero]; 
    	document.getElementById("errores").innerText = fichero; //links[click_numero]; // control en desarrollo
    	}
    else {
    	reproductorMusica.src = fichero; 
    	document.getElementById("errores").innerText = fichero; // control en desarrollo
    }
    // actualiza los mensajes
    document.getElementById("mensajes").classList.toggle("invisible");
    document.getElementById("mensajes").innerHTML = temas[click_numero];
	// aumenta el contador para la siguiente canción
	click_numero += 1;
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

				case "Final":
				document.getElementById("avisos").innerHTML = "Ha terminado por hoy" + "<br>" + "¡hasta mañana!";
				break;

				default:
				document.getElementById("avisos").innerHTML = "Pulsa el botón para comenzar.";
				break;
				}
			}
	};
};


