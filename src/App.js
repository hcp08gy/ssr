import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';

export default function App() {
    return (
       <Router>
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
                    <Route path='/about' component={About} />
                    <Route path='/users' component={Users} />
                    <Route path='/' component={Home} />
                    {/* <Route path='/about'>
                        <About />
                    </Route>
                    <Route path='/users'>
                        <Users />
                    </Route>
                    <Route path='/'>
                        <Home/>
                    </Route> */}
                </Switch>
            </div>
       </Router>
    )
}