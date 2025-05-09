import React from "react";
import Nav from "../../components/nav/Nav";
import Item from "../../components/items/Item";
const AddCar = () => {
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
                        domain = "/dashboard"
                    />
                    <Item 
                        className="fa-solid fa-car"
                        name="Araba Ekleme"
                        domain="/addCar"
                    />
                    <Item 
                        className="fa-solid fa-copyright"
                        name="Marka Ekleme"
                        domain="/addBrand"
                    />
                    <Item 
                        className="fa-solid fa-hammer"
                        name="Rol Yönetimi"
                        domain="/roleManagement"
                    />
                </div>
                <div className="col-10">

                </div>
             </div>
        </div>
    )
}

export default AddCar;