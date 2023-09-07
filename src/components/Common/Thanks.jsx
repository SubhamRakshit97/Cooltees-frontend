import React from 'react'
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';



function Thanks() {
    const dispatch = useDispatch();
    return (
        <>
            <div class="thank-u">
                <h1>Thank you for ordering</h1>

                <p>
                    Thank you for ordering. We received your request.
                    <br />
                    Our staff will be contacting with you to tell next steps.
                </p>

                <a href="/">
                    <input
                        type="button"
                        onClick={() => dispatch(push('/'))}
                        value="Back to Home"
                    />
                </a>
            </div>

        </>
    )
}

export default Thanks