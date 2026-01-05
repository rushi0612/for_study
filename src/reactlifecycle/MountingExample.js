// import React from 'react';
// export default class MountingExample extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {a:10000};
//     }
//     componentDidMount(){
//         setTimeout(() => {
//             this.setState({a: 20})
//         }, 2000);
//     }
//     render(){
//         return (
//             <div>
//                 {this.state.a}
//             </div>
//         )
//     }
// }



//code from chatgpt

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


