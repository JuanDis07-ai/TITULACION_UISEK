# Proyecto de Titulación - UISek

## Título
**Desarrollo de un Sistema Web Integrado para la Gestión de Documentación Digital del Servicio Integrado de Seguridad ECU 911**

## Autores
- Bryan Andrés Sosa Sánchez
- Juan Diego Cueva Alamachi

## Directora de Proyecto
- Ing. Viviana Cajas

---

## Enlaces

- Repositorio GitHub: [TITULACION_UISEK](https://github.com/JuanDis07-ai/TITULACION_UISEK)
- Jira Project: (No aplica)

---

## Instrucciones para levantar el ambiente de desarrollo

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn
- Git
- Base de datos (ej. MySQL o PostgreSQL)

### Instalación

1. Clona este repositorio:

```bash
git clone https://github.com/JuanDis07-ai/TITULACION_UISEK.git
cd TITULACION_UISEK
----------------------
npm install
----------------------
DB_HOST=localhost
DB_PORT=5432
DB_NAME=ecu911
DB_USER=admin
DB_PASSWORD=admin123
----------------------
npm run migrate
----------------------
npm run dev
----------------------
```

## Descripción del Proyecto
**Este proyecto busca modernizar y centralizar la gestión de la documentación digital del SIS ECU 911, reemplazando sistemas antiguos con una plataforma web integrada, escalable y con una base de datos estructurada bajo el modelo entidad-relación.**

## Tecnologías Usadas
- Frontend: Angular
- Backend: Node.js
- Base de Datos: PostgreSQL
- Control de versiones: Git + GitHub

## Estado del Proyecto
**Avance I completo: Diagnóstico, pronóstico, control y objetivos definidos. Arquitectura inicial en construcción.**

Funcionalidades del Sistema Web Integrado
El sistema desarrollado para el Servicio Integrado de Seguridad ECU 911 constituye una plataforma tecnológica robusta y modular, diseñada para centralizar, estandarizar y digitalizar los procesos relacionados con la gestión documental institucional. A continuación, se describen en detalle las funcionalidades implementadas:

Módulo de Inicio
La pantalla principal del sistema brinda una introducción institucional con un mensaje visual de alto valor institucional, mostrando la Política de Calidad del ECU 911 y una fotografía representativa del equipo operativo. Este módulo tiene como objetivo generar una experiencia inicial alineada con los principios de identidad corporativa y cultura organizacional. Desde esta vista, el usuario entiende inmediatamente el propósito del sistema y el enfoque de mejora continua.

Módulo de Diccionario Institucional
Este componente representa el corazón conceptual del sistema. Permite gestionar un repositorio digital centralizado de definiciones institucionales, incluyendo términos técnicos, administrativos y operativos que forman parte del día a día del ECU 911. Las funcionalidades incluyen:

Consulta rápida y búsqueda inteligente por palabra clave o categoría.

Registro de nuevos conceptos con campos como: término, definición, área responsable, fecha de ingreso y estado.

Edición de definiciones existentes, garantizando la actualización permanente del conocimiento organizacional.

Eliminación lógica para evitar pérdidas de información histórica.

Control de cambios y auditoría interna, ideal para revisiones institucionales o procesos de calidad.

Este módulo promueve una gestión del conocimiento institucional efectiva, evitando ambigüedades y facilitando la capacitación de nuevos funcionarios.

Módulo de Gestión de Usuarios
Incluye una interfaz clara y segura para el manejo del acceso al sistema. Las funcionalidades principales son:

Registro de nuevos usuarios, con validación de correo institucional y asignación de roles.

Control de roles y permisos (Admin, Editor, Lector) basado en el principio de mínimos privilegios.

Listado completo de usuarios activos, con filtros y paginación para una navegación óptima.

Activación/Inactivación de usuarios, lo que facilita la gestión del personal sin perder trazabilidad.

Este módulo asegura que solo el personal autorizado pueda realizar operaciones críticas, reforzando así la seguridad de la plataforma.

Módulo de Reportes
Se ha diseñado un sistema de generación y visualización de reportes, que permite a los administradores analizar el uso de la plataforma y tomar decisiones informadas. Las características incluyen:

Dashboard de indicadores clave, como número de definiciones activas, usuarios registrados, procesos documentados, entre otros.

Exportación de reportes en formato PDF o Excel, útil para rendiciones institucionales o respaldo documental.

Filtros dinámicos por fechas, responsables o estados.

Historial de acciones por usuario, cumpliendo con los principios de trazabilidad y transparencia.

Este módulo convierte los datos del sistema en información útil para la mejora operativa.

Módulo de Gestión de Procesos Institucionales
Diseñado para documentar de manera estructurada los procesos clave del ECU 911. Este módulo respalda la implementación del enfoque basado en procesos definido por la norma ISO 9001:2015, y aporta significativamente a la mejora continua institucional.

Incluye las siguientes funciones:

Registro de procesos con campos como: nombre del proceso, área responsable, objetivos, insumos, productos, indicadores y responsables.

Carga de documentación complementaria (diagramas de flujo, instructivos, formatos PDF, entre otros).

Historial de versiones del proceso, para garantizar trazabilidad documental y control de cambios.

Interfaz visual clara y ordenada, que permite al usuario comprender rápidamente la estructura y relación de los procesos.

Este módulo apoya directamente la estandarización operativa del ECU 911 y fortalece la transparencia institucional.

Enfoque de Seguridad y Control de Acceso
El sistema implementa mecanismos básicos de seguridad:

Autenticación de usuarios mediante credenciales únicas.

Control de acceso por tipo de rol.

Validaciones en frontend y backend para evitar inyecciones o errores críticos.

Preparación para integración futura con sistemas de autenticación institucional como LDAP o SSO.

Arquitectura Modular y Escalabilidad
Cada módulo ha sido construido de forma independiente utilizando buenas prácticas de diseño en Angular para el frontend y Node.js en el backend. El sistema está preparado para:

Integrar nuevas funcionalidades sin alterar los módulos existentes.

Conectar con APIs externas en caso de migración futura a sistemas centralizados del gobierno.

Escalar horizontalmente para su implementación en otras entidades públicas.

Impacto Institucional Esperado
El sistema permite reducir tiempos administrativos, eliminar duplicidad de información, estandarizar la terminología institucional y facilitar el cumplimiento de normativas de calidad, auditoría y gestión del conocimiento. Además, posiciona al ECU 911 como una entidad innovadora en cuanto al uso de herramientas tecnológicas internas para fortalecer su gestión documental y operativa.


