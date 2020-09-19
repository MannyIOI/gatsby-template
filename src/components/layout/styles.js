import '../../styles/global.css'
import styled from 'styled-components'

export const LayoutContainer = styled.div`
    display: grid;
    /* background-color: var(--accent-color); */
    overflow: hidden;
    overflow-y: auto;
    align-items: start;
    /* grid-auto-rows: max-content; */
    height: 100vh;
    position:relative;
    width: 100vw;
    /* padding-top: ${({ hide }) => (hide ? "36px" : "90px")}; */
    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`