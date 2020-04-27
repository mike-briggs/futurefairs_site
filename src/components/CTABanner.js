import React, { Component } from 'react'
import Countdown from './Countdown.js'
import enter from '../assets/icons/Enter.svg'

export class CTABanner extends Component {
    render() {
        return (
            <div className="cta" >


                <div className="padding-bottom-top-60 " >

                <h1 className="" style={{  fontFamily: 'Cabin', fontWeight: 600, fontSize: '1.5em', color:'#969CBA' }}>FUTURE TALENT FAIRS</h1>

                        <p style={{ color: '#fff', fontFamily: 'Cabin', fontSize: '4em', fontWeight: 700 }}>The Benefits of Hosting <br></br>Online Await...</p>
                        {/*<p style={{ color: '#fff', fontFamily: 'Lato', fontSize: '1.2em', fontWeight: 500 }}>Contact us below and we will setup a phone call to give you a quote and discuss more details.</p>*/}
                        
        
                </div>
                <div className="padding-bottom-top-60 cta-container" style={{textAlign:'right'}} >

                    
                        <Countdown color='#ffffff' date={`2020-05-15T00:00:00`}/>
                        {/*<p style={{ color: '#fff', fontFamily: 'Lato', fontSize: '1.2em', fontWeight: 500 }}>Contact us below and we will setup a phone call to give you a quote and discuss more details.</p>*/}
                        <a href="#contact" className="main-button-header"><img className="" style={{ width: '16pt', height: 'auto', marginRight: 10, marginBottom: 2 }} src={enter}></img>Register </a>
        
                </div>

            </div>

        )
    }
}

export default CTABanner
