import React from "react";
import styles from "./UserInfoStyle";

const UserInfo = ({userName,userSurname,email,status,role}) => {
    return(
        <div style={styles.userContainer} className="userContainer">
            <i style={styles.userIcon} className="fa-solid fa-user"></i>
            <p style={styles.userName}>Ad: {userName}</p>
            <p style={styles.userName}>Soyad: {userSurname}</p> 
            <p style={styles.userEmail}>Email: {email}</p> 
            <p style={styles.userStatusText}>Durum: {status}</p> 
            <p style={styles.role}>Rolünüz: {role}</p> 
        </div>
    )
}
export default UserInfo;