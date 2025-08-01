# MasterQuiz: Aplicación de Cuestionarios Interactivos

Este es un proyecto Frontend desarrollado con React y Vite. La aplicación permite a los usuarios poner a prueba sus conocimientos a través de una serie de cuestionarios interactivos por categorías.

## Características Principales

- **Cuestionarios por Categorías:** Los usuarios pueden elegir entre diferentes categorías para empezar a jugar.
- **Juego Interactivo:** Una interfaz de juego que presenta preguntas y opciones de respuesta.
- **Resultados Detallados:** Muestra los resultados al final de cada cuestionario, indicando las respuestas correctas e incorrectas.
- **Navegación Fluida:** Utiliza React Router para una experiencia de usuario de una sola página (SPA).
- **Diseño Responsivo:** Interfaz de usuario amigable y adaptable construida con React-Bootstrap.

## Tecnologías Utilizadas

- **Framework:** [React](https://react.dev/)
- **Entorno de Desarrollo:** [Vite](https://vitejs.dev/)
- **Lenguaje:** [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) (con JSX)
- **Enrutamiento:** [React Router](https://reactrouter.com/)
- **Componentes de UI:** [React-Bootstrap](https://react-bootstrap.github.io/) y [Bootstrap](https://getbootstrap.com/)
- **Iconos:** [React Icons](https://react-icons.github.io/react-icons/)

## Prerrequisitos

- [Node.js](https://nodejs.org/en/) (v18 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

## Instalación

1.  **Clonar el repositorio:**

    ```bash
    git clone https://github.com/EmanuelRigo/masterquiz.git
    cd masterquiz
    ```

2.  **Instalar dependencias:**

    ```bash
    npm install
    ```

## Configuración

Este proyecto no requiere un archivo de configuración de variables de entorno `.env` para su funcionamiento básico.

## Cómo Ejecutar la Aplicación

1.  **Iniciar la aplicación en modo de desarrollo:**
    Desde el directorio raíz del proyecto:

    ```bash
    npm run dev
    ```

    La aplicación se ejecutará en `http://localhost:5173` (o el siguiente puerto disponible que Vite asigne).

2.  **Compilar para producción:**
    Para crear una versión optimizada de la aplicación:
    ```bash
    npm run build
    ```
    Los archivos compilados se guardarán en el directorio `dist/`.

Abre la URL proporcionada por Vite en tu navegador para ver la aplicación en funcionamiento.

## Estructura del Proyecto

```
.
├── public/             # Archivos estáticos (íconos, etc.)
├── src/                # Código fuente del proyecto
│   ├── assets/         # Recursos como imágenes o fuentes
│   ├── components/     # Componentes reutilizables de React
│   ├── context/        # (Si aplica) Contextos de React para gestión de estado
│   ├── pages/          # (Si aplica) Componentes que actúan como páginas completas
│   ├── App.jsx         # Componente principal de la aplicación
│   ├── main.jsx        # Punto de entrada de la aplicación
│   └── questionsDB.json # Base de datos de preguntas en formato JSON
├── .eslintrc.cjs       # Configuración de ESLint
├── .gitignore          # Archivos ignorados por Git
├── package.json        # Dependencias y scripts del proyecto
└── README.md           # Este archivo
```
