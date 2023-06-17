import React from "react";
import "./Title.css"


const Title =(props)=>{
    const title = props.title;
    const description = props.description;
    return(
        <div className="title-section">
            <h1>{title}</h1>
            <hr className="separator"/>
            <div className="general-info">
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Title;




