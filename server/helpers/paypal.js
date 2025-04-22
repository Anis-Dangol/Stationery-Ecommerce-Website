import paypal from 'paypal-rest-sdk';

paypal.configure({
    mode: 'sandbox', 
    client_id: "<ADD YOUR PAYPAL CLIENT ID HERE>",
    client_secret: "<ADD YOUR PAYPAL CLIENT SECRET HERE>",
});

export default paypal;




