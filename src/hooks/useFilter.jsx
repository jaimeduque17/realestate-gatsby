import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const useFilter = () => {

    const result = useStaticQuery(graphql`
        query {
            allStrapiCategories {
                nodes {
                    name
                    id
                }
            }
        }
    `)

    const categories = result.allStrapiCategories.nodes

    // console.log(categories)

    const FilterUI = () => (
        <form>
            <select>
                <option value="">-- Filter --</option>
                {categories.map(option => (
                    <option key={option.id} value={option.name}>{option.name}</option>
                ))}
            </select>
        </form>
    )

    return {
        FilterUI
    }
}

export default useFilter;