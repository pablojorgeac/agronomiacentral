const mercadopago = require('mercadopago');

mercadopago.configure({
  access_token: process.env.MERCADO_PAGO_KEY,
});

module.exports = {
  mercadopago,
};
