import React, { Fragment } from 'react'
import Container from '../../styledcomponents/container/containerStyled'
import { GlobalStyle } from './style/pageButtonCreativeStyled'
import ButtonCreative from '../../components/buttonCreative/buttonCreative'

const PageButtonCreative = () => {
    return(
        <Fragment>
            <GlobalStyle />
            <Container>
                <ButtonCreative  textButton={'This a one Example'} />

            </Container>
        </Fragment>
    )
}

export default PageButtonCreative