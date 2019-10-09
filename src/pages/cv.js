import React from "react"
import { Link } from "gatsby"
import { FaLinkedinIn, FaPaperPlane, FaPhone } from "react-icons/fa"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


const CvPage = () => (
  <Layout>
    <div id="cvGrid">
        <SEO title="Home" />
        <ul style={{listStyle: `none`, margin: 0, paddingBottom: `1.5em`, gridRow: `1`}}>
          <li style={{display: `inline-block`}}>
            <h1  style={{paddingBottom: `1em`}}>Mijn cv</h1>
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
                    <h4 style={{margin: 0, marginBottom: `5px`}}>Bachelor Toegepaste Informatica</h4>
                    <p style={{margin: 0}}>2017 - nu</p>
                    <p style={{margin: 0}}>University Colleges Leuven Limburg</p>
                </div>
                <div id="schoolTwo" style={{marginBottom: `2em`}}>
                    <h4 style={{margin: 0, marginBottom: `5px`}}>Computer science | Cybersecurity</h4>
                    <p style={{margin: 0}}>September 2019 - December 2019</p>
                    <p style={{margin: 0}}>Cardiff Metropolian University</p>
                </div>
                <div id="schoolThree" style={{marginBottom: `2em`}}>
                    <h4 style={{margin: 0, marginBottom: `5px`}}>Elektromechanica</h4>
                    <p style={{margin: 0}}>Tweede graad 2013 - 2017</p>
                    <p style={{margin: 0}}></p>
                    <p style={{margin: 0}}>Vrij Technisch Instituut Leuven</p>
                </div>
                <div id="schoolFour" style={{marginBottom: `2em`}}>
                    <h4 style={{margin: 0, marginBottom: `5px`}}>Moderne talen</h4>
                    <p style={{margin: 0}}>Eerste graad 2011 - 2013</p>
                    <p style={{margin: 0}}>Sint-Pieterscollege Leuven</p>
                </div>
            </div>
            <div id="werkervaring" style={{marginBottom: 0}}>
              <h3>Werkervaring</h3>
              <div id="workOne" style={{marginBottom: `2em`}}>
                <h4 style={{margin: 0, marginBottom: `5px`}}>Sales and training partner</h4>
                <h4 style={{margin: 0, fontSize: 16, fontWeight: `normal`, marginBottom: `5px`}}>Edu-tech</h4>
                <p style={{margin: 0}}>2017 - heden</p>
                <p style={{margin: 0}}>Verantwoordelijk voor sales</p>
                <p style={{margin: 0}}>Cursussen geven over Office 365</p>
                <p style={{margin: 0}}>Ontwerpen van sharepoint websites</p>
                <p style={{margin: 0}}>Beheren van netwerken</p>
              </div>
              <div id="workTwo" style={{marginBottom: `2em`}}>
                <h4 style={{margin: 0, marginBottom: `5px`}}>Webmaster</h4>
                <h4 style={{margin: 0, fontSize: 16, fontWeight: `normal`, marginBottom: `5px`}}>Universitair Orkest van de KU-Leuven</h4>
                <p style={{margin: 0}}>2018 - heden</p>
                <p style={{margin: 0}}>Onderhoud en development van de website</p>
              </div>
              <div id="workThree">
                <h4 style={{margin: 0, marginBottom: `5px`}}>Rider</h4>
                <h4 style={{margin: 0, fontSize: 16, fontWeight: `normal`, marginBottom: `5px`}}>Deliveroo</h4>
                <p style={{margin: 0}}>2016 - 2019</p>
                <p style={{margin: 0}}>Eten vervoeren van restaurant naar klant</p>
              </div>
              </div>
              <div id="vrijwilliger">
                <h3>Vrijwilligerswerk</h3>
                <div id="vrijOne" style={{marginBottom: `2em`}}>
                  <h4 style={{margin: 0}}>Hoofd van Techniek</h4>
                  <h4 style={{margin: 0, fontSize: 16, fontWeight: `normal`}}>Levet Scone Wilsele</h4>
                </div>
                <div id="vrijTwo" style={{marginBottom: `2em`}}>
                  <h4 style={{margin: 0}}>Geluidstechnieker | Stagehand</h4>
                  <h4 style={{margin: 0, fontSize: 16, fontWeight: `normal`}}>Het Depot</h4>
                </div>
                <div id="vrijThree" style={{marginBottom: `2em`}}>
                  <h4 style={{margin: 0}}>Actief lid</h4>
                  <h4 style={{margin: 0, fontSize: 16, fontWeight: `normal`}}>Informatica Studentenwerking Leuven</h4>
                </div>
              </div>
              <div id="vrijwilliger">
                <h3>Talen</h3>
                <div id="vrijOne" style={{marginBottom: `2em`}}>
                  <h4 style={{margin: 0}}>Nederlands</h4>
                  <h4 style={{margin: 0, fontSize: 16, fontWeight: `normal`}}>Moedertaal</h4>
                </div>
                <div id="vrijTwo" style={{marginBottom: `2em`}}>
                  <h4 style={{margin: 0}}>Frans</h4>
                  <h4 style={{margin: 0, fontSize: 16, fontWeight: `normal`}}></h4>
                </div>
                <div id="vrijThree" style={{marginBottom: `2em`}}>
                  <h4 style={{margin: 0}}>Engels</h4>
                  <h4 style={{margin: 0, fontSize: 16, fontWeight: `normal`}}>Niveau B2</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="navigation" style={{gridColumn: 2, gridRow: 2, marginTop: `-50px`}}>
                  <div style={{ maxWidth: `400px`, margin: `0 auto`, zIndex: 1000 }}>
                  <Link  to="/">
                    <Image />
                  </Link>
                  </div>
                  <div style={{ margin: `0 auto`, zIndex: 20000}}>
                    <ul style={{listStyle: `none`, textTransform: `lowercase`, textAlign: `center`, margin: 0}}>
                      <li style={{marginTop: `-1.8em`}}>
                        {/* <GlitchEffect onHover={true} duration={"5s"}> */}
                            <Link 
                            style={{textDecoration: `none`, fontSize:30}}
                            to="/about"
                            >Over mij</Link>
                        {/* </GlitchEffect> */}
                      </li>
                      <li style={{marginTop: `1.2em`}}>
                        {/* <GlitchEffect onHover={true} duration={"5s"}> */}
                          <Link 
                          style={{textDecoration: `none`, fontSize:30}}
                          to="/cv">Mijn CV</Link>
                        {/* </GlitchEffect> */}
                      </li>
                      <li style={{marginTop: `1.2em`}}>
                        {/* <GlitchEffect onHover={true} duration={"5s"}> */}
                          <Link 
                          style={{textDecoration: `none`, fontSize:30, cursor: `pointer`}}
                          to="/work"
                          >Mijn werk</Link>
                        {/* </GlitchEffect> */}
                      </li>
                      <li style={{marginTop: `1.2em`}}>
                        {/* <GlitchEffect onHover={true} duration={"5s"}> */}
                          <Link 
                          style={{textDecoration: `none`, fontSize:30}}
                          to="/contact">Contacteer mij</Link>
                        {/* </GlitchEffect> */}
                      </li>
                    </ul>
                  </div>
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
