import React, { useEffect, useState } from 'react';
import logo2 from '../../assets/img/logo2.png';
import cr from '../../assets/img/cr.png';

export default function Footer({ price }) {
    let pageUrl = window.location.toString();
    const [showCheckoutButton, setShowCheckoutButton] = useState(true);
    const key = localStorage.getItem('LOGIN_USER_KEY');

    useEffect(() => {
        if (pageUrl.includes('cart') || pageUrl.includes('order')) {
            setShowCheckoutButton(false);
        }
    }, []);

    return (
        <>
            <footer class="footer">

                <div class="btm-cart">

                    {key !== null && (
                        <div class="total">
                            <div class="btns">
                                {showCheckoutButton ? (
                                    <>
                                        <p>Total Cost: $</p>
                                        <h1>{price.toFixed(2)}</h1>
                                        <a href="/cart">
                                            <button class="continue">Check Your Cart</button>
                                        </a>

                                    </>



                                ) : (
                                    <a href="/">
                                        {/* <button class="next">Checkout</button> */}
                                    </a>


                                )}
                            </div>
                        </div>
                    )}

                </div>

                <div class="footer-logo">
                    <img src={logo2} alt="logo" />
                </div>

                <div class="about-us">
                    <p class="info">
                        Premium Quality Clothes at the
                        best and most affordable price. we have new offers every day for 365
                        days
                    </p>
                    <h2>Contact Us</h2>
                    <p>E-mail US@cooltees.com|hotline 1-800-007-7777</p>
                </div>
                <div class="copyright">
                    <img src={cr} alt="copyright" />
                </div>
            </footer>

        </>
    )
};








