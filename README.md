# MANODEOBRA – Estructura del Proyecto

## Archivos

| Archivo              | Descripción                                      |
|----------------------|--------------------------------------------------|
| `index.html`         | Login (escáner QR + código manual)               |
| `menu_supervisor.html` | Menú exclusivo para supervisores               |
| `grabar.html`        | Formulario de grabación de actividades           |
| `autorizar.html`     | Panel de revisión con filtros y gráficas         |
| `config.js`          | Configuración compartida (Supabase, sesión)      |

## Flujo por rol

```
Login (index.html)
    ├── Rol: MECANICO  → grabar.html
    └── Rol: SUPERVISOR → menu_supervisor.html
                              ├── Grabar → grabar.html
                              └── Autorizar → autorizar.html
```

## Cómo usar

1. Abre `index.html` en el navegador
2. Todos los archivos deben estar en la **misma carpeta**
3. Si usas un servidor local (ej. Live Server en VS Code), funciona directamente
4. Si subes a hosting, sube toda la carpeta `MANODEOBRA/`

## Requisito en Supabase

La tabla `Colaboradores` debe tener la columna `rol` con valores:
- `MECANICO`
- `SUPERVISOR`

## Página Autorizar — Gráficas incluidas

- 📊 **Barras**: Horas trabajadas por mecánico
- 🔵 **Dona**: Distribución de registros por turno
- 📋 **Tabla**: Con detalle expandible por registro, ordenamiento y paginación
