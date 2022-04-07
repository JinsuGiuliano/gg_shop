import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_WBqax2FWVzS9QlpJScO07iuL';

  const onToken = token => {
    console.log(token);
    alert('Donation Succesful!');
  };

  return (
    <StripeCheckout
      label='DONATE'
      name='SWN ONG'
      image='assets/images/logo-swn.png'
      description={`Your total Donation is $${price}`}
      amount={priceForStripe}
      panelLabel='DONATE'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
