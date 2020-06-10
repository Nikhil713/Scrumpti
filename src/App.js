import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar.js'
import Body from './components/body/body.js'
import Footer from './components/footer/footer.js'

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        display : 'none',
        display1: 'none'
      };
  }

  showLogin(){
    this.setState({
      display : 'flex'
    })
  }

  showSignup(){
    this.setState({
      display1 :'flex'
    })
  }
  handleClick = (e) =>{
    this.setState({
      display: 'none',
      display1: 'none'
    })
  }
  render() {
    return (
      <div className="App">
        <Navbar display={this.showLogin.bind(this)} display1={this.showSignup.bind(this)}/>
        <Body /> 
        <Footer />

        {/* MODAL SECTION */}

        {/* SIGN IN */}
        <div className = "bg-modal" style = {{display:this.state.display}}>
                <div className = "modalContentLogin">
                  <div className = "close" onClick = {this.handleClick}>+</div>
                  <a>FoodApp</a>
                    <form>
                      <input type = "text" placeholder = "Username"></input>
                      <input type = "text" placeholder = "Password"></input>
                      <button href = "" className ="loginButton">Login</button>
                    </form>
                    
                    <div className="remforgot">
                    <input type = "checkbox" className = "check"></input>
                    <div><a className = "rem">Remember me</a></div>
                    <div><a href = "#" className = "forgot">Forgot Password?</a></div>
                    </div>
                 </div>
          </div>


        {/* SIGN UP */}

          <div className = "bg-modal" style = {{display:this.state.display1}}>
          <div className = "modalContentSignup">
            <div className = "close" onClick = {this.handleClick}>+</div>
            <a>Scrumpti</a>
            <form className = "signupForm">
              <input type = "text" placeholder = "Username"></input>
              <input type = "text" placeholder = "Email"></input>
              <input type = "password" placeholder = "Password"></input>
              <input type = "password" placeholder = "Confirm Password"></input>
            </form>
            <button href = "" className ="loginButton">SignUp</button>
            <div className = "or"><hr />OR <hr /></div>
            <div>
              <button className = "fb">
                <span className = "fblogo"></span>
                <span>Log In With Facebook</span>
              </button>
              <button className = "google">
                <span className = "googlelogo"></span>
                <span className = "googlelogin">Log In With Google</span>
              </button>
            </div>
            </div>

          </div>
      </div>
    );
  }
}

export default App;
