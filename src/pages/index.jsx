import React from 'react'
import Layout from '../components/layout'
import useHome from '../hooks/usehome'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

const Index = () => {

    const home = useHome()

    const { name, content, image } = home[0]

    return (
        <Layout>
            <main>
                <div css={css`
                    max-width: 800px;
                    margin: 0 auto;
                `}>

            <h1>{name}</h1>
            <p css={css`
                text-align: center;
            `}>{content}</p>
                </div>
            </main>
        </Layout>
    )
}

export default Index