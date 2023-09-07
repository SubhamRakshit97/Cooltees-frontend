import Navbar from "../components/Common/Navbar"
import { addOrder } from "../reducks/order/operations"
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import API from '../API';
import { getCarts, getSubtotal } from '../reducks/carts/selectors';
import { fetchCarts } from '../reducks/carts/operations';
import { push } from 'connected-react-router';
import logo from '../assets/img/cooltees-logo.png';

const api = new API();

const Order = () => {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();

    const subtotal = getSubtotal(selector);
    const carts = getCarts(selector);

    const [full_name, setFullName] = useState(''),
        [phoneNumber, setPhoneNumber] = useState(''),
        [streetAddress, setStreetAddress] = useState(''),
        [pinCode, setPinCode] = useState(''),
        [aptSuiteUnitBuildingFloor, setAptSuiteUnitBuildingFloor] = useState(''),
        [city, setCity] = useState(''),
        [state, setState] = useState(''),
        [totalitem, setTotalItem] = useState(0);

    useEffect(() => {
        dispatch(fetchCarts());
    }, []);

    useEffect(() => {
        let arr = [];
        if (carts !== undefined && carts.length > 0) {
            for (let key in carts) {
                arr.push(carts[key].quantity);
            }
            let sum = arr.reduce(function (a, b) {
                return a + b;
            }, 0);
            setTotalItem(sum);
        }
    }, [carts]);


    const inputFullname = e => {
        setFullName(e.target.value);
    };
    const inputPhoneNumber = e => {
        setPhoneNumber(e.target.value);
    };
    const inputStreetAddress = e => {
        setStreetAddress(e.target.value);
    };
    const inputPinCode = e => {
        setPinCode(e.target.value);
    };
    const inputAptSuiteUnitBuildingFloor = e => {
        setAptSuiteUnitBuildingFloor(e.target.value);
    };
    const inputCity = e => {
        setCity(e.target.value);
    };
    const inputState = e => {
        setState(e.target.value);
    };



    const orderButton = e => {
        let params = {
            total_price: subtotal,
            full_name: full_name,
            address_line1: streetAddress,
            address_line2: aptSuiteUnitBuildingFloor,
            city: city,
            state: state,
            postal_code: pinCode,
            country: 'US',
            telephone: phoneNumber
        };
        dispatch(addOrder(params));
        e.preventDefault();
        dispatch(push('/thankyou'));
    };


    return (
        <>
            <Navbar />
            <div class="order">
                <h1 id="header">Order your items</h1>

                <div class="shipment">
                    <div class="details">
                        <p id="ship">Shipment Details</p>
                        <h1>Please check your details and confirm it</h1>
                    </div>

                    <table>
                        <tbody>
                            {carts &&
                                carts.map(cart => (
                                    <tr class="items">
                                        <td><h1>{cart.item.name}</h1></td>
                                        <td><p>{cart.quantity}</p></td>
                                        <td><h2>{cart.item.price}</h2></td>
                                    </tr>
                                ))}

                            <tr class="items">
                                <td>
                                    <h1>Total Price</h1>
                                </td>

                                <td><p>{totalitem}</p></td>

                                <td>
                                    <h2>${subtotal.toFixed(2)}</h2>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {/* completed! */}


                </div>

                <div class="p-info">
                    <div>
                        <h1>Full Name</h1>
                        <input type="text" onChange={inputFullname} placeholder="Enter Recipient's name" required />
                    </div>
                    <div>
                        <h1>Phone Number</h1>
                        <input type="text" onChange={inputPhoneNumber} placeholder="Enter phone number" required />
                    </div>

                    <div>
                        <h1>Street Address or P.O Box</h1>
                        <input type="text" onChange={inputStreetAddress} placeholder="Enter street address or P.O box" required />
                    </div>

                    <div>
                        <h1>Pin Code</h1>
                        <input type="text" onChange={inputPinCode} placeholder="Enter pin code" required />
                    </div>

                    <div>
                        <h1>Apt, Suite, Unit, Building, Floor, etc.</h1>
                        <input
                            type="text"
                            onChange={inputAptSuiteUnitBuildingFloor}
                            placeholder="Apt, Suite, Unit, Building, Floor etc."
                            required
                        />
                    </div>

                    <div>
                        <h1>City</h1>
                        <input type="text" onChange={inputCity} placeholder="Enter city" required />
                    </div>

                    <div>
                        <h1>State</h1>
                        <input type="text" onChange={inputState} placeholder="Enter State" required />
                    </div>

                    <div>
                        <button class="submit"
                            id="btn"
                            type="submit"
                            onClick={orderButton}
                            value="Submit">Submit
                        </button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Order;