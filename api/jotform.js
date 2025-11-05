export default async function handler(req, res) {
  if (req.method === 'POST') {
    const orderData = req.body;
    console.log('Received order:', orderData);

    // Here you can call Yoco API to create a payment link or process a payment

    res.status(200).json({ message: 'Webhook received. Payment to follow.' });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
