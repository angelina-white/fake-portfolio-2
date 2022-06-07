import { gsap } from "gsap";
import { useEffect } from "react";

function Loading()
{
    useEffect(() =>
    {
        var tl = gsap.timeline();
        tl.to(".dark", {opacity:1, duration: 1})
        tl.to(".dark", {opacity:0, duration: 1, ease: "bounce"})
        tl.to(".dark", {opacity:1, duration: 1, ease: "bounce"})
        tl.to(".loadingScreen", {opacity:0, duration: .1})
    }, [])

    return (
        <div class="loadingScreen">
            <div className="dark">
            </div>
            <h1 className="text1">Loading...</h1>
        </div>
    )
}

export default Loading