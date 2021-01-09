import PropTypes from 'prop-types'
import React from 'react'
import logo from '../images/logo1.png'
import logosvg from '../images/logo_white.svg'
import logotrans from '../images/logo_trans.png'
import logosvg2 from '../images/logo_svg2.svg'
import logopng2 from '../images/logo_png2.png'
import logobluesvg from '../images/blue_svg.svg'
import bw from '../images/logo_bw.svg'
import wg from '../images/logo_whitegray.png'
import wg_svg from '../images/bw_svg.svg'
import zoom from '../images/zoom.png'
import zoomwg from '../images/zoom_wg.svg'
import pic2 from '../images/favicon2.png'
import site_logo from '../images/site_logo.svg'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <img className="logo" src={site_logo}></img>
      {/*<span className="icon fa-eyedropper"></span>*/}
    </div>
    <div className="content">
      <div className="inner">
        <h1>Coloroo</h1>
        <p>
          Your next new modern color picker and palette manager. Available soon.
         
        </p>
        <p>
          <a href="https://chrome.google.com/webstore/detail/coloroodev/ngndhplncgjcgmlkjekdbkgffmkjcjfj?hl=es"> Get the beta extension for Google Chrome here</a>
        </p>
      </div>
    </div>
    <nav>
      <ul>
        
        {/*<li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </button>
        </li>
        */}
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            FAQ
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('feedback')
            }}
          >
            Join us
          </button>
        </li>
        {<li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
          </li>}
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
