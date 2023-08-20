'use client';
import { Avatar, Dropdown } from 'antd';
import { usePathname } from 'next-intl/client';
import Link from 'next-intl/link';
import { languages } from '@/locale';
import { useState } from 'react'
import Icons from '../Icon/Icons';


export default function LocaleSwitcher() {
  const pathname = usePathname();

  return (
    <Dropdown
      menu={{
        items: Object.entries(languages).map(([lang, setting]) => ({
          key: lang,
          label: (
            <Link href={pathname ?? '/'} locale={lang} >
              <Avatar src={`/images/${setting.flag}-logo.png`} size={23} />&nbsp; <span className='font-bold'>{setting.name}</span>
            </Link>
          ),
        })),
      }}
    >
      <div className="btn" role={'button'} tabIndex={0}>
        <Icons.Languages className="h-5 w-5" />
      </div>
    </Dropdown>

  );
}
