import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <div id="aboutGrid">
      <SEO title="About" />
      <h1>Over mij</h1>
            <div id="aboutWrapper">
              <div>
                <p>
                  Hallo ik ben Kwinten, ik ben gepassioneerd in systeem- en netwerkbeheer, websites maken en ik speel zelf ook viool.
                  Al van jongs af aan was ik geïnteresseerd in alles wat met systeem en netwerkbeheer te maken heeft en ik was snel bekend bij vrienden en familie voor mijn behulpzaamheid.
                  Mijn droom is om webdesigner of systeem- en netwerkbeheerder te worden voor cloud- en on-premise diensten.
                </p>                
              </div>
                <div id="talents">
                  <h3>Mijn talenten</h3>
                  <div className="talentsGrid">
                    <div>
                      <h4 style={{marginBottom: 0}}>Netwerkbeheer</h4>
                      <p style={{fontWeight: `normal`, fontSize: `16px`}}>4 jaar ervaring</p>
                    </div>
                    <div>
                      <h4 style={{marginBottom: 0}}>Webontwikkeling</h4>
                      <p style={{fontWeight: `normal`, fontSize: `16px`}}>5 jaar ervaring</p>
                    </div>
                    <div>
                      <h4 style={{marginBottom: 0}}>Linux | Unix</h4>
                      <p style={{fontWeight: `normal`, fontSize: `16px`}}>5 jaar ervaring</p>
                    </div>
                    <div>
                      <h4 style={{marginBottom: 0}}>Sharepoint ontwerp</h4>
                      <p style={{fontWeight: `normal`, fontSize: `16px`}}>3 jaar ervaring</p>
                    </div>
                    <div>
                      <h4 style={{marginBottom: 0}}>Office 365</h4>
                      <p style={{fontWeight: `normal`, fontSize: `16px`}}>3 jaar ervaring</p>
                    </div>
                    <div>
                      <h4 style={{marginBottom: 0}}>Docker</h4>
                      <p style={{fontWeight: `normal`, fontSize: `16px`}}>2 jaar ervaring</p>
                    </div>
                    <div id="otherTalents">
                      <h4 style={{marginBottom: 0}}>Andere talenten</h4>
                      <p style={{fontWeight: `normal`, fontSize: `16px`}}>Java</p>
                      <p style={{fontWeight: `normal`, fontSize: `16px`}}>Git</p>
                      <p style={{fontWeight: `normal`, fontSize: `16px`}}>Engels</p>
                      <p style={{fontWeight: `normal`, fontSize: `16px`}}>Frans</p>
                      <p style={{fontWeight: `normal`, fontSize: `16px`}}>React</p>
                      <p style={{fontWeight: `normal`, fontSize: `16px`}}>Terraform</p>
                      <p style={{fontWeight: `normal`, fontSize: `16px`}}>AWS</p>
                      <p style={{fontWeight: `normal`, fontSize: `16px`}}>Microsoft Azure</p>
                    </div>
                  </div>
                </div>
            </div>
            <div className="navigation" style={{gridColumn: 2, gridRow: 2, marginTop: `-107px`}}>
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