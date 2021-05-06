import React, { Component } from 'react';
import Tooltip from './Tooltip';

class Button extends Component {

    constructor(props){
        super(props);
        this.state = {
            hover:false,
            position:'down'
        }
    }

     handleMouseEnterEvent = () =>{
        this.setState({
            hover : true
        });
        console.log("HI")
    }

    handleMouseLeaveEvent = () =>{
        this.setState({
            hover : false
        })
        console.log("Bye");
    }

    handleInputChange = (event) =>{
        this.setState({
            position:event.target.value
        },()=>{
            console.log(this.state.position);
        })
    }

    render() {
        return (
            <div>
                <div className="button-style" onMouseEnter={this.handleMouseEnterEvent} onMouseLeave = {this.handleMouseLeaveEvent} >
                Button
                 {this.state.hover? <Tooltip  position =  {this.state.position} />:null}
                
                </div>
                <input type="text" onKeyUp={this.handleInputChange} style={{marginTop:'100px'}} placeholder="Enter tooltip position" />
            </div>
            
        );
    }
}

export default Button;