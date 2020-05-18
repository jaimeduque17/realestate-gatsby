import React from 'react'

const PropertPreview = ({ property }) => {

    const { name } = property

    return (
        <h3>{name}</h3>
    )
}

export default PropertPreview