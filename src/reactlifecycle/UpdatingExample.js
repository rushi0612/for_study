import React from 'react';
export default class UpdatingExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {color: 'red'}
    }
    shouldComponentUpdate(){
        return true;
    }
    changeColor = () => {
        this.setState({color: 'blue'});
    }

    render(){
        return(
            <div>
                <input type="button " onClick={this.changeColor} value="Change Color" />
                <p>{this.state.color}</p>
            </div>
        )
    }
    }
 