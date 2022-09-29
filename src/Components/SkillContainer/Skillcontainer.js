import React from 'react'
import {Element} from 'react-scroll';
import skillimg from "../../assets/skills2.jpg"
import { LinearProgress } from '@material-ui/core';
import "./Skillcontainer.css";

const Skillcontainer = () => {
  return (
    <Element className="skillcontainer" id="skills">
        <div className="skillcontainer__image">
            <img src={skillimg} alt=""></img>

        </div>
        <div className="skillcontainer__text">
            <h2>SKILLSET</h2>
            <div className="skillcontainer__skillset">
            <h4 className='bold'>HTML</h4>
            <div className="skillcontainer__slider skillcontainer__slider1">
                <LinearProgress variant="determinate" value={90}></LinearProgress>
            </div>
            </div>

            <div className="skillcontainer__skillset">
            <h4 className='bold'>CSS</h4>
            <div className="skillcontainer__slider skillcontainer__slider2">
                <LinearProgress variant="determinate" value={90}></LinearProgress>
            </div>
            </div>

            <div className="skillcontainer__skillset">
            <h4 className='bold'>JAVASCRIPT</h4>
            <div className="skillcontainer__slider skillcontainer__slider3">
                <LinearProgress variant="determinate" value={78}></LinearProgress>
            </div>
            </div>

            <div className="skillcontainer__skillset">
            <h4 className='bold'>ADVANCED JAVASCRIPT</h4>
            <div className="skillcontainer__slider skillcontainer__slider4">
                <LinearProgress variant="determinate" value={85}></LinearProgress>
            </div>
            </div>

            <div className="skillcontainer__skillset">
            <h4 className='bold'>BOOTSTRAP</h4>
            <div className="skillcontainer__slider skillcontainer__slider5">
                <LinearProgress variant="determinate" value={80}></LinearProgress>
            </div>
            </div>

            <div className="skillcontainer__skillset">
            <h4 className='bold'>GITHUB</h4>
            <div className="skillcontainer__slider skillcontainer__slider6">
                <LinearProgress variant="determinate" value={100}></LinearProgress>
            </div>
            </div>

            <div className="skillcontainer__skillset">
            <h4 className='bold'>REACT JS</h4>
            <div className="skillcontainer__slider skillcontainer__slider7">
                <LinearProgress variant="determinate" value={73}></LinearProgress>
            </div>
            </div>

            <div className="skillcontainer__skillset">
            <h4 className='bold'>MY SQL</h4>
            <div className="skillcontainer__slider skillcontainer__slider8">
                <LinearProgress variant="determinate" value={70}></LinearProgress>
            </div>
            </div>

            <div className="skillcontainer__skillset">
            <h4 className='bold'>MONGO DB</h4>
            <div className="skillcontainer__slider skillcontainer__slider9">
                <LinearProgress variant="determinate" value={85}></LinearProgress>
            </div>
            </div>

            <div className="skillcontainer__skillset">
            <h4 className='bold'>NODE JS</h4>
            <div className="skillcontainer__slider skillcontainer__slider10">
                <LinearProgress variant="determinate" value={90}></LinearProgress>
            </div>
            </div>

            <div className="skillcontainer__skillset">
            <h4 className='bold'>AWS</h4>
            <div className="skillcontainer__slider skillcontainer__slider11">
                <LinearProgress variant="determinate" value={90}></LinearProgress>
            </div>
            </div>

        </div>
    </Element>
  )
}

export default Skillcontainer