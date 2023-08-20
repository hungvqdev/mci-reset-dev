import authApi from "@/api/authApi";
import { Button, Modal, Checkbox, Form, Input } from "antd";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setIsAuth } from '@/features/authSlice';


type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const Login = () => {
  const [modal1Open, setModal1Open] = useState(false);
  const [isError, setIsError] = useState<boolean>(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const onFinish = async (values: any) => {
    try {
      const result = await authApi.loginUser({ username: values.username, password: values.password });

      const dataToStore = {
        id: result.data.user.id,
        company: result.data.user.user_profile.company,
        username: result.data.user.username,
        first_name: result.data.user.first_name,
        last_name: result.data.user.last_name,
        email: result.data.user.email,
      };

      localStorage.setItem("userInfo", JSON.stringify(dataToStore));
      setCookie("userData", JSON.stringify(dataToStore));
      dispatch(setIsAuth(true));
      router.push(`/staff/`);
      setModal1Open(false);
    } catch (err) {
      console.error("Failed to login", err);
      setIsError(true);
    }
  };

  const handleCancel = () => {
    setModal1Open(false);
    setIsError(false);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Button type="primary" onClick={() => setModal1Open(true)}>
        Đăng nhập
      </Button>
      <Modal title="Đăng nhập" style={{ top: 10 }} open={modal1Open} onOk={() => setModal1Open(false)} footer={null}>
        <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 12 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          {/* <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item> */}

          {/* {isError && <span className="text-red-500">tài khoản hoặc mật khẩu không đúng</span>} */}

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Xác nhận
            </Button>
            <Button onClick={handleCancel}>Hủy</Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Login;
