import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'

const FilterForm = styled.form`
    width: 100%;
    display: flex;
    margin: 2rem auto 0 auto;
    border: 1px solid #E1E1E1;
    max-width: 1200px;
`

const Select = styled.select`
    flex: 1;
    padding: 1rem;
    appearance: none;
    border: none;
    font-family: 'Lato', sans-serif;
`
 
const useFilter = () => {

    const [category, setCategory] = useState('')

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
        <FilterForm>
            <Select
                onChange={e => setCategory(e.target.value)}
                value={category}
            >
                <option value="">-- Filter --</option>
                {categories.map(option => (
                    <option key={option.id} value={option.name}>{option.name}</option>
                ))}
            </Select>
        </FilterForm>
    )

    return {
        category,
        FilterUI
    }
}

export default useFilter;