import React from "react"
import { Link } from "gatsby"
import { FaLinkedinIn, FaPaperPlane, FaPhone } from "react-icons/fa"

import Layout from "../components/layout"
import Sidebar from "../components/Sidebar"
import SEO from "../components/seo"


const CvPage = () => (
  <Layout>
    <div id="cvGrid">
        <SEO title="Home" />
        <ul style={{listStyle: `none`, margin: 0, paddingBottom: `1.5em`, gridRow: `1`}}>
          <li style={{display: `inline-block`}}>
            <h1  style={{paddingBottom: `1em`}}>My resume</h1>
          </li>
        </ul>
        <ul style={{listStyle: `none`, margin: 0, paddingBottom: `1.5em`, gridRow: `1`}} id="contacts">
          <li style={{float: `right`, paddingLeft: `1em`}}>
            <div>
              <p> 
              <a href="tel:+32470859657"><FaPhone/> +32470859657</a>
            </p>
          </div>
          </li>
          <li style={{float: `right`, paddingLeft: `1em`}}>
            <div>
            <p>
              <a href="mailto:kwinten@delrue.com"><FaPaperPlane/></a>
              </p>
            </div>
          </li>
          <li style={{float: `right`, paddingLeft: `1em`}}>
            <div>
            <p>
              <a href="https://www.linkedin.com/in/kwinten-delrue"><FaLinkedinIn/></a>
              </p>
            </div>
          </li>
        </ul>
        <div id="cvWrapper">
            <div style={{gridColumn: 1}}>
            <div id="studies">
              <h3>Studies</h3>
                <div id="schoolOne" style={{marginBottom: `2em`}}>
                    <h4 style={{margin: 0, marginBottom: `5px`}}>Bachelor Applied informatics</h4>
                    <p style={{margin: 0}}>2017 - present</p>
                    <p style={{margin: 0}}>University Colleges Leuven Limburg</p>
                </div>
                <div id="schoolTwo" style={{marginBottom: `2em`}}>
                    <h4 style={{margin: 0, marginBottom: `5px`}}>Computer science | Cybersecurity</h4>
                    <p style={{margin: 0}}>September 2019 - December 2019</p>
                    <p style={{margin: 0}}>Cardiff Metropolian University</p>
                </div>
                <div id="schoolThree" style={{marginBottom: `2em`}}>
                    <h4 style={{margin: 0, marginBottom: `5px`}}>Electromechanics</h4>
                    <p style={{margin: 0}}>Second grade 2013 - 2017</p>
                    <p style={{margin: 0}}></p>
                    <p style={{margin: 0}}>Vrij Technisch Instituut Leuven</p>
                </div>
                <div id="schoolFour" style={{marginBottom: `2em`}}>
                    <h4 style={{margin: 0, marginBottom: `5px`}}>Modern languages</h4>
                    <p style={{margin: 0}}>First grade 2011 - 2013</p>
                    <p style={{margin: 0}}>Sint-Pieterscollege Leuven</p>
                </div>
            </div>
            <div id="werkervaring" style={{marginBottom: 0}}>
              <h3>Work experience</h3>
              <div id="workOne" style={{marginBottom: `2em`}}>
                <h4 style={{margin: 0, marginBottom: `5px`}}>System engineer</h4>
                <h4 style={{margin: 0, fontSize: 16, fontWeight: `normal`, marginBottom: `5px`}}>KBC Bank & Verzekering</h4>
                <p style={{margin: 0}}>2020 - present</p>
              </div>
              <div id="workTwo" style={{marginBottom: `2em`}}>
                <h4 style={{margin: 0, marginBottom: `5px`}}>Sales and training partner</h4>
                <h4 style={{margin: 0, fontSize: 16, fontWeight: `normal`, marginBottom: `5px`}}>Edu-tech</h4>
                <p style={{margin: 0}}>2017 - present</p>
                <p style={{margin: 0}}>Designing SharePoint websites</p>
                <p style={{margin: 0}}>Managing networks</p>
                <p style={{margin: 0}}>Helping customers</p>
              </div>
              <div id="workThree" style={{marginBottom: `2em`}}>
                <h4 style={{margin: 0, marginBottom: `5px`}}>Intern</h4>
                <h4 style={{margin: 0, fontSize: 16, fontWeight: `normal`, marginBottom: `5px`}}>Datacamp Leuven</h4>
                <p style={{margin: 0}}>February 2020 - June 2020</p>
                <p style={{margin: 0}}>Infrastructure engineer</p>
              </div>
              <div id="workFour" style={{marginBottom: `2em`}}>
                <h4 style={{margin: 0, marginBottom: `5px`}}>Webmaster</h4>
                <h4 style={{margin: 0, fontSize: 16, fontWeight: `normal`, marginBottom: `5px`}}>University Symphony Orchestra of the KU-Leuven</h4>
                <p style={{margin: 0}}>2018 - present</p>
                <p style={{margin: 0}}>Maintenance and development of the website</p>
              </div>
              <div id="workFive">
                <h4 style={{margin: 0, marginBottom: `5px`}}>Rider</h4>
                <h4 style={{margin: 0, fontSize: 16, fontWeight: `normal`, marginBottom: `5px`}}>Deliveroo</h4>
                <p style={{margin: 0}}>2016 - 2019</p>
                <p style={{margin: 0}}>Transporting food from restaurant to customer</p>
              </div>
              </div>
              <div id="vrijwilliger">
                <h3>Vrijwilligerswerk</h3>
                <div id="vrijOne" style={{marginBottom: `2em`}}>
                  <h4 style={{margin: 0}}>Chief Technician</h4>
                  <h4 style={{margin: 0, fontSize: 16, fontWeight: `normal`}}>Levet Scone Wilsele</h4>
                </div>
                <div id="vrijTwo" style={{marginBottom: `2em`}}>
                  <h4 style={{margin: 0}}>Sound Technician | Stagehand</h4>
                  <h4 style={{margin: 0, fontSize: 16, fontWeight: `normal`}}>Het Depot</h4>
                </div>
                <div id="vrijThree" style={{marginBottom: `2em`}}>
                  <h4 style={{margin: 0}}>Active member</h4>
                  <h4 style={{margin: 0, fontSize: 16, fontWeight: `normal`}}>Computer science student union Leuven(ISW)</h4>
                </div>
              </div>
              <div id="vrijwilliger">
                <h3>Talen</h3>
                <div id="vrijOne" style={{marginBottom: `2em`}}>
                  <h4 style={{margin: 0}}>Dutch</h4>
                  <h4 style={{margin: 0, fontSize: 16, fontWeight: `normal`}}>Native language</h4>
                </div>
                <div id="vrijTwo" style={{marginBottom: `2em`}}>
                  <h4 style={{margin: 0}}>French</h4>
                  <h4 style={{margin: 0, fontSize: 16, fontWeight: `normal`}}>Basic</h4>
                </div>
                <div id="vrijThree" style={{marginBottom: `2em`}}>
                  <h4 style={{margin: 0}}>English</h4>
                  <h4 style={{margin: 0, fontSize: 16, fontWeight: `normal`}}>Level B2</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="navigation" style={{gridColumn: 2, gridRow: 2, marginTop: `-50px`}}>
                  <Sidebar></Sidebar>
            </div>
        </div>
        <footer>
         <p>
            © {new Date().getFullYear()}, Built by
            {` `}
            <a href="https://kwinten.me">Kwinten Delrue</a> with Gatsby
          </p>
     </footer>
  </Layout>
)

export default CvPage
