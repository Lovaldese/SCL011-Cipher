Parte Obligatoria
Usa este alfabeto simple (solamente mayúsculas y sin ñ):

A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
Definición del producto
En el README.md, cuéntanos cómo pensaste en los usuarios y cuál fue tu proceso para definir el producto final a nivel de experiencia y de interfaz.




Quiénes son los principales usuarios de producto.

* Los principales usuarios son las personas mayores a 18 años, que consumen marihuana de forma recreativa o medicinal.



Cuáles son los objetivos de estos usuarios en relación con tu producto.

* Los principales objetivos que tengo para crear esta aplicacion web es que:
* Siempre tengan alternativas para consumir.
* Puedan escoger las especies que deseen cosumir.
* Siempre puedan tener stock.
* Al tener oferta y demanada los precios son accesibles.
* Consumo de buenas plantaciones, ya que se hace un segumiento a los proveedores que estan en la plataforma.

Cómo crees que el producto que estás creando está resolviendo sus problemas:
* Creo que los resuelve porque:
* Al tener seguimiento los proveedores les aseguramos que lo que se esta vendiendo es de calidad.
* Al generar oferta los precios son accesibles para todos.
* Independiente de la epoca del año, siempre existe stock.

Interfaz de usuario (UI)
La interfaz debe permitir al usuario:

Elegir un desplazamiento (offset) indicando cuántas posiciones queremos que el cifrado desplace cada caracter.
Insertar un mensaje (texto) que queremos cifrar.
Ver el resultado del mensaje cifrado.
Insertar un mensaje (texto) a descifrar.
Ver el resultado del mensaje descifrado.
Scripts / Archivos

README.md: 
Debe explicar cómo descargar:
* Para ingresar a mi aplicacion solo debes ingresar tu edad. Si esta es mayor a 18 años, tienes permitido ver el contenido de la pagina, por el contrario si eres menor de edad, la pagina desaparece.

Ejecutar la aplicación así como una introducción a la aplicación:
Para poder usar la aplicacion

Su funcionalidad:
*Es super amigable con la persona que desea entrar, ya que solo pide la edad para ser parte y enviar el mensaje junto conel contenido que se requiere.

Decisiones de diseño que tomaron:
*El diseño que tenia , fue modificado constantemente.
*Diseñe mi prototipo en papel.
*Diseñe mi prototipo en balsamiq.

src/index.html: este es el punto de entrada a tu aplicación. Este archivo debe contener tu markup (HTML) e incluir el CSS y JavaScript necesario.
src/cipher.js: acá debes implementar el objeto cipher, el cual debe estar exportado en el objeto global (window). Este objeto (cipher) debe contener dos métodos:
cipher.encode(offset, string): offset es el número de posiciones que queremos mover a la derecha en el alfabeto y string el mensaje (texto) que queremos cifrar.
cipher.decode(offset, string): offset es el número de posiciones que queremos mover a la izquierda en el alfabeto y string el mensaje (texto) que queremos descifrar.
src/index.js: acá debes escuchar eventos del DOM, invocar cipher.encode() o cipher.decode() según sea necesario y actualizar el resultado en la UI.
test/cipher.spec.js: este archivo contiene algunos tests de ejemplo y acá tendrás que implementar los tests para cipher.encode() y cipher.decode().