import React from "react";
import "../css/App.css"

import { Link } from 'react-router-dom'
function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  <Link to="/"> <a class="navbar-brand" href="#">Logo</a></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ml-auto">

        <Link to="/"><li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </li></Link>

        <Link to="/contacts"><li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Contact Us</a>
        </li></Link>

        <Link to="/signup"><li class="nav-item">
        <a class="nav-link"  aria-current="page" href="#">Sign Up</a>
        </li> </Link>

        <Link to="/login"><li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Log in</a>
        </li></Link>
        
      </ul>
    </div>
  </div>
</nav>
  //  <nav>
  //      <Link to="/"><h3 className="links">Logo</h3></Link>
  //      <ul className="nav-links">
  //          <Link to="/signup"><li className="links">Sign Up</li></Link>
  //          <Link to="/login"><li className="links">Login</li></Link>
  //      </ul>
  //  </nav>
  );
}

export default Nav;
