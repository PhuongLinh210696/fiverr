import React, { useState } from 'react';
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { } from '../../Services/towService';
import { updateTow, getAllSer } from '../../Redux/slices/serSlice';
import { serService } from '../../Services/serService';

const FormEditServices = ({ id }) => {

    const dispatch = useDispatch();
    const { sers } = useSelector((state) => state.services);
    const initialSer = sers.find((ser) => ser.id === id);
    const formik = useFormik({
        initialValues: {
            id: initialSer.id,
            maCongViec: initialSer.maCongViec,
            maNguoiThue: initialSer.maNguoiThue,
            ngayThue: initialSer.ngayThue,
            hoanThanh: initialSer.hoanThanh
        },
        onSubmit: async (values, action) => {
            try {
                console.log(values);
                const res = await serService.updateService(values, id);
                console.log(res)
                window.location.reload();
            }
            catch (error) {
                console.log(error);
            }
        },
    });
    const { handleSubmit, handleChange, handleBlur } = formik;
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        id="id"
                        name="id"
                        type="text"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        onChange={handleChange}
                        value={formik.values.id}
                    />
                    <label
                        htmlFor="floating_email"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Id
                    </label>
                </div>

                <div className="relative z-0 w-full mb-6 group">
                    <input
                        id="maCongViec"
                        name="maCongViec"
                        type="text"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        onChange={handleChange}
                        value={formik.values.maCongViec}
                    />
                    <label
                        htmlFor="floating_email"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Job Code
                    </label>
                </div>

                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="text"
                        name="maNguoiThue"
                        id="maNguoiThue"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        onChange={handleChange}
                        value={formik.values.maNguoiThue}
                    />
                    {formik.errors.maNguoiThue && formik.touched ? (
                        <span className="text-red-500">{formik.errors.maNguoiThue}</span>
                    ) : (
                        ""
                    )}
                    <label
                        htmlFor="floating_email"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Tennant Code
                    </label>
                </div>

                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="text"
                        name="ngayThue"
                        id="ngayThue"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        onChange={handleChange}
                        value={formik.values.ngayThue}
                    />
                    {formik.errors.ngayThue && formik.touched ? (
                        <span className="text-red-500">{formik.errors.ngayThue}</span>
                    ) : (
                        ""
                    )}
                    <label
                        htmlFor="floating_email"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Date of Hire
                    </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <select
                        id="hoanThanh"
                        name="hoanThanh"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={formik.values.hoanThanh}
                    >
                        <option value="" label="Select an option" />
                        <option value="true" label="Complete" />
                        <option value="false" label="Incomplete" />
                    </select>
                    {formik.errors.hoanThanh && formik.touched ? (
                        <span className="text-red-500">{formik.errors.hoanThanh}</span>
                    ) : (
                        ""
                    )}
                    <label
                        htmlFor="floating_email"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Complete
                    </label>
                </div>
                <button type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
            </form>
        </div>
    )
}

export default FormEditServices