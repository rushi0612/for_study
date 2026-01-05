import React, { useEffect, useState } from "react";

function MountingExampleFunction() {

    const [a, setA] = useState(10000);

    useEffect(() => {
        const timer = setTimeout(() => {
            setA(20);
        }, 2000);

        // cleanup (optional but best practice)
        return () => clearTimeout(timer);

    }, []); // empty dependency = componentDidMount

    return (
        <div>
            {a}
        </div>
    );
}

export default MountingExampleFunction;
