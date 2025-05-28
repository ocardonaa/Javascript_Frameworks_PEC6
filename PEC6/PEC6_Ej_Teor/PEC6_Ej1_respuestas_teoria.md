## 1. a) ¿Cuál es la función de los componentes y servicios? (i.e. cuándo se debe utilizar cada uno de ellos)
- Los componentes son los encargados de mostrar los datos en nuestra aplicación de Angular. Deciden que datos se muestran en la UI y como.
- Los servicios llevan la lógica incorporada. Son una capa común en toda la aplicación, que puede ser usada en varios puntos. Por ello, lo servicios se encargan de traer estos datos que se han de mostrar en la aplicación.
## 2. b) ¿Qué es la <<inyección de dependencias>>? ¿Para qué sirve el decorador @Injectable?
- La inyección de dependencias es la idea de que cualquier clase o función pide sus dependencias en vez de instanciarlas directamente, para asi que estas clases y funciones tengan un solo propósito, y el inyector se encarga de buscar la manera de hacer la inyección.
- El decorador @Injectable será el encargado de gestionar la inyección del servicio en la clase/función.
## 3. c) Explica los siguientes conceptos de la programación reactiva que se usan en RxJS:
- Observable: representa un conjunto de datos que puede ser observado a lo largo del tiempo. Estos emiten varios valores y no emiten hasta que no hay un subscriptor.
- Subscription: es la ejecución de un observable. Cuando te suscribes a un Observable, das una función que será llamada cada vez que el Observable emita un valor.
- Operators: se usan para manipular los datos del Observable. Hay muchas funciones para transformar, filtrar, combinar y manejar los Observables.
- Subject: es un tipo especial de Observable que permite a un valor ser enviado a varios Observables. Muy útil si quieres compartir un valor con varios subscriptores.
- Schedulers: controlan el timing para emitir sus valores. Te permiten especificar la ejecución del contexto para el Observable y dedicir si deberia ejecutarse sincrona o asincronamente, y en que thread.
## 4. d) ¿Cuál es la diferencia entre promesas y observables?
- Los observables pueden ser cancelables mientras que las promesas no.
- Los observables nos permiten operar en un grupo de 0 o varios eventos asincronos, mientras que las promesas solo 1 evento asincrono.
- Los observables nos permiten componer y crear fácilmente una cadena de transformaciones.
## 5. e) ¿Cuál es la función de la tubería (pipe) async?
- Te permite hacer bind del Observable. De modo que hace la tarea necesaria pero además se le añade la opción de ser asincrona gracias a la pipe |.