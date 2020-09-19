import React from 'react'
import { FooterContainer } from './styles'

export const Footer = () => {
    return (
        <FooterContainer>
            <footer style={{
                marginTop: `2rem`
                }}>
                © {new Date().getFullYear()}, Addis Ababa, Ethiopia
            </footer>
        </FooterContainer>
    )
}
