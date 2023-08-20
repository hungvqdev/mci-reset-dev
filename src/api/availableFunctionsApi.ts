import axiosClient from "./axiosClient";

const availableFunctionsApi = {
  getAvailableFunctions({ userId }: { userId: number | null }) {
    const url = `get-available-functions/`;
    return axiosClient.post(url, { user_id: userId });
  },
  getSetupFunction({ userId }: { userId: number | null }) {
    const url = `set-up/?user_id=${userId}`;
    return axiosClient.get(url);
  },
};
export default availableFunctionsApi;
