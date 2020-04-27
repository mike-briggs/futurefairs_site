import React, { Component } from 'react'

import './App.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/font-awesome.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Message Sent Successfully!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });




  render() {
    const { name, email, message } = this.state;
    return (

      
        <div style={{marginTop:100,marginBottom:100}} class="container">

          <div class="row">
            <div class="col-lg-12">
              <div class="center-heading">
                <h2 class="section-title">Contact Us</h2>
              </div>
            </div>
            <div class="offset-lg-2 col-lg-8">
              <div class="center-text">
              <h4 style={{ paddingLeft: '15px', fontFamily: 'Lato', color:'#606060',fontWeight: '400', fontSize: '1em', lineHeight: '30px',letterSpacing:0 }} >
                  Please send us an email below and we will get back to you!</h4>
              </div>
            </div>
          </div>


          <div class="row">
            <div class="col-lg-2 col-md-3"></div>

            <div class="col-lg-8 col-md-6 col-sm-12">
              <div class="contact-form">
                
                <form name="contact" onSubmit={this.handleSubmit} id="contact" >
                  <div class="row">
                    <div class="col-lg-6 col-md-12 col-sm-12">
                      <fieldset>
                        <input name="name" type="text" class="form-control" id="name" value={name} onChange={this.handleChange}
                          placeholder="Full Name" required=""></input>
                                </fieldset>
                            </div>
                      <div class="col-lg-6 col-md-12 col-sm-12">
                        <fieldset>
                          <input name="email" type="email" class="form-control" id="email" value={email} onChange={this.handleChange}
                            placeholder="Email Address" required=""></input>
                                </fieldset>
                            </div>
                        <div class="col-lg-12">
                          <fieldset>
                            <textarea name="message" rows="6" class="form-control" id="message" value={message} onChange={this.handleChange}
                              placeholder="Your Message" required=""></textarea>
                          </fieldset>
                        </div>
                        <div class="col-lg-12">
                          <fieldset>
                            <button type="submit" id="form-submit" class="main-button">Send Message</button>
                          </fieldset>
                        </div>
                      </div>
                    </form>
                  </div>
            </div>

              </div>
            </div>


    )
  }
}

export default Contact
