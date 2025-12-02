# Guía para Agregar Nuevas Imágenes al Portfolio

## 📋 Resumen

Este sistema permite agregar imágenes al portfolio de Canaria Media con categorización automática. Las imágenes pueden pertenecer a múltiples categorías y soportan dos formatos: **9:16** (historias) y **4:5** (feed vertical).

## 🎯 Categorías Disponibles

- **todos**: Se agrega automáticamente a todas las imágenes
- **futbolistas**: Para trabajos de futbolistas
- **agentes**: Para trabajos de agentes y agencias
- **matchdays**: Para diseños de matchdays
- **presentaciones**: Para presentaciones y anuncios

## 📝 Cómo Agregar Nuevas Imágenes

### Paso 1: Importar las imágenes

Abre el archivo `src/data/portfolio.ts` y agrega los imports al inicio:

```typescript
import nuevaImagen1 from "@/assets/nueva-imagen-1.jpg";
import nuevaImagen2 from "@/assets/nueva-imagen-2.jpg";
```

### Paso 2: Agregar los items al array

Agrega nuevos objetos al array `portfolioItems`:

```typescript
{
  id: "p11", // ID único
  image: nuevaImagen1,
  category: "FÚTBOL · Matchday oficial", // Texto de categoría visible
  player: "Nombre del Jugador",
  context: "Club · vs Rival · Competencia",
  categorias: ["futbolistas"], // Categorías (se agrega "todos" automáticamente)
  formato: "9:16", // o "4:5"
},
```

### Paso 3: Especificar Categorías

#### Opción A: Especificar manualmente

```typescript
categorias: ["futbolistas", "matchdays"] // Múltiples categorías permitidas
```

#### Opción B: Usar instrucciones de texto (para Cursor AI)

Puedes escribir instrucciones en español y Cursor las interpretará:

**Ejemplos de instrucciones que puedes usar:**

- ✅ "Estas imágenes van a Futbolistas y Todos"
  → `categorias: ["futbolistas"]`

- ✅ "Estos trabajos van a Agentes & Agencias y Todos"
  → `categorias: ["agentes"]`

- ✅ "Estas van a Matchdays y Futbolistas"
  → `categorias: ["matchdays", "futbolistas"]`

- ✅ "Futbolistas"
  → `categorias: ["futbolistas"]`

- ✅ "Agentes, Matchdays"
  → `categorias: ["agentes", "matchdays"]`

**Nota:** La categoría "todos" se agrega automáticamente, no es necesario incluirla.

## 🖼️ Formatos Soportados

### 9:16 (1080×1920)
Formato de historias de Instagram/Stories. Se muestra con `aspect-[9/16]`.

```typescript
formato: "9:16"
```

### 4:5 (1080×1350)
Formato vertical de feed. Se muestra con `aspect-[4/5]`.

```typescript
formato: "4:5"
```

## 📐 Visualización

- Las imágenes se muestran con `object-contain` para evitar deformaciones
- El fondo es negro para mantener consistencia
- Ambos formatos se adaptan correctamente en la grilla
- Al hacer clic, se abre un lightbox con la imagen a tamaño completo

## 🔍 Verificación

Después de agregar imágenes:

1. ✅ Deben aparecer en "Todos"
2. ✅ Deben aparecer en las categorías especificadas
3. ✅ Deben mantener su formato original sin deformarse
4. ✅ Deben abrirse correctamente en el viewer al hacer clic

## 📍 Ubicación de Archivos

- **Datos del portfolio**: `src/data/portfolio.ts`
- **Componente landing**: `src/components/PortfolioSection.tsx`
- **Página completa**: `src/pages/Trabajos.tsx`

## 💡 Ejemplo Completo

```typescript
// 1. Importar
import nuevoTrabajo1 from "@/assets/nuevo-trabajo-1.jpg";

// 2. Agregar al array portfolioItems
{
  id: "p11",
  image: nuevoTrabajo1,
  category: "FÚTBOL · Matchday oficial",
  player: "Juan Pérez",
  context: "Nacional · vs Peñarol · Torneo Clausura",
  categorias: ["futbolistas", "matchdays"], // Múltiples categorías
  formato: "9:16", // o "4:5"
},
```

## 🚀 Uso con Cursor AI

Cuando quieras agregar imágenes nuevas, simplemente di:

> "Agrega estas imágenes al portfolio: [ruta de imágenes]. Estas van a Futbolistas y Matchdays."

Cursor interpretará las instrucciones y agregará las imágenes con las categorías correctas.

