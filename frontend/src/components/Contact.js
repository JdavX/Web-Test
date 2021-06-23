import React from 'react';
import signupimage from "../img/m12.jpg"
import * as Icon from 'react-icons/all';
import "../css/signup.css";
function Contact(props) {
    return (
        <div className="container">       
        <div className="row">
            <div className="col-sm-6">
                <div className="su-div-le">
                    <div className="row">

                        <div className="col-ml-12 df">                 
                            <div className="circle "><Icon.RiMapPin2Line className="ic"/></div>
                                    <div className="col-sm-8 hh"> 
                                        <h5 className="card-title">Address</h5>                      
                                        <p className="card-text">S-2202-A Textite Tower West Exchange Road Ortigas Center 1600</p>                               
                                    </div>       
                             
                            </div>

                        <div className="col-ml-12 df">         
                            <div className="circle"><Icon.BiMobileAlt className="ic"/></div>
                                <div  className="col-sm-8">
                                    <h5 className="card-title">Mobile</h5>
                                    <p className="card-text">+639357366675</p>
                                </div>
                        </div>
                
                        <div className="col-ml-12 df">                                         
                            <div className="circle"><Icon.HiOutlineMail className="ic"/></div>
                                <div className="col-sm-8">
                                    <h5 className="card-title">Email</h5>
                                    <p className="card-text">mamako@papamo.com.ph</p>
                                 </div>
                        </div>

                        <hr className="hr"/>
                        
                        <div className="col-ml-12 df">                                                    
                            <div className="circle"><a href="https://www.facebook.com" target="_system" className="tagweb"><Icon.FaFacebook className="ic"/></a></div>       
                            <div className="circle"><a href="https://www.messenger.com" target="_system" className="tagweb"><Icon.FaFacebookMessenger className="ic"/></a></div>      
                            <div className="circle"><a href="https://www.linkedin.com" target="_system" className="tagweb"><Icon.TiSocialLinkedin className="ic"/></a></div>                      
                        </div>
             
                </div>
            </div>
        </div>    
          <div className="col-sm-6">
            <div className="su-div-ri-contact">
              <img src={signupimage} alt="img" className="contact-us-img" />
            </div>
          </div>
       
        </div>
      
      </div>
    );
}

export default Contact;