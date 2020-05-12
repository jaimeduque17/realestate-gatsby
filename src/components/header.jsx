import React from 'react'
import { Link } from 'gatsby'
import Navigation from './navigation'

const Header = () => {
    return (
        <header>
            <div>
                <Link>Real Estate</Link>
                <Navigation />
            </div>
        </header>
    )
}

export default Header