import React from "react";

const Item = ({ name, className,domain }) => {
    return (
        <div style={styles.item} className="item">
            <i style={styles.icon} className={className}></i>
            <a href={domain} style={styles.title}>{name}</a>
        </div>
    );
};

const styles ={
    item:{
        display: "flex",
        justifyContent: "flex-start",
        marginTop: "35px",
        marginLeft: "30px",
        alignItems: "center",
        backgroundColor: "#3c4356",
        borderRadius: "5px",
        marginBottom: "10px",
        textDecoration: "none",
    },
    icon:{
        color:"#ffffff",
        fontSize: "24px",
        marginBottom: "10px",
    },
    title:{
        textDecoration: "none",
        marginLeft: "10px",
        color: "#ffffff",
        fontSize: "18px",
        fontWeight: "bold",
    }
}
export default Item;