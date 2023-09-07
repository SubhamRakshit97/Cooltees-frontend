import React from 'react'
import Footer from './components/Common/Footer';
import Router from './Router';
import './assets/style.css';
import { getSubtotal } from './reducks/carts/selectors';
import { useDispatch, useSelector } from 'react-redux';

let pageUrl = window.location.toString();


export default function App() {
    const selector = useSelector(state => state);
    const subtotal = getSubtotal(selector);

    return (
        <>
            <Router />
            <Footer price={subtotal} />
        </>
    );
}


