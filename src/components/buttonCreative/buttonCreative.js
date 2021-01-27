import React from 'react'
import ButtonCreativeStyled from '../../styledcomponents/button/buttonCreativeStyled'

const ButtonCreative = ({handleClickButton, textButton}) => {
    return(
        <ButtonCreativeStyled onClick={() => handleClickButton()}>{textButton}</ButtonCreativeStyled>
    )
}

export default ButtonCreative