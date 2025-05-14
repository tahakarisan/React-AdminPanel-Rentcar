import axios from "axios";
import { useEffect, useState } from "react";
const UserRoleForm = ({onPressAdd,onPressUpdate,selectedRoleId,setSelectedRoleId }) => {
   const apiUrl = "https://localhost:44398/api/";
   const [email,setEmail] = useState("");
   const [roles,setRoles] = useState([]);
   const getAllRoles = async()=>{
           const response = await axios.get(apiUrl+"Roles/getRoles")
           console.log(response.data);
           console.log("Atanan Değer",response.data.data);
           setRoles(response.data.data);
   }
   useEffect(()=>{
      getAllRoles();
   },[])
   
   useEffect(() => {
        console.log("All roles state değişti:", roles);
   }, [roles]);
   return (
    <div  className="row">
      <div className="col-12">
        <div style={{margin:"15px",backgroundColor:"#3c4356"}}  className="card shadow-sm rounded p-4 text-white">
          <h4 className="mb-4 text-center">Rol Ataması</h4>
          <div className="mb-3">
            <div className="row">
               <div className="col-12">
                  <label htmlFor="roleSelect" className="form-label">Atanacak Rol</label>
                  <select
                  id="roleSelect"
                  className="form-select bg-secondary text-white"
                  value={selectedRoleId}
                  onChange={(e) => {
                    const selectedId = e.target.value;
                    console.log("Bura",selectedId);
                    setSelectedRoleId(selectedId);
                                    
                    const selectedRole = roles.find((role) => role.id.toString() === selectedId);
                    console.log("Seçilen Role:", selectedRole); // buradan JS'e aktarabilirsin
                  }}
                >
                  <option value="">Bir rol seçiniz...</option>
                  {roles?.map((role) => (
                    <option key={role.id} value={role.id}>
                      {role.name}
                    </option>
                  ))}
                </select>

               </div>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-4">
            <button style={{marginRight:"15px"}}  onClick={onPressAdd} type="submit" className="btn btn-danger px-4 py-2 rounded-pill shadow">
              Rol Ekle
            </button>
            <button onClick={onPressUpdate} type="submit" className="btn btn-success px-4 py-2 rounded-pill shadow">
              Rol Güncelle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const styles = {
   input: {
    backgroundColor: "#4c556e",
    borderColor: "#2b3044",
    color: "white"
  }
}
export default UserRoleForm;
