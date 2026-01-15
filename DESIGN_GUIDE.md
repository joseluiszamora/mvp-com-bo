# Design Guide – Agencia de Desarrollo de Software MVP

Este documento define el **Design System oficial** para la landing page de la agencia de desarrollo de software 'MVP', inspirado en el template **Rextfy – Startup & Software Agency**. El objetivo es asegurar **consistencia visual, escalabilidad y profesionalismo** en toda la aplicación.

---

## 1. Principios de Diseño

- **Claridad:** jerarquía visual clara y fácil de escanear.
- **Profesionalismo:** estética moderna, tecnológica y confiable.
- **Consistencia:** mismos colores, espaciados y componentes en todo el sitio.
- **Accesibilidad:** buen contraste y legibilidad.
- **Aspecto:** light mode y dark mode

---

## 2. Sistema de Colores (Color System)

### 2.1 Paleta Principal

| Token               | Uso                                         | Hex       |
| ------------------- | ------------------------------------------- | --------- |
| `--color-primary`   | CTAs, botones principales, links destacados | `#4F46E5` |
| `--color-secondary` | Hover, estados activos                      | `#6366F1` |
| `--color-accent`    | Llamadas a la acción secundarias            | `#F59E0B` |

### 2.2 Colores Neutros

| Token           | Uso                     | Hex       |
| --------------- | ----------------------- | --------- |
| `--color-dark`  | Texto principal         | `#111827` |
| `--color-gray`  | Texto secundario        | `#6B7280` |
| `--color-light` | Background de secciones | `#F9FAFB` |
| `--color-white` | Cards, fondos base      | `#FFFFFF` |

### 2.3 Reglas de Uso

- Nunca usar más de **1 color acento** por sección.
- Texto blanco solo sobre fondos oscuros o primary.
- CTAs principales **siempre** usan `--color-primary`.

---

## 3. Tipografía (Typography)

### 3.1 Fuentes

- **Headings:** Montserrat
- **Body:** Inter / Open Sans
- **Fallback:** sans-serif

### 3.2 Escala Tipográfica

| Elemento | Tamaño | Peso | Line-height |
| -------- | ------ | ---- | ----------- |
| H1       | 56px   | 700  | 1.2         |
| H2       | 40px   | 600  | 1.3         |
| H3       | 32px   | 600  | 1.3         |
| H4       | 24px   | 600  | 1.4         |
| H5       | 20px   | 500  | 1.4         |
| Body     | 16px   | 400  | 1.6         |
| Small    | 14px   | 400  | 1.5         |

### 3.3 Reglas Tipográficas

- Un solo **H1 por página**.
- No usar más de 3 tamaños distintos en una misma sección.
- Headings siempre con color `--color-dark`.

---

## 4. Sistema de Espaciado (Spacing System)

Escala basada en múltiplos de 8px:

| Token  | Valor |
| ------ | ----- |
| `xxs`  | 4px   |
| `xs`   | 8px   |
| `sm`   | 12px  |
| `md`   | 16px  |
| `lg`   | 24px  |
| `xl`   | 32px  |
| `xxl`  | 48px  |
| `xxxl` | 64px  |

### Reglas

- Padding vertical de secciones: `xl` o `xxl`.
- Espaciado entre cards: `lg`.
- Márgenes internos de componentes: `sm` – `md`.

---

## 5. Componentes UI

### 5.1 Botones

#### Botón Primario

- Fondo: `--color-primary`
- Texto: blanco
- Border-radius: 6px
- Hover: `--color-secondary`
- Texto en mayúsculas

#### Botón Secundario

- Fondo transparente
- Borde `--color-primary`
- Texto `--color-primary`
- Hover: fondo primary + texto blanco

### 5.2 Cards

- Fondo blanco
- Border-radius: 8px
- Sombra suave
- Hover con elevación (`translateY(-4px)`)

Uso típico:

- Servicios
- Portfolio
- Testimonios

### 5.3 Formularios

- Inputs con borde gris claro
- Focus en `--color-primary`
- Labels claros y concisos
- Botón de envío primario

---

## 6. Layout & Grid

### 6.1 Grid

- Sistema de **12 columnas**
- Máximo ancho del contenedor: 1200px – 1320px
- Contenido centrado

### 6.2 Breakpoints

| Dispositivo | Width    |
| ----------- | -------- |
| Mobile      | < 640px  |
| Tablet      | ≥ 768px  |
| Desktop     | ≥ 1024px |
| Large       | ≥ 1280px |

### 6.3 Reglas de Layout

- Hero centrado horizontal y verticalmente.
- Secciones alternan fondo blanco y light.
- CTA final con fondo primary.

---

## 7. Iconografía

- Estilo lineal (outline)
- Tamaño consistente
- Color por defecto: `--color-gray`
- Íconos destacados en `--color-primary`

---

## 8. Animaciones & Interacciones

- Transiciones: 0.2s – 0.4s ease-in-out
- Hover en botones y cards
- Animaciones sutiles al hacer scroll
- Evitar animaciones excesivas

---

## 9. Naming Conventions (CSS)

```text
.section-hero
.section-services
.section-portfolio
.btn-primary
.btn-secondary
.card
.text-heading
.text-body
```

Reglas:

- Nombres semánticos
- Inglés consistente
- No mezclar estilos (BEM o utility, elegir uno)

---

## 10. Buenas Prácticas

- Mobile-first
- Reutilizar componentes
- Mantener contraste AA
- Revisar consistencia antes de publicar

---

**Este Design Guide es la referencia oficial para todo el frontend del proyecto.**
