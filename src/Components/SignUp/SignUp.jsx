import React from "react";
import { useFormik } from "formik";
import { Input, message } from "antd";
import * as yup from "yup";
import {authSer} from "../../Services/authService"
const SignUp = () => {
    const [messageApi, contextHolder] = message.useMessage();
  const formik = useFormik({
    initialValues: {
      password: "",
      name: "",
      email: "",
      phone: "",
    },
    onSubmit: (values) => {
      console.log(values);
        authSer.signup(values).then((res) => { 
            console.log(res);
            messageApi.success("Đăng ký thành công!!!");
            setTimeout(() => {
                // navigate("/login");
                window.location.reload();
              }, [1000]);
         }).catch((err) => { console.log(err) })
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
        phone: yup
        .string()
        .required("Vui lòng nhập đúng số điện thoại!!!")
        .matches(
          /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
          "Vui lòng nhập đúng số điện thoại!!!"
        ),
      name: yup.string().required("Họ tên không được để trống!!!"),
    }),
  });

  const { handleSubmit, handleChange, handleBlur } = formik;
  return (
    <div>
        {contextHolder}
      <h3 className="mb-4 text-xl px-5 pt-5 font-medium text-gray-900 dark:text-white">
        Create a new account
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
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Fullname
          </label>
          <Input
          status={formik.errors.name && formik.touched ? "error" : ""}
            type="text"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="fullname"
            onChange={handleChange}
            onBlur={handleBlur}
            value={formik.values.name}
          />
          {formik.errors.name && formik.touched ? (
            <span className="text-red-500">{formik.errors.name}</span>
          ) : (
            ""
          )}
        </div>
        
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Phone
          </label>
          <input
          status={formik.errors.phone && formik.touched ? "error" : ""}
            type="text"
            name="phone"
            id="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="Phone"
            onChange={handleChange}
            onBlur={handleBlur}
            value={formik.values.phone}
          />
          {formik.errors.phone && formik.touched ? (
            <span className="text-red-500">{formik.errors.phone}</span>
          ) : (
            ""
          )}
        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default SignUp;
