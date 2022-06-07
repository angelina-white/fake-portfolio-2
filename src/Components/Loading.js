import { gsap } from "gsap";
import { useEffect } from "react";

function Loading()
{
    useEffect(() =>
    {
        var tl = gsap.timeline();
         tl.to(".backgroundColor", {opacity:1, duration: 1.5})
        tl.to(".backgroundColor", {opacity:.50, duration: .5})
        tl.to(".backgroundColor", {opacity:1, duration: .1})
        tl.to(".backgroundColor", {opacity:0, duration: 1, ease: "bounce"})
        tl.to(".backgroundColor", {opacity:1, duration: .5, ease: "bounce"})
        tl.to(".loadingScreen", {opacity:0, duration: .1})
    }, [])

    return (
        <div class="loadingScreen">
            <div className="backgroundColor">
            </div>
            <h1 id="loadingText">Loading...</h1>
        </div>
    )
}

export default Loading