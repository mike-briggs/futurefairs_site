import React, { Component } from 'react'

import './App.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/font-awesome.css'
import user from '../assets/icons/user.svg'
import section3 from '../assets/images/section3.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class Section3 extends Component {
  render() {
    return (
      <div style={{ marginTop: '0px', backgroundImage: 'none',paddingBottom:100 }} >
        <div className="header-text ">
          <div style={{ padding: '0px',flex: 1,
    justifyContent: 'center',
    alignItems: 'center',marginLeft:0,marginRight:0 }} className="row" >

            
        <div className="offset-lg-1 col-xl-5 col-lg-5 col-md-12 col-sm-12 ">
              <img className="landing-img " style={{ width: '100%', height: 'auto',marginTop:80 }} src={section3}></img>
            </div>
            <div className=" col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
            <h1 className="padding-top-80" style={{ paddingLeft: '15px', fontFamily: 'Cabin', fontWeight: 600, fontSize: '1.5em', color:'#969CBA' }}>LEARN ABOUT CANDIDATES</h1>
              <h1 className="" style={{ paddingLeft: '15px', fontFamily: 'Cabin', fontWeight: 600, fontSize: '4em',color:'#373B53' }}>Skill Matched Sessions</h1>
              <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="row">
                  
                  <h4 style={{ paddingLeft: '15px', fontFamily: 'Lato', color:'#373B53',fontWeight: '400', fontSize: '1.2em', lineHeight: '30px' }} >
                  Candidates have the ability to learn about the specific job role, location, and ask specifics about skill required. Recruiters are able to screen by asking simple skill testing and personality based questions.</h4>                  
                  
                </div>
                <div style={{paddingLeft:'15px'}} className="padding-top-20">
                  
                    <div className="row">
                        <a href="#contact"   className="main-button-header"><img className="" style={{ width: '12pt', height: 'auto', marginRight:10,marginBottom:2 }} src={user}></img> Register Now</a>
                      
                    </div>
                  
                </div>
              </div>
            </div>

            

          </div>
        </div>
      </div>
    )
  }
}

export default Section3
