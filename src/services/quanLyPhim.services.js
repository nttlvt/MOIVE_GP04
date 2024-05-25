import axios from "axios";

// Tạo một instance của axios với baseURL
const api = axios.create({
  baseURL: 'https://movienew.cybersoft.edu.vn/api',
  headers: {
    TokenCybersoft: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2MyIsIkhldEhhblN0cmluZyI6IjA5LzA5LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcyNTg0MDAwMDAwMCIsIm5iZiI6MTY5Njg3MDgwMCwiZXhwIjoxNzI1OTg3NjAwfQ.eka9nnrY4RvjgyAAdJH7uruVGj0DfXCfIM8V8HRpIMI'
  }
});

export const quanLyPhimServices = {
  getPhimList: async () => {
    try {
      const response = await api.get('/QuanLyPhim/LayDanhSachPhim?maNhom=GP04');
      return response;
    } catch (error) {
      console.error('Error fetching phim list:', error);
    }
  },

  getMovieById:  (query) => {
      return api.get(`/QuanLyRap/LayThongTinLichChieuPhim${query}`);
  },

  addPhim: async (formData) => {
    try {
      const response = await api.post(`/QuanLyPhim/ThemPhimUploadHinh`, formData);
      return response.data;
    } catch (error) {
      console.error('Error adding movie:', error);
      throw error;  
    }
  }
};
