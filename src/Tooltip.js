import React, { Component } from 'react';

class Tooltip extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className={`tooltip-${this.props.position}`} id="tooltip-div" >
                <div className="tooltip-text">Tooltip</div>
                <div id="tooltip-arrow" ></div>
            </div>
        );
    }
}

export default Tooltip;