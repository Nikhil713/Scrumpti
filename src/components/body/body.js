import React, {Component} from 'react';
import './body.css'

class Body extends Component{
   
    // state = {
    
    //         bgcolor:'transparent',
    //         color:'white'
    // }
    // handleMouseOver = (e) =>{
    //     this.setState({
    //         bgcolor:'white',
    //         color:'black'
    //     })
    // }
    // handleMouseOut = (e) =>{
    //     this.setState({
    //         bgcolor:'transparent',
    //         color:'white'
    //     })
    // }
    render() {
        return(
            <div class="mainPage">
                <div class = "mainPageContent">
                    <div class = "mainPageName">
                        Food App
                    </div>
                    <div class = "mainPageText">
                        EXPERIENCE THE JOY OF FOOD
                    </div>
                    {/* <div class = "diveIn">
                        <button onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} style={{background:this.state.bgcolor,color:this.state.color}}>DIVE IN</button>
                    </div> */}
                </div>
                <div class = "menu">
                    <button >See Menu</button>
                    <button >Order Online</button>
                    <button >Reservations</button>
                </div>
            </div>

        );
    }
}

export default Body;