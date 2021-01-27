import React from 'react'
import ButtonIconStyled from '../../styledcomponents/button/buttonLayerStyled'

const ButtonLayer = ({handleClickButton, iconButton, background}) => {
    return(
        <ButtonIconStyled background={background} onClick={() => handleClickButton()}>{iconButton}</ButtonIconStyled>
    )
}

export default ButtonLayer