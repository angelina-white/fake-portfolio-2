import {useState} from "react"

function LightBlue()
{
    const [isClicked, setIsClicked] = useState(false)
    function handleClick()
    {
        setIsClicked((isClicked) => !isClicked)
    }

    return (
            <div className="block lightBlueBlock" onClick={handleClick} id={isClicked ? "clickedBox" : null}></div>
    )
}
export default LightBlue