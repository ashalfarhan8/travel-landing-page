import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Nav from "../common/Nav"
import Button from "../common/Button"
import Container from "../common/Container"

const Header = ({ siteTitle }) => (
  <header className="p-4">
    <Container>
      <div className="WRAPPER flex items-center justify-between w-full">
        <Link to="/" className="text-green-400 font-global text-3xl font-bold">
          {siteTitle}
        </Link>
        <Nav />
        <Button text="Get A Coupon" bgColor="primary" fontColor="white" />
      </div>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
