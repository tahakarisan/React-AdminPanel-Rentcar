import React from "react";
import { useNavigate } from "react-router-dom";
import Item from "../../components/items/Item";
import Nav from "../../components/nav/Nav";
const RoleManagement = () => {
    return(
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
            </div>
        </div>
    )
}

export default RoleManagement;