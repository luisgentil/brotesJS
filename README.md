# Presentación
La app "Orar con Brotes de Olivo" te permite escuchar 3 canciones del grupo Brotes de Olivo (intro, medio, final), dejando una pausa entre ellas. La combinación de canciones varía cada día entre una selección de canciones.
La pausa entre canciones es de 60 segundos.
Actualmente existe una versión de escritorio, disponible online en la web (provisional https://luisgentil.neocities.org/), y una versión Android.
La versión Android reproduce las canciones desde internet, aunque también pueden ser descargadas a la tarjeta SD del teléfono, evitando el consumo de datos.
Esta versión está elaborada con el software Phonegap, disponible en www.phonegap.com.

La selección de música puede descargarse desde Dropbox en la dirección https://www.dropbox.com/s/y4r6eql7ilo3ynv/BrotesDeOlivo_JS_170630.zip?dl=1.

# Versión online
Visita la página (provisional: https://luisgentil.neocities.org/).
Conecta los altavoces o los auriculares :)

# Descarga e instalación en Smartphone
Desde el repositorio en Phonegap, https://build.phonegap.com/apps/2690877/share:
- Escanenado el código BIDI
- Android: descarga el archivo apk, guárdalo en el teléfono y ábrelo. (provisional) Debes tener activada la opción de "instalar aplicaciones desde orígenes desconocidos". Descarga la app (archivo .apk) en tu teléfono android. Al hacer click debe ofrecerte la opción de instalar, acepta. Si no te permite instalar, activa la opción Ajustes > Seguridad > Orígenes desconocidos.
- Windows Phone: descarga el archivo appx, e instala la app.

Para escuchar la música debes disponer de conexión a internet. 
Si deseas reproducir la música desde tu propio teléfno, descarga el archivo *BrotesDeOlivo_JS_170630.zip* a tu teléfono desde Dropbox (https://www.dropbox.com/s/y4r6eql7ilo3ynv/BrotesDeOlivo_JS_170630.zip?dl=1). Si lo haces desde el propio teléfono, lo más probable es que esté descargado en una de las carpetas:
- Downloads
- My Documents/Downloads

Necesitarás una aplicación que pueda acceder a las carpetas, descomprimir archivos y moverlos. Yo he usado ES File Explorer, es fácil de usar y muy eficaz. Disponible gratis en Google Play. 

Desde la carpeta donde esté situado el fichero descargado, selecciona el fichero y elige la opción Más > Descomprimir. Cuando haya terminado, selecciona la carpeta creada y elige la opción Más > Mover A. En la pantalla que se abre, navega hasta storage> sdcard1> music, y elige esa ubicación para la carpeta. 

Una vez descomprimido, comprueba que todo está ok: las canciones deben estar en: storage/sdcard1/music/BrotesDeOlivo/[canción].mp3 .  Puedes comprobarlo mediante Es File Explorer, navegando hasta ese directorio y comprobando la ruta de un fichero en la opción "información" del menú.

# Mejoras previstas
Entre las mejoras posibles se encuentran:
- selección del tiempo de pausa,
- selección de temas de oración,
 
# Antiguo
La primera versión de la app estaba elaborada mediante la herramienta "App Inventor 2" del MIT, más información en otro repositorio: https://github.com/luisgentil/brotes-AI2 .
