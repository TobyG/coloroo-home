import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-eyedropper"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Coloroo</h1>
        <p>
          Your next new modern color picker and palette manager. Available soon.
         
        </p>
        <p>
          <a href="https://chrome.google.com/webstore/detail/coloroodev/ngndhplncgjcgmlkjekdbkgffmkjcjfj?hl=es"> Get the extension for Google Chrome here</a>
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
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('feedback')
            }}
          >
            Feedback
          </button>
        </li>
        {/*<li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
          </li>*/}
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
