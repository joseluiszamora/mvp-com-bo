## Convenciones

- Usa npm para todo: npm install, npm add, npm dlx, npm dev, npm build
- TypeScript es obligatorio
- Usa siempre Tailwind CSS para estilos
- Iconos de tabler-icons. Importación explícita, nunca barrels

## Creación de proyectos

- Configura TypeScript en modo estricto desde el inicio
- No añadir dependencias hasta que sean necesarias

## Organización

- Componentes pequeños, con una sola responsabilidad
- Siempre procura que los componentes puedan reutilizarse
- Preferir composición frente a configuraciones complejas
- Evita abstracciones prematuras
- El código compartido debe vivir en carpetas claras como `components`, `layouts`, `lib` o `utils`

## Reglas de TypeScript

- Evita `any` y `unknown`
- Si los tipos no están claros, parar y aclarar antes de continuar

## Reglas UI y estilos

- Tailwind es la única solución de estilos
- No duplicar clases si se puede extraer un componente
- Priorizar legibilidad frente a micro-optimizaciones visuales
- Accesibilidad no es opcional: HTML semántico, roles ARIA cuando aplique y foco gestionado
- Usa solo clases Tailwind definidas en tailwind.config.js. Evita colores inline y utilidades arbitrarias.

## Testing y calidad

- No se acepta código con errores de tipos, lint o tests fallidos.

## Rendimiento y decisiones técnicas

- No adivinar rendimiento, tamaño de bundle o tiempos de carga: medir.
- Si algo parece lento, añadir instrumentación antes de optimizar.
- Validar primero en pequeño antes de escalar cambios a todo el proyecto.

## Comportamiento del agente

- Si una petición no está clara, hacer preguntas concretas antes de ejecutar.
- Tareas simples y bien definidas se ejecutan directamente.
- Cambios complejos (refactors, nuevas features, decisiones de arquitectura) requieren confirmar entendimiento antes de actuar.
- No asumir requisitos implícitos. Si falta información, se pide.

## Documentación

- Todos los archivos .md que generes con la documentación del sistema deben ir en la carpeta /docs
