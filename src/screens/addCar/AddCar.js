import React, { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import Item from "../../components/items/Item";
import Nav from "../../components/nav/Nav"
import CarForm from "../../components/carForm/CarForm";
import { GetCars,GetBrands } from "./services/CarService";

const AddCar = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [brands, setBrands] = useState([]);
  const [searchText, setText] = useState("");
  const [selectedRow, setSelectedRow] = useState(null);
  const [dataLoaded, setDataState] = useState(false);

      const getData = async ()=>{
        const response = await GetCars();
        console.log(response.Data);
        setCars(response.Data);
        setFilteredCars(response.Data);
      } 

      useEffect(()=>{ 
        getData();
        console.log("çalıştı")
      },[])

      useEffect(() => {
          const filteredBrands = cars.filter(c =>
              c.BrandName.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
          );
          setFilteredCars(filteredBrands);
  
      }, [searchText]);

      const columns = [
        { field: 'Id', headerName: 'Id', width: 150 },
        { field: 'BrandName', headerName: 'Marka', width: 200 },
        { field: 'Description', headerName: 'Açıklama', width: 250 },
        { field: 'ColorName', headerName: 'Renk', width: 150 },
      ];
  
  const rows = filteredCars?.map(car => ({
    Id: car.Id,
    BrandName: car.BrandName,
    Description: car.Description, 
    ColorName: car.ColorName 
  }));
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
              <div style={{ height: 600, width: '100%' }}>
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
            <div className="col-4">
              <CarForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCar;