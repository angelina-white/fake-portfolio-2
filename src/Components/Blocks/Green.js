import {useState} from "react"

function Green()
{
    const [isClicked, setIsClicked] = useState(false)
    function handleClick()
    {
        setIsClicked((isClicked) => !isClicked)
    }

    return (
            <div className="block greenBlock" onClick={handleClick} id={isClicked ? "clickedBox" : null}></div>
    )
}
export default Green