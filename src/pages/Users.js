import React from 'react';
import {Switch, Route, Link, useRouteMatch, useParams} from 'react-router-dom';

export default function Users() {
    let match = useRouteMatch();
    console.log(match);
    return (
        <div>
            <h2>Users</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/components`}>
                        Components
                    </Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>
                        Props v. State
                    </Link>
                </li>
            </ul>
            <Switch>
                <Route path={`${match.path}/:userId`}>
                    <User />
                </Route>
                <Route path={match.path}>
                    <h3>Please select a User.</h3>
                </Route>
            </Switch>
        </div>
    )
}

function User() {
    const params = useParams();
    console.log(params);
    let { userId } = useParams();
    return <h3>
        Requested user ID: {userId}
    </h3>
}