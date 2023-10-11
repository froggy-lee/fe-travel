"use client";
import { loginRequest } from "@/api/auth/request";
import { useFormik } from "formik";
import * as Yup from "yup";
import * as S from "./styles";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import LoadingPage from "@/components/Loading/LoadingPage";
import { useRouter } from "next/navigation";

interface User {
  userName: string;
  password: string;
}

function LoginPage() {
  const router = useRouter();

  const { mutate: loginAction, isLoading } = useMutation({
    mutationFn: (data: User) => loginRequest(data),
    onSuccess: (data) => {
      console.log(data);
      router.push("/");
    },
    onError: (data) => {
      console.log(data);
    },
  });

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .required("Không được để trống")
        .min(3, "Ít nhất 4 kí tự")
        .max(20, "Tối đa 20 kí tự"),
      password: Yup.string()
        .required("Không được để trống")
        .min(3, "Ít nhất 4 kí tự")
        .max(20, "Tối đa 20 kí tự"),
    }),
    onSubmit: (values) => handleLogin(values),
  });

  const handleLogin = async (value: User) => {
    // await loginRequest(value);
    loginAction(value);
  };

  const { values, errors, handleChange } = formik;

  return (
    <S.Wrapper>
      {isLoading && <LoadingPage />}
      <S.FormWrapper className="text-center">
        <S.Title className="mb-5">Login</S.Title>
        <form onSubmit={formik.handleSubmit}>
          <div className="text-start">
            <label htmlFor="userName" className="mb-1">
              User Name
            </label>
            <input
              type="text"
              name="userName"
              id="userName"
              value={values.userName}
              onChange={handleChange}
            />
            <S.Erros>{errors.userName}</S.Erros>
          </div>
          <div className="text-start mt-3">
            <label htmlFor="password" className="mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={values.password}
              onChange={handleChange}
            />
            <S.Erros>{errors.password}</S.Erros>
          </div>
          <div>
            <button type="submit" className="p-2 mt-4 w-100">
              Login
            </button>
            <div className="mt-1">
              <Link href={"/register"}>Register</Link>
            </div>
            <div className="mt-1">
              <Link href={"/"}>Home</Link>
            </div>
          </div>
        </form>
      </S.FormWrapper>
    </S.Wrapper>
  );
}

export default LoginPage;
