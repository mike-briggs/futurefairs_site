import React, { Component } from 'react'

import './App.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/font-awesome.css'
import user from '../assets/icons/user.svg'
import next_blue from '../assets/icons/next_primary.svg'
import headerBG from '../assets/images/header-bg.svg'
import headerRight from '../assets/images/header-right.png'
import Countdown from './Countdown.js'
import ReactTypingEffect from 'react-typing-effect'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class Header extends Component {



  render() {

    return (
      <div className="landing-section" style={{ marginTop: '0px', backgroundImage: headerBG }} id="#">
        <div className="header-text spacingName">
          <div style={{
            padding: '0px', flex: 1,
            justifyContent: 'center',
            alignItems: 'center', marginLeft: 0, marginRight: 0
          }} className="row" >





            <div className="offset-lg-1 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
              <h1 className="padding-bottom-20" style={{ paddingLeft: '15px', fontFamily: 'Cabin', fontWeight: 600, fontSize: '5em', letterSpacing: -1, color: "#fff" }}>
                {/*<ReactTypingEffect
                text={[""]} speed={25} typingDelay={0} //text=["Hello.", "World!"]
                />*/}
              Host Your Next Career Fair,  Virtually</h1>
              <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12">
                <div className="row ">

                  <h4 style={{ paddingLeft: '15px', color: '#EDEFF5', fontFamily: 'Lato', fontWeight: '400', fontSize: '1.2em', lineHeight: '30px' }} >
                    Organize your next campus recruitment online. Companies identify top candidates through a streamlined screening process. Students learn about potential employers & jobs matching their specific skill set.
                    <br></br><br></br><strong style={{color:'#33D69F'}}>Coming soon</strong> - Sign up to be notified when we are live.

                  </h4>


                </div>

              </div>
              <div style={{ textAlign: 'left' }} className="padding-top-20 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">

                <div style={{textAlign:'left'}} >
                 <Countdown color='#ffffff' date={`2020-05-15T00:00:00`} />
                 
                </div>
                <div style={{paddingLeft:'30px'}} className="row">
                  <a href="#contact" className="main-button-header"><img className="" style={{ width: '10pt', height: 'auto', marginRight: 10, marginBottom: 2 }} src={user}></img> Register </a>
                  <a href="#portfolio" className="main-button-nobg"><img className="arrow" style={{ width: '10pt', height: 'auto', marginRight: 10, marginBottom: 4 }} src={next_blue}></img> Learn More </a>


                </div>

              </div>
            </div>
            <div className="col-xl-5  col-lg-5 col-md-12 col-sm-12 ">

              <img className="landing-img " style={{ width: '100%', height: 'auto', marginTop: 80 }} src={headerRight}></img>



            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Header
