## 1. a. ¿Cuál es la diferencia entre definir un servicio usando el decorador @Injectable o @NgModule?
- Usar el decorador Injectable hace que pueda ser usado en más clases y además puedes definir el scope
- Usar el decorador NgModule define un modulo de Angular, pero su proposito no es el de un servicio, además que su scope solo es ese modulo

## 2. b. ¿Qué otras opciones admiten el decorador @Injectable para la propiedad ProvidedIn? ¿Para qué sirven las otras configuraciones?
- Root: inyecta a toda la aplicación. Muy útil si el servicio tiene que ir dirigido a toda la aplicación.
- Platform: muy similar a root, pero la diferencia es que en platform cuando hay varias aplicaciones abiertas compartirá servicios con más aplicaciones. Útil para compartir servicios entre elementos de Angular.
- Any: servicio definido para cada modulo que es usado, y habrá multiples instancias del mismo servicio. Una buena alternativa a root para que no haya efectos secundarios entre modulos individuales.