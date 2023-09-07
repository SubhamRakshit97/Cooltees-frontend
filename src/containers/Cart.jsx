import React, { useEffect, useState } from 'react';
import CartItem from '../components/Common/CartItem';
import { fetchCarts } from '../reducks/carts/operations';
import { fetchItems } from '../reducks/items/operations';
import { getCarts, getSubtotal } from '../reducks/carts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../reducks/users/selectors';
import { getItems } from '../reducks/items/selectors';
import Navbar from '../components/Common/Navbar';

const Cart = () => {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();
    const carts = getCarts(selector);
    const subtotal = getSubtotal(selector);
    const user = getUsers(selector);
    const items = getItems(selector);


    useEffect(() => {
        dispatch(fetchItems());
        dispatch(fetchCarts());
        console.log(carts);
    }, []);

    return (
        <>
            <Navbar />


            <div class="cart-container">
                <h1 id="shop">Shopping List</h1>

                <table>
                    <thead>
                        <tr>
                            <td>Product</td>
                            {/* <td>Size</td> */}
                            <td>Amount</td>
                            <td>Price</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            (carts, items && carts.map(cart => (



                                <CartItem
                                    cart={cart.item}
                                    cartId={cart.id}
                                    key={cart.item.id}
                                    quantity={cart.quantity}
                                />


                            )))
                        }


                    </tbody>
                </table>

                <div class="btm-cart">
                    <div class="total">
                        <p>Total Cost:$</p>
                        <h1>{subtotal.toFixed(2)}</h1>
                    </div>
                    <div class="btns">
                        <a href="/"><button class="continue">Continue Shopping</button></a>
                        <a href="/order"><button class="next">Next Step</button></a>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Cart;
