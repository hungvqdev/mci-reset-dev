"use client"
import Link from 'next/link';
import Icons from '../Icon/Icons';
import LocaleSwitcher from '../Multilingual/LocaleSwitcher';
import { Navbar } from '../Navbar/Navbar';
import ThemeToggle from '../DarkMode/ThemeToggle';
import Sidebar from '../Sidebar/HomeSidebar';
import { useEffect, useState } from 'react';
import { Button } from 'antd';
import { PiList } from 'react-icons/pi';
import Login from '@/components/auth/Login'
import { getCookie } from 'cookies-next';
import UserDropdown from '../auth/UserDropdown'
import { User } from "@/types/userTypes"
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export function Header() {
  const [open, setOpen] = useState(false)
  const [userData, setUserData] = useState<User | null>(null)
  const cookieData = getCookie('userData')
  const isAuth = useSelector((state: RootState) => state.auth)


  useEffect(() => {
    if (cookieData) {
      setUserData(JSON.parse(cookieData as string))
    }
  }, [cookieData])

  return (
    <header className="sticky top-0 z-40 w-full border-b border-b-slate-200 bg-white dark:border-b-slate-700 dark:bg-slate-900">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <Button className='md:hidden' type='text' icon={<PiList size={23} />} onClick={() => setOpen(true)} />
        <Navbar />
        <div className="flex flex-1 items-center justify-end space-x-4 ">
          <nav className="flex items-center space-x-1 gap-2">
            {/* <LocaleSwitcher /> */}
            <ThemeToggle />


            {userData && isAuth ? <UserDropdown firstName={userData?.first_name} /> : <Login />}
          </nav>
        </div>
      </div>
      <Sidebar open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
