"use client";

import { AvailableFunctionsResponse, DetailFunction } from "@/types/apiTypes";
import { Button, FloatButton, Menu } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaRegGrinTongue, FaRegGrinTongueSquint } from "react-icons/fa";
import ThemeToggle from "../DarkMode/ThemeToggle";
import { FiLogOut, FiUser } from "react-icons/fi";
import Image from "next/image";
import { RiAdminLine } from "react-icons/ri";
import Icons from "../Icon/Icons";
import Logout from "../auth/Logout";
import Link from "next/link";

interface SidebarProps {
  data: AvailableFunctionsResponse[];
}

const Sidebar: React.FC<SidebarProps> = ({ data }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isLogout, setIsLogout] = useState(false);
  const router = useRouter();
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  }
  const handleClick = (link: string) => {
    router.push(`/staff${link}`);
  };

  return (
    <div className={`${collapsed ? "w-20" : "w-64"} transition duration-700`}>

      <Menu mode="inline" inlineCollapsed={collapsed} className="h-screen flex flex-col justify-start">
        <Link href="/" className="w-full h-[70px] flex items-center px-6 drop-shadow-xl border-b  shadow-sm"><Image src='/favicon.ico' alt="logo" width={50} height={50} /> <div className={`${collapsed && "hidden"} text-2xl font-semibold mx-4`}>Zenix</div></Link>
        {data &&
          data.map((mainItem, idx) => (
            <Menu.SubMenu key={idx} title={mainItem.title} icon={<FaRegGrinTongueSquint />}>
              {mainItem.detail_function_list.map((subItem: DetailFunction) => (
                <Menu.Item key={subItem.id} onClick={() => handleClick(subItem.link)}>
                  {subItem.title}
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          ))}
        <div className="flex-1"></div>
        <Menu.Item icon={<RiAdminLine />} ><Link href="/staff/admin">Administrator</Link></Menu.Item>
        <Menu.Item icon={<FiUser />} >Thông tin cá nhân</Menu.Item>
        <Menu.Item icon={<FiLogOut />} className="mb-3" onClick={() => setIsLogout(true)}>Đăng xuất</Menu.Item>
        <Logout isLogout={isLogout} setIsLogout={setIsLogout} />
      </Menu>

      <FloatButton.Group shape="square" style={{ right: 24 }}>

        <FloatButton icon={<ThemeToggle />} />
        <FloatButton icon={<div>{collapsed ? <FaArrowRight /> : <FaArrowLeft />}</div>} onClick={toggleCollapsed} />

      </FloatButton.Group>
    </div>

  );
};

export default Sidebar;
