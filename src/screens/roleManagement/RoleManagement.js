import React, { useEffect, useState } from "react";
import Item from "../../components/items/Item";
import Nav from "../../components/nav/Nav";
import { GetAllRoles, GetRoles } from "./services/RoleManagementService";
import { DataGrid } from '@mui/x-data-grid';
import UserRoleForm from "../../components/userRoleForm/userRoleForm";
import axios from "axios";
const RoleManagement = () => {
    const[roles,setRoles] = useState([]);
    const[allRoles,setAllRoles] = useState([]);
    const[searchText,setText] = useState("");
    const[roleName,setRoleName] = useState("");

    const[filterRoles,setFilterRoles] = useState([]);
    const fetchData =async ()=>{
        const response = await GetRoles();
        console.log(response.data.Data);
        setRoles(response.data.Data);
        setFilterRoles(response.data.Data);
    }

    const getAllRoles = async()=>{
        const response = await GetAllRoles();
        setAllRoles(response.data.Data);
    }
    
    useEffect(()=>{
        fetchData();
        getAllRoles();
    },[])

    useEffect(() => {
     console.log("All roles state değişti:", allRoles);
    }, [allRoles]);


    useEffect(()=>{
        const filteredRoles = roles.filter(c =>
              c.UserName.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
        );
        setFilterRoles(filteredRoles);
    },[searchText])
    
    const columns = [
        { field: 'Id', headerName: 'Id', width: 150 },
        { field: 'RoleName', headerName: 'Rol Adı', width: 250 },
        { field: 'Email', headerName: 'Email', width: 250 },
        { field: 'UserName', headerName: 'Ad', width: 200 },
        { field: 'UserLastName', headerName: 'Soyad', width: 150 },
    ];
    const rows = filterRoles?.map(role => ({
        Id: role.Id,
        UserName: role.UserName,
        RoleName: role.RoleName, 
        Email: role.Email,
        UserLastName:role.UserLastName 
    }));

    const roleColumns = [
        { field: 'Id', headerName: 'Id', width: 150 },
        { field: 'Name', headerName: 'Rol Adı', width: 250 },
    ];
    const roleRows = allRoles?.map(role => ({
        Id: role.Id,
        Name: role.Name, 
    }));

    const handleRowClick = (params) => {
      console.log('Tıklanan ID:', params.id);
    };
    
    const handleSelectionChange = (newSelection) => {
      console.log('Seçilen IDler:', newSelection);
  
      const selectedId = newSelection[0]; 
      console.log("Tek Seçilen ID:", selectedId);
    };
    
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
                <div className="col-10">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div style={{marginTop:"20px"}} className="col-7">
                                    <div className="input-group flex-nowrap">
                                        <input
                                            value={searchText}
                                            onChange={(e) => setText(e.target.value)}
                                            style={{ marginBottom: "20px" }}
                                            type="text"
                                            className="form-control"
                                            placeholder="İsim Giriniz"
                                        />
                                    </div>
                                    <div style={{ height: 500, width: '100%', marginBottom:"80px" }}>
                                    <DataGrid
                                      rows={rows}
                                      columns={columns}
                                      getRowId={(row)=>row.Id}
                                      pageSize={5}
                                      rowsPerPageOptions={[5]}
                                      checkboxSelection
                                      disableSelectionOnClick
                                      onRowClick={handleRowClick}
                                      onSelectionModelChange={handleSelectionChange}                
                                    />
                                    </div>
                                </div>
                                <div className="col-5">
                                    <UserRoleForm 
                                        onPress={()=>{}}
                                    />
                                </div>
                            </div>

                        </div>

                        <div className="col-12">
                            <div className="row">
                                <div className="col-7">
                                    <div style={{ height: 300, width: '100%', marginBottom:"80px" }}>
                                    <DataGrid
                                      rows={roleRows}
                                      columns={roleColumns}
                                      getRowId={(row)=>row.Id}
                                      pageSize={5}
                                      rowsPerPageOptions={[5]}
                                      checkboxSelection
                                      disableSelectionOnClick
                                      onRowClick={handleRowClick}
                                      onSelectionModelChange={handleSelectionChange}  
                                    />
                                    </div>
                                </div>
                                <div className="col-5">
    <div  className="row">
      <div className="col-12">
        <div style={{margin:"15px",backgroundColor:"#3c4356"}}  className="card shadow-sm rounded p-4 text-white">
          <h4 className="mb-4 text-center">Rol İşlemleri</h4>
          <div className="mb-3">
            <div className="row">
               <div style={{marginBottom:"20px"}} className="col-12">
                  <label htmlFor="roleSelect" className="form-label">
                   <label htmlFor="roleSelect" className="form-label">Rol Adı</label>
                   <input 
                     value={roleName}
                     onChange={(e)=>setRoleName(e.target.value)}
                     style={styles.input} type="text" className="form-control bg-secondary" id="dailyPrice" placeholder="Örn: Yardakçı" 
                   />
                  </label>
               </div>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-4">
            <button  type="submit" className="btn btn-success px-4 py-2 rounded-pill shadow">
              Rol Ekle
            </button>
          </div>
        </div>
      </div>
    </div>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    )
}
const styles = {
   input: {
    backgroundColor: "#4c556e",
    borderColor: "#2b3044",
    color: "white"
  }
}
export default RoleManagement;