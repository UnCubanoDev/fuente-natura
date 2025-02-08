/**
 * orden controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::orden.orden', ({ strapi }) => ({
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
}));
