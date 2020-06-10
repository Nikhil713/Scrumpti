import React, {Component} from 'react';
import './navbar.css';

class Navbar extends Component {
    // constructor(props){
    //     super(props);

    // this.state = {
    //     isShow: false
    // };
    // }
    // handleClick(e){
    //     e.preventDefault();
    // }

    handleSignIn (e) {
        e.preventDefault();
        this.props.display();
       
    }

    handleSignUp(e){
        e.preventDefault();
        this.props.display1();
    }

    render() {
      return (
        <div className="Navbar">

            <nav className = "navbar">
            
                <div className = "appName">
                    <a href = "#" >Scrumpti</a>
                </div>

                <div className = "navLinks">
                    <a href = "#">Our Story</a>
                    <a href = "#">Menus</a>
                    <a href = "#">Order Online</a>
                    <a href = "#">Catering</a>
                    <a href = "#">Events</a>
                    <a href = "#">Contact & Reservations</a>
                </div>
                <div class="searchBar">
                        <input type = "text" placeholder = "Search FoodApp" className = "searchBox"></input>
                </div>
                <div className = "login" >
                
                    <form onSubmit={this.handleClick}>
                        {/* <input type="email" class="username" placeholder="Username"/>
                        <input type="password" class="password" placeholder="Password"/> */}
                        <button className = "signInButton" onClick={this.handleSignIn.bind(this)}>Sign In</button>
                        <button className = "signUpButton" onClick={this.handleSignUp.bind(this)}>Sign Up</button>
                    </form>
                    {/* <div className = "signUp">
                        Don't have an account? <a href="#">Sign up</a>
                        </div> */}
                </div>
            
            </nav>

  
        </div>
      );
    }
  }
  
  export default Navbar;