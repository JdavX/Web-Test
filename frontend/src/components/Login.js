import React from "react";
import "../css/signup.css";
import signupimage from "../img/m11.png"
import * as Icon from 'react-icons/all';
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="container">
    <div className="row">
      <div className="col-sm">
        <div className="su-div-le">
        <form className="row g-3">

          <div className="col-md-6 lh">
            <label for="inputEmail" className="form-label">Email</label>
            <input type="email" className="form-control" id="inputEmail"/>
          </div>  

          <div className="col-md-6 lh">
              <label for="inputPassword" className="form-label">Password</label>
              <input type="password" className="form-control" id="inputPassword"/> 
            <div className="checkboxx">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" unchecked/>
              <label className="form-check-label" for="flexCheckChecked"> Show password </label>
            </div>
          </div>   
         
          <div className="col-md-12 tc">
            <button type="submit" className="btn btn-primary custom-width">Log in</button>
            <label for="alreadyhaveanaccount" className="form-label lh ">Not yet registered?</label>
            <Link to="/signup"><a href="#" id="alreadyhaveanaccount"> Register here.</a></Link>
          </div>
        </form>
        </div>
      </div>    
      <div className="col-sm">
        <div className="su-div-ri">
          <img src={signupimage} alt="img" className="sign-up-img" />
        </div>
      </div>
   
    </div>
  
  </div>
  );
}

export default Login;
