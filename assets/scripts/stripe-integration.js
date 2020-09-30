
(function () {
    var stripe = Stripe('pk_live_51HVQLhIwoCUI91GntQFASP7ZgxfzBUXqCRKSrZnBm6c8Kj6QtxU8MtR7JJr87Z0Kn4NVcDCPuqu3lGL3tLOhNoht006aTZhXtp');

    var checkoutButton = document.getElementById('checkout-button-price_1HVRlPIwoCUI91Gnpjo2N6Eo');
    checkoutButton.addEventListener('click', function () {
        // When the customer clicks on the button, redirect
        // them to Checkout.
        stripe.redirectToCheckout({
            lineItems: [{ price: 'price_1HVd8kIwoCUI91GnjpyBOgab', quantity: 1 }],
            mode: 'payment',
            // Do not rely on the redirect to the successUrl for fulfilling
            // purchases, customers may not always reach the success_url after
            // a successful payment.
            // Instead use one of the strategies described in
            // https://stripe.com/docs/payments/checkout/fulfill-orders
            successUrl: window.location.protocol + '//trekthenek.tours/success',
            cancelUrl: window.location.protocol + '//trekthenek.tours/canceled',
        })
            .then(function (result) {
                if (result.error) {
                    // If `redirectToCheckout` fails due to a browser or network
                    // error, display the localized error message to your customer.
                    var displayError = document.getElementById('error-message');
                    displayError.textContent = result.error.message;
                }
            });
    });
})();