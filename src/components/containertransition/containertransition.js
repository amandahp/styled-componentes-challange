import React from 'react'
import {Main, Sliding, Span, Wrapper} from '../../styledcomponents/containertransition/containertransition'

const ContainerTransition = ({text}) => {
    return(
        <Main>
            <Sliding>
                <Span>{text}</Span>
                <Span>{text}</Span>
                <Span>{text}</Span>
                <Span>{text}</Span>
                <Span>{text}</Span>
            </Sliding>
            <Wrapper>
                <Sliding>
                    <Span>{text}</Span>
                    <Span>{text}</Span>
                    <Span>{text}</Span>
                    <Span>{text}</Span>
                    <Span>{text}</Span>
                    <Span>{text}</Span>
                </Sliding>
            </Wrapper>

        </Main>
    )

}

export default ContainerTransition