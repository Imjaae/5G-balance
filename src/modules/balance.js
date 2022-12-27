import axios from "axios";

export const fetchAllBalance = async (id) => {
  const response = await axios(
    `https://json-server-vercel-mauve-nu.vercel.app/balances/${id}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.data;
};
