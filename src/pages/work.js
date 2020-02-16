import React from "react"
import { Link } from "gatsby"
import {FaGithubAlt,FaGlobe} from "react-icons/fa"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import WeerWilseleImg from "../components/weerWilseleImg"
import NodeRedImg from "../components/NodeRedImg"
import PicrossImg from "../components/PicrossImg"
import UsoImg from "../components/UsoImg"
import SpringImg from "../components/SpringImg"

const WorkPage = () => (
  <Layout>
    <div id="workGrid">
      <SEO title="Home" />
      <h1>Mijn werk</h1>
      <div id="workWrapper">
          <div id="worksOne">
              <div style={{ maxWidth: `400px`}}>
                <WeerWilseleImg/>
              </div>
              <div className="workGridTwo">
                <h4 style={{marginBottom: `0.5em`}}>Weer Wilsele</h4>
                <h4 style={{fontSize: 16, fontWeight: `normal`, marginBottom: `0.5em`}}>JS | Elastic Stack | Node.js | jQuery | HTML | Azure</h4>
                <p >
                  <a href="https://weg.kwinten.me">
                    <FaGlobe/>
                  </a>
                </p>
              </div>
          </div>
          <div id="worksTwo">
          <div style={{ maxWidth: `400px`}}>
                <NodeRedImg/>
              </div>
              <div className="workGridTwo">
                <h4 style={{marginBottom: `0.5em`}}>IOT automatiseringsproject</h4>
                <h4 style={{fontSize: 16, fontWeight: `normal`, marginBottom: `0.5em`}}>IBM Cloud | Node-RED | Arduino </h4>
                <p>
                  <a href="https://github.com/Kwinnieprince/pink_flamingo">
                    <FaGithubAlt/>
                  </a>
                </p>
              </div>
          </div>
          <div id="worksThree">
          <div style={{ maxWidth: `400px`, border:`0.5px solid grey`}}>
                <SpringImg/>
              </div>
            <div className="workGridTwo">
              <h4 style={{marginBottom: `0.5em`}}>Full-stack webproject in Spring</h4>
              <h4 style={{fontSize: 16, fontWeight: `normal`, marginBottom: `0.5em`}}>Java | Spring Boot | Docker | Jenkins</h4>
              <p>
                <a href="https://github.com/Kwinnieprince/IP_project">
                  <FaGithubAlt/>
                </a>
              </p>
            </div> 
          </div>
          <div id="worksFour">
              <div style={{ maxWidth: `400px`}}>
                <PicrossImg/>
              </div>
              <div className="workGridTwo">
                <h4 style={{marginBottom: `0.5em`}}>PiCross</h4>
                <h4 style={{fontSize: 16, fontWeight: `normal`, marginBottom: `0.5em`}}>WPF | C#</h4>
                <p>
                  <a href="https://github.com/Kwinnieprince/Picross">
                    <FaGithubAlt/>
                  </a>
                </p>
              </div>
          </div>
          <div id="worksFive">
              <div style={{ maxWidth: `400px`}}>
                <UsoImg/>
              </div>
              <div className="workGridTwo">
                <h4 style={{marginBottom: `0.5em`}}>Website USO-Leuven</h4>
                <h4 style={{fontSize: 16, fontWeight: `normal`, marginBottom: `0.5em`}}>Wordpress</h4>
                <p>
                  <a href="https://usoleuven.be">
                    <FaGlobe/>
                  </a>
                </p>
              </div>
          </div>
          <div id="worksSix">
            <div className="workGridTwo">
              <h4 style={{marginBottom: `0.5em`}}>Chat-app</h4>
              <h4 style={{fontSize: 16, fontWeight: `normal`, marginBottom: `0.5em`}}>Java | JS | Angular</h4>
              <p>
                <a href="https://github.com/Kwinnieprince/webontwikkeling_4_java">
                  <FaGithubAlt/>
                </a>
              </p>
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
    <footer>
         <p>
            © {new Date().getFullYear()}, Built by
            {` `}
            <a href="https://kwinten.me">Kwinten Delrue</a> with Gatsby
          </p>
     </footer>
  </Layout>
)

export default WorkPage
