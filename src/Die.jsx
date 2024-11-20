/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react"
import Draw from "./Draw"

export default function Die(props) {
    const styles = {
        // backgroundColor: props.isHeld ? "#59E391" : "white"
        backgroundColor: props.isHeld ? "rgb(230, 230, 230)" : "white",
        border: props.isHeld ? "1px solid black" : "none"
    }

    return (
       
        <div 
            className="die-face" 
            style={styles}
            onClick={props.holdDice}
        >            
                <Draw value={props.value} />
               
             </div>

        
    )
}