import React, { useEffect, useState } from 'react';
import { signOut } from '../../reducks/users/operations';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import logo from '../../assets/img/logo.png';
import search from '../../assets/img/search.png';
import avatar from '../../assets/img/avatar.png';
import cart from '../../assets/img/cart.png';
import logout from '../../assets/img/logout.png';

export default function Navbar() {

    const dispatch = useDispatch();
    const key = localStorage.getItem('LOGIN_USER_KEY');
    const [checkUser, setCheckUser] = useState(false);

    const signOutButton = () => {
        dispatch(signOut());
        setCheckUser(false);
        dispatch(push('/login'));
    };

    useEffect(() => {
        if (key !== null) {
            setCheckUser(true);
        }
    }, [key]);
    return (
        <>
            <header id="header1">
                <a href='/'><img class="logo" src={logo} alt="logo" /></a>
                <ul class="nav">
                    <li><img src={search} alt="Search" /></li>
                    {checkUser ? (
                        <a onClick={signOutButton}>
                            <li> <img src={logout} alt='logout' /></li>
                        </a>
                    ) : (

                        <a href="/login">
                            <li>
                                <img src={avatar} alt='user' />
                            </li>
                        </a>
                    )}
                    {checkUser && (
                        <a href="/cart">
                            {' '}
                            <li>
                                <img src={cart} alt='cart' />
                            </li>
                        </a>
                    )}
                </ul>
            </header>
        </>

    )
};

