import React from "react";

function PersonCard(props) {
    return (
<div>
        <h2>{props.lastName}, {props.firstName}</h2>
        <p>Age: {props.age}</p>
        <p>Hair Color: {props.hair}</p>
        </div>
)};

export default PersonCard