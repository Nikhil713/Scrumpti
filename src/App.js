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
                <div className = "modalContent">
                  <div className = "close" onClick = {this.handleClick}>+</div>
                  <a>FoodApp</a>
                    <form>
                      <input type = "text" placeholder = "Username"></input>
                      <input type = "text" placeholder = "Password"></input>
                      <button href = "" className ="loginButton">Login</button>
                    </form>
                    <input type = "checkbox" className = "check"></input>
                    <div className = "rem">Remember me</div>
                    <div><a href = "#" className = "forgot">Forgot Password?</a></div>
                </div>

          </div>
      </div>
    );
  }
}

export default App;
