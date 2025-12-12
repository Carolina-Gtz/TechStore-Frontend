# 🛍️ TechStore - Frontend (React + Vite)

##TechStore Online — Frontend** 

TechStore Online es una interfaz de usuario desarrollada en React, diseñada para ofrecer una experiencia de compra rápida, optimizada para dispositivos móviles y optimización con React Query, manejo eficiente de caché, estado y actualizaciones de datos.

El sistema permite a los usuarios navegar por el catálogo, registrarse, iniciar sesión, gestionar su carrito, realizar pedidos y seguir el estado de sus compras. Los administradores pueden gestionar productos, inventario y pedidos desde un panel especializado.

El frontend consume una API REST real, mostrando productos, categorías, carritos de compra y flujos de autenticación.

---

### ⚙️ Tecnologías Principales

- React + Vite
- TypeScript
- React Router
- TanStack React Query
- Axios
- TailwindCSS
- Shadcn/UI
- ESLint + Prettier
  
---

### 🚀 Funcionalidades Principales

Catálogo dinámico de productos, Secciones destacadas y productos más vendidos renderizados desde el backend.
Consumo real desde backend, incluyendo filtros por categoría, búsqueda y productos destacados.

---

### 👤 Autenticación

Login integrado con API (JWT) autenticación de usuario, registro de usuarios, recuperación de contraseña,
Edición de perfil: nombre correo, contraseña, dirección de envío.

---

### 🛒 Catálogo y Carrito

Mostrar catálogo de productos, navegación por categorías, búsqueda y filtros 
Agregar, modificar y eliminar productos, mostrar disponibilidad según inventario.
Agregar , modificar cantidad y eliminar productos  al carrito, resumen del carrito, guardado temporal del carrito 

---

### ⚙️ Administración

- Edición de perfil: nombre correo, contraseña, Roles de usuario (cliente / administrador)  
- Agregar, editar, eliminar productos, actualizar stock, gestionar categorías  
- Ver pedidos, estado pendientes y fecha,   
- Filtros de pedidos por fecha/estado,
- Gestión de envío de productos
---

### 💳 Checkout y Pedidos

Selección de dirección de envío, selección de método de pago, resumen del pedido, confirmación de pago, generación de número de pedido  

---

## Instalación y ejecución

### 1. Clonar el repositorio

```bash
$ npm install https://github.com/Carolina-Gtz/TechStore-Frontend
```

```bash
$ git clone https://github.com/Carolina-Gtz/TechStore-Frontend
cd techstore-frontend
```
### 2. Instalar dependencias
```bash
$ npm install
```

### 3. Configurar variables de entorno
Crear un archivo .env basado en .env.template:
```bash
VITE_API_URL=http://localhost:3000
```

### 4. Ejecutar en modo desarrollo
```bash
$ npm run dev
```
El proyecto estará disponible en:
👉 http://localhost:5173

### 5. Build para producción
```bash
$ npm run build
```

## 🧠 Arquitectura Frontend + Backend

El proyecto está compuesto por dos repositorios principales:

**Frontend (React + Vite)** | Interfaz web con integración API REST | [TechStore-Frontend](https://github.com/Carolina-Gtz/TechStore-Frontend) |
**Backend (Node.js + NestJS)** | API RESTful, base de datos y lógica de negocio | [TechStore-Backend](https://github.com/Carolina-Gtz/TechStore-Backend) |

Ambos proyectos se comunican mediante solicitudes HTTP a través de la **API REST** implementada en el backend.

---

## 🧑‍💻 Autora

**👩‍💻 Yuleidis Carolina Gutiérrez Quintana**  
Desarrolladora Fullstack en formación | React - Node.js - PostgreSQL  

📧 **Correo:** [yuleidis.gtz@gmail.com](mailto:yuleidis.gtz@gmail.com)  
💼 **LinkedIn:** [Carolina Gutiérrez Quintana](https://www.linkedin.com/in/carolina-gutierrez-quintana/)  
🐙 **GitHub:** [Carolina-Gtz](https://github.com/Carolina-Gtz)
