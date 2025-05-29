## 1. a) ¿Qué son los interceptores?
- Son una forma de interceptar y modificar HTTP requests. Estos te permiten modificar campos de la petición HTTP

## 2. b) Analiza la siguiente cadena de operadores de RxJS, explica cada uno de los pasos que se están desarrollando y explica en qué caso usarías este código:
this.wines$ =  this.searchSubject: inicia las operaciones
.startWith(this.searchTerm): utilizado para inicializar el stream de datos. Emite el valor inmediatamente cuando el observable es subscrito.
.debounceTime(300) : atrasa 300 milisegundos la emision de valores del observable. Solo emite el último valor si ningun valor es emitido en ese tiempo.
.distinctUntilChanged(): evita que el observable envie el mismo valor varias veces.
.merge(this.reloadProductsList): combina nuestro observable searchSubject con reloadProductsList. Cuando cualquiera de los 2 observables emite un valor, se fusiona y emite ese valor.
.switchMap((query) => this.wineService.getWine(this.searchTerm));: toma el último valor emitido y lo cambia a un nuevo observable devuelto por la función.