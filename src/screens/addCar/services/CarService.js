import axios from "axios";

const apiUrl = "https://localhost:44398/api/";

export const GetCars = async () => {
  const response = await axios.get(apiUrl+"Cars/GetAllCar");
  return response.data;
};

export const GetBrands = async ()=>{
    const response = await axios.get(apiUrl+"Brands/GetAllBrand")
    return response.data;
}
export const GetColors = async ()=>{
    const response = await axios.get(apiUrl+"Colors/GetAllColor")
    return response.data;
}
