import React from "react"
import { Link } from "gatsby"
import { FaPaperPlane, FaPhone, FaLinkedinIn, FaGithubAlt } from "react-icons/fa"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Sidebar from "../components/Sidebar"

const ContactPage = () => (
  <Layout>
    <div id="contactGrid">
      <SEO title="Home" />
      <h1>Contacteer mij</h1>
      <div id="contactWrapper">
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
        <div className="hiClass">
          <img src="https://kwinten.me/bear.gif" style={{width: `20em`, filter: `grayscale(1)`}}></img>
        </div>
      </div>
      <div className="navigation" style={{gridColumn: 2, gridRow: 2, marginTop: `-107px`}}>
        <Sidebar></Sidebar>
      </div>
    </div>
    <footer id="contactFooter" style={{position: `absolute`, bottom: `0`, height: `2em`, left: 0, marginLeft: `2.4rem`}}>
         <p>
            © {new Date().getFullYear()}, Built by
            {` `}
            <a href="https://kwinten.me">Kwinten Delrue</a> with Gatsby
          </p>
     </footer>
  </Layout>
)

export default ContactPage
