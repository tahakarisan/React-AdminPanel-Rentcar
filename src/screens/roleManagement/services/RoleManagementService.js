import React from "react";
import axios from "axios";
const apiUrl = "https://localhost:44398/api/";

export const GetRoles = ()=>{
    const response  = axios.get(apiUrl+"Roles/getUserRoleDto");
    return response;
}

export const GetAllRoles = ()=>{
    const response = axios.get(apiUrl+"Roles/getRoles");
    return response;
}