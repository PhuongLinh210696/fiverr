import React, { useState, useEffect } from 'react'
import { Button, Drawer } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import TableTypeOfWorks from '../../Components/TableTypeOfWorks/TableTypeOfWorks';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTow } from '../../Redux/slices/towSlice';
import FormAddToW from '../../Components/FormAddToW/FormAddToW';

const TypeOfWorks = () => {
    const dispatch = useDispatch();
    const { tows } = useSelector((state) => state.typeOfWorks)
    useEffect(() => {
        dispatch(getAllTow());
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
            <button
                className="bg-green-600 text-white py-2 px-5 rounded-lg mb-5"
                onClick={showDrawer}
                icon={<PlusOutlined />}
            >
                New TypeOfWorks
            </button>
            <Drawer
                title="Add Type of Works"
                placement="right"
                onClose={onClose}
                open={open}
                size="large"
            >
                <FormAddToW />
            </Drawer>
            <TableTypeOfWorks />
        </div>
    )
}

export default TypeOfWorks