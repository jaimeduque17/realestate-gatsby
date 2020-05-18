import React, { useState, useEffect } from 'react'
import { css } from '@emotion/core'
import PropertyPreview from './propertyPreview'
import useProperties from '../hooks/useProperties'

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
            <ul>
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