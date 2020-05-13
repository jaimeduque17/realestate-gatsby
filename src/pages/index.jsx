import React from 'react'
import Layout from '../components/layout'
import useHome from '../hooks/usehome'

const Index = () => {

    const home = useHome()

    const { name, content, image } = home[0]

    return (
        <Layout>
            <h1>{name}</h1>
        </Layout>
    )
}

export default Index