import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Sidebar from "../components/Sidebar"

const IndexPage = () => (
  <Layout>
    <div id="indexGrid">
      <SEO title="Home" />
      <div style={{paddingTop: `50px`}}>
        <h1 style={{margin: 0, fontSize: `7vw`, gridColumn: 1}}>Hi there, i am an <br/> system- and <br/> network engineer | <br/> Infrastructure engineer</h1>
      </div>
      <div style={{gridColumn: 2}}>
        <div className="navigation" style={{ margin: `0 auto`, zIndex: 20000}}>
          <Sidebar></Sidebar>
        </div>
      </div>
    </div>
    <footer id="indexFooter">
         <p>
            © {new Date().getFullYear()}, Built by
            {` `}
            <a href="https://kwinten.me">Kwinten Delrue</a> with Gatsby
          </p>
     </footer>
  </Layout>
)

export default IndexPage
