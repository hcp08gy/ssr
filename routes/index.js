import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Users from '../src/pages/Users';

export default (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">about</Link>
                </li>
                <li>
                    <Link to="/users">users</Link>
                </li>
            </ul>
        </nav>
        <Switch>
            <Route path='/about'>
                <About />
            </Route>
            <Route path='/users'>
                <Users />
            </Route>
            <Route path='/'>
                <Home/>
            </Route>
        </Switch>
        {/* <Route path='/about' component={About} />
        <Route path='/users' component={Users} />
        <Route path='/' component={Home} /> */}
    </div>
)