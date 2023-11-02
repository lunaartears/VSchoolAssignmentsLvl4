import React from "react"
import ThemeContext from "./themeContext"

function Main(props) {

    const context = React.useContext(ThemeContext)

    return (
        <div className={`${context.color}-theme`}>
            <main className="main-container">
                <h1>I be the Main section</h1>
                <button onClick={context.toggleTheme}>Change Theme</button>
            </main>
        </div>

    )
}

export default Main
