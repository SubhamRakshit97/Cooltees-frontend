import React, { useState } from 'react'
import Home from "./Home"
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { signIn } from "../reducks/users/operations"

const Login = () => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState(''),
        [password, setPassword] = useState('');

    const closeButton = () => {
        dispatch(push('/'));
    }
    const inputEmail = event => {
        setEmail(event.target.value);
    }
    const inputPassword = event => {
        setPassword(event.target.value);
    }
    const signInButton = () => {
        dispatch(signIn(email, password));
        setEmail('');
        setPassword('');
    };

    return (
        <>
            <Home />
            <div class="log-in">
                <span onClick={closeButton}>
                    <p id="close">X</p>
                </span>
                <h1>Log in</h1>
                <p>Lorem Ipsum</p>
                <form action="#">
                    <div class="control">
                        <input type="text" onChange={inputEmail} placeholder="E-mail" value={email} required />
                    </div>

                    <div class="control">
                        <input type="password" placeholder="Password" onChange={inputPassword} value={password} required />
                    </div>

                    <span><input type="checkbox" /> Keep me signed in </span>

                    <div class="control">
                        <input type="submit" value="Sign in" onClick={signInButton} />
                    </div>
                </form>

                <div class="sign-up">
                    <h1>Not a member yet?</h1>
                    <a href="/signup">sign up</a>
                </div>
            </div>
        </>

    );
};

export default Login;