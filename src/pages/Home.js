import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Home() {
    const location = useLocation();
    return (
        <div>
            <h1>home</h1>
            <button onClick={() => {console.log(location)}}>test</button>
        </div>
    )
}