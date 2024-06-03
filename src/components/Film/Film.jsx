import React, { Fragment, useEffect, useState } from "react";
import { Button, Table, Input } from "antd";
import {
  CalendarOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { useGetPhimList } from "../../hooks/api";
import { NavLink, useNavigate } from "react-router-dom";
import { PATH } from "../../constant/config";
import { useDispatch } from "react-redux";
import { deletePhimActionsThunks } from "../../store/Phim";

const { Search } = Input;

export const Film = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, refetch } = useGetPhimList(searchTerm);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = (maPhim) => {
    dispatch(deletePhimActionsThunks.deletePhimThunks(maPhim));
    refetch();
  };

  const onSearch = (value) => {
    setSearchTerm(value);
    refetch();
  };

  const columns = [
    {
      title: "Mã phim",
      dataIndex: "maPhim",
      sorter: (a, b) => a.maPhim - b.maPhim,
      sortDirections: ["descend", "ascend"],
      width: "10%",
      render: (maPhim) => <span style={{ fontWeight: "bold" }}>{maPhim}</span>,
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      render: (text, film) => (
        <Fragment>
          <img src={film.hinhAnh} width={300} height={300} alt="" />
        </Fragment>
      ),
      width: "25%",
    },
    {
      title: "Tên phim",
      dataIndex: "tenPhim",
      sorter: (a, b) => a.tenPhim.localeCompare(b.tenPhim),
      sortDirections: ["descend", "ascend"],
      width: "25%",
      render: (tenPhim) => <span style={{ fontSize: "18px" }}>{tenPhim}</span>,
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",
      render: (text, film) => (
        <Fragment>
          <span style={{ fontStyle: "italic" }}>
            {film.moTa.length > 200
              ? `${film.moTa.substr(0, 200)}...`
              : film.moTa}
          </span>
        </Fragment>
      ),
      sortDirections: ["descend", "ascend"],
      width: "30%",
    },
    {
      title: "Hành động",
      dataIndex: "maPhim",
      render: (text, film) => (
        <Fragment>
          <NavLink
            key={1}
            className="mr-2 text-2xl"
            to={PATH.editfilm.replace(":maPhim", film.maPhim)}
          >
            <EditOutlined style={{ color: "blue" }} />
          </NavLink>
          <span
            style={{ cursor: "pointer" }}
            key={2}
            className="text-2xl"
            onClick={() => {
              if (window.confirm("Bạn có chắc muốn xóa phim " + film.tenPhim)) {
                handleDelete(film.maPhim);
                navigate(PATH.film);
              }
            }}
          >
            <DeleteOutlined style={{ color: "red" }} />
          </span>
          <NavLink
            key={6}
            className="ml-2 text-2xl"
            to={PATH.addlichchieu.replace(":maPhim", film.maPhim)}
          >
            <CalendarOutlined style={{ color: "green" }} />
          </NavLink>
        </Fragment>
      ),
      sortDirections: ["descend", "ascend"],
      width: "10%",
    },
  ];

  return (
    <div>
      <h3 className="text-4xl font-bold mb-10">Quản lý phim</h3>
      <Button className="mb-5" onClick={() => navigate(PATH.addfilm)}>
        Thêm phim
      </Button>
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
        onChange={(pagination, filters, sorter, extra) =>
          console.log("params", pagination, filters, sorter, extra)
        }
        showSorterTooltip={{
          title: "Sắp xếp",
        }}
        rowKey={"maPhim"}
      />
    </div>
  );
};
