# 🎓 Proyecto AcmeSchool - Plataforma de Gestión y Realización de Exámenes

## 📖 Descripción

AcmeSchool es una plataforma web desarrollada en JavaScript que permite la administración de usuarios, gestión de exámenes y la realización de pruebas en línea.

La aplicación fue construida utilizando HTML, CSS y JavaScript Vanilla, implementando una arquitectura modular basada en componentes y almacenamiento local mediante LocalStorage.

El sistema permite que usuarios administrativos y docentes gestionen la información de la plataforma mediante autenticación previa, mientras que los estudiantes pueden realizar exámenes de forma pública sin necesidad de iniciar sesión.

---

## 🚀 Características Principales

### 🔐 Login
- Inicio de sesión mediante correo electrónico y contraseña.
- Validación de credenciales.
- Protección de rutas privadas.
- Cuenta administrativa por defecto.

### 👥 Gestión de Usuarios
- Crear usuarios.
- Editar usuarios.
- Eliminar usuarios.
- Visualizar usuarios registrados.
- Gestión de:
  - Identificación
  - Nombre completo
  - Email
  - Teléfono
  - Cargo
  - Contraseña

### 📝 Gestión de Exámenes
- Crear exámenes.
- Actualizar exámenes.
- Eliminar exámenes.
- Visualizar exámenes registrados.
- Gestión de:
  - Código
  - Título
  - Tiempo de resolución
  - Porcentaje de aprobación
  - Descripción
  - Preguntas
  - Respuestas

### 🎯 Resolución de Exámenes
- Acceso público.
- Selección de examen disponible.
- Registro de identificación y nombre del estudiante.
- Temporizador en tiempo real.
- Selección única de respuesta por pregunta.
- Finalización manual o automática por tiempo.
- Cálculo automático de resultados.
- Visualización de:
  - Porcentaje obtenido.
  - Estado de aprobación o reprobación.

### 💾 Persistencia de Datos
- Implementación utilizando LocalStorage y SessionStorage.
- Almacenamiento de:
  - Usuarios
  - Exámenes
  - Preguntas


### 📱 Diseño Responsive
- Adaptable a dispositivos móviles.
- Interfaz amigable.
- Experiencia de usuario intuitiva.


# 🏗️ Estructura del Proyecto

```bash
ProyectoAcmeschool_JavaScript_ApellidoNombre/
│
├── AutentificarCuenta/
│   └── Funcion relacionada con autenticación y validación de sesión.
│
├── CalificacionFinal/
│   └── Lógica para cálculo y visualización de resultados.
│
├── FundamentosJS/
│   └── Registro de datos para realizar examen.
│
├── GestionDeExamenes/
│   └── CRUD de exámenes, preguntas y respuestas.
│
├── GestionUsuarios/
│   └── CRUD de usuarios.
│
├── Login/
│   └── Inicio de sesión y control de acceso.
│
├── RealizarExamen/
│   └── Módulo público para resolver exámenes.
│
├── sources/
│   └── Recursos y componentes auxiliares.
│
├── AcmeSchool.png
├── imgcentral.jpg
├── appMain.js
├── indexMain.html
├── styleMain.css
└── README.md
```

---

# 🏠 Vista Principal

La aplicación tiene como punto de entrada el archivo:

```html
indexMain.html
```

Desde esta vista se pueden realizar las siguientes acciones:

- Visualizar los exámenes disponibles.
- Acceder al módulo de realización de exámenes.
- Iniciar sesión para acceder a los módulos administrativos.

Toda la navegación de la aplicación se encuentra centralizada desde este archivo.

---

# 🔑 Credenciales de Acceso por Defecto

Para facilitar las pruebas iniciales del sistema, se crea automáticamente un usuario administrador.

### Usuario Administrador

```text
Correo:
admin

Contraseña:
admin
``

> Las credenciales pueden modificarse posteriormente desde el módulo de Gestión de Usuarios.

---

# 📊 Estructura de Datos

La información se almacena utilizando LocalStorage mediante estructuras JSON.

## Usuarios

```json
{
  "cc": "1005331755",
  "nombre": "Administrador",
  "email": "admin@acmeschool.com",
  "telefono": "3001234567",
  "cargo": "Administrativo",
  "password": "admin"
}
```

## Exámenes

```json
{
  "codigo": "EX001",
  "titulo": "JavaScript Básico",
  "tiempo": 30,
  "porcentajeAprobacion": 70,
  "descripcion": "Evaluación de fundamentos de JavaScript",
  "preguntas": []
}
```

## Preguntas

```json
{
   "numeroPregunta" : numeroPregunta,
  "preguntaQuestion": "¿Qué es JavaScript?",
  "respuestas": [
    {
      "respuesta": "Lenguaje de programación",
      "correcta": true
    },
    {
      "respuesta": "Sistema operativo",
      "correcta": false
    }
  ]
}
```

---

# ⚙️ Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript ES6+
- LocalStorage
- Web Components

---

# 🔒 Control de Acceso

| Módulo | Requiere Login |
|----------|----------|
| Login | ❌ |
| Realizar Examen | ❌ |
| Gestión de Usuarios | ✅ |
| Gestión de Exámenes | ✅ |
| Calificaciones | ❌ |

---

# 🎨 Experiencia de Usuario

El proyecto fue diseñado teniendo en cuenta:

- Interfaz limpia y moderna.
- Navegación intuitiva.
- Feedback visual para acciones importantes.
- Diseño responsive.
- Animaciones y transiciones suaves.
- Temporizador en tiempo real para exámenes.

---

# 📋 Flujo General del Sistema

```text
Inicio
│
├── Ver exámenes disponibles
│
├── Realizar examen
│   ├── Ingresar identificación
│   ├── Ingresar nombre
│   ├── Resolver examen
│   ├── Finalizar
│   └── Ver resultado
│
└── Login
    │
    ├── Gestión de Usuarios
    │
    ├── Gestión de Exámenes
    │
    └── Consultar Resultados
```

---

# 👨‍💻 Autor

Proyecto desarrollado como evidencia final del Skill JavaScript para Campuslands.

**Nombre:** Gabriela Rincon - Brayan Riaño - Sebastian Sierra

**Repositorio:**

ProyectoAcmeschool_JavaScript_SierraSebastian_RinconGabriela_RianoBrayan

---

# 📄 Licencia

Proyecto desarrollado con fines académicos y educativos.
