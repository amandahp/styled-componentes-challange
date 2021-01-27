import React from 'react'
import { Container, Ring, TextTipe } from '../../styledcomponents/loader/loaderStyled'

const Loader = ({textTipe}) => {
    return(
        <Container>
            <TextTipe>{textTipe}</TextTipe>
            <Ring />
        </Container>

    )

}

export default Loader
