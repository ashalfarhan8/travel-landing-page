import React from "react"
import { Link } from "gatsby"
export default function Nav() {
  return (
    <div className="font-global flex space-x-4">
      <Link to="/" className="font-medium">
        Home
      </Link>
      <Link to="/" className="font-medium">
        About
      </Link>
      <Link to="/" className="font-medium">
        Contact
      </Link>
      <Link to="/" className="font-medium">
        Services
      </Link>
    </div>
  )
}
