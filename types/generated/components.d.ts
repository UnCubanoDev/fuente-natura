import type { Schema, Struct } from '@strapi/strapi';

export interface OrdenDatosComprador extends Struct.ComponentSchema {
  collectionName: 'components_orden_datos_comprador';
  info: {
    description: 'Informaci\u00F3n opcional de quien compra el pedido';
    displayName: 'Datos Comprador';
  };
  attributes: {
    direccion: Schema.Attribute.Text;
    nombre: Schema.Attribute.String;
    telefono: Schema.Attribute.String;
  };
}

export interface OrdenDatosReceptor extends Struct.ComponentSchema {
  collectionName: 'components_orden_datos_receptor';
  info: {
    description: 'Informaci\u00F3n de quien recibe el pedido';
    displayName: 'Datos Receptor';
  };
  attributes: {
    direccion: Schema.Attribute.Text & Schema.Attribute.Required;
    nombre: Schema.Attribute.String & Schema.Attribute.Required;
    telefono: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface OrdenProductosDeseados extends Struct.ComponentSchema {
  collectionName: 'components_orden_productos_deseados';
  info: {
    description: 'Informaci\u00F3n de productos deseados';
    displayName: 'Productos Deseados';
  };
  attributes: {
    descripcion: Schema.Attribute.String;
    nombre: Schema.Attribute.String & Schema.Attribute.Required;
    price: Schema.Attribute.Decimal;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'orden.datos-comprador': OrdenDatosComprador;
      'orden.datos-receptor': OrdenDatosReceptor;
      'orden.productos-deseados': OrdenProductosDeseados;
    }
  }
}
