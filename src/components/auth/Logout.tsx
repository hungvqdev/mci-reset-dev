"use client"

import React from 'react';
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation'
import { Button, Modal } from 'antd';
import { User } from '@/types/userTypes'
import { setIsAuth } from '@/features/authSlice';
import { useDispatch } from 'react-redux';

interface LogoutProps {
    isLogout: boolean;
    setIsLogout: React.Dispatch<React.SetStateAction<boolean>>;

}

const Logout: React.FC<LogoutProps> = ({ isLogout, setIsLogout }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const handleOk = () => {
        deleteCookie("userData");
        setIsLogout(false);
        router.push('/');
        dispatch(setIsAuth(false));

    };
    const handleCancel = () => {
        setIsLogout(false);
    };

    return (
        <Modal title="Đăng xuất" open={isLogout} footer={null}>
            <p className='text-red-500 italic font-medium'>Bạn có chắc chắn muốn đăng xuất?</p>
            <div className='flex justify-end mt-2 gap-2'><Button type="primary" danger onClick={handleOk}>Xác nhận</Button> <Button onClick={handleCancel}>Hủy</Button></div>
        </Modal>

    );
};

export default Logout;