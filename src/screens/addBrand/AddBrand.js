import React, { useEffect, useState } from "react";
import Item from "../../components/items/Item";
import Nav from "../../components/nav/Nav";
import BrandForm from "../../components/brandForm/BrandForm";
import { GetBrands } from "./services/BrandService";
import { DataGrid } from "@mui/x-data-grid";
const AddBrand = () => {
    const [brands,setBrands] = useState([]);
    const [filteredBrands,setFilteredBrands] = useState([]);
    const [searchText, setText] = useState("");

    const getBrands = async ()=>{
        const response = await GetBrands();
        console.log(response.data);
        setBrands(response.data);
        setFilteredBrands(response.data);
    }

    useEffect(()=>{
        getBrands();
    },[])
    useEffect(() => {
        const filteredBrands = brands.filter(c =>
            c.brandName.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
        );
        setFilteredBrands(filteredBrands);

    }, [searchText]);

    //satırlarım
    const rows = filteredBrands?.map(brand => ({
        id: brand.id,
        brandName: brand.brandName,
        imagePath: brand.imagePath
    }));
    //Kolonlarım
    const columns = [
        { field: 'id', headerName: 'Id', width: 150 },
        { field: 'brandName', headerName: 'Marka', width: 200 },
        { field: 'imagePath', headerName: 'Url Foto', width: 250 },
    ];
    const handleRowClick = (params) => {
      console.log('Tıklanan ID:', params.id);
    };
    
    const handleSelectionChange = (newSelection) => {
      console.log('Seçilen IDler:', newSelection);
  
      const selectedId = newSelection[0]; 
      console.log("Tek Seçilen ID:", selectedId);
    };    

    return (
    <div style={{ backgroundColor: '#2b3044', minHeight: '100vh' }}>
      <div className="row" style={{ height: '100%' }}>
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
        
        <div className="col-10" style={{ padding: "20px" }}>
          <div className="row">
            <div className="col-8" style={{ paddingRight: "20px" }}>
              <div className="input-group flex-nowrap">
                <input
                  value={searchText}
                  onChange={(e) => setText(e.target.value)}
                  style={{ marginBottom: "20px" }}
                  type="text"
                  className="form-control"
                  placeholder="Markayı Giriniz"
                />
              </div>
              <div style={{ height: 500, width: '100%' }}>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  getRowId={(row)=>row.id}
                  pageSize={2}
                  rowsPerPageOptions={[5]}
                  checkboxSelection
                  disableSelectionOnClick
                  onRowClick={handleRowClick}
                  onSelectionModelChange={handleSelectionChange}                
                />
              </div>
            </div>
            <div className="col-4">
              <BrandForm/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBrand;