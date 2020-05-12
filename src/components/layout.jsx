import React from 'react'
import { Helmet } from 'react-helmet'
import { Global, css } from '@emotion/core'

const Layout = ({ children }) => {
    return (
        <>
            <Global 
                styles={css`
                    body {
                        background-color: blue;
                    }
                `}
            />
            <Helmet>
                <title>Real Estate Gatsby</title>
                <meta name="description" content="Real estate web site in Gatsby" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU=" crossorigin="anonymous" />
                <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700|Roboto:400,700&display=swap" rel="stylesheet" />
            </Helmet>
            {children}
        </>
    )
}

export default Layout