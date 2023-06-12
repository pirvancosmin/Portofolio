import React from "react";
import { useEffect, useState } from "react";


function Bottom() {
    
    const[currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentDate(new Date().getFullYear());
      }, 1000);
      return () => clearInterval(interval);
    }, []);

    return(
        <>
        <bottom>
            <h3 id="thisYear">{`© ${currentDate.toString()} Pirvan Cosmin. All Rights Reserved.`}</h3>
        </bottom>
        </>
    );
}
export default Bottom;