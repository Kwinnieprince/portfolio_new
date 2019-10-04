import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div style={{ display: `grid`,
                  gridTemplateColumns: `2.5fr 1fr`, marginTop: `-2em`}}>
      <SEO title="Home" />
      <div style={{paddingTop: `50px`}}>
        <h1 style={{margin: 0, fontSize: `7vw`, gridColumn: 1}}>Hallo, ik ben <br/> systeem- en <br/> netwerkbeheerder | <br/> frontend designer</h1>
      </div>
      <div style={{gridColumn: 2}}>
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

export default IndexPage
