import styled from 'styled-components'
import headerImage from '../../images/header/Header.png'

export const HeaderContainer = styled.div`
    height: 100vh;
    background: url(${headerImage});
    background-repeat: no-repeat;
    background-size: 100%;

    div p, div h1 {
        color: white;
        font-family: Poppins;
    }

`