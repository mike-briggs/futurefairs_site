import React , {Component} from 'react';
import './App.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/font-awesome.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from './Contact.js'
import Header from './Header.js'
import Section1 from './Section1.js'
import Section2 from './Section2.js'
import Section3 from './Section3.js'
import CTABanner from './CTABanner.js'


export class Home extends Component{


    constructor() {
        super()
        this.state = { loading: true };
    }
    componentDidMount() {
        // this simulates an async action, after which the component will render the content
        this.setState({ loading: false });
      }


    render() {
        const { loading } = this.state;
        const settings = {
          dots: true,
          infinite: true,
          arrows: true,
          speed: 100,
          adaptiveHeight: true,
          autoplay: true,
          autoplaySpeed: 2200,
          slidesToShow: 3,
          slidesToScroll: 1
        };
    
        if (loading) {
          return (
            <div id="preloader">
              <div className="jumper">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          )
        } else {
          return (
            <div className="">
    
              
              <Header scroll={this.fiscal} />
              <Section1 />
              
              {/*<Section3 />*/}
              
              <Section2 />
              <Section3 />
              <CTABanner/>
              <div id="contact"></div>
              {/*<div id="contact"  className="container">
                <hr></hr>
              </div>
              <hr style={{padding:'20px',paddingAbove:'40px'}}></hr>
            <div className="container">
            <div className="col-lg-12 col-md-12 col-12">
                          <h4 style={{ fontFamily: 'Source Sans Pro', paddingBottom:'20px',fontWeight:'600',fontSize: '16px',float:'right' }} className="">Copyright 2020 Clearweb &copy; All Rights Reserved.</h4>
                        </div>
        </div>*/}
    
            </div>
          );
        }
      }
}

export default Home;