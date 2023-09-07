import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, increaseCart, decreaseCart } from '../../reducks/carts/operations';
import { getCarts, getSubtotal } from '../../reducks/carts/selectors';
import { push } from 'connected-react-router';


const Item = ({ item }) => {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();
    const carts = getCarts(selector);
    const subtotal = getSubtotal(selector);
    const [particularCart, setParticularCart] = useState(null);
    const key = localStorage.getItem('LOGIN_USER_KEY');


    useEffect(() => {
        if (carts !== undefined && carts.length > 0) {
            console.log('carts');
            console.log(carts);
            let matchedCarts = carts.filter(cart => cart.item.id === item.id);
            console.log('matchedCarts');
            console.log(matchedCarts);
            if (matchedCarts.length > 0) {
                setParticularCart(matchedCarts[0]);
            } else {
                setParticularCart(null);
            }
        }
    }, [subtotal]);

    const clickAddCart = () => {
        if (key) {
            dispatch(addCart(item));
        } else {
            dispatch(push('/login'));
        }
    };
    const clickPlusCart = () => {
        dispatch(increaseCart(particularCart.id));
    };
    const clickMinusCart = () => {
        dispatch(decreaseCart(particularCart.id));
    };


    return (
        <>
            <div class="card">
                <div class="img-container">
                    <img src={item.image} />
                </div>
                <div class="info">
                    <div class="discription">
                        <h4>{item.name}</h4>
                        <h4>{item.price}</h4>
                    </div>
                    {particularCart && particularCart.quantity > 0 ? (
                        <button class="amount">
                            <span><h1 id="decrement" onClick={clickMinusCart}>-</h1></span>
                            <span><h1 id="num">{particularCart.quantity}</h1></span>
                            <span><h1 id="increment" onClick={clickPlusCart}>+</h1></span>
                        </button>
                    ) : (
                        <button class="addBtn" onClick={clickAddCart}>ADD TO CART</button>
                    )}
                </div>
            </div>
        </>
    )
}

export default Item;