import React from "react"
import ThemeContext from "./themeContext"

function Footer() {
    const context = React.useContext(ThemeContext)
    return (

        <div className={`${context.color}-theme`}>
            <footer className="footer-container">
                <h3>I be the Footer</h3>
            </footer>
        </div>

    )
}

export default Footer
