import React from "react"

import Header from "../header"
import { LayoutContainer } from "./styles"
import { Footer } from "../footer"

const Layout = ({ children, hideHeader, hideFooter }) => {
  return (
    <LayoutContainer>
      {!hideHeader && <Header />}
      {children}
      {!hideFooter && <Footer />}
    </LayoutContainer>
  )
}

export default Layout
