import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Sidebar from "../components/Sidebar"

const AboutPage = () => (
  <Layout>
    <div id="aboutGrid">
      <SEO title="About" />
      <h1>About myself</h1>
            <div id="aboutWrapper">
              <div>
                <p>
                  Hi, I am Kwinten, I am passionate about system and network engineering, developing websites and managing infrastructure. I play violin myself.
                  Since I was young I have been interested in system and network engineering and soon enough, I was known for my helpfulness.
                  My dream is to become a system- and network engineer or infrastructure engineer for cloud- and on-premise services.
                </p>                
              </div>
                <div id="talents">
                  <h3>Mijn talents</h3>
                  <div className="talentsGrid">
                    <div>
                      <h4 style={{marginBottom: 0}}>Network engineering</h4>
                      <p style={{fontWeight: `normal`, fontSize: `16px`}}>4 years experience</p>
                    </div>
                    <div>
                      <h4 style={{marginBottom: 0}}>Web development</h4>
                      <p style={{fontWeight: `normal`, fontSize: `16px`}}>5 years experience</p>
                    </div>
                    <div>
                      <h4 style={{marginBottom: 0}}>Linux | Unix</h4>
                      <p style={{fontWeight: `normal`, fontSize: `16px`}}>5 years experience</p>
                    </div>
                    <div>
                      <h4 style={{marginBottom: 0}}>Sharepoint design</h4>
                      <p style={{fontWeight: `normal`, fontSize: `16px`}}>3 years experience</p>
                    </div>
                    <div>
                      <h4 style={{marginBottom: 0}}>Office 365</h4>
                      <p style={{fontWeight: `normal`, fontSize: `16px`}}>3 years experience</p>
                    </div>
                    <div>
                      <h4 style={{marginBottom: 0}}>Docker</h4>
                      <p style={{fontWeight: `normal`, fontSize: `16px`}}>2 years experience</p>
                    </div>
                    <div id="otherTalents">
                      <h4 style={{marginBottom: 0}}>Other talents</h4>
                      <p style={{fontWeight: `normal`, fontSize: `16px`}}>Java</p>
                      <p style={{fontWeight: `normal`, fontSize: `16px`}}>Git</p>
                      <p style={{fontWeight: `normal`, fontSize: `16px`}}>English</p>
                      <p style={{fontWeight: `normal`, fontSize: `16px`}}>French</p>
                      <p style={{fontWeight: `normal`, fontSize: `16px`}}>React</p>
                      <p style={{fontWeight: `normal`, fontSize: `16px`}}>Terraform</p>
                      <p style={{fontWeight: `normal`, fontSize: `16px`}}>AWS</p>
                      <p style={{fontWeight: `normal`, fontSize: `16px`}}>Azure</p>
                    </div>
                  </div>
                </div>
            </div>
            <div className="navigation" style={{gridColumn: 2, gridRow: 2, marginTop: `-107px`}}>
                  <Sidebar></Sidebar>
            </div>
    </div>
    <footer id="aboutFooter" style={{position: `absolute`, bottom: `0`, height: `2em`, left: 0, marginLeft: `2.4rem`}}>
         <p>
            © {new Date().getFullYear()}, Built by
            {` `}
            <a href="https://kwinten.me">Kwinten Delrue</a> with Gatsby
          </p>
     </footer>
  </Layout>
)

export default AboutPage