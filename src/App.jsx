import { useState } from "react";
import "./App.css";
import { Route, Routes, createBrowserRouter } from "react-router-dom";
// import { PATH } from './router/config'
import { Checkout } from './components/Checkout/Checkout'
import { Login } from "./pages/Login";
import { MainLayout } from "./components/layouts/MainLayout";
import { Home } from "./pages/Home";
import { AuthLayout } from "./components/layouts/AuthLayout";
import { Register } from "./pages/Register";
import { PATH } from "./constant/config";
import { Detail } from "./components/Detail/Detail";
import { Admin } from "./components/layouts/Admin";
import { Film } from "./components/Film/Film";
import { User } from "./components/User/User";
import { AddNew } from "./components/Film/AddNew/AddNew";
import { Edit } from "./components/Film/Edit/Edit";
import { AddLichChieu } from "./components/Film/AddLichChieu/AddLichChieu";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />} history={history}>
          <Route path={PATH.home} element={<Home />} />
          <Route path={PATH.detail} element={<Detail />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path={PATH.dangnhap} element={<Login />}></Route>
          <Route path={PATH.dangky} element={<Register />}></Route>
        </Route>

        <Route path={"/checkout/:id"} element={<Checkout />}></Route>
        <Route element={<Admin />}>
          <Route path={PATH.user} element={<User />} />
          <Route path={PATH.film} element={<Film />} />
          <Route path={PATH.addfilm} element={<AddNew />} />
          <Route path={PATH.editfilm} element={<Edit />} />
          <Route path={PATH.addlichchieu} element={<AddLichChieu />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
