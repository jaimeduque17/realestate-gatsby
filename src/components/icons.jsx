import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'

const ListIcons = styled.ul`
    display: flex;
    justify-content: space-between;
    flex: 1;
    max-width: 500px;
    margin: 3rem auto 0 auto;

    li {
        display: flex;
        img {
            margin: 0 1rem 0 0;
        }
    }
`

const Icons = ({ wc, rooms, parking }) => {

    const { icons } = useStaticQuery(graphql`
        query {
            icons: allFile(filter: { relativeDirectory: { eq: "icons" } }) {
                edges {
                    node {
                        id
                        publicURL
                    }
                }
            }
        }
    `)

    const imgsIcons = icons.edges

    return (
        <ListIcons>
            <li>
                <img src={imgsIcons[2].node.publicURL} alt="icon wc" />
                <p>{wc}</p>
            </li>
            <li>
                <img src={imgsIcons[0].node.publicURL} alt="icon parking" />
                <p>{parking}</p>
            </li>
            <li>
                <img src={imgsIcons[1].node.publicURL} alt="icon rooms" />
                <p>{rooms}</p>
            </li>
        </ListIcons>
    )
}

export default Icons