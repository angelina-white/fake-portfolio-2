import {useState} from "react"

function Orange()
{
    const [isClicked, setIsClicked] = useState(false)
    function handleClick()
    {
        setIsClicked((isClicked) => !isClicked)
    }

    return (
            <div className="block orangeBlock" onClick={handleClick} id={isClicked ? "clickedBox" : null}></div>
    )
}
export default Orange