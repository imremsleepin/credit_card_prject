function CreditCard(cvc, expirationDate, cardNumber){
    this.cvc = cvc;
    this.expirationDate = expirationDate;
    this.cardNumber = cardNumber; 

    this.getcvc = function() {
        return this.cvc;
    };
    this.getexpirationDate = function() {
        return this.expirationDate;
    };
    this.getcardNumber = function() {
        return this.cardNumber;
    };
};

function CardProcessor(){
    
    this.charge = function(creditCard, amount) {
    
    const message = `Your credit Card ${creditCard.cardNumber} has been charged $${amount}`;
    console.log(message);

    stripe.createPaymentMethod({
        type: 'card',
        card: {
          number: creditCard.cardNumber,
          exp_month: creditCard.expirationDate.split('/')[0],
          exp_year: creditCard.expirationDate.split('/')[1],
          cvc: creditCard.cvc,
        },

      }).then(function(result) {
        if (result.error) {
          // Handle payment form validation errors
          console.error(result.error.message);
        } else {
            const message = `Your credit Card ${creditCard.cardNumber} has been charged successfully`;
            console.log(message);
            var paymentMethodId = result.paymentMethod.id;
            // Send the 'paymentMethodId' to your server using an HTTP request
            // Your server will then use the payment method ID to create a charge with the Stripe API
        }
      });
    };
};

function ProcessorInfo(){
    this.orderNumber = orderNumber;
    this.isApproved = isApproved;
    this.errorMessage = errorMessage;
    this.transDate = transDate;
    this.transTime = transTime; 


    this.getOrderNumber = function() {
        return this.orderNumber;
    };

    this.isApproved = function() {
        return this.isApproved;
    };

    this.errorMessage = function() {
        return this.errorMessage;
    };

    this.transDate = function() {
        return this.transDate;
    };

    this.transTime = function() {
        return this.transTime;
    };

};
//better to name instance of credit card related to credit card in some way, originally has user1 and still had user class
var credit1 = new CreditCard(cvc= '123', expirationDate = '03/23', cardNumber = '1234123412341234');

console.log(credit1.cvc);
console.log(credit1.expirationDate);
console.log(credit1.cardNumber);


var cardprocessor = new CardProcessor();
/* cardprocessor.charge(creditCard = credit1, amount = '125'); */
cardprocessor.stripe.createPaymentMethod(creditCard = credit1, amount = '125');


/* var elements = stripe.elements(); 

var cvc = elements.create('cardCvc');
var expirationDate = elements.create('cardExpiry');
var cardNumber = elements.create('cardNumber');

cvc.mount('#card-cvc');
expirationDate.mount('#card-expiry');
cardNumber.mount('#card-number'); */




