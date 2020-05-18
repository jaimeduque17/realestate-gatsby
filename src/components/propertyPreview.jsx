import React from 'react'
import Icons from './icons'

const PropertPreview = ({ property }) => {

    const { name, description, image, wc, parking, rooms, price } = property

    return (
        <div>
            <div>
                <h3>{name}</h3>
                <p>${price}</p>
                <Icons
                    wc={wc}
                    parking={parking}
                    rooms={rooms}
                />
            </div>
        </div>
    )
}

export default PropertPreview