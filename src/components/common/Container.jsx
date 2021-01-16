import React from "react"
import PropTypes from "prop-types"

function Container({ children, className }) {
  return (
    <div className={`w-container mx-auto h-full ${className}`}>{children}</div>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container
