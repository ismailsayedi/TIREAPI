const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.createSubscriptionSession = async (dealerId, plan) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      price: process.env[`STRIPE_${plan}_PRICE_ID`],
      quantity: 1,
    }],
    mode: 'subscription',
    success_url: `http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: 'http://localhost:3000/cancel',
  });
  return session;
};