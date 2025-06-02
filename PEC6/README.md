# README.md
## Login UOC
ocardonaa

## Nombre y apellidos
Oriol Cardona Alsina

## Dificultades y ejercicios realizados en esta PEC

Ej1: en este ejercicio usé los cursos de O'Reilly para completar el ejercicio. El apartado c) fue el más complejo por reunir todos los datos, por lo que revisando cuidadosamente la documentación pude encontrar cada uno de los conceptos y ofrecer una definición de ellos.

Ej2: tuve muchas dificultades para adaptar el form reactivo y colocar los Observables y las pipes. Al final, los observables los posicioné en el servicio y las pipes en la lista de articulos. Luego introduje más cambios de cara a poder implementar más Observables que aprovechan APIs asincronas y solucioné un error por el cual no se leia bien si el articulo estaba disponible o no. En el ejercicio 4 con las llamadas de HTTP se cambiará la forma de interactuar con las APIs, pero por ahora se emplean los observables, las emisiones y las subscripciones.

Ej3: foros de internet y los libros de O'Reilly me han ayudado a completar este ejercicio. Sobretodo en la última linea que no la terminaba de comprender.

Ej4: mis primeras dificultades con este ejercicio surgieron con el como comprender y llamar a la API, ya que tenia dudas con respecto a si iba dentro o fuera de ecommerce y donde se posicionaban las imagenes. Tras solventar esa duda, me surgieron problemas con la llamada para cambiar la cantidad, ya que no sabia bien como gestionar el evento desde el front y habia problemas con el tipo de datos que devuelve la API. Devolviendo el article found, ya se actualizaba, pero lo he comentado con el profesor ya que hay instrucciones de no tocar la implementación de la API, sin embargo teniendo en cuenta que changeQuantity devuelve un "Observable< Article >", es possible que ahi surja el problema. Al final, para realizar el filtrado para buscar utilizé pipes, ya que seguí leyendo la documentación y vi que usar una pipe era lo más recomendable. Tuve dudas con el uso de los métodos pero la documentación oficial de RxJs y foros en internet especifican más y mejor que hacen los métodos que he usado, y sobretodo para como construir la pipe.

**Aclaración:** por la implementación empleada para crear el ejercicio y los métodos, en la API se ha introducido el siguiente cambio, en el retorno del métodod PATCH, en caso que encuentre el articulo se retorna el artículo y no un mensaje sobre que el cart ha sido actualizado. Aqui la linea
`return res.status(200).json(foundArticle);`
Esto garantiza el funcionamiento en el front-end, ya que sino no sabe que cantidad añadir en el cart

Ej5: en este ejercicio no tuve dificultades, ya que siguiendo el video sobre Pipes de O'Reilly se solucionó sin inconvenientes. Solo aclarar que la imagen sigue siendo un campo obligatorio en el formulario reactivo, por lo que ninguno de los nuevos articulos tendrá una imageUrl vacia. Si esa imagen no se muestra correctamente no se pondrá la imagen default, por lo que solo el articulo2 puede aspirar a este cambio, o cambiar el formulario reactivo para hacer de la imagen un campo opcional.