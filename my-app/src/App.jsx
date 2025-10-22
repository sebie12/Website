import { useState, useEffect } from 'react'

import Block from './Block'
import FloorMenu from './FloorMenu'


function App() {
  const [timer, setTimer] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prev => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const position = {
        bottom: '{timer}px'
    };

    const clickFun = () => {
        setTimer(0);
    }

  return (
    <>
     <Block style = {position} onClick = {clickFun}></Block>
     <FloorMenu></FloorMenu>
    </>
  )
}

export default App
