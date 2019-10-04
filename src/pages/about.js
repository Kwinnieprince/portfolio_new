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

      <div style={{gridColumn: 2, gridRow: 2}}>
                  <div style={{ maxWidth: `400px`, margin: `0 auto`, zIndex: 1000 }}>
                    <Image />
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
    
    
    
  </Layout>
)

export default AboutPage