import React, { useState } from 'react';
// import "./project.css";

const Project = ({img,title,desc,link}) => {
    const [show, setshow] = useState(false);
    return (
        <a href={link}>
            <div className="project" onMouseEnter={() => setshow(true)} onMouseLeave={() => setshow(false)}>
                {
                   show ? (
                    <div>
                        <h3>{title}</h3>
                        <p>{desc}</p>
                    </div>
                   ) : (
                    <img src={img} alt=""></img>
                   )               
                }
            </div>
        </a>
    )
}

export default Project