"use client";
import React, { useState } from "react";
import { registerRequest } from "@/api/auth/request";
import Link from "next/link";
import * as S from "./styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import LoadingPage from "@/components/Loading/LoadingPage";

interface IUser {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
}

function RegisterPage() {
  const router = useRouter();

  const { mutate: RegisterAction, isLoading } = useMutation({
    mutationFn: (data: IUser) => registerRequest(data),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (data) => {
      console.log(data);
    },
  });

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .required("Không được để trống")
        .min(3, "Ít nhất 4 kí tự")
        .max(20, "Tối đa 20 kí tự"),
      email: Yup.string()
        .email("Email không đúng định dạng")
        .required("Không được để trống"),
      password: Yup.string()
        .required("Không được để trống")
        .min(3, "Ít nhất 4 kí tự")
        .max(20, "Tối đa 20 kí tự"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), ""], `Password không trùng khớp`)
        .required("Không được để trống"),
      phone: Yup.string()
        .min(10, "Số điện thoại không đúng")
        .max(15, "Số điện thoại không đúng")
        .required("Không được để trống"),
    }),
    onSubmit: (values) => handleRegister(values),
  });

  const handleRegister = async (value: IUser) => {
    console.log(value);
    //registerRequest(value);
    RegisterAction(value);
  };

  const { values, errors, handleChange } = formik;

  return (
    <S.WrapperRegister className="text-center">
      {isLoading && <LoadingPage />}
      <S.WrapperFrom>
        <S.TitleRegister>Register</S.TitleRegister>
        <div>
          <form onSubmit={formik.handleSubmit} className="row">
            <div className="col-12 col-md-6">
              <div className="text-start">
                <label htmlFor="userName">User Name</label>
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  value={values.userName}
                  onChange={handleChange}
                />
                <S.RegisterErros>{errors.userName}</S.RegisterErros>
              </div>
              <div className="text-start">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                />
                <S.RegisterErros>{errors.password}</S.RegisterErros>
              </div>
              <div className="text-start">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                />
                <S.RegisterErros>{errors.confirmPassword}</S.RegisterErros>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="text-start">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                />
                <S.RegisterErros>{errors.email}</S.RegisterErros>
              </div>
              <div className="text-start">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  value={values.phone}
                  onChange={handleChange}
                />
                <S.RegisterErros>{errors.phone}</S.RegisterErros>
              </div>
            </div>
            <div className="col-12">
              <button type="submit" className="p-2 mt-4 w-100">
                Register
              </button>
            </div>
          </form>
        </div>
        <div className="mt-1">
          <Link href={"/login"}>Go to Login</Link>
        </div>
        <div className="mt-1">
          <Link href={"/"}>Home</Link>
        </div>
      </S.WrapperFrom>
    </S.WrapperRegister>
  );
}

export default RegisterPage;
