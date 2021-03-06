import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import BackgroundImage from 'gatsby-background-image'
import Layout from '../components/layout'
import useHome from '../hooks/useHome'
import Find from '../components/find'
import ListProperties from '../components/listProperties'
import heroCSS from '../css/hero.module.css'

const ImageBackground = styled(BackgroundImage)`
    height: 600px;
`

const Index = () => {

    const home = useHome()

    const { name, content, image } = home[0]

    return (
        <Layout>
            <ImageBackground
                tag="section"
                fluid={image.sharp.fluid}
                fadeIn="soft"
            >
                <div className={heroCSS.imagebg}>
                    <h1 className={heroCSS.title}>Sale of exclusive houses and apartments</h1>
                </div>
            </ImageBackground>
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
            <Find />
            <ListProperties />
        </Layout>
    )
}

export default Index