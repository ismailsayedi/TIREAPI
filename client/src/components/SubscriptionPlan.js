// client/src/components/SubscriptionPlan.js
import React from 'react';
import api from '../utils/api';

const SubscriptionPlan = ({ plan }) => {
  const handleSubscribe = async () => {
    try {
      const response = await api.post('/subscriptions/create-checkout-session', { plan });
      window.location.href = response.data.url; // Redirect to Stripe checkout
    } catch (err) {
      alert('Subscription failed. Please try again.');
    }
  };

  return (
    <div className="subscription-plan">
      <h3>{plan.name}</h3>
      <p>${plan.price}/month</p>
      <button onClick={handleSubscribe}>Subscribe</button>
    </div>
  );
};

export default SubscriptionPlan;