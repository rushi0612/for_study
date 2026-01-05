import React from "react";
export default class Swap extends React.Component {
    constructor(props){
        super(props);
        this.state = {a: '', b: '', res:undefined};
    }
    swaplogic = (e) => {
        let num1 = this.state.a;
        let num2 = this.state.b;
        let temp=num1;
        num1=num2;
        num2=temp;
        this.setState({a: num1, b: num2});
        this.setState({res: `After Swapping: a = ${num1} , b = ${num2}`});
        e.preventDefault();   
    }
    render(){
        return(
            <div>
                <form onSubmit={this.swaplogic}>
                    input a: <input type="text" value={this.state.a} onChange={(e)=>this.setState({a:e.target.value})} />
                    <br /><br />
                    input b: <input type="text" value={this.state.b} onChange={(e)=>this.setState({b:e.target.value})} />
                    <br /><br />
                    <button type="submit">Swap</button>
                    <br /><br />
                    {this.state.res && <h3>{this.state.res}</h3>}
                </form>
            </div>
        )
    }
}