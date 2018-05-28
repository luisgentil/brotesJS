# Presentación
La app "Orar con Brotes de Olivo" te permite escuchar 3 canciones del grupo Brotes de Olivo (intro, medio, final), dejando una pausa entre ellas. La combinación de canciones varía cada día entre una selección de canciones.  
La pausa entre canciones es de 60 segundos.  
Actualmente existe una versión de escritorio, disponible online en la web **https://pilgrim.neocities.org/**, y una versión Android.
La versión Android reproduce las canciones desde internet, aunque también pueden ser descargadas a la tarjeta SD del teléfono, evitando el consumo de datos.
Esta versión está elaborada con el software Phonegap, disponible en www.phonegap.com.

La selección de música puede descargarse desde Dropbox en la dirección https://www.dropbox.com/s/1dzhkj7e19mb7y7/BrotesDeOlivo_JS_180528.zip?dl=1.

# Versión online
Dispones de una versión de escritorio, online, completamente funcional.  
Visita la **página** : https://pilgrim.neocities.org/ .
Conecta los altavoces o los auriculares :)

# Descarga e instalación en Smartphone
Descarga desde el **repositorio en Phonegap, https://build.phonegap.com/apps/2690877/share**:
- Escanenado el **código BIDI**
- **Android**: descarga el archivo apk, guárdalo en el teléfono y ábrelo. (provisional) Debes tener activada la opción de "instalar aplicaciones desde orígenes desconocidos". Descarga la app (archivo .apk) en tu teléfono android. Al hacer click debe ofrecerte la opción de instalar, acepta. Si no te permite instalar, activa la opción Ajustes > Seguridad > Orígenes desconocidos.
- Windows Phone: descarga el archivo appx, e instala la app.  

Para escuchar la música debes disponer de **conexión a internet**, o bien diponer de las canciones en la **tarjeta SD** de tu teléfono.  
Si deseas reproducir la música desde tu propio teléfono, debes descargarla y situarlo en la carpeta: storage/sdcard1/music/BrotesDeOlivo. No es difícil, sigue estas indicaciones.  
Descarga el archivo *BrotesDeOlivo_JS_180528.zip* a tu teléfono desde Dropbox (https://www.dropbox.com/s/1dzhkj7e19mb7y7/BrotesDeOlivo_JS_180528.zip?dl=1).  
Es un fichero comprimido (zip), debes localizarlo, descomprimirlo y moverlo a la ubicación definitiva.  
Para disponer las canciones en  directorio correcto necesitarás una aplicación que pueda acceder a las carpetas, descomprimir archivos y moverlos. Yo he usado ES File Explorer, es fácil de usar y muy eficaz. Disponible gratis en Google Play.  

Si lo has descargado desde el propio teléfono, lo más probable es que esté descargado en una de las carpetas:  
- Downloads  
- My Documents/Downloads  

A continuación, instrucciones usando ES File Explorer (si usas otra app, será muy parecido).  
Desde la carpeta donde esté situado el fichero zip descargado, selecciona el fichero y elige la opción _Más > Descomprimir_.  
Cuando haya terminado, selecciona la carpeta creada y elige la opción _Más > Mover A_. En la pantalla que se abre, navega hasta **storage> sdcard1> music**, y elige esa ubicación para la carpeta.  

Si lo has descargado **en un PC**, localiza el fichero (normalmente estará en la carpeta "Descargas"), descomprimelo (normalmente basta hacer doble click sobre el fichero), conecta tu móvil (con cable, o usando alguna app vía WiFi o Bluetooth), y copia la carpeta descomprimida que contiene las canciones (se llamará "BrotesDeOlivo") a la tarjeta SD, dentro de la carpeta "music" que ya existe en tu tarjeta (o si no existe, debes crearla tú).

Una vez descomprimido, comprueba que todo está ok: las canciones deben estar en: storage/sdcard1/music/BrotesDeOlivo/[nombre del disco]/[canción].mp3 .   
Puedes comprobarlo mediante Es File Explorer, navegando hasta ese directorio y comprobando la ruta de un fichero en la opción "información" del menú.

# Mejoras previstas
Entre las mejoras posibles se encuentran:
- selección del tiempo de pausa,
- selección de temas de oración,
 
# Antiguo
La primera versión de la app estaba elaborada mediante la herramienta "App Inventor 2" del MIT, más información en otro repositorio: https://github.com/luisgentil/brotes-AI2 .
