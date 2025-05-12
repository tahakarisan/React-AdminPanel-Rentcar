import React from "react";
import Nav from "../../components/nav/Nav";
import Item from "../../components/items/Item";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserInfo from "../../components/userInfo/UserInfo";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import EditButton from '../../components/buttons/EditButton';
import QuitButton from "../../components/buttons/QuitButton";
const HomePage = () => {
    return (
        <div style={{ backgroundColor: '#2b3044', minHeight: '100vh' }}>
            <div className="row">
                <div style={{ 
                    height: '100vh',
                     backgroundColor:"#3c4356",
                     borderTopRightRadius:"10px",
                     borderBottomRightRadius:"12px"
                     }} className="col-2">
                    <Nav/>
                    <Item 
                        className="fa-solid fa-tv"
                        name="Dashboard"
                        domain="/dashboard"
                    />
                    <Item 
                        className="fa-solid fa-car"
                        name="Araba Ekleme"
                        domain = "/addCar"
                    />
                    <Item 
                        className="fa-solid fa-copyright"
                        name="Marka Ekleme"
                        domain = "/addBrand"
                    />
                    <Item 
                        className="fa-solid fa-hammer"
                        name="Rol Yönetimi"
                        domain = "/roleManagement"
                    />
                </div>
                <div className="col-10">
                     <div className="container">
                        <div className="row">
                            <div style={{marginTop:"60px"}} className="col-12">
                                <UserInfo
                                    userName="Aslan"
                                    userSurname="Yılmaz"
                                    email="th.omer3737@gmail.com"
                                    status="Aktif"
                                    role ="Admin"
                                />
                                <div className="container">
                                    <div className="row">
                                        <div className="col-1">
                                        <QuitButton/>
                                        </div>
                                        <div style={{marginLeft:"10px"}} className="col-1">
                                            <EditButton/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    );
}

const styles = {
    quitButton:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"red",
        border:"none",
        color:"#ffffff",
        fontSize:"20px",
        fontWeight:"bold",
        marginTop:"20px",
        marginLeft:"10px",
        padding:"10px 20px",
        borderRadius:"5px",
        cursor:"pointer",
        transition:"background-color 0.3s ease",
    },
}

export default HomePage;