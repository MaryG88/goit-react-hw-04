import axios from "axios";

axios.defaults.baseURL =
  "https://api.unsplash.com/search/photos";
axios.defaults.headers = {
  Autorization: `Client-ID ${API_KEY}`,
  "Accept-Version": "v1",
};
// axios.defaults.params = {
//     per_page: 15,
// };

const API_KEY =
  "66zUagYZny9A_8VSOvPJhByeUAY6ryMQ6WMw3Ayj6EQ";

export const fetchImages = async (
  query,
  page
) => {
  const response = await axios.get(
    "/search/photos",
    {
      params: {
        query,
        page,
        per_page: 15,
        client_id: API_KEY,
      },
    }
  );
  return response.data;
};
