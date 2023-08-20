"use client";

import { Drawer, Dropdown, Button, Menu } from "antd";
import type { MenuProps } from "antd";
// import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineHome, AiOutlinePartition } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { GrContactInfo } from "react-icons/gr";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  // const t: any = useTranslations();

  const items: MenuItem[] = [
    // getItem(<Link href="/">{t("nav.home")}</Link>, "home", <AiOutlineHome />),
    // getItem(<Link href="/functionality">{t("nav.functionality")}</Link>, "functionality", <AiOutlinePartition />),
    getItem(<Link href="/">Trang chủ</Link>, "home", <AiOutlineHome />),
    getItem(<Link href="/functionality">Chức năng</Link>, "functionality", <AiOutlinePartition />),



    // getItem(t("nav.teamMembers"), "teamMembers", <FiUsers />, [
    //   getItem("Option 5", "5"),
    //   getItem("Option 6", "6"),
    //   getItem("Option 7", "7"),
    //   getItem("Option 8", "8"),
    // ]),
    getItem("Nhân viên", "teamMembers", <FiUsers />, [
      getItem("Option 5", "5"),
      getItem("Option 6", "6"),
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
    ]),
    // getItem(<Link href="/contact">{t("nav.contact")}</Link>, "contact", <GrContactInfo />),
    getItem(<Link href="/contact">Liên hệ</Link>, "contact", <GrContactInfo />),

  ];
  return (
    <Drawer title="MCI" placement="left" onClose={onClose} open={open} bodyStyle={{ padding: "0px" }}>
      <Menu
        // defaultSelectedKeys={['1']}
        mode="inline"
        items={items}
      />
    </Drawer>
  );
}

export default Sidebar;
