
# 🌐Proyecto de ReactJS de CoderHouse: BRANKITS Store🌟

BRANKITS Store es un simulador de e-commerce desarrollado con React.js que permite a los usuarios navegar, seleccionar y comprar productos categorizados. El proyecto incluye una integración con Firebase para la gestión de productos y pedidos.

## ⚙️Características

- **Catálogo dinámico**: Visualiza productos organizados por categorías.
- **Carrito de compras**: Agrega y elimina productos en tiempo real.
- **Integración con Firebase**: Almacena productos y registra pedidos.
- **Responsive Design**: Optimizado para múltiples dispositivos.
- **Sistema de contextos**: Uso de Context API para la gestión del estado global del carrito.

## 🛠️Tecnologías Utilizadas

- **Frontend**:
  - React.js
  - CSS
  - React Router
- **Backend**:
  - Firebase (Firestore Database)
- **Herramientas adicionales**:
  - Vite para el empaquetado y desarrollo
  - ESlint para el linting

---

## Estructura del Proyecto

```plaintext
Proyecto-Final-copia/proyecto-final-React/
├── node_modules/          # Dependencias instaladas
├── public/                # Archivos públicos
├── src/                   # Código fuente principal
│   ├── assets/            # Imágenes y fuentes
│   ├── components/        # Componentes React
│   │   ├── styles/        # Hojas de estilo CSS de los componentes
│   ├── context/           # Context API para el carrito
│   ├── firebase/          # Configuración y utilidades de Firebase
│   ├── styles/            # Estilos globales
│   ├── App.jsx            # Componente principal
│   └── main.jsx           # Punto de entrada de la aplicación
├── .gitignore             # Archivos ignorados por Git
├── package.json           # Información y dependencias del proyecto
└── vite.config.js         # Configuración de Vite
```

---

## 🚀Principales Componentes

### 1. **Cart.jsx**

Gestión y visualización del carrito de compras.

### 2. **Item.jsx**

Tarjeta individual para mostrar productos.

### 3. **ItemDetail.jsx**

Detalles específicos de un producto, incluyendo descripción y opción de agregar al carrito.

### 4. **NavBar.jsx**

Barra de navegación con categorías y acceso al carrito.

### 5. **Checkout.jsx**

Formulario para completar la compra y generar órdenes.

## Mejoras Futuras Posibles

1. Implementar autenticación de usuarios con Firebase Authentication.
2. Añadir sistema de favoritos para productos.
3. Integrar pasarela de pagos como Stripe o MercadoPago.

**Repositorio del Proyecto**:

```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
```

---

_🧑‍💻 Autor Mateo Brancato – Desarrollador Web LinkedIn: https://www.linkedin.com/in/mateobrancatosb1/ GitHub: https://github.com/MateoSB1_
