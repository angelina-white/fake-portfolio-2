import { gsap } from "gsap";
import {useEffect} from "react"

function Homepage()
{
    useEffect(() =>
    {
      gsap.from(".title", {duration: 3, opacity: 0});
    }, [])

    return (
        <h1 className="title">Angelina White Portfolio</h1>
    )
}

export default Homepage