import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from "formik";
import { Input, message } from "antd";
import * as yup from "yup";
import { authSer } from "../../Services/authService";
import { saveLocal } from "../../Utils/localStore";

const FormSignInAdmin = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
      authSer
        .signin(values)
        .then((res) => {
          console.log(res);
          saveLocal('user', res.data.content)
          messageApi.success("Đăng nhập thành công!!!");
          setTimeout(() => {
            navigate("/admin");
          }, [1000]);
        })
        .catch((err) => {
          console.log(err);
          messageApi.success("Đăng nhập thất bại!!!");
        });
    },
    validationSchema: yup.object({
      password: yup
        .string()
        .required("Nhớ nhập mật khẩu")
        .min(3, "Mật khẩu ít nhất 3 ký tự"),
      email: yup
        .string()
        .required("Nhớ chú ý nhập dữ liệu nhé")
        .email("Vui lòng nhập đúng định dạng email!!!"),
    }),
  });

  const { handleSubmit, handleChange, handleBlur } = formik;
  return (
    <div>
      {contextHolder}
      <section className="bg-green-700 dark:bg-green-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-white dark:text-white">
          <span
              className= "self-center text-2xl font-bold whitespace-nowrap text-white"
            >
              Fiverr
            </span>
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-green-500">
              .
            </span>
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                SignIn
              </h1>
              <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <Input
                    status={formik.errors.email && formik.touched ? "error" : ""}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={formik.values.email}
                  />
                  {formik.errors.email && formik.touched ? (
                    <span className="text-red-500">{formik.errors.email}</span>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <Input
                    status={formik.errors.password && formik.touched ? "error" : ""}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={formik.values.password}
                  />
                  {formik.errors.password && formik.touched ? (
                    <span className="text-red-500">{formik.errors.password}</span>
                  ) : (
                    ""
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-green-700 hover:bg-green-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* <h3 className="mb-4 text-xl px-5 pt-5 font-medium text-gray-900 dark:text-white">
        SignIn
      </h3>
      <form className="space-y-5 px-5" action="#" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <Input
            status={formik.errors.email && formik.touched ? "error" : ""}
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="name@company.com"
            onChange={handleChange}
            onBlur={handleBlur}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched ? (
            <span className="text-red-500">{formik.errors.email}</span>
          ) : (
            ""
          )}
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <Input
            status={formik.errors.password && formik.touched ? "error" : ""}
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            onChange={handleChange}
            onBlur={handleBlur}
            value={formik.values.password}
          />
          {formik.errors.password && formik.touched ? (
            <span className="text-red-500">{formik.errors.password}</span>
          ) : (
            ""
          )}
        </div>

        <button
          type="submit"
          className="w-full text-white bg-green-700 hover:bg-green-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Sign In
        </button>
      </form> */}
    </div>
  )
}

export default FormSignInAdmin