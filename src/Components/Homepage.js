import { gsap } from "gsap";
import {useEffect} from "react";
import Pink from "./Blocks/Pink";
import Orange from "./Blocks/Orange";
import Yellow from "./Blocks/Yellow";
import Green from "./Blocks/Green";
import LightBlue from "./Blocks/LightBlue";
import Blue from "./Blocks/Blue";
import Purple from "./Blocks/Purple";

function Homepage()
{
    useEffect(() =>
    {
        //fade in
        gsap.from("#title", {duration: 3, opacity: 0});
        gsap.from(".block", {duration: 3, opacity: 0, delay: .5});

        //move up
        gsap.from("#title", {duration: 1, y: 10});
        gsap.from(".block", {duration: 1, y: 10, delay: .5});
    }, [])

    return (
        <div className="homePage">
            <h1 id="title">Angelina White Portfolio</h1>
            <div className="blockContainer">
                <div className="yBlocks">
                    <Pink />
                    <Pink />
                    <Pink />
                    <Pink />
                    <Pink />
                </div>
                <div className="yBlocks">
                    <Orange />
                    <Orange />
                    <Orange />
                    <Orange />
                    <Orange />
                </div>
                <div className="yBlocks">
                    <Yellow />
                    <Yellow />
                    <Yellow />
                    <Yellow />
                    <Yellow />
                </div>
                <div className="yBlocks">
                    <Green />
                    <Green />
                    <Green />
                    <Green />
                    <Green />
                </div>
                <div className="yBlocks">
                    <LightBlue />
                    <LightBlue />
                    <LightBlue />
                    <LightBlue />
                    <LightBlue />
                </div>
                <div className="yBlocks">
                    <Blue />
                    <Blue />
                    <Blue />
                    <Blue />
                    <Blue />
                </div>
                <div className="yBlocks">
                    <Purple />
                    <Purple />
                    <Purple />
                    <Purple />
                    <Purple />
                </div>
            </div>
        </div>
    )
}

export default Homepage