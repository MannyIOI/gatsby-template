import React from 'react'

export const Footer = () => {
    return (
        <>
            <footer style={{
                marginTop: `2rem`
                }}>
                © {new Date().getFullYear()}, Addis Ababa, Ethiopia
            </footer>
        </>
    )
}
