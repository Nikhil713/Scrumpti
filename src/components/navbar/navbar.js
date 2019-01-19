import React, {Component} from 'react';
import './navbar.css'


class Navbar extends Component {
    
    handleClick(e){
        e.preventDefault();
    }

    handleSignIn(e){

    }

    handleSignUp(e){
        
    }

    render() {
      return (
        <div className="Navbar">

            <nav className = "navbar">
            
            <div className = "appName">
                <a href = "#" >Food-App</a>
            </div>

            <div className = "navLinks">
                <a href = "#">Our Story</a>
                <a href = "#">Menus</a>
                <a href = "#">Order Online</a>
                <a href = "#">Catering</a>
                <a href = "#">Events</a>
                <a href = "#">Contact & Reservations</a>
            </div>
        
            <div className = "login" >
                <div class="searchBar">
                    <input type = "text" placeholder = "Search FoodApp" className = "searchBox"></input>
                </div>
                <form onSubmit={this.handleClick}>
                    {/* <input type="email" class="username" placeholder="Username"/>
                    <input type="password" class="password" placeholder="Password"/> */}
                    <button className = "signInButton" onClick={this.handleSignIn}>Sign In</button>
                    <button className = "signUpButton" onClick={this.handleSignUp}>Sign Up</button>
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