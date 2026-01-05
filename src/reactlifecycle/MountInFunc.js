import React, { use, useEffect, useState } from 'react'

function MountInFunc() {
    let [a, setA] = useState(1000);

    useEffect(() => {
        console.log("component did mount");
    }, []);

    useEffect(() => {
        if (a !== 1000){
        console.log("component did updating without dependency");
        };
    });
    useEffect(() => {
         if (a !== 1000){
        console.log("component did updating with dependency");
         }
    }, [a]);
  return (
    <div>
        <input type="button" value="click me" onClick={()=>setA(2000)} />
        <h2>{a}</h2>
    </div>
    
  )
}

export default MountInFunc
