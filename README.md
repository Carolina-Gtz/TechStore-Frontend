# 🛍️ TechStore - Frontend (React + Vite)

## 📘 Descripción General
**TechStore** es una aplicación web de comercio electrónico diseñada para ofrecer una experiencia de compra completa, moderna y escalable.  
Este repositorio contiene el **frontend** del proyecto, desarrollado con **React**, **Vite** y una arquitectura modular basada en componentes, servicios y rutas.

El sistema permite a los usuarios navegar por el catálogo, registrarse, iniciar sesión, gestionar su carrito, realizar pedidos y seguir el estado de sus compras.  
Los administradores pueden gestionar productos, inventario y pedidos desde un panel especializado.

---

## 🧩 Arquitectura del Proyecto

| Carpeta / Archivo | Propósito                                                                                   |
| ----------------- | ------------------------------------------------------------------------------------------- |
| `public/`         | Archivos estáticos accesibles directamente (íconos, favicon, imágenes).                     |
| `src/assets/`     | Recursos multimedia y estilos globales que usa tu app (logos, CSS global, fuentes).         |
| `src/components/` | Componentes reutilizables como `Navbar`, `Footer`, `ProductCard`, `CartItem`, etc.          |
| `src/pages/`      | Las **vistas principales** del sitio (Home, Login, Register, Catalogo, Checkout, Admin).    |
| `src/routes/`     | Configuración de las rutas de navegación con React Router (por roles o secciones).          |
| `src/services/`   | Lógica de conexión con la **API REST** (peticiones HTTP a tu backend con Axios).            |
| `src/context/`    | Estados globales compartidos, por ejemplo `AuthContext`, `CartContext`, etc.                |
| `src/hooks/`      | **Custom Hooks** (por ejemplo, `useAuth`, `useFetch`, `useCart`), para lógica reutilizable. |
| `src/utils/`      | Funciones auxiliares (validaciones, formateo de precios, control de tokens).                |
| `src/styles/`     | Estilos CSS globales o configuraciones Tailwind personalizadas.                             |
| `App.jsx`         | Componente raíz donde se cargan las rutas y la estructura base de la app.                   |
| `main.jsx`        | Punto de entrada principal donde React monta el árbol de componentes.                       |
| `.env.example`    | Plantilla para variables de entorno (como `VITE_API_URL`).                                  |

---

## ⚙️ Tecnologías Principales

| Tecnología | Descripción |
|-------------|-------------|
| **React 18** | Librería base para el desarrollo del frontend |
| **Vite** | Entorno de desarrollo rápido y optimizado |
| **React Router v6** | Manejo de rutas y navegación SPA |
| **Context API / Hooks** | Gestión del estado global |
| **Tailwind CSS** | Estilos modernos y responsivos |
| **Axios** | Consumo de la API REST del backend |
| **ESLint + Prettier** | Formato y buenas prácticas de código |

---

## 🚀 Funcionalidades Principales

### 👤 Autenticación
- **RF01:** Registro de usuarios  
- **RF02:** Inicio de sesión  
- **RF03:** Recuperación de contraseña  
- **RF04:** Edición de perfil  
- **RF05:** Roles de usuario (cliente / administrador)  
- **RF06:** Permisos para administradores  

### 🛒 Catálogo y Carrito
- **RF07:** Mostrar catálogo de productos  
- **RF08:** Disponibilidad según inventario  
- **RF09:** Navegación por categorías  
- **RF10:** Búsqueda y filtros  
- **RF11:** Agregar al carrito  
- **RF12:** Modificar cantidad  
- **RF13:** Eliminar productos  
- **RF14:** Resumen del carrito  
- **RF15:** Guardado temporal del carrito  

### 💳 Checkout y Pedidos
- **RF16:** Selección de dirección de envío  
- **RF17:** Selección de método de pago  
- **RF18:** Resumen del pedido  
- **RF19:** Confirmación de pago  
- **RF20:** Generación de número de pedido  
- **RF21:** Historial de pedidos  

### ⚙️ Administración
- **RF22:** Filtros de pedidos por fecha/estado  
- **RF23:** Agregar productos  
- **RF24:** Editar productos  
- **RF25:** Eliminar productos  
- **RF26:** Actualizar stock  
- **RF27:** Gestionar categorías  
- **RF28:** Ver pedidos pendientes  
- **RF29:** Gestión de envío de productos  

---

## 🧠 Arquitectura Frontend + Backend

El proyecto está compuesto por dos repositorios principales:

| Módulo | Descripción | Repositorio |
|--------|--------------|-------------|
| **Frontend (React + Vite)** | Interfaz web con integración API REST | [TechStore-Frontend](https://github.com/Carolina-Gtz/TechStore-Frontend) |
| **Backend (Node.js + Express)** | API RESTful, base de datos y lógica de negocio | [TechStore-Backend](https://github.com/Carolina-Gtz/TechStore-Backend) |

Ambos proyectos se comunican mediante solicitudes HTTP a través de la **API REST** implementada en el backend.

---

## 🧪 Estado Actual del Proyecto

| Estado | Descripción |
|---------|--------------|
| ✅ Completado | Diseño inicial, autenticación, carrito, catálogo |
| 🚧 En desarrollo | Checkout, gestión de pedidos, panel administrador |
| 📅 Próximos pasos | Integración total con backend, despliegue y pruebas |

---

## 🧑‍💻 Autora

**👩‍💻 Yuleidis Carolina Gutiérrez Quintana**  
Desarrolladora Fullstack en formación | React - Node.js - PostgreSQL  

📧 **Correo:** [yuleidis.gtz@gmail.com](mailto:yuleidis.gtz@gmail.com)  
💼 **LinkedIn:** [Carolina Gutiérrez Quintana](https://www.linkedin.com/in/carolina-gutierrez-quintana/)  
🐙 **GitHub:** [Carolina-Gtz](https://github.com/Carolina-Gtz)
