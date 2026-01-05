import React from "react";
export default class UnmmountingExample extends React.Component {
    constructor(props){
        super(props);
        this.state = {show: true};
    }

    delHeader = () => {
        this.setState({show: false});
    }
    render(){
        let myheader;
        if(this.state.show){
            myheader = <Child />;
        }
        return (
            <div>
                {myheader}
                <h1>Parent Component </h1> <br /><br />
                <input type="button" onClick={this.delHeader} value="HIDE HEADER" />
            </div>
        )
    }
}
class Child extends React.Component {
    componentWillUnmount(){
        alert("the Component named Header is about to be unmounted");
    }
    render(){
        return (
            <div>
                <h2>Header Component</h2>
            </div>
        )
}  
}