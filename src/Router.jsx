import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './containers/Home';
import SignUp from './containers/Signup';
import LogIn from './containers/Login';
import Cart from './containers/Cart';
import Order from './containers/Order';
import Thankyou from './containers/Thankyou';

const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/signup'} component={SignUp} />
                <Route exact path={'/login'} component={LogIn} />
                <Route exact path={'/cart'} component={Cart} />
                <Route exact path={'/order'} component={Order} />
                <Route exact path={'/thankyou'} component={Thankyou} />
            </Switch>
        </>
    );
};
export default Router;
