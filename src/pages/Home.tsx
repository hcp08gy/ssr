import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Modal from "../components/Modal";

export default function Home() {
    const location = useLocation();
    return (
        <div>
            <h1>home</h1>
            <button onClick={() => {console.log(location)}}>test</button>
            <Modal title="title" subtitle="subtitle" content="modal content"/>
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
                    <li>
                        <Link to="/ReduxDemoWithMid">ReduxDemoWithMid</Link>
                    </li>
                    <li>
                        <Link to="/testJsonp">testJsonp</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}