import React, { useState,useEffect } from "react";
import { GetBrands } from "../../screens/addCar/services/CarService";
import { GetColors } from "../../screens/addCar/services/CarService";
import axios from "axios";
const CarForm = () => {
  const apiUrl = "https://localhost:44398/api/";
  const [brands,setBrands] = useState([]);
  const [modelYear,setYear] = useState([]);
  const [dailyPrice,setPrice] = useState([]);
  const [description,setDescription] = useState("");
  const [colors,setColors] = useState([]);
  const [selectedBrandId, setSelectedBrandId] = useState("");
  const [selectedColorId, setSelectedColorId] = useState("");
  const [images, setImages] = useState([]);
  const carForm = {
    brandId:parseInt(selectedBrandId),
    colorId:parseInt(selectedColorId),
    modelYear:parseInt(modelYear),
    dailyPrice:parseInt(dailyPrice),
    description:description,
  }
  const addCar = async (carForm) => {
  try {
    const response = await axios.post(apiUrl+"Cars/AddCar", carForm);
    console.log(response.message);
  } catch (error) {
    console.error("Araba eklenirken hata oluştu:", error);
  }
};
  useEffect(() => {
    const fetchBrands = async () => {
      const response = await GetBrands();
      setBrands(response.data);
      console.log("Markalar")
      console.log(brands)
    };
    fetchBrands();
  }, []);

  useEffect(()=>{
     const fetchColors = async ()=>{
        const response = await GetColors();
        setColors(response.data)
        console.log("Renkler")
        console.log(colors)
     }
     fetchColors();
  },[])

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    
    setImages((prevImages) => [
      ...prevImages,
      ...files.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      })),
    ]);
  };

  const handleSubmit = (e) => {
    console.log(carForm);
    addCar(carForm)
    /*
    const formData = new FormData();
    images.forEach((img) => {
      formData.append("images", img.file); 
    });
    console.log("Yüklenecek form verisi:", formData);
    */
  };

  return (
    <div style={{ marginTop: "40px", backgroundColor: "#3c4356" }} className="card shadow rounded-4 p-4">
      <h3 className="mb-4 text-primary text-center">🚗 Araba Ekle</h3>
      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-md-6">
            <label style={styles.label} htmlFor="year" className="form-label">Marka</label>
            <select
                style={{backgroundColor:"#4c556e",  color:"white" , borderColor:"#2b3044"}}
                className="form-control"
                value={selectedBrandId}
                id="brandId"
                onChange={(e) => setSelectedBrandId(e.target.value)}
            >
          <option style={{backgroundColor:"#2b3044", color:"white"}}  value="">Seçiniz</option>
              {brands?.map((brand) => (
                <option style={{backgroundColor:"#2b3044", color:"white"}} key={brand.id} value={brand.id}>
                  {brand.brandName}
                </option>
              ))}
          </select>
          </div>
          <div className="col-md-6">
            <label style={styles.label} htmlFor="year" className="form-label">Model Yılı</label>
            <input 
             value={modelYear}
             onChange={(e)=>setYear(e.target.value)}
             style={styles.input} type="number" className="form-control" id="modelYear" placeholder="Örn: 2022" />
          </div>
          <div className="col-md-6">
            <label style={styles.label} htmlFor="year" className="form-label">Fiyat</label>
            <input 
             value={dailyPrice}
             onChange={(e)=>setPrice(e.target.value)}
             style={styles.input} type="number" className="form-control" id="dailyPrice" placeholder="Örn: 2022" />
          </div>
          <div className="col-md-6">
            <label style={styles.label} htmlFor="year" className="form-label">Renk</label>
            <select
                style={{backgroundColor:"#4c556e",  color:"white" , borderColor:"#2b3044"}}
                className="form-control"
                value={selectedColorId}
                onChange={(e) => setSelectedColorId(e.target.value)}
            >
          <option style={{backgroundColor:"#2b3044", color:"white"}}  value="">Seçiniz</option>
              {colors?.map((color) => (
                <option style={{backgroundColor:"#2b3044", color:"white"}} key={color.id} value={color.id}>
                  {color.colorName}
                </option>
              ))}
          </select>
          </div>
          <div className="col-md-12">
            <label style={styles.label} htmlFor="description" className="form-label">Açıklama</label>
            <textarea
             style={styles.input} 
             value={description}
             onChange={(e)=>setDescription(e.target.value)}
             className="form-control" 
             id="description" rows="3" 
             placeholder="Örn: Düşük kilometre, temiz kullanılmış..." 
             ></textarea>
          </div>
          <div className="col-md-12">
            <label style={styles.label} htmlFor="image" className="form-label">Araba Fotoğrafları</label>
            <input
              style={styles.input}
              className="form-control"
              type="file"
              id="image"
              multiple
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          {images.length > 0 && (
            <div className="col-md-12 mt-3">
              <div className="row">
                {images.map((img, idx) => (
                  <div className="col-md-3 mb-2" key={idx}>
                    <img src={img.preview} alt={`preview-${idx}`} className="img-fluid rounded shadow" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-4 d-flex justify-content-center">
          <button type="submit" className="btn btn-success px-5 py-2 rounded-pill">Ekle</button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  label: {
    color: "white"
  },
  input: {
    backgroundColor: "#4c556e",
    borderColor: "#2b3044",
    color: "white"
  }
};

export default CarForm;
