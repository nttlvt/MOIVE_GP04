import React, { Fragment, useEffect } from "react";
import { Button, Table } from "antd";
import { AudioOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import { useGetPhimList } from "../../hooks/api";
import { object } from "zod";
import { NavLink, useNavigate } from "react-router-dom";
import { PATH } from "../../constant/config";

const { Search } = Input;
const columns = [
  {
    title: "Mã phim",
    dataIndex: "maPhim",
    // value: (text, object) => {return <span>{text}</span>},
    sorter: (a, b) => a.maPhim - b.maPhim,
    sortDirections: ["descend", 'ascend'],
    width: '10%'
  },
  {
    title: "Hình ảnh",
    dataIndex: "hinhAnh",
    render: (text, film) => (
      <Fragment>
        <img src={film.hinhAnh} width={300} height={300} alt="" />
      </Fragment>
    ),
    width: '30%'
  },
  {
    title: "Tên phim",
    dataIndex: "tenPhim",
    sorter: (a, b) => {
      let moTaA = a.moTa.toLowerCase().trim()
      let moTaB = b.moTa.toLowerCase().trim()
      if (moTaA < moTaB)
        return 1
      return -1
    },
    sortDirections: ["descend", 'ascend'],
    width: '20%'
  },

  {
    title: "Mô tả",
    dataIndex: "moTa",
    sorter: (a, b) => {
      let tenPhimA = a.tenPhim.toLowerCase().trim()
      let tenPhimB = b.tenPhim.toLowerCase().trim()
      if (tenPhimA < tenPhimB)
        return 1
      return -1
    },
    render: (text, film) => (
      <Fragment>
        {film.moTa.length>200 ? film.moTa.substr(0,200)+ '...': film.moTa}
      </Fragment>
    ),
    sortDirections: ["descend", 'ascend'],
    width: '30%'
  },

  {
    title: "Hành động",
    dataIndex: "hanhDong",
    render: (text, film) => (
      <Fragment>
        <NavLink key={1} className='mr-2 text-2xl' to={PATH.editfilm.replace(':maPhim', film.maPhim)}><EditOutlined style={{color: 'blue'}}/></NavLink>
        <NavLink key={2} className='text-2xl' to={PATH.home}><DeleteOutlined style={{color: 'red'}}/></NavLink>
      </Fragment>
    ),
    sortDirections: ["descend", 'ascend'],
    width: '10%'
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const onSearch = (value, _e, info) => console.log(info?.source, value);

export const Film = () => {
  const { data } = useGetPhimList();
  // useEffect(() => {
  //   console.log(data)
  // },data)
  const navigate = useNavigate()
  return (
    <div className="">
      <h3 className="text-4xl font-bold mb-10">Quản lý phim</h3>
      <Button className="mb-5" onClick={() => navigate(PATH.addfilm)}>Thêm phim</Button>
      <Search
        placeholder="Tìm kiếm phim"
        className="mb-10"
        onSearch={onSearch}
        enterButton
        size="large"
      />
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        showSorterTooltip={{
          target: "sorter-icon",
        }}
      />
    </div>
  );
};
