import React, { useState } from 'react';
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { towService } from '../../Services/towService';
import { updateTow, getAllTow } from '../../Redux/slices/towSlice';

const FormEditToW = ({ id }) => {
    console.log(id);
    const dispatch = useDispatch();
    // const [updatedName, setUpdatedName] = useState(typeOfWorks.name);
    const { tows } = useSelector((state) => state.typeOfWorks);
    const initialToW = tows.find((tow) => tow.id === id);

    const formik = useFormik({
        initialValues: {
            id: initialToW.id,
            tenLoaiCongViec: initialToW.tenLoaiCongViec,
        },
        onSubmit: async (values, action) => {
            try {
                const updatedToW = { ...initialToW, tenLoaiCongViec: values.tenLoaiCongViec };
                //console.log(initialToW);
                const res = await towService.updateTow(values, id);
                //await dispatch(updateTow({id,values}));
                console.log(values);
                // const res = await towService.addTow(values);
                dispatch(getAllTow());
                //Reset Form
                window.location.reload();
                //console.log(res);
            } catch (error) {
                console.log(error);
            }
        },
        validationSchema: yup.object({
            tenLoaiCongViec: yup.string().required("Nhớ chú ý nhập dữ liệu nhé"),
        }),
    });
    const { handleSubmit, handleChange, handleBlur } = formik;



    return (

        <div>
            <form onSubmit={handleSubmit}>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="text"
                        name="id"
                        id="id"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        onChange={handleChange}
                        value={formik.values.id}
                        disabled
                    />
                    {formik.errors.tenLoaiCongViec && formik.touched ? (
                        <span className="text-red-500">{formik.errors.tenLoaiCongViec}</span>
                    ) : (
                        ""
                    )}
                    <label
                        htmlFor="floating_email"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Id
                    </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="text"
                        name="tenLoaiCongViec"
                        id="tenLoaiCongViec"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        onChange={handleChange}
                        value={formik.values.tenLoaiCongViec}
                    />
                    {formik.errors.tenLoaiCongViec && formik.touched ? (
                        <span className="text-red-500">{formik.errors.tenLoaiCongViec}</span>
                    ) : (
                        ""
                    )}
                    <label
                        htmlFor="floating_email"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Name Type of Works
                    </label>
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Save
                </button>
            </form>
        </div>
    )
}

export default FormEditToW