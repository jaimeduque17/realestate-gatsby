import React from 'react'
import styled from '@emotion/styled'
import Image from 'gatsby-image'
import { Link } from 'gatsby'
import UrlSlug from 'url-slug'
import Icons from './icons'

const ButtonCard = styled(Link)`
    margin: 2rem 0 0 0;
    padding: 1rem;
    background-color: #75ab00;
    width: 100%;
    color: #FFF;
    display: block;
    text-decoration: none;
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
`

const Card = styled.div`
    border: 1px solid #E1E1E1;
    img {
        max-width: 100%;
    }
`

const Content = styled.div`
    padding: 2rem;
    h3 {
        font-family: 'Lato', sans-serif;
        margin: 0 0 2rem 0;
        font-size: 2.4rem; 
    }
    .price {
        font-size: 2rem;
        color: #75AB00;
    }
`

const PropertPreview = ({ property }) => {

    const { name, description, image, wc, parking, rooms, price } = property

    return (
        <Card>
            <Image 
                fluid={image.sharp.fluid}
            />
            <Content>
                <h3>{name}</h3>
                <p className="price">${price}</p>
                <Icons
                    wc={wc}
                    parking={parking}
                    rooms={rooms}
                />
                <ButtonCard to={UrlSlug(name)}>
                    more details
                </ButtonCard>
            </Content>
        </Card>
    )
}

export default PropertPreview