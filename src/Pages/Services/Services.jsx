import React, { useState, useEffect } from 'react'
import { Button, Drawer } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from 'react-redux';
import TableServices from '../../Components/TableServices/TableServices';
import { getAllSer } from '../../Redux/slices/serSlice';

const Services = () => {
    const dispatch = useDispatch();
    const { sers } = useSelector((state) => state.services)
    useEffect(() => {
        dispatch(getAllSer());
    }, []);



    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <div>
            {/* <button
                className="bg-green-600 text-white py-2 px-5 rounded-lg mb-5"
                onClick={showDrawer}
                icon={<PlusOutlined />}
            >
                New TypeOfWorks
            </button> */}
            <Drawer
                title="Add Type of Works"
                placement="right"
                onClose={onClose}
                open={open}
                size="large"
            >
                {/* <FormAddToW /> */}
            </Drawer>
            <TableServices />
        </div>
    )
}

export default Services