import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
            aliquam facilisis ante interdum congue. Integer mollis, nisl amet
            convallis, porttitor magna ullamcorper, amet egestas mauris. Ut
            magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas.
            By the way, check out my <a href="#work">awesome work</a>.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Etiam tristique
            libero eu nibh porttitor fermentum. Nullam venenatis erat id
            vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
            Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae
            dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in
            lectus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. In non lorem sit amet elit
            placerat maximus. Pellentesque aliquam maximus risus, vel sed
            vehicula.
          </p>
          {close}
        </article>

        <article
          id="feedback"
          className={`${this.props.article === 'feedback' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Join the team</h2>
          {/*<span className="image main">
            <img src={pic02} alt="" />
          </span>
          */}
          <p>Do you want to help us build the next great extension? Interested in the project? Contact us with the field you are specialized in. We would love to hear from you!</p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">FAQ</h2>
          {/*<span className="image main">
            <img src={pic03} alt="" />
          </span>
          */}
          <h3>What is Coloroo?</h3>
          <p>
            Coloroo features an in-built color picker / eye-dropper as well as color palette 
            manager. Share groups of colors with friends so they can import them. Download palettes as CSV 
            or export them to SVG to use them in your next project. Coloroo is currently 
            in beta development and does not yet have all features implemented.
          </p>
          
          <h3>Is coloroo free?</h3>
          <p>
            Coloroo is free to use and doesn't require a login. If you want to save your settings,
            you will need to create a free account. 
          </p>

             <h3>Can I request a feature?</h3>
          <p>
            Do you have feedback or want to suggest new features? You can do so by 
            visiting <a href="https://coloroo.hearken.io" target="_blank">https://coloroo.hearken.io</a>.
            Alternatively, you can drop us an email at <a href="mailto:info@coloroo.dev">info@coloroo.dev</a>
          </p>
          
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          {/*<form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
        </form>*/}
         <p>

         </p>
          <ul className="icons">
           <li>
              <a
                href="https://twitter.com/Coloroo1"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
             {/*<li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Facebook</span>
              </a>
            </li>*/}
            <li>
              <a href="mailto:info@coloroo.dev" className="icon fa-envelope">
                <span className="label">E-Mail</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/coloroo" target="_blank"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
