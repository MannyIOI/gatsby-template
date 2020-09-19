import React from "react"
import GlobalStyles from '../../../globalStyles'
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../header"
import "./layout.css"
import { LayoutContainer } from "./styles"
import { Footer } from "../footer"

const Layout = ({ children, hideHeader, hideFooter }) => {
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
    <LayoutContainer>
      {!hideHeader && <Header />}
      <GlobalStyles />
      {children}
      {!hideFooter && <Footer />}

    </LayoutContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
