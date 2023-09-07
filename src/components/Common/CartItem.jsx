import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, increaseCart, decreaseCart } from '../../reducks/carts/operations';
import { getCarts, getSubtotal } from '../../reducks/carts/selectors';

const CartItem = ({ cart, quantity, cartId }) => {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();
    const carts = getCarts(selector);
    const subtotal = getSubtotal(selector);

    const clickPlusCart = () => {
        dispatch(increaseCart(cartId));
    };
    const clickMinusCart = () => {
        dispatch(decreaseCart(cartId));
    };

    useEffect(() => {
        console.log(cart.image);
        console.log(cart);
        console.log(carts);
    }, []);

    return (
        <>
            <tr>
                <td class="product">
                    <img src={'https://res.cloudinary.com/dk6zeecgj/' + cart.image} />
                    <div class="product-detail">
                        <h1>{cart.name}</h1>
                    </div>
                </td>
                {/* <td><p>XL</p></td> */}

                <td>
                    <button class="amount">
                        <span>
                            {' '}
                            <h1 id="decrement" onClick={clickMinusCart}>
                                -
                            </h1>
                        </span>
                        <span>
                            <h1 id="num">{quantity}</h1>
                        </span>
                        <span>
                            <h1 id="increment" onClick={clickPlusCart}>+</h1>
                        </span>
                    </button>
                </td>
                <td>
                    <h2>{cart.price}</h2>
                </td>

            </tr>


        </>
    );
};

export default CartItem;
