import React, { Component } from 'react'
import logo from './assets/logos/main-logo.svg'
import user from './assets/icons/user.svg'
import vr from './assets/icons/vr.svg'


export class NavBar extends Component {
    state = {
        animation: 'overlay',
        direction: 'right',
        dimmed: true,
        visible: false,
    }

    constructor(props) {
        super(props);
        this.childLook = React.createRef();
        this.state = {
            isLoading: false,
            signButton: <></>,
            value: ''
        }
    }

    render() {

        return (

            <div>
                <header className="header-area header-sticky">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                <div className="">
                                    <a href="/#" className="logo" style={{ color: 'black', paddingLeft:'30px',paddingTop: '7px'}}>
                                        <img className="" style={{ width: 'auto', height: '24pt', marginBottom:5 }} src={logo}></img>
                                    </a>
                                    <div style={{float:'right', paddingTop: '10px'}}>
                                    <a href="/#portfolio" className="logo" style={{ paddingRight:'30px' }}>
                                        <h2 style={{ color: '#fff', fontFamily:'Ubuntu',  marginTop:'0px',fontSize: '16px', fontWeight: '400',letterSpacing: 0 }}>About</h2>
                                    </a>
                                    <a href="/#portfolio" className="logo" style={{ paddingRight:'30px' }}>
                                        <h2 style={{ color: '#fff', fontFamily:'Ubuntu',  marginTop:'0px',fontSize: '16px', fontWeight: '400',letterSpacing: 0 }}>Features</h2>
                                    </a>
                                    <a href="/#portfolio" className="logo" style={{ paddingRight:'45px' }}>
                                        <h2 style={{ color: '#fff', fontFamily:'Ubuntu',  marginTop:'0px',fontSize: '16px', fontWeight: '400',letterSpacing: 0 }}>How it Works</h2>
                                    </a>
                                    <a  className="logo" style={{ paddingRight:'30px' }}>
                                        
                                            <img className="" style={{ height: '16pt', width: 'auto', marginRight: 10, marginBottom: 2 }} src={vr}></img>
                                            
                                    </a>
                                    <a href="/#contact" className="logo" style={{ paddingRight:'30px' }}>
                                        <h2 style={{ color: '#fff', fontFamily:'Ubuntu',  marginTop:'0px',fontSize: '16px', fontWeight: '400',letterSpacing: 0 }}>
                                            <img className="" style={{ width: '10pt', height: 'auto', marginRight: 10, marginBottom: 2 }} src={user}></img>
                                            Register</h2>
                                    </a>
                                    {/*<a href="/#services" className="logo" style={{ color: 'black', paddingRight:'30px' }}>
                                        <h2 style={{ color: 'rgb(10, 10, 10)',fontFamily:'Ubuntu',  marginTop:'0px',fontSize: '18px', fontWeight: '600',letterSpacing: -0.5 }}>SERVICES</h2>
                                    </a>*/}
                                    </div>
                                    
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default NavBar



