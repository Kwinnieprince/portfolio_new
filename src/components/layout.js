/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `1.45rem`,
          padding: `1.45rem 1.0875rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer style={{position: `absolute`, bottom: `0`, height: `2em`, left: 0, margin: `1.45rem`, padding: `1.45rem 1.0875rem`,}}>
         <p>
            © {new Date().getFullYear()}, Built by
            {` `}
            <a href="https://kwinten.me">Kwinten Delrue</a> with Gatsby
          </p>
        </footer>
      </div>
    </>
    // style={{position: `absolute`, bottom: `0`, width: `100%`, height: `2em`, left: 0, marginLeft: `1.45rem`}}
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
