import {useState} from "react"

function Yellow()
{
    const [isClicked, setIsClicked] = useState(false)
    function handleClick()
    {
        setIsClicked((isClicked) => !isClicked)
    }

    return (
            <div className="block yellowBlock" onClick={handleClick} id={isClicked ? "clickedBox" : null}></div>
    )
}
export default Yellow