import React from "react"
import PropTypes from "prop-types"

function Container({ children }) {
  return <div className="w-container mx-auto relative">{children}</div>
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container
