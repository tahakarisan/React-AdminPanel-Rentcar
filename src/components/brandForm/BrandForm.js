import React, { useState } from "react";

const BrandForm = ()=>{
    const [brandName,setBrandName] = useState("");
    const [images, setImages] = useState([]);
    const brandForm = {
    BrandName:brandName,
    ImagePath:images,
    }
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
    console.log(brandForm);
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
      <h3 className="mb-4 text-primary text-center">Marka Ekle</h3>
      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-md-6">
            <label style={styles.label} htmlFor="year" className="form-label">Marka Adı</label>
            <input 
             value={brandName}
             onChange={(e)=>setBrandName(e.target.value)}
             style={styles.input} type="text" className="form-control" id="dailyPrice" placeholder="Örn: Toyota" />
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
}
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
export default BrandForm