import * as React from "react"
import NavBar from "../components/navbar"
import Footer from "../components/footer"

const Layout = ({ title, children }) => {
  return (
    <div id="global-wrapper" className="bg-olive">
      <header id="global-header">
        <NavBar />
      </header>
      <div className="container mx-auto"></div>
      <main>{children}</main>
        <Footer />
    </div>
  )
}

export default Layout