import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    padding: 0 0 3rem 0;

    @media (min-width: 768px) {
        padding: 0;
        flex-direction: row;
    }
`;

const NavLink = styled(Link)`
    color: #FFF;
    font-weight: 700;
    font-family: 'PT Sans', sans-serif;
    text-decoration: none;
    padding: 0.5rem;
    margin-right: 1rem;
    &:last-of-type {
        margin-right: 0;
    }
    &.actual-page {
        border-bottom: 2px solid #FFF;
    }
    
`;

// &:last-of-us --> pseudo selector

const Navigation = () => {
    return (
        <Nav>
            <NavLink
                to={'/'}
                activeClassName="actual-page"
            >
                Home
            </NavLink>
            <NavLink
                to={'/about'}
                activeClassName="actual-page"
            >
                About
            </NavLink>
            <NavLink
                to={'/properties'}
                activeClassName="actual-page"
            >
                Properties
            </NavLink>
        </Nav>
    )
}

export default Navigation