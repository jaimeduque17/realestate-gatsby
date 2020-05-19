import React from 'react'
import styled from '@emotion/styled'
import Image from 'gatsby-image'
import { graphql } from 'gatsby'
import Icons from './icons'
import Layout from './layout'

const Content = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 95%;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 5rem;
    }
`

const Sidebar = styled.aside`
    .price {
        font-size: 2rem;
        color: #75AB00;
    }

    .seller {
        margin: 4rem 0 0 0;
        border-radius: 2rem;
        background-color: #75AB00;
        padding: 3rem;
        color: #FFF;

        p {
            margin: 0;
        }
    }
`

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
            <Content>
                <main>
                    <Image
                        fluid={image.sharp.fluid}
                    />
                    <p>{description}</p>
                </main>
                <Sidebar>
                    <p className="price">${price}</p>
                    <Icons
                        wc={wc}
                        parking={parking}
                        rooms={rooms}
                    />
                    <div className="seller">
                        <h2>Seller:</h2>
                        <p>{sellers.name}</p>
                        <p>{sellers.telephone}</p>
                        <p>{sellers.email}</p>
                    </div>
                </Sidebar>
            </Content>
        </Layout>
    )
}

export default Properties