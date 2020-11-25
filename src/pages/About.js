import React,  { useState } from 'react';
var timeCount;
export default function About() {
    const [count, setCount] = useState(0);
    timeCount = count
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                click me to add one
            </button>
            <button onClick={() => {
                setTimeout(() => {
                    console.log(timeCount);
                }, 2000);
            }}>
                click me to console
            </button>
        </div>
    )
}