import { Link } from "gatsby"
import {FaLanguage} from "react-icons/fa"
import PropTypes from "prop-types"
import React from "react"
import GlitchEffect from "react-glitch-effect"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `none`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div style={{paddingTop: `1.5vh`}}>
        <ul style={{listStyle: `none`, textTransform: `lowercase`}}>


          <li style={{display: `block`}}>
            <Link style={{textDecoration: `none`}}>
              <h1 style={{textAlign: `left`}}>
                Kwinten
              </h1>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

