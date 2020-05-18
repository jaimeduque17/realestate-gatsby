import React, { useState, useEffect } from 'react'
import { css } from '@emotion/core'
import PropertyPreview from './propertyPreview'
import useProperties from '../hooks/useProperties'
import listPropertiesCSS from '../css/listProperties.module.css'

const ListProperties = () => {

    const result = useProperties()
    const [properties, setProperties] = useState([])

    useEffect(() => {
        setProperties(result)
    }, [])

    // console.log(properties)

    return (
        <>
            <h2 css={css`
                margin-top: 5rem;
            `}>Properties</h2>
            <ul className={listPropertiesCSS.properties}>
                {properties.map(property => (
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