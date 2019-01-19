import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar.js'
import Body from './components/body/body.js'
import Footer from './components/footer/footer.js'

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        display : 'none'
      };
  }
  
  showModal(){
    this.setState({
      display : 'flex'
    })
  }
  handleClick = (e) =>{
    this.setState({
      display: 'none'
    })
  }
  render() {
    return (
      <div className="App">
        <Navbar display={this.showModal.bind(this)}/>
        <Body /> 
        <Footer />
         {/* MODAL SECTION */}
        <div className = "bg-modal" style = {{display:this.state.display}}>
                <div className = "modal-content">
                  <div className = "close" onClick = {this.handleClick}>+</div>
                    <form>
                      <input type = "text" placeholder = "Username"></input>
                      <input type = "text" placeholder = "Password"></input>
                      <a href = "">Submit</a>
                    </form>
                </div>

          </div>
      </div>
    );
  }
}

export default App;
