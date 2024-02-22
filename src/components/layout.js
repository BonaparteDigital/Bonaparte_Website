import * as React from "react"
import { Link } from "gatsby"
import Footer from "./footer"

const Layout = ({ title, children }) => {
  return (
    <div className="global-wrapper">
      <header className="global-header"></header>
      <main>{children}</main>
      <Footer/>
    </div>
  )
}

export default Layout