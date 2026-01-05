import React, { use, useEffect, useState } from "react";


function FunctionalCycle()
{   
    let [a, setA] = useState(undefined);
    useEffect(() => {
        console.log("mounting");
    },[]);

    useEffect(() => {
        console.log("updating without dependency");
    });
    useEffect(() => {
        console.log("updating with dependency");
    }, [a]);
    return (
        <div>
            <h1>Welcome in React</h1>
            <input type="button" value="click me" onClick={()=>setA("Hello World")} />
            <h2>{a}</h2>
        </div>
    )
}

export default FunctionalCycle;
