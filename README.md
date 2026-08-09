> ⚠️ Este proyecto está actualmente en desarrollo activo. Algunas funcionalidades pueden estar incompletas o sujetas a cambios.

# Hornera de Barro - Emprendimiento de Cerámica artesanal - Frontend

Frontend de un catálogo digital para un emprendimiento de cerámica artesanal, desarrollado con **React + TypeScript**.

La aplicación permite explorar productos, filtrarlos por categorías, consultar sus detalles, armar un carrito de compras y enviar el pedido directamente al vendedor mediante WhatsApp.

---

## Demo

**Aplicación online:**
https://webhornera.netlify.app/

**Backend / API:**
https://webhorneradebarro-back.onrender.com/

---

## Información general

Este repositorio contiene el **frontend** de Hornera de Barro.

La aplicación está diseñada como un catálogo digital responsive, permitiendo a los clientes navegar por las diferentes categorías de productos, realizar búsquedas, consultar información detallada y preparar un pedido.

El carrito genera automáticamente un mensaje con los productos seleccionados, cantidades, precios y total para enviarlo al vendedor mediante **WhatsApp Click-to-Chat**.

Además, el proyecto cuenta con un área de administración protegida que permite gestionar los productos del catálogo.

---

## Funcionalidades

### Cliente

* Exploración de productos
* Productos organizados por categorías
* Barra de búsqueda
* Vista detallada de cada producto
* Visualización de imágenes, descripción y precio
* Carrito de compras
* Cálculo del total en tiempo real
* Agregar y eliminar productos del carrito
* Generación automática del pedido
* Envío del pedido mediante WhatsApp
* Diseño responsive para dispositivos móviles y escritorio

### Administrador

* Login privado
* Autenticación mediante JWT
* Ruta protegida para el panel administrativo
* Visualización del catálogo
* Creación de productos
* Edición de productos
* Eliminación de productos
* Gestión de disponibilidad
* Carga de imágenes de productos

---

## Tecnologías utilizadas

* **React** — Biblioteca para construcción de interfaces
* **TypeScript** — Tipado estático
* **Vite** — Herramienta de desarrollo y build
* **Tailwind CSS** — Estilos y diseño responsive
* **React Router** — Navegación y rutas protegidas
* **Zustand** — Manejo del estado global
* **Axios** — Comunicación con la API REST
* **Framer Motion** — Animaciones y transiciones
* **React Icons** — Iconografía

---

## Repositorio Backend

El código correspondiente al servidor y la API se encuentra en:

**[WebHorneraDeBarro — Backend](https://github.com/SophieRF/WebHorneraDeBarro-back)**

---

## Deploy

El frontend está desplegado utilizando **Netlify**.

La aplicación consume la API desplegada en **Render** mediante una variable de entorno:

```env
VITE_API_URL=https://webhorneradebarro-back.onrender.com
```

---

## Capturas

![Pantalla principal](src/assets/HomeHDB.png)
![Pantalla principal - novedades](src/assets/HomeNovedades.png)
![Pantalla principal - categorías](src/assets/HomeCategorías.png)
![Pantalla de categoría](src/assets/CategoriaScreen.png)
![Pantalla de producto](src/assets/ProductoScreen.png)
![Pantalla de carrito](src/assets/CarritoPrevHDB.png)
![Pantalla de pedido](src/assets/CarritoHDB.png)
![Sobre mi](src/assets/SobreMi.png)

---

## Autora

Desarrollado por **Sofia Ferraro** especialmente para **Hornera de Barro - cerámica artesanal**.
