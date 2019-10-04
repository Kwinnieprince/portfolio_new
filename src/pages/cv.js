import React from "react"
import { Link } from "gatsby"
import { FaLinkedinIn, FaPaperPlane, FaPhone } from "react-icons/fa"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


const CvPage = () => (
  <Layout>
    <SEO title="Home" />
   <h1>Mijn CV</h1>
   <div>
     <p>
      <FaLinkedinIn/>
      <a href="https://www.linkedin.com/in/kwin ten-delrue">https://www.linkedin.com/in/kwin ten-delrue</a>
     </p>
   </div>
   <div>
   <p>
      <FaPaperPlane/>
      <a href="mailto:kwinten@delrue.com">kwinten@delrue.com</a>
    </p>
   </div>
   <div>
    <p>
      <FaPhone/>
      <a href="tel:+32470859657">+32 470 85 96 57</a>
    </p>
   </div>
   <h3>Studies</h3>
    <div id="schoolOne" style={{marginBottom: `2em`}}>
        <h4 style={{margin: 0}}>Bachelor Toegepaste Informatica</h4>
        <p style={{margin: 0}}>2017 - nu</p>
        <p style={{margin: 0}}>University Colleges Leuven Limburg</p>
    </div>
    <div id="schoolTwo" style={{marginBottom: `2em`}}>
        <h4 style={{margin: 0}}>Computer sience | Cybersecurity</h4>
        <p style={{margin: 0}}>September 2019 - December 2019</p>
        <p style={{margin: 0}}>Cardiff Metropolian University</p>
    </div>
    <div id="schoolThree" style={{marginBottom: `2em`}}>
        <h4 style={{margin: 0}}>Elektromechanica</h4>
        <p style={{margin: 0}}>2013 - 2017</p>
        <p style={{margin: 0}}>Vrij Technisch instituut Leuven</p>
    </div>
    <div id="schoolFour" style={{marginBottom: `2em`}}>
        <h4 style={{margin: 0}}>Moderne talen</h4>
        <p style={{margin: 0}}>2011 - 2013</p>
        <p style={{margin: 0}}>Sint-pieterscollege Leuven</p>
    </div>
  </Layout>
)

export default CvPage
