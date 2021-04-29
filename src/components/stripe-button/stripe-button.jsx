import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51IlZfUKgPXGe2QmcN31k9wU3aHf3TcfcAKfiZGEQnQ6FUzvbOWta3cIA5r7zamzqnTVARfrYS71xjqE5k2Ps0P7100NLxRi7LB';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRW Clothing"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/en/f3eb2117da"
      description={`your total is $${price}`}
      panelLabel='Pay Now'
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
