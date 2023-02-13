import React from 'react';
import classes from "./MyButton.module.css"


function MyButton({ children, ...props }) {
    // console.log("sss",props)
    
    return (
        <button className={classes.btn} {...props}>{children}</button>
    );
}
export default MyButton;