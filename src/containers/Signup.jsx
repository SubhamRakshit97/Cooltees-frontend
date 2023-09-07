import React, { useState } from 'react'
import Home from "./Home"
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { signUp } from "../reducks/users/operations"


const Signup = () => {
    const dispatch = useDispatch();

    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const closeButton = () => {
        dispatch(push('/'));
    };
    const inputUserName = event => {
        setUserName(event.target.value);
    };
    const inputEmail = event => {
        setEmail(event.target.value);
    };
    const inputPassword = event => {
        setPassword(event.target.value);
    };
    const signUpButton = () => {
        dispatch(signUp(username, email, password));
        setUserName('');
        setEmail('');
        setPassword('');
    };


    return (
        <>
            <Home />
            <div class="sign-up1">
                <span onClick={closeButton}> <p id="close">X</p> </span>
                <h1>Create an account and discover the benifits</h1>
                <p>Lorem Ipsum</p>

                <form action="#">
                    <div className="control">
                        <input type="text" onChange={inputUserName} placeholder="Username" value={username} required />
                    </div>

                    <div className="control">
                        <input type="text" onChange={inputEmail} placeholder="E-mail" value={email} required />
                    </div>

                    <div className="control">
                        <input type="password" onChange={inputPassword} placeholder="Password" value={password} required />
                    </div>

                    <span>
                        <input type="checkbox" />I agree to the Google Terms of Service and
                        Privacy Policy
                    </span>

                    <div className="control">
                        <input type="submit" value="Sign up" onClick={signUpButton} />
                    </div>
                </form>

                <div className="log-in1">
                    <a href="/login" target="_blank">Are you already a member?</a>
                </div>
            </div>

        </>
    )
}

export default Signup