import React from "react";
import axios from "axios";
const apiUrl = "https://localhost:44398/api/";

export const GetBrands = async ()=>{
    const response = await axios.get(apiUrl+"Brands/GetAllBrand")
    return response.data;
}
