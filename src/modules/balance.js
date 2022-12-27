import axios from "axios";

export const fetchAllBalance = async (id) => {
  const response = await axios(`http://localhost:3001/balance/${id}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.data;
};
