import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Item from "../../components/items/Item";
import Nav from "../../components/nav/Nav";
import CarForm from "../../components/carForm/CarForm";
import { GetCars } from "./services/CarService";
import Loader from "../../components/loader/Loader";
import { Box,Button } from "@mui/material";
import axios from "axios";

const AddCar = () => {
  const apiUrl = "https://localhost:44398/api/";

  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [dataLoaded, setDataLoaded] = useState(false);

  const [formData, setFormData] = useState({
    id: "",
    brandId: "",
    colorId: "",
    modelYear: "",
    dailyPrice: "",
    description: ""
  });

  const getData = async () => {
    try {
      const res = await GetCars();
      setCars(res.data);
      setFilteredCars(res.data);
      setDataLoaded(true);
    } catch (err) {
      console.error("Veri çekme hatası:", err);
    }
  };
  useEffect(() => { getData(); }, []);

  useEffect(() => {
    setFilteredCars(
      cars.filter(c =>
        c.brandName.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }, [searchText, cars]);

  const handleRowClick = (params) => {
    const row = params.row;
    setFormData({
      id: row.id,
      brandId: row.brandId,
      colorId: row.colorId,
      modelYear: row.modelYear,
      dailyPrice: row.dailyPrice,
      description: row.description
    });
  };

  useEffect(() => {
    console.log("Yeni formData:", formData);
  }, [formData]);

  const updateCar = async () => {
    try {
      const res = await axios.put(apiUrl + "Cars/UpdateCar", formData);
      console.log("Güncellendi:", res.data);
      // istersen formData’yı sıfırla:
      // setFormData({ id: "", brandId: "", colorId: "", modelYear: "", dailyPrice: "", description: "" });
      // verileri tazele
      await getData();
    } catch (err) {
      console.error("Güncelleme hatası:", err);
    }
  };

  const deleteCar = async()=>{
    try{
       const response = await axios.delete(apiUrl+"Cars/DeleteCar?id="+formData.id) 
       console.log("Silindi",response.status)
       await getData();
    }
    catch(e){
        console.error("Hata",e)
    }
  }

  const columns = [
    { field: 'id', headerName: 'Id', width: 120 },
    { field: 'brandName', headerName: 'Marka', width: 180 },
    { field: 'description', headerName: 'Açıklama', width: 240 },
    { field: 'colorName', headerName: 'Renk', width: 140 },
  ];

  const rows = filteredCars.map(car => ({
    id: car.id,
    brandId: car.brandId,
    colorId: car.colorId,
    modelYear: car.modelYear,
    dailyPrice: car.dailyPrice,
    brandName: car.brandName,
    description: car.description,
    colorName: car.colorName
  }));

  return (
    <div style={{ backgroundColor: '#2b3044', minHeight: '100vh' }}>
      <div className="row" style={{ height: '100%' }}>
        <div
          className="col-2"
          style={{
            height: '100vh',
            backgroundColor: "#3c4356",
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "12px"
          }}
        >
          <Nav />
          <Item className="fa-solid fa-tv" name="Dashboard" domain="/dashboard" />
          <Item className="fa-solid fa-car" name="Araba Ekleme" domain="/addCar" />
          <Item className="fa-solid fa-copyright" name="Marka Ekleme" domain="/addBrand" />
          <Item className="fa-solid fa-hammer" name="Rol Yönetimi" domain="/roleManagement" />
        </div>

        {!dataLoaded && <Loader />}

        <div className="col-10" style={{ padding: 20 }}>
          <div className="row">
            <div className="col-8" style={{ paddingRight: 20 }}>
              <div className="row">
                <div className="col-9">
                <input
                type="text"
                className="form-control mb-3"
                placeholder="Markayı Giriniz"
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
                />
                </div>
                <div className="col-3">
                <Button disabled={!formData.id} style={{backgroundColor:"red", color:"white",marginBottom:"15px"}} onClick={deleteCar}>
                  Sil
                </Button>
                </div>
              </div>
              <div style={{ height: 850, width: '100%' }}>
                <Box >
                <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  disableSelectionOnClick
                  onRowClick={handleRowClick}
                />
                </Box>
              </div>
            </div>
            <div className="col-4">
              <CarForm 
               formData={formData}
               onChange={e => {
                setFormData({ ...formData, [e.target.name]: e.target.value });
               }}
               onClick={updateCar}
               />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCar;
