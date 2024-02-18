import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 30000,
});

export const getResultsForYT = async (payload: any): Promise<any> => {
  if (!payload?.url) {
    const response = await API.post("/analyze_audio", payload, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } else {
    const formData = new FormData();
    formData.set("audio", payload?.file);
    const response = await API.post("/analyze_youtube", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  }
};
