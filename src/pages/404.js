import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>This was not supposed to happen...</h1>
    <p>Sometimes webpages do not exist, but hey if you go <Link to="/">back</Link>, maybe you're not lost anymore!</p>
    <img src="https://kwinten.me/lost.gif"/>
    <footer style={{position: `absolute`, bottom: `0`, height: `2em`, left: 0, marginLeft: `2.4rem`}}>
         <p>
            © {new Date().getFullYear()}, Built by
            {` `}
            <a href="https://kwinten.me">Kwinten Delrue</a> with Gatsby
          </p>
     </footer>
    </Layout>
)

export default NotFoundPage
