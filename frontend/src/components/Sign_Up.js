import React from "react";
import "../css/signup.css";
import signupimage from "../img/m10.png"
import { Link } from 'react-router-dom'

function Sign_Up() {
  return (
<div className="container">
  <div className="row">
    <div className="col-sm">
      <div className="su-div-le">
      <form className="row g-3">
        <div className="col-md-4">
          <label for="inputFirstName" className="form-label">First Name</label>
          <input type="text" className="form-control" id="inputFirstName"/>
        </div>  
        <div className="col-md-4">
          <label for="inputMiddleName" className="form-label">Middle Name</label>
          <input type="text" className="form-control" id="inputMiddleName"/>
        </div> 
        <div className="col-md-4">
          <label for="inputLastName" className="form-label">Last Name</label>
          <input type="text" className="form-control" id="inputLastName"/>
        </div> 
        <div className="col-md-6 lh">
          <label for="inputGender" className="form-label">Gender</label>
          <select id="inputGender" className="form-control">
            <option selected>Choose Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>  
        <div className="col-md-6 lh">
          <label for="inputDateofbirth" className="form-label">Date of Birth</label>
          <input type="date" id="inputDateofbirth" className="form-control"></input>
        </div>  
        <div className="col-md-6 lh">
          <label for="inputEmail" className="form-label">Email</label>
          <input type="email" className="form-control" id="inputEmail"/>
        </div>  
        <div className="col-md-6 lh">
          <label for="inputPassword" className="form-label">Password</label>
          <input type="password" className="form-control" id="inputPassword"/>
        </div>   
       
        <div className="col-md-12 tc">
          <button type="submit" className="btn btn-primary custom-width">Sign in</button>
          <label for="alreadyhaveanaccount" className="form-label lh ">Already have an account?</label>
          <Link to="/login"><a href="#" id="alreadyhaveanaccount"> Log in.</a></Link>
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

export default Sign_Up;
