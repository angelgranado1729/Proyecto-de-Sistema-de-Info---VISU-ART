import React from "react";
import "./Title.css"


const Title =(props)=>{
    const title = props.title;
    const description = props.description;
    return(
        <div className="title-section">
            <h1 className="title-h1">{title}</h1>
            <hr className="title-separator"/>
            <div className="title-info-container">
                <p className="title-info">{description}</p>
            </div>
        </div>
    )
}

export default Title;




