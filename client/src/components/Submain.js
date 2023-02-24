import React, { useState, useEffect } from 'react';


function Submain() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);
    return (
        <div>
            <p>Counter:{count}</p>
            Submain</div>
    )
}

export default Submain