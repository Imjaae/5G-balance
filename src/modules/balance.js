import axios from "axios";
import AXIOS_ADDRESS from "./AxiosAddress";

export const fetchAllBalance = async (id) => {
  const response = await axios(`${AXIOS_ADDRESS}/balances/${id}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.data;
};
