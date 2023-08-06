import React, { useState, useEffect } from 'react'
import { Button, Drawer, Modal } from "antd";
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

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
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
            
            <button type="primary" onClick={showModal}>
                Open Modal
            </button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>


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