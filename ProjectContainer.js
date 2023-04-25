import React from 'react'
import { Element } from 'react-scroll';
import Project from './Project';
import "./ProjectConatiner.css"

const ProjectContainer = () => {
    const projects=[
        {
        img:"https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2FsbHBhcGVyJTIwNGt8ZW58MHx8MHx8&w=1000&q=80",
        title:"Facebook",
        desc:"Build beautiful UIs with ease. Start with Google's Material Design, or create your own sophisticated theme.",
        link:"www.google.com",
        },
       
       {
         img:"https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2FsbHBhcGVyJTIwNGt8ZW58MHx8MHx8&w=1000&q=80",
        title:"Facebook",
        desc:"Build beautiful UIs with ease. Start with Google's Material Design, or create your own sophisticated theme.",
        link:"www.google.com" ,
       },
       {
        img:"https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2FsbHBhcGVyJTIwNGt8ZW58MHx8MHx8&w=1000&q=80",
        title:"Facebook",
        desc:"Build beautiful UIs with ease. Start with Google's Material Design, or create your own sophisticated theme.",
        link:"www.google.com",
       },
    ];
    return (
        <Element className="projectContainer" id="projects">
        <h1>Projects</h1>
        <p>
        Here are some projects which I done for making lives of people easy
        </p>
        <div className="projectContainer__projects">
        {
            projects.map((project,index)=>{
                return(
                    <project 
                    key={index}
                     img={projects.img} 
                     title={projects.title} 
                     desc={projects.desc} 
                     link={projects.link} 
                     />
                );
            })}
      </div>
        </Element>
  );
}

export default ProjectContainer
