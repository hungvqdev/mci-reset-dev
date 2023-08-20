import axiosClient from "./axiosClient";
import { AxiosResponse } from "axios"; 
import {LoginRequest, LoginResponse} from '../types/apiTypes'

const authApi = {
  loginUser(data: LoginRequest): Promise<AxiosResponse<LoginResponse>> {
    const url = "user-login/";
    return axiosClient.post(url, data);
  },
};

export default authApi;