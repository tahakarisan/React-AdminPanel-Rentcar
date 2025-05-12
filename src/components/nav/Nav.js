import React from "react";
import styles from "./NavStyle";
const Nav = () => {
    return(
        <div style={styles.nav} className="nav">
            <a style={{textDecoration:"none"}} href="/">
                 <h1 style={styles.title}>Aslan Panel</h1>
            </a> 
        </div>
    )
}


export default Nav;