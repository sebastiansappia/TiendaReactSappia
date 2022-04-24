

# Entrega Final | React JS | Coderhouse
Comisión 31120
### Alumno: Sebastián Ignacio Sappia Etcheto

![Wolf | Tienda de Ropa](https://raw.githubusercontent.com/sebastiansappia/TiendaReactSappia/main/public/readme/logo_wolf.png)

''WOLF CLOTHES" Es un desarrollo web de tipo E-commerce utilizando la librería React JS de Javascript.

Esta librería está desarrollada y mantenida por la empresa Facebook.

## El repositorio del proyecto
Se puede descargar el proyecto que esta subido en GITHUB desde la siguiente URL:
[https://github.com/sebastiansappia/TiendaReactSappia.git](https://github.com/sebastiansappia/TiendaReactSappia.git)

### `npm start`

🐺 Corre la APP en el modo producción
Abrir [http://localhost:3000](http://localhost:3000) para ver el proyecto en el navegador.

#### Otras tecnologías utilizadas

 - La hoja de estilo utilizada esta dentro de la carpeta /src/app.css
 - También se importo material UI para ciertos elementos de grid y button
 - Para la base de datos se utiliza el servicio de firebase de google

#### Firebase
El proyecto cuenta con 2 colecciones de firebase, una para manejar el stock de productos, la otra para guardar los usuarios que terminan el proceso de compra.

#####  Colección Items: Guarda la información de los items disponibles
#####  Colección Orders: Guarda la información de las ordenes de compra

#### El flujo de utilización de la aplicación sería el siguiente

 1. El usuario elige el articulo y la cantidad que quiere agregar al carrito
 2. Ese articulo esta limitado por el stock establecido para cada uno
 3. Puede ingresar o no al detalle de cada producto, pudiendo realizar la misma acción de agregar cantidad de producto.
 4. Luego una vez el carrito se encuentra con los items que el usuario quiere, seleccionará la opción de finalizar compra
 5. En la pantalla de carrito confirmará que lo que se agregó esta bien y podrá visualizar el monto total del carrito
 6. En la pantalla de Checkout completá el formulario con los datos solicitados.
 7. Se termina el proceso con el número de orden y un mensaje por parte del sistema.

### El proyecto esta separado en componentes de React que se encuentran en la carpeta /src/components/

### Las paginas para el correcto ruteo de la app se encuentran en /src/pages/

## Pantallas del sitio web



### Homepage
Es la pantalla principal del sitio, donde se pueden ver todos los productos de la colección items, clickeando en las opciones de categoría, por ejemplo, "REMERAS", la app hace un filtrado y traé únicamente los items que correspondan a esa categoría.

![Home page](https://raw.githubusercontent.com/sebastiansappia/TiendaReactSappia/main/public/readme/screen_home.jpg)

### Item Detail Page

Es la pagina de detalle de cada item, se la filtra llamando por su item.id

![Item detail](https://raw.githubusercontent.com/sebastiansappia/TiendaReactSappia/main/public/readme/screen_detail.jpg)

### Items agregados al carrito

Es un modal que se despliega cuando hay items agregados al carrito para que el usuario pueda visualizarlo. Pudiendo eliminar cada item tanto desde este modal, como desde la card de cada item independiente.

![Items agregados al carrito](https://raw.githubusercontent.com/sebastiansappia/TiendaReactSappia/main/public/readme/screen_item_agregados.jpg)

### Carrito

La pantalla de carrito muestra los items agregados por el usuario, pudiendo también eliminarlos

![Items agregados al carrito](https://raw.githubusercontent.com/sebastiansappia/TiendaReactSappia/main/public/readme/screen_carrito.jpg)

### Checkout

El checkout está compuesto por el formulario que solicita los datos a procesar, y un detalle final de lo que sería la compra.

![Checkout](https://raw.githubusercontent.com/sebastiansappia/TiendaReactSappia/main/public/readme/screen_checkout.jpg)

### Procesamiento final

Se muestra un mensaje de que la orden fue generada correctamente. 

![Procesamiento final](https://raw.githubusercontent.com/sebastiansappia/TiendaReactSappia/main/public/readme/screen_final.jpg)

### Contacto
E-mail: [sebastian.sappia@gmail.com](mailto:sebastian.sappia@gmail.com)
Teléfono: +54 9 11 6490 8885

## ¡Muchas gracias por la cursada!