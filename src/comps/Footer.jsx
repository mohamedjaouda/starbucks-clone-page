import spotify from '../img/social-spotify.svg'
import facebook from '../img/social-facebook.svg'
import pinterest from '../img/social-pinterest.svg'
import instagram from '../img/social-instagram.svg'
import youtube from '../img/social-youtube.svg'
import twitter from '../img/social-twitter.svg'

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="social">
            <a href="https://spotify.com">
              <img className="spotify" src={spotify} alt="" />
            </a>
            <a href="https://facebook.com">
              <img className="facebook" src={facebook} alt="" />
            </a>
            <a href="https://pinterest.com">
              <img className="pinterest" src={pinterest} alt="" />
            </a>
            <a href="https://instagram.com">
              <img className="instagram" src={instagram} alt="" />
            </a>
            <a href="https://youtube.com">
              <img className="youtube" src={youtube} alt="" />
            </a>
            <a href="https://twitter.com">
              <img className="twiiter" src={twitter} alt="" />
            </a>
          </div>
          <p>© 2022 Starbucks Coffee Company. All rights reserved.</p>
        </div>
      </footer>
    );
}

export default Footer
