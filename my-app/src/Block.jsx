import React, { useState, useEffect } from "react";
import './App.css'
import './Block.css'


function Block() {
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prev => prev + 0.1);
        }, 10);

        return () => clearInterval(interval);
    }, []);

    const [maxHeight, setMaxHeight] = useState(() => (typeof window !== 'undefined' ? window.innerHeight : 1000));

    useEffect(() => {
        const onResize = () => setMaxHeight(window.innerHeight);
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const position = {
        bottom: `${Math.max(0, maxHeight - 9.85 * timer * timer)}px`
    };

    const clickFun = () => {
        setTimer(0);
    }
    return(
        <div className="block" style={position} onClick = {clickFun} onPo>Hello</div>
    )
}

export default Block;