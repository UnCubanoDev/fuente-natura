import { factories } from '@strapi/strapi';
import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

export default factories.createCoreController(
  'api::cotizacion.cotizacion',
  ({ strapi }) => ({
    async generarPDF(ctx) {
      const { ordenId, productos, productos_deseados, precio_final } =
        ctx.request.body;
      const doc = new PDFDocument();
      const pdfPath = path.join(
        __dirname,
        `../../../../uploads/cotizacion_${ordenId}.pdf`
      );
      doc.pipe(fs.createWriteStream(pdfPath));

      doc.fontSize(25).text('Cotización', { align: 'center' });
      doc.moveDown();

      doc.fontSize(20).text('Productos:');
      productos.forEach((producto: { name: any; price: any }) => {
        doc.fontSize(14).text(`${producto.name}: $${producto.price}`);
      });

      doc.moveDown();
      doc.fontSize(20).text('Productos Deseados:');
      productos_deseados.forEach((producto: { nombre: any; price: any }) => {
        doc.fontSize(14).text(`${producto.nombre}: $${producto.price}`);
      });

      doc.moveDown();
      doc.fontSize(20).text(`Precio Final: $${precio_final}`);

      doc.end();
    },
  })
);
