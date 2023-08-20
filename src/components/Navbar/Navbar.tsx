"use client";

import Icons from "../Icon/Icons";
import { Menu } from "antd";
import type { MenuProps } from "antd";
// import { useTranslations } from "next-intl";

import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineHome, AiOutlinePartition } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { GrContactInfo } from "react-icons/gr";

export function Navbar() {
  // const t: any = useTranslations();
  const [current, setCurrent] = useState("home");


  const items: MenuProps["items"] = [
    {
      // label: <Link href="/">{t("nav.home")}</Link>,
      label: <Link href="/">Trang chủ</Link>,
      key: "home",
      icon: <AiOutlineHome size={18} />,
    },
    {
      // label: <Link href={`/functionality`}>{t("nav.functionality")}</Link>,
      label: <Link href={`/functionality`}>Chức năng</Link>,

      key: "functionality",
      icon: <AiOutlinePartition size={18} />,
    },
    {
      // label: t("nav.teamMembers"),
      label: "Nhân viên",
      key: "teamMembers",
      icon: <FiUsers />,
      children: [
        {
          type: "group",
          label: "Item 1",
          children: [
            {
              label: "Option 1",
              key: "setting:1",
            },
            {
              label: "Option 2",
              key: "setting:2",
            },
          ],
        },
        {
          type: "group",
          label: "Item 2",
          children: [
            {
              label: "Option 3",
              key: "setting:3",
            },
            {
              label: "Option 4",
              key: "setting:4",
            },
          ],
        },
      ],
    },
    {
      // label: <Link href={`/contact`}>{t("nav.contact")}</Link>,
      label: <Link href={`/contact`}>Liên hệ</Link>,

      key: "contact",
      icon: <GrContactInfo size={18} />,
    },
  ];

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };
  return (
    <div className="flex items-center  gap-6 md:gap-10 w-full">
      <Link href="/">
        <div className=" items-center space-x-2 md:flex max-md:hidden">
          <Icons.logo className="h-6 w-6" />
          {/* <span className="hidden font-bold md:inline-block">{t("site.title")}</span> */}
          <span className="hidden font-bold md:inline-block">Zenix</span>
        </div>
      </Link>
      <div className="flex items-center gap-5 font-sans font-bold text-slate-600  dark:text-slate-100 max-md:hidden w-full">
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
          inlineCollapsed={false}
          className="w-full"
          style={{ borderBottom: "0px", background: "none" }}

        />
      </div>
    </div>
  );
}
