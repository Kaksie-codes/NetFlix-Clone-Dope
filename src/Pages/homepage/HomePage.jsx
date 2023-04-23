import React, { useEffect, useState } from 'react'
import Logo from '../../components/Logo';
import Tabs from '../../components/tabs/Tabs'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './homepage.css'
import Moretext from '../../components/moretext/Moretext';

const HomePage = () => {
  const [show, setShow] = useState(false);

  const changeNavbar = () => {
    if(window.scrollY > 100){
      setShow(true)
    }else{
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNavbar)
    return () => window.removeEventListener('scroll', changeNavbar)
  },[show])

  return (
    <div className="homepage">
      <div className="homepage__topsection">  
        <div className={`nav ${show ? 'nav__black' : ''}`}>
          <div className="nav__container container">
            <Logo/>
            <button className="btn btn-rounded">Sign In</button>            
          </div>   
        </div>
        <div className="content">
          <div className="container">
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <form>
              <div>
                <input type="email" autoComplete="email" maxLength="50" minLength="5"/>
                <span>Email address</span>
              </div>               
              <button className="btn btn-large">
                Get Started <ArrowForwardIosIcon/>
              </button>                               
            </form>
          </div>          
        </div>
        
      </div>
      <div className="homepage__bottomsection">
        <Tabs/>
        <Moretext/>
      </div>
      </div>
  )
}

export default HomePage;

