const { mercadopago } = require('../../mercadoPago/mercadoPago');

const donation = async (req, res) => {
  const { price } = req.body;

  const amount = parseInt(price);

  try {
    let preference = {
      items: [
        {
          title: 'Campaña de donación Agronomía Central',
          unit_price: amount,
          quantity: 1,
        },
      ],

      back_urls: {
        success: 'https://club-agronomia-central.vercel.app/',
        failure: 'https://club-agronomia-central.vercel.app/',
        pending: 'https://club-agronomia-central.vercel.app/',
      },
      auto_return: 'approved',
    };

    const response = await mercadopago.preferences.create(preference);

    return res.status(200).json({
      global: response.body.id,
    });
  } catch (error) {
    return res.status(404).json(error);
  }
};

module.exports = {
  donation,
};
