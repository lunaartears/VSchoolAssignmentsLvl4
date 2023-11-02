import React from "react"

function Gradient() {
    const [color1, setColor1] = React.useState('#FFFF00')
    const [color2, setColor2] = React.useState("#000000")
    const [angle, setAngle] = React.useState()

    //React.useEffect(() => {
    //    const gradient = `linear-gradient(to right, ${color1}, ${color2})`
    //    document.body.style.background = gradient
    //}, [color1, color2])

    function handleColorChange(e) {
        const { name, value } = e.target
        if (name === "color1") {
            setColor1(value)
        } else if (name === "color2") {
            setColor2(value)
        }
    }
    function handleAngleChange(e) {
        const {value} = e.target
        setAngle(value)
    }


    return (
        <div>
            <h1>Create Your Own Gradient</h1>
            <div className="color-picker">
                Color 1 <input type="color" name="color1" value={color1} onChange={handleColorChange}></input>
                Color 2 <input type="color" name="color2" value={color2} onChange={handleColorChange}></input>
                Angle <input type="number" name="angle" value={angle} onChange={handleAngleChange}></input>
            </div>
            <div>
                <div className="container">
                    <ul>
                        <li>background: linear-gradient(50deg, #FFFF00 , #000000)</li>
                        <li>-moz-background: linear-gradient(50deg, #FFFF00 , #000000)</li>
                        <li>-webkit: linear-gradient(50deg, #FFFF00 , #000000)</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Gradient
