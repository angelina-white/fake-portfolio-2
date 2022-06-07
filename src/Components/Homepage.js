import { gsap } from "gsap";
import {Container, Row, Col} from "react-bootstrap/";
import {useEffect} from "react";

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
                    <div className="block pinkBlock"></div>
                    <div className="block pinkBlock"></div>
                    <div className="block pinkBlock"></div>
                    <div className="block pinkBlock"></div>
                    <div className="block pinkBlock"></div>
                </div>
                <div className="yBlocks">
                    <div className="block orangeBlock"></div>
                    <div className="block orangeBlock"></div>
                    <div className="block orangeBlock"></div>
                    <div className="block orangeBlock"></div>
                    <div className="block orangeBlock"></div>
                </div>
                <div className="yBlocks">
                    <div className="block yellowBlock"></div>
                    <div className="block yellowBlock"></div>
                    <div className="block yellowBlock"></div>
                    <div className="block yellowBlock"></div>
                    <div className="block yellowBlock"></div>
                </div>
                <div className="yBlocks">
                    <div className="block greenBlock"></div>
                    <div className="block greenBlock"></div>
                    <div className="block greenBlock"></div>
                    <div className="block greenBlock"></div>
                    <div className="block greenBlock"></div>
                </div>
                <div className="yBlocks">
                    <div className="block lightBlueBlock"></div>
                    <div className="block lightBlueBlock"></div>
                    <div className="block lightBlueBlock"></div>
                    <div className="block lightBlueBlock"></div>
                    <div className="block lightBlueBlock"></div>
                </div>
                <div className="yBlocks">
                    <div className="block blueBlock"></div>
                    <div className="block blueBlock"></div>
                    <div className="block blueBlock"></div>
                    <div className="block blueBlock"></div>
                    <div className="block blueBlock"></div>
                </div>
                <div className="yBlocks">
                    <div className="block purpleBlock"></div>
                    <div className="block purpleBlock"></div>
                    <div className="block purpleBlock"></div>
                    <div className="block purpleBlock"></div>
                    <div className="block purpleBlock"></div>
                </div>
            </div>
        </div>
    )
}

export default Homepage