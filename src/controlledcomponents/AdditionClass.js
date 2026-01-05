import React from "react";
export default class Addition extends React.Component {
    constructor(props) {
        super(props);
        this.state = {num1: 0, num2: 0, result: undefined};
    }
    addition = (e) => {
        this.setState({result: parseInt(this.state.num1) + parseInt(this.state.num2)});
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addition} >
                    <input type="number" value={this.state.num1} onChange={(e)=>this.setState({num1:e.target.value})} />
                    <br /><br />
                    <input type="number" value={this.state.num2} onChange={(e)=>this.setState({num2:e.target.value})} />
                    <br /><br />
                    <button type="submit">Add</button>
                    <br /><br />
                    {this.state.result && <h3>Result: {this.state.result}</h3>}
                </form>
            </div>
        )
    }
}