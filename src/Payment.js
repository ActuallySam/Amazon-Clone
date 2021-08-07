import React, { useState, useEffect } from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios';

function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();    
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        //generate the special stripe secret which allows us to charge the customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket]);

    console.log('the SECRET IS >>>', clientSecret);

    const handleSubmit = async (event) => {
        //for fancy stripe stuff
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //PaymentIntent = payment confirmation
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            history.replace('/orders');
        })
    }

    const handleChange = event => {
        //Listen to the changes in CardElement
        // and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");

    }

    return (
        <div className="payment">
            <div className="payment_container">

                <h1>
                    Checkout (
                        <Link to="/checkout">{basket?.length} items</Link>
                    )
                </h1>


                {/* Payment Section - Delivery Address */}
                <div className="payment_secion">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>Flat No. 102, Om Enclave CHS</p>
                        <p>Sector 7, Plot 97, Navi Mumbai, 400709</p>
                    </div>
                </div>


                {/* Payment section - Review Items */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment_items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id = {item.id}
                                title = {item.title}
                                image = {item.image}
                                price = {item.price}
                                rating = {item.rating}
                            />
                        ))}
                    </div>
                </div>


                {/* Payment section - Payment Method */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">

                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className="payment_priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                        <h3>Order Total: {value}</h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"₹"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                                </div>

                                {/* Errors */}
                                {error && <div>{error}</div>}
                            </form>         
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Payment;
