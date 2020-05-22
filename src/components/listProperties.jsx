import React, { useState, useEffect } from 'react'
import { css } from '@emotion/core'
import PropertyPreview from './propertyPreview'
import useProperties from '../hooks/useProperties'
import useFilter from '../hooks/useFilter'
import listPropertiesCSS from '../css/listProperties.module.css'

const ListProperties = () => {

    const result = useProperties()
    const [properties] = useState(result)
    const [filtrates, setFiltrates] = useState([])

    // property filter
    const { category, FilterUI } = useFilter()

    useEffect(() => {
        if(category) {
            const filterCategory = properties.filter(property => property.category && property.category.name === category)
            setFiltrates(filterCategory)
        }else {
            setFiltrates(properties)
        }
    }, [category, properties])

    // console.log(properties)

    return (
        <>
            <h2 css={css`
                margin-top: 5rem;
            `}>Properties</h2>
            {FilterUI()}
            <ul className={listPropertiesCSS.properties}>
                {filtrates.map(property => (
                    <PropertyPreview
                        key={property.id}
                        property={property}
                    />
                ))}
            </ul>
        </>
    )
}

export default ListProperties