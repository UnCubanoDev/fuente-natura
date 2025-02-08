# Fuente Natura - API Backend

## 🌿 Descripción

Fuente Natura es una aplicación de comercio electrónico que se especializa en la venta de productos varios. Este repositorio contiene la API backend construida con Strapi, que gestiona el sistema de pedidos y productos.

## 🚀 Características Principales

### Gestión de Productos

- CRUD completo de productos.
- Atributos principales:
  - Nombre
  - Descripción
  - Precio
  - Costo
  - Stock (opcional o para uso futuro)
  - Imágenes múltiples
  - Categorización

### Sistema de Pedidos

- Permite realizar pedidos de productos existentes y personalizados.
- Estados del pedido:
  - Pendiente (pending)
  - Cotizado (quoted)
  - Confirmado (confirmed)
  - Rechazado (rejected)
  - Pagado (paid)
  - Enviado (shipped)

### Información de Pedidos

- **Receptor** (Obligatorio):
  - Nombre
  - Teléfono
  - Dirección
- **Comprador** (Opcional):
  - Nombre
  - Teléfono
  - Dirección
- **Métodos de Pago**:
  - Efectivo
  - Zelle

### Sistema de Categorías

- Gestión de categorías de productos.
- Relación many-to-many entre productos y categorías.

## 🛠️ Tecnologías

- Strapi v5.9.0
- Node.js (>=18.0.0 <=22.x.x)
- PostgreSQL
- TypeScript

## 📡 API Endpoints

### Productos

- `GET /api/productos` - Listar productos
- `GET /api/productos/:id` - Obtener producto
- `POST /api/productos` - Crear producto
- `PUT /api/productos/:id` - Actualizar producto
- `DELETE /api/productos/:id` - Eliminar producto

### Órdenes

- `GET /api/ordens` - Listar órdenes
- `GET /api/ordens/:id` - Obtener orden
- `POST /api/ordens` - Crear orden
- `PUT /api/ordens/:id` - Actualizar orden
- `DELETE /api/ordens/:id` - Eliminar orden

### Categorías

- `GET /api/categorias` - Listar categorías
- `GET /api/categorias/:id` - Obtener categoría
- `POST /api/categorias` - Crear categoría
- `PUT /api/categorias/:id` - Actualizar categoría
- `DELETE /api/categorias/:id` - Eliminar categoría

## 🔒 Seguridad

- Autenticación JWT
- Roles y permisos personalizables
- Validación de datos
- Middleware de seguridad habilitado

## 📝 Licencia

Privada - Todos los derechos reservados

## 🔧 Soporte

Para soporte, contactar a través de issues en el repositorio.
