import {useState} from "react"

function Pink()
{
    const [isClicked, setIsClicked] = useState(false)
    function handleClick()
    {
        setIsClicked((isClicked) => !isClicked)
    }

    return (
            <div className="block pinkBlock" onClick={handleClick} id={isClicked ? "clickedBox" : null}></div>
    )
}
export default Pink