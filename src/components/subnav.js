import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

function SubNav({ page }) {
return (
    <div className="flex flex-wrap items-center justify-between mb-6 bg-black rounded-full">
        <button className={`${page === 'restaurants' ? 'bg-purple-500' : ''} rounded-full`}>
            <Link to={`/`} className="block px-6 py-2 text-white lg:inline-block hover:text-white rounded-full">
                Seafood Restaurants
            </Link>
        </button>
        <button className={`${page === 'search' ? 'bg-purple-500' : ''} rounded-full` }>
        <Link to={`/search`} className="block px-6 py-2 text-white lg:inline-block hover:text-white">
            Search Seafood
        </Link></button>
    </div>
    
)
}

export default SubNav;