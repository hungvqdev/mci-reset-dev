import React, { useState } from 'react';
import { Dropdown, Space, Avatar } from 'antd';
import type { MenuProps } from 'antd';
import Link from 'next/link';
import Logout from './Logout';


const UserDropdown = ({ firstName }: { firstName: string }) => {
    const [isLogout, setIsLogout] = useState(false);

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <Link href="/staff">
                    Đi tới ứng dụng
                </Link>
            ),
        },
        {
            key: '2',
            label: (
                <div onClick={() => setIsLogout(true)}>
                    Đăng xuất
                </div>
            ),
        }
    ];
    return (
        <>
            <Dropdown
                menu={{ items }}
            >
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <div className='whitespace-nowrap inline-block text-right'>Xin chào, <span>{firstName}</span> </div>
                        <Avatar style={{ verticalAlign: 'middle' }} size="large" >
                            {firstName[0]}
                        </Avatar>
                    </Space>
                </a>
            </Dropdown>
            <Logout setIsLogout={setIsLogout} isLogout={isLogout} />
        </>

    );
};

export default UserDropdown;