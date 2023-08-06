import React, { useState, useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { Button, Drawer } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import TableUsers from '../../Components/TableUsers/TableUsers';
import FormAddUsers from '../../Components/FormAddUsers/FormAddUsers';
import { getAllUsers } from '../../Redux/slices/userSlice';

const Users = () => {
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.users)
    useEffect(() => {
        dispatch(getAllUsers());
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
                New User
            </button>
            <Drawer
                title="Add Users"
                placement="right"
                onClose={onClose}
                open={open}
                size="large"
            >
                <FormAddUsers/>
            </Drawer>
            <TableUsers/>
        </div>
    )
}

export default Users