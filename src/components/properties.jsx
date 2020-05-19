import React from 'react'
import styled from '@emotion/styled'
import Image from 'gatsby-image'
import { graphql } from 'gatsby'
import Icons from './icons'
import Layout from './layout'

export const query = graphql`
    query($id: String!) {
        allStrapiProperties(filter: {id: {eq: $id}}) {
            nodes {
                name
                description
                wc
                parking
                rooms
                price
                sellers {
                    name
                    telephone
                    email
                }
                image {
                    sharp: childImageSharp {
                        fluid (maxWidth: 1200) {
                        ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }
    }
`

const Properties = ({ data: { allStrapiProperties: { nodes } } }) => {

    const { name, description, wc, parking, rooms, sellers, image, price } = nodes[0]

    return (
        <Layout>
            <h1>{name}</h1>
            <div>
                <main>
                    <Image
                        fluid={image.sharp.fluid}
                    />
                    <p>{description}</p>
                </main>
                <aside>
                    <p>${price}</p>
                    <Icons
                        wc={wc}
                        parking={parking}
                        rooms={rooms}
                    />
                    <div>
                        <h2>Seller:</h2>
                        <p>{sellers.name}</p>
                        <p>{sellers.telephone}</p>
                        <p>{sellers.email}</p>
                    </div>
                </aside>
            </div>
        </Layout>
    )
}

export default Properties