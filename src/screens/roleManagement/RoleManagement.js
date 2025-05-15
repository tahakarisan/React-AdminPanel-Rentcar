import React, { useEffect, useState } from "react";
import Item from "../../components/items/Item";
import Nav from "../../components/nav/Nav";
import { GetAllRoles, GetRoles } from "./services/RoleManagementService";
import { DataGrid } from '@mui/x-data-grid';
import UserRoleForm from "../../components/userRoleForm/userRoleForm";
import PacmanLoader from "react-spinners/PacmanLoader";
import axios from "axios";
import Loader from "../../components/loader/Loader";

const RoleManagement = () => {
  const apiUrl = "https://localhost:44398/api/"
  const [roles, setRoles] = useState([]);
  const [allRoles, setAllRoles] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [roleName, setRoleName] = useState("");
  const [filteredRoles, setFilteredRoles] = useState([]);
  const [userId,setUserId] = useState("");
  const [userOperationClaimId,setUserOperationClaimId] = useState("");
  const [operationClaimId,setClaim] = useState("");
  const [selectedRoleId, setSelectedRoleId] = useState("");
  const [dataLoaded,setDataState] = useState(false);
  const roleForm = {
     id:userOperationClaimId,
     userId:userId,
     operationClaimId:selectedRoleId,
  }
  const updateRole = async () => {
    try {
      console.log(roleForm);
      const response = await axios.put(apiUrl + "Roles/updateUserRole", roleForm);
      console.log("Rol başarıyla eklendi:", response.data.data);
    } catch (error) {
      console.error("Rol eklenirken hata oluştu:", error);
    }
  };

  useEffect(() => {
    fetchRoles();
    fetchAllRoles();
  }, []);

  const fetchRoles = async () => {
    try {
      const response = await GetRoles();
      setRoles(response.data.data);
      console.log("Roller", response.data.data)
      setFilteredRoles(response.data.data);
      setDataState(true);
    } catch (error) {
      console.error("Roller alınırken hata oluştu:", error);
    }
  };

  const fetchAllRoles = async () => {
    try {
      const response = await GetAllRoles();
      setAllRoles(response.data.data);
    } catch (error) {
      console.error("Tüm roller alınırken hata oluştu:", error);
    }
  };

  useEffect(() => {
    const filtered = roles.filter(role =>
      role.userName?.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    );
    setFilteredRoles(filtered);

  }, [searchText, roles]);

  const handleRowClick = (params) => {
    console.log("Kullanıcı Id",params.row.userId)
    console.log("Operation Id",params.row.operationClaimId)
    setUserId(params.row.userId)
    setUserOperationClaimId(params.id)
  };

  const handleSelectionChange = (newSelection) => {
    const selectedId = newSelection[0];
    console.log("Seçilen ID:", selectedId);
  };

  const userColumns = [
    { field: 'id', headerName: 'Id', width: 150 },
    { field: 'roleName', headerName: 'Rol Adı', width: 250 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'userName', headerName: 'Ad', width: 200 },
    { field: 'userLastName', headerName: 'Soyad', width: 150 },
  ];

  const userRows = filteredRoles.map(role => ({
    id: role.id,
    operationClaimId: role.operationClaimId,
    userId: role.userId,
    userName: role.userName,
    roleName: role.roleName,
    email: role.email,
    userLastName: role.userLastName,
  }));

  const roleColumns = [
    { field: 'id', headerName: 'Id', width: 150 },
    { field: 'name', headerName: 'Rol Adı', width: 250 },
  ];

  const roleRows = allRoles.map(role => ({
    id: role.id,
    name: role.name,
  }));

  return (
    <div style={{ backgroundColor: '#2b3044', minHeight: '100vh' }}>
      <div className="row">
        {/* Sidebar */}
        <div className="col-2" style={styles.sidebar}>
          <Nav/>
          <Item className="fa-solid fa-tv" name="Dashboard" domain="/dashboard" />
          <Item className="fa-solid fa-car" name="Araba Ekleme" domain="/addCar" />
          <Item className="fa-solid fa-copyright" name="Marka Ekleme" domain="/addBrand" />
          <Item className="fa-solid fa-hammer" name="Rol Yönetimi" domain="/roleManagement" />
        </div>

        {/* Main content */}
        {!dataLoaded && <Loader />}
        <div className="col-10">
          <div className="row">
            {/* Kullanıcı Rolleri */}
            <div className="col-7 mt-3">
              <input
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="form-control mb-3"
                placeholder="İsim giriniz"
              />
              <DataGrid
                rows={userRows}
                columns={userColumns}
                getRowId={(row) => row.id}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                onRowClick={handleRowClick}
                onSelectionModelChange={handleSelectionChange}
                style={{ height: 500 }}
              />
            </div>

            <div className="col-5 mt-3">
              <UserRoleForm
                onPressAdd={updateRole}
                onPressUpdate={updateRole}
                setSelectedRoleId={setSelectedRoleId}
                selectedRoleId={selectedRoleId}
              />
            </div>

            {/* Roller */}
            <div className="col-7 mt-4">
              <DataGrid
                rows={roleRows}
                columns={roleColumns}
                getRowId={(row) => row.id}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                onRowClick={handleRowClick}
                onSelectionModelChange={handleSelectionChange}
                style={{ height: 300 }}
              />
            </div>

            <div className="col-5 mt-4">
              <div className="card shadow-sm rounded p-4 text-white" style={{ backgroundColor: "#3c4356" }}>
                <h4 className="mb-4 text-center">Rol İşlemleri</h4>
                <label htmlFor="roleName" className="form-label">Rol Adı</label>
                <input
                  value={roleName}
                  onChange={(e) => setRoleName(e.target.value)}
                  style={styles.input}
                  className="form-control"
                  id="roleName"
                  placeholder="Örn: Yardakçı"
                />
                <div className="d-flex justify-content-center mt-4">
                  <button type="submit" className="btn btn-success px-4 py-2 rounded-pill shadow">
                    Rol Ekle
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  sidebar: {
    height: '100vh',
    backgroundColor: "#3c4356",
    borderTopRightRadius: "10px",
    borderBottomRightRadius: "12px",
  },
  input: {
    backgroundColor: "#4c556e",
    borderColor: "#2b3044",
    color: "white"
  }
};

export default RoleManagement;
