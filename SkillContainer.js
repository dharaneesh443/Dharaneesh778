import React from 'react'
import { Element } from 'react-scroll'
import { LinearProgress } from '@mui/material'
import  "./SkillContainer.css";
const SkillContainer = () => {
  return (
   <Element className="skillContainer" id="skills">
   <div className="skillContainer__text">
   <h2> SKILLSET </h2>
   <div className="skillContainer__skillset">
   <h5>React</h5>
   <div className="skillContainer__slider skillContainer__slider1">
   <LinearProgress variant="determinate"value={90} />
   </div>
   </div>
   <div className="skillContainer__skillset">
   <h5>Node js</h5>
   <div className="skillContainer_slider skillContainer_slider1">
   <LinearProgress variant="determinate"value={90} />
   </div>
   </div>
   <div className="skillContainer__skillset">
   <h5>java</h5>
   <div className="skillContainer__slider skillContainer_slider1">
   <LinearProgress variant="determinate"value={90} />
   </div>
   </div>
   
   </div>
   </Element>
  )
}

export default SkillContainer
