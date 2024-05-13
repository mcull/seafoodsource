import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

function SubNav({ page }) {
return (
    <>
    <div className="flex flex-wrap items-center justify-between p-6 mb-6">
        <div>
            <Link to={`/`} className={`${page === 'restaurants' ? 'font-bold' : ''} block mt-4 mr-4 text-slate-700 lg:inline-block lg:mt-0 hover:text-slate-500`}>
                Seafood Restaurants
            </Link>
        </div>
        <div>
        <Link to={`/search`} className={`${page === 'search' ? 'font-bold' : ''} block mt-4 mr-4 text-slate-700 lg:inline-block lg:mt-0 hover:text-slate-500`}>
            Search Seafood
        </Link></div>
    </div>
    </>
)

}

export default SubNav;