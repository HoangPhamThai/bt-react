import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStudent, updateStudent } from "./studentSlice";

export default function FormInput() {
  let dispatch = useDispatch();

  let emptyStudent = {
    maSV: "",
    tenSV: "",
    sdt: "",
    email: "",
  };

  let initStudent = useSelector((state) => state.studentSlice.updatingStudent);

  let [formValue, setFormValue] = useState(emptyStudent);

  let [validFormValue, setValidFormValue] = useState(emptyStudent);

  useEffect(() => {
    if (initStudent !== null) {
      setFormValue(initStudent);
    }
  }, [initStudent]);

  const handleChangeForm = (e) => {
    let { value, name } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const validateFieldNotNull = (input) => {
    if (input === "") {
      return {
        msg: "Field không được rỗng",
        isFieldValid: false,
      };
    }
    return {
      msg: "",
      isFieldValid: true,
    };
  };

  const validateForm = () => {
    let formValidateMsg = { ...validFormValue };
    let isValid = true;
    for (let prop in formValue) {
      let { msg, isFieldValid } = validateFieldNotNull(formValue[prop]);
      formValidateMsg[prop] = msg;
      isValid = isValid && isFieldValid;
    }
    setValidFormValue(formValidateMsg);
    return isValid;
  };

  const handleAddStudent = () => {
    if (validateForm()) {
      dispatch(addStudent(formValue));
    }
  };

  const handleUpdateStudent = () => {
    if (validateForm()) {
      dispatch(updateStudent(formValue));
    }
  };

  return (
    <div>
      <div className="bg-slate-900 text-white text-2xl font-bold py-5 my-5">
        <h1 className="pl-5">Thông tin sinh viên</h1>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div className="mb-3">
          <div>
            <label className="form-label ">Mã SV</label>
          </div>

          <input
            type="number"
            className="form-control border rounded-md w-full px-3 py-1"
            name="maSV"
            id="maSV"
            aria-describedby="small-maSV"
            onChange={handleChangeForm}
            value={formValue.maSV}
            disabled={initStudent !== null}
          />
          <h5 className="form-text text-red-600 text-sm">
            {validFormValue.maSV}
          </h5>
        </div>

        <div className="">
          <div>
            <label className="form-label ">Họ tên</label>
          </div>
          <input
            type="text"
            className="form-control border rounded-md w-full px-3 py-1"
            name="tenSV"
            id="tenSV"
            aria-describedby="small-tenSV"
            onChange={handleChangeForm}
            value={formValue.tenSV}
          />
          <h5 className="form-text text-red-600 text-sm">
            {validFormValue.tenSV}
          </h5>
        </div>

        <div className="">
          <div>
            <label className="form-label ">Số điện thoại</label>
          </div>

          <input
            type="number"
            className="form-control border rounded-md w-full px-3 py-1"
            name="sdt"
            id="sdt"
            aria-describedby="small-sdt"
            onChange={handleChangeForm}
            value={formValue.sdt}
          />
          <h5 className="form-text text-red-600 text-sm">
            {validFormValue.sdt}
          </h5>
        </div>

        <div className="">
          <div>
            <label className="form-label ">Email</label>
          </div>
          <input
            type="text"
            className="form-control border rounded-md w-full px-3 py-1"
            name="email"
            id="email"
            aria-describedby="small-email"
            onChange={handleChangeForm}
            value={formValue.email}
          />
          <h5 className="form-text text-red-600 text-sm">
            {validFormValue.email}
          </h5>
        </div>
      </div>

      <div className="mt-5">
        {!initStudent && (
          <button
            className="mr-3 border rounded-md px-3 py-2 bg-green-600 text-white"
            onClick={handleAddStudent}
          >
            Thêm sinh viên
          </button>
        )}

        {initStudent && (
          <button
            className="mr-3 border rounded-md px-3 py-2 bg-green-600 text-white"
            onClick={handleUpdateStudent}
          >
            Cập nhật thông tin
          </button>
        )}
      </div>
    </div>
  );
}
