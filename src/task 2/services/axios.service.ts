import axios from "axios";
import {commentBaseURL} from "../constants/urls";

const commentAxiosService = axios.create({baseURL: commentBaseURL});

export {commentAxiosService}