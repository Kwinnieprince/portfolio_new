import React from "react"
import { Link } from "gatsby"
import { FaPaperPlane, FaPhone, FaLinkedinIn, FaGithubAlt } from "react-icons/fa"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <div id="contactGrid">
      <SEO title="Home" />
      <h1>Contacteer mij</h1>

      <div style={{gridColumn: 2, gridRow: 2, marginTop: `-107px`}}>
        <div style={{ maxWidth: `400px`, margin: `0 auto`, zIndex: 1000 }}>
          <Link  to="/">
           <Image />
          </Link>
        </div>
        <div style={{ margin: `0 auto`, zIndex: 20000}}>
          <ul style={{listStyle: `none`, textTransform: `lowercase`, textAlign: `center`, margin: 0}}>
            <li style={{marginTop: `-1.8em`}}>
              <Link 
                  style={{textDecoration: `none`, fontSize:30}}
                  to="/about"
              >Over mij</Link>
              </li>
              <li style={{marginTop: `1.2em`}}>
                <Link 
                    style={{textDecoration: `none`, fontSize:30}}
                    to="/cv">Mijn CV</Link>
              </li>
              <li style={{marginTop: `1.2em`}}>
                <Link 
                    style={{textDecoration: `none`, fontSize:30, cursor: `pointer`}}
                    to="/work"
                >Mijn werk</Link>
              </li>
              <li style={{marginTop: `1.2em`}}>
                <Link 
                    style={{textDecoration: `none`, fontSize:30}}
                    to="/contact">Contacteer mij</Link>
              </li>
            </ul>
          </div>
        </div>
      <div id="contactWrapper">
      <div className="hiClass">
          <img src="https://kwinten.me/bear.gif" style={{width: `20em`, filter: `grayscale(1)`}}></img>
        </div>
        <div className="contact">
          <h3>Kwinten Delrue</h3>
          <p>
            <a href="mailto:kwinten@delrue.com" style={{textDecoration: `none`}}><FaPaperPlane/> kwinten@delrue.com</a>
          </p>
          <p>
            <a href="tel:+32470859657" style={{textDecoration: `none`}}><FaPhone/> +32470859657</a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/kwinten-delrue" style={{paddingRight: `1em`}}><FaLinkedinIn/></a>
            <a href="https://github.com/Kwinnieprince"><FaGithubAlt/></a>
          </p>
        </div>
      </div>
    </div>
    <footer style={{position: `absolute`, bottom: `0`, height: `2em`, left: 0, marginLeft: `2.4rem`}}>
         <p>
            © {new Date().getFullYear()}, Built by
            {` `}
            <a href="https://kwinten.me">Kwinten Delrue</a> with Gatsby
          </p>
     </footer>
  </Layout>
)

export default ContactPage
