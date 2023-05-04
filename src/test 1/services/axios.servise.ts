import axios from "axios";
import {jsonBaseURL} from "../constants/urls";

const jsonAxiosService = axios.create({baseURL:jsonBaseURL})

export {
    jsonAxiosService
}