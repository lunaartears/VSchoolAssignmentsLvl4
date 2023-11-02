// using react context to make state available to whichever componant I want with out
// having to pass it down to each child
// 1. create the context (in own file.. themeContext.js)
// 2. Provide the context (in file available to all components) Wrap components
//  in <ThemeContext.Provider>
// 3. Consume the context ()


import './App.css';
import React from "react"
import Nav from "./Nav"
import Main from "./Main"
import Footer from "./Footer"
import ThemeContext from "./themeContext"


function App(props) {

  const [color, setColor] = React.useState("dark")
  function toggleTheme() {
    setColor(prevColor => prevColor === "dark" ? "light": "dark")
  }

  return (
    <div>
      <ThemeContext.Provider value= {{
        color: color,
        toggleTheme: toggleTheme
      }}>
        <Nav />
        <Main />
        <Footer />
      </ThemeContext.Provider>

    </div>
  )
}

export default App;
