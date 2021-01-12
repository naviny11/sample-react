import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Menu from './Menu';
import Service from './Service';
import User from './User';
import Search from './Search';

const Router = () => {

    const Name = (props) => {
        return <h1>I am {props.val} page!!</h1>
    }

    return (
        <>
        <Menu />
        <Switch>
            <Route exact path="/" render={() => <About name="About" />} />
            <Route path="/contact" render={() => <Contact name="Contact" />} />
            <Route path="/service" component={Service} />
            <Route path="/user/:fname/:lname" component={User} />
            <Route path="/search" component={Search} />
            <Route path="/contact/name" component={() => <Name val="Navin" />} />
            {/*<Route component={Error} />*/}
            <Redirect to="/" />
        </Switch>
        </>
    );
}

export  default Router;