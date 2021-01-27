import React, {Fragment} from 'react'
import { GlobalStyle } from './styles/pageLoading'
import Container from '../../styledcomponents/container/containerStyled'
import Loader from '../../components/loading/loader'

const PageLoading = () => {

    return(
        <Fragment>
            <GlobalStyle />
            <Container>
                <Loader textTipe={'Loading'}/>
            </Container>
        </Fragment>
    )
}

export default PageLoading