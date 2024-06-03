import axios from "axios";

// Tạo một instance của axios với baseURL
const api = axios.create({
  baseURL: 'https://movienew.cybersoft.edu.vn/api',
  headers: {
    Authorization: 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4xMTIzIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoibG9xYXZAbWFpbGluYXRvci5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsiUXVhblRyaSIsImxvcWF2QG1haWxpbmF0b3IuY29tIiwiR1AwMSJdLCJuYmYiOjE3MTY3OTA1MzMsImV4cCI6MTcxNjc5NDEzM30.J7HH1zPuSxp3KOvZA9KwGOu0LCH62cpkgmgwBtHrLYk",  
    TokenCybersoft: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2MyIsIkhldEhhblN0cmluZyI6IjA5LzA5LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcyNTg0MDAwMDAwMCIsIm5iZiI6MTY5Njg3MDgwMCwiZXhwIjoxNzI1OTg3NjAwfQ.eka9nnrY4RvjgyAAdJH7uruVGj0DfXCfIM8V8HRpIMI'

  }
});

export const quanLyPhimServices = {
  getPhimList: async (tenPhim = '') => {
    try {
      if (tenPhim.trim()!='') {
        const response = await api.get(`/QuanLyPhim/LayDanhSachPhim?maNhom=GP03&tenPhim=${tenPhim}`)
        return response;
      }
      const response = await api.get('/QuanLyPhim/LayDanhSachPhim?maNhom=GP03');
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
  },

  updatePhim: async (formData) => {
    try {
      const response = await api.post(`/QuanLyPhim/CapNhatPhimUpload`, formData);
      console.log(response.data)
    } catch (error) {
      console.error('Error adding movie:', error);
      throw error;  
    }
  },

  deletePhim : async (maPhim) => {
    return api.delete(`/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`)
  },

  getInfoMovie: (maPhim) => {
    return api.get(`/QuanLyPhim/LayThongTinPhim${maPhim}`)
  }
};
