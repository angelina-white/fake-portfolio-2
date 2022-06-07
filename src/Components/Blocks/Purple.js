import {useState} from "react"

function Purple()
{
    const [isClicked, setIsClicked] = useState(false)
    function handleClick()
    {
        setIsClicked((isClicked) => !isClicked)
    }

    return (
            <div className="block purpleBlock" onClick={handleClick} id={isClicked ? "clickedBox" : null}></div>
    )
}
export default Purple