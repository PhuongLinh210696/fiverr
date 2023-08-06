import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Space, Table, Tag } from 'antd';
import { Button, message, Popconfirm, Drawer } from "antd";
import { userService } from '../../Services/userService';
import { getAllUsers } from '../../Redux/slices/userSlice';
import FormEditUsers from '../FormEditUsers/FormEditUsers';

const TableUsers = () => {
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.users);
    const [selectedId, setSelectedId] = useState(null);
    //Drawer AntDesign
    const [open, setOpen] = useState(false);
    const showDrawer = (id) => {
        setSelectedId(id);
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const confirm = (id) => {
        console.log(id);
        userService.deleteTowId(id)
            .then((res) => {
                message.success("Success!!!");
                dispatch(getAllUsers());
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
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Phone",
            dataIndex: "phone",
            key: "phone",
        },
        {
          title: "Role",
          dataIndex: "role",
          key: "role",
          render: (text, record, index) => {
            //text chứa goá trị
            console.log(text);
            //record chứa các phần tử trong mảng
            console.log(record);
            //index là vị trí của phần tử
            console.log(index);
            return (
              <Tag color={text == "ADMIN" ? "magenta" : "cyan"}>
                {text == "ADMIN" ? "Admin" : "User"}
              </Tag>
            );
          },
        },
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
                        {selectedId !== null && <FormEditUsers id={selectedId} />}
                    </Drawer>
                </Space>
            ),
        },
    ];
  return (
    <Table columns={columns} dataSource={users} />
  )
}

export default TableUsers