import { graphql, useStaticQuery } from 'gatsby'

const useProperties = () => {
    const data = useStaticQuery(graphql`
        query {
            allStrapiProperties {
                nodes {
                    name
                    description
                    id
                    wc
                    price
                    parking
                    rooms
                    categories {
                        name
                    }
                    sellers {
                        name
                        telephone
                        email
                    }
                    image {
                        sharp: childImageSharp {
                            fluid(maxWidth: 600, maxHeight: 400) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            }
        }
    `)

    // console.log(data)

    return data.allStrapiProperties.nodes.map(property => ({
        name: property.name,
        description: property.description,
        image: property.image,
        id: property.id,
        wc: property.wc,
        parking: property.parking,
        price: property.price,
        rooms: property.rooms,
        sellers: property.sellers,
        categories: property.categories
    }))
}

export default useProperties