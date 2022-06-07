import {useState} from "react"

function Blue()
{
    const [isClicked, setIsClicked] = useState(false)
    function handleClick()
    {
        setIsClicked((isClicked) => !isClicked)
    }

    return (
            <div className="block blueBlock" onClick={handleClick} id={isClicked ? "clickedBox" : null}></div>
    )
}
export default Blue