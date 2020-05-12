import React from 'react'
import { Link } from 'gatsby'

const Navigation = () => {
    return (
        <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/properties'}>Properties</Link>
        </nav>
    )
}

export default Navigation