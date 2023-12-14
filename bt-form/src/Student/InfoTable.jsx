import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteStudent,
  onUpdatingStudent,
  searchStudent,
} from "./studentSlice";

export default function InfoTable() {
  let dispatch = useDispatch();
  let listStudent = useSelector((state) => state.studentSlice.listStudent);

  const renderTable = () => {
    return listStudent.map((student) => {
      return (
        <tr key={student.maSV}>
          <td>{student.maSV}</td>
          <td>{student.tenSV}</td>
          <td>{student.sdt}</td>
          <td>{student.email}</td>
          <th className="text-right">
            <button className="mr-5">
              <i
                className="fa fa-edit text-blue-600"
                onClick={() => {
                  handleUpdate(student);
                }}
              ></i>
            </button>
            <button>
              <i
                className="fa fa-trash text-red-600"
                onClick={() => {
                  handleDelete(student);
                }}
              ></i>
            </button>
          </th>
        </tr>
      );
    });
  };

  const handleDelete = (student) => {
    dispatch(deleteStudent(student));
  };

  const handleUpdate = (student) => {
    dispatch(onUpdatingStudent(student));
  };

  const handleSearch = (e) => {
    let { value, _ } = e.target;
    dispatch(searchStudent(value));
  };

  return (
    <div className="mt-5">
      <div className="text-right">
        <i className="fa fa-search"></i>
        <input
          type="text"
          className="border rounded-md ml-2"
          name="search"
          onChange={handleSearch}
        />
      </div>
      <table className="table w-full mt-5">
        <thead className="bg-slate-900 text-white text-md font-bold py-3 my-5 text-left">
          <tr>
            <th>Mã SV</th>
            <th>Họ tên</th>
            <th>Số điện thoại</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  );
}
