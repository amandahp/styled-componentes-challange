import React, { Fragment } from 'react'
import Container from '../../styledcomponents/container/containerStyled'
import { GlobalStyle } from './style/pageButtonCreativeStyled'
import ButtonCreative from '../../components/buttonCreative/buttonCreative'

const PageButtonCreative = () => {
    const handleClickButtonGithub = () => {
        window.location.assign('https://github.com/amandahp')

    }
    return(
        <Fragment>
            <GlobalStyle />
            <Container>
                <ButtonCreative handleClickButton={handleClickButtonGithub} textButton={'Click-me'} />
            </Container>
        </Fragment>
    )
}

export default PageButtonCreative