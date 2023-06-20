import React from "react";
import './App.css';

function Bottom() {
    return(
        <bottom className="bottom">
        {`© ${new Date().getFullYear()} Pirvan Cosmin. All Rights Reserved.`}
        </bottom>
    );
}
export default Bottom;