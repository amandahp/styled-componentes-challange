import React, {Fragment} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitterSquare, faGithubSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons'
import ButtonLayer from '../../components/buttonLayer/buttonlayer'
import {GlobalStyle, List, ListItem, Span} from './styles/globalPage'
import Container from '../../styledcomponents/container/containerStyled'


const IconLayer = () => {
    const iconTwitter = <FontAwesomeIcon icon={faTwitterSquare} />
    const iconGithub = <FontAwesomeIcon icon={faGithubSquare} />
    const iconLinkedin = <FontAwesomeIcon icon={faLinkedin} />
    const iconGmail = <FontAwesomeIcon icon={faEnvelopeSquare} />
    const backgroundColorTwitter = '#00acee'
    const backgroundColorGithub = '#24292e'
    const backgroundColorLinkedin = '#0e76a8'
    const backgroundColorGmail = '#BB001B'

    const handleClickRedirectTwitter = () => {
        window.location.assign('https://twitter.com/HoffmannDev')
    }

    const handleClickRedirectGithub = () => {
        window.location.assign('https://github.com/amandahp')
    }

    const handleClickRedirectLinkedin = () => {
        window.location.assign('https://www.linkedin.com/in/amanda-h-660bab130/')
    }

    const handleClickRedirectGmail = () => {
        window.location.assign('mailto:amandahoffmann96@gmail.com')
    }

    return(
        <>
        <Fragment>
            <GlobalStyle />
            <Container>
                <List>
                    <ListItem backgroundList={'#00acee'}>
                        <Span backgroundSpan={'#28b7ed'}></Span>
                        <Span backgroundSpan={'#42beed'}></Span>
                        <Span backgroundSpan={'#58c4ed'}></Span>
                        <Span backgroundSpan={'#78cff0'}></Span>
                        <Span backgroundSpan={'#8ad2ed'}>
                            <ButtonLayer aria-hidden="true" background={backgroundColorTwitter} handleClickButton={handleClickRedirectTwitter} iconButton={iconTwitter}/>
                        </Span>
                    </ListItem>
                    <ListItem  backgroundList={'#24292e'}>
                        <Span backgroundSpan={'#3e464f'}></Span>
                        <Span backgroundSpan={'#49535e'}></Span>
                        <Span backgroundSpan={'#596775'}></Span>
                        <Span backgroundSpan={'#66788a'}></Span>
                        <Span backgroundSpan={'#708294'}>
                            <ButtonLayer background={backgroundColorGithub} handleClickButton={handleClickRedirectGithub} iconButton={iconGithub}/>
                        </Span>
                    </ListItem>
                    <ListItem backgroundList={'#035c80'}>
                        <Span backgroundSpan={'#186585'}></Span>
                        <Span backgroundSpan={'#2f6f8a'}></Span>
                        <Span backgroundSpan={'#38728a'}></Span>
                        <Span backgroundSpan={'#4a7d91'}></Span>
                        <Span backgroundSpan={'#6891a1'}>
                            <ButtonLayer background={backgroundColorLinkedin} handleClickButton={handleClickRedirectLinkedin} iconButton={iconLinkedin}/>
                        </Span>
                    </ListItem>
                    <ListItem backgroundList={'#BB001B'}>
                        <Span backgroundSpan={'#c91630'}></Span>
                        <Span backgroundSpan={'#cf2b43'}></Span>
                        <Span backgroundSpan={'#d43f55'}></Span>
                        <Span backgroundSpan={'#d45769'}></Span>
                        <Span backgroundSpan={'#d46c7b'}>
                            <ButtonLayer background={backgroundColorGmail} handleClickButton={handleClickRedirectGmail} iconButton={iconGmail}/>
                        </Span>
                    </ListItem>
                </List>
            </Container>
        </Fragment>
        </>


    )
}

export default IconLayer