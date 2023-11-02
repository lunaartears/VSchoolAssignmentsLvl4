import React from "react"
import ThemeContext from "./themeContext"

function Nav(props) {

    const context = React.useContext(ThemeContext)

    return (
        <div className={`${context.color}-theme`}>
            <nav className="nav-container">
                <h1>Stuff1</h1>
                <h1>Stuff2</h1>
                <h1>Stuff3</h1>
            </nav>
        </div>

    )
}

export default Nav
