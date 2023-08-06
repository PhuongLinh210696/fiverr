import React, { useState, useEffect } from 'react';
import { towService } from '../../Services/towService';
import { Space, Table, Tag } from 'antd';
import { Button, message, Popconfirm, Drawer } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import { getAllSer } from '../../Redux/slices/serSlice';
import FormEditToW from '../FormEditToW/FormEditToW';
import { serService } from '../../Services/serService';
import FormEditServices from '../FormEditServices/FormEditServices';

const TableServices = () => {
    const dispatch = useDispatch();
    const { sers } = useSelector((state) => state.services);
    const [selectedId, setSelectedId] = useState(null);
    //Drawer AntDesign
    const [open, setOpen] = useState(false);
    const showDrawer = (id) => {
        console.log(id);
        setSelectedId(id);
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const confirm = (id) => {
        console.log(id);
        serService.deleteServiceId(id)
            .then((res) => {
                message.success("Success!!!");
                dispatch(getAllSer());
            })
            .catch((err) => {
                console.log(err)
                message.error("Unsuccessful!!!");
            })
    };
    const cancel = (e) => {
        console.log(e);
        message.error("Click on No");
    };
    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
            //custom lai cot hien thi
            render: (text) => <a>{text}</a>,
        },
        {
            title: "Jobs Code",
            dataIndex: "maCongViec",
            key: "maCongViec",
        },
        {
            title: "Tenant Code",
            dataIndex: "maNguoiThue",
            key: "maNguoiThue",
        },
        {
            title: "Date of Hire",
            dataIndex: "ngayThue",
            key: "ngayThue",
        },
        {
            title: "Complete",
            dataIndex: "hoanThanh",
            key: "hoanThanh",
            render: (text,record,index) => { 
                return(
                    <Tag color={text == false ? "magenta" : "cyan"}>
                        {text == false ? "Incomplete" : "Complete"}
                    </Tag>
                )
             }
        },
        // {
        //   title: "Loại Người Dùng",
        //   dataIndex: "maLoaiNguoiDung",
        //   key: "maLoaiNguoiDung",
        //   render: (text, record, index) => {
        //     //text chứa goá trị
        //     console.log(text);
        //     //record chứa các phần tử trong mảng
        //     console.log(record);
        //     //index là vị trí của phần tử
        //     console.log(index);
        //     return (
        //       <Tag color={text == "QuanTri" ? "magenta" : "cyan"}>
        //         {text == "QuanTri" ? "Quản trị" : "Khách hàng"}
        //       </Tag>
        //     );
        //   },
        // },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <Space size="middle">
                    <Popconfirm
                        title="Delete the task"
                        description="Are you sure to delete this task?"
                        onConfirm={() => {
                            confirm(record.id)
                        }}
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                    >
                        <button className="py-2 px-5 bg-red-500 text-white rounded-lg hover:bg-red-700 duration-500">
                            Delete
                        </button>
                    </Popconfirm>
                    <button className="py-2 px-5 bg-yellow-500 text-white rounded-lg hover:bg-yellow-700 duration-500"
                        onClick={() => showDrawer(record.id)}>
                        Edit
                    </button>
                    <Drawer
                        title="Edit Type of Works"
                        placement="right"
                        onClose={onClose}
                        open={open}
                        size="large"
                    >
                        {selectedId !== null && <FormEditServices id={selectedId} />}
                    </Drawer>
                </Space>
            ),
        },
    ];
    return (
        <Table columns={columns} dataSource={sers} />
    )
}

export default TableServices