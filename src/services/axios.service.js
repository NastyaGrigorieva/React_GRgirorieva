import axios from "axios";
import baseURL from "../config/urls";

const axiosServise  = axios.create({baseURL});
 export {axiosServise}