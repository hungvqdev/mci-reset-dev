import axiosClient from "./axiosClient";
import {AvailableFunctionsResponse} from '../types/apiTypes'

const availableFunctionsApi = {
  getAvailableFunctions({userId}: {userId: number | null}) {
    const url = `get-available-functions/`;
    return axiosClient.post(url, {user_id: userId});
  },
};
export default availableFunctionsApi;
