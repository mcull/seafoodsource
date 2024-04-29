import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <nav className="flex flex-wrap items-center justify-between p-6 mb-6 bg-gray-800">
      <div className="flex items-center flex-shrink-0 mr-6 text-white">
        <span className="text-xl font-semibold tracking-tight">
        <Link to={`/`} className="text-white">{siteTitle}</Link>
        </span>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => toggleExpansion(!isExpanded)}
          className="flex items-center px-3 py-2 text-white border border-white rounded hover:text-white hover:border-white"
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow">
        <Link
            to={`/find`}
            className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
          >
            Find
          </Link>
          <Link
            to={`/menu`}
            className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
          >
            Menu
          </Link>
          <Link
            to={`/page-3`}
            className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
          >
            page 3
          </Link>
          <Link
            to={`/page-4`}
            className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
          >
            page 4
          </Link>
          <Link
            to={`/api-explorer`}
            className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
          >
            API Explorer
          </Link>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
