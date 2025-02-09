/**
 * orden controller
 */

import { factories } from '@strapi/strapi';
import path from 'path';

export default factories.createCoreController(
  'api::orden.orden',
  ({ strapi }) => ({
    async create(ctx) {
      const { productos_deseados } = ctx.request.body.data;

      // Si hay productos deseados, establecemos el estado inicial como pending
      if (productos_deseados && productos_deseados.length > 0) {
        ctx.request.body.data.status_order = 'pending';
        ctx.request.body.data.total = 0; // El total se establecerá en la cotización
      }

      // Llamar al controlador predeterminado
      const response = await super.create(ctx);

      return response;
    },
    async update(ctx, next) {
      const { id } = ctx.params;
      const { status_order, productos, productos_deseados } =
        ctx.request.body.data;

      const response = await super.update(ctx);

      if (status_order === 'quoted') {
        const precio_final = this.calcularPrecioFinal(
          productos,
          productos_deseados
        );
        const cotizacionController = strapi.controller(
          'api::cotizacion.cotizacion'
        );
        await cotizacionController.generarPDF(ctx, next);

        await strapi.entityService.create('api::cotizacion.cotizacion', {
          data: {
            orden: id,
            productos,
            productos_deseados,
            precio_final,
            pdf_url: `uploads/cotizacion_${id}.pdf`,
          },
        });
      }

      return response;
    },

    calcularPrecioFinal(productos, productos_deseados) {
      let total = 0;
      productos.forEach((producto: { price: number }) => {
        total += producto.price;
      });
      if (Array.isArray(productos_deseados) && productos_deseados.length > 0) {
        productos_deseados.forEach((producto) => {
          total += producto.price;
        });
      }
      return total;
    },
  })
);
