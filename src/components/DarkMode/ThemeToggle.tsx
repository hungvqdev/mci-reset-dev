'use client';

import React from 'react';
import { useTheme } from 'next-themes';

import Icons from '../Icon/Icons';

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div className='cursor-pointer'>
      {theme === 'light' ?
        <Icons.SunMedium className=" text-orange-500 mr-1" onClick={() => setTheme('dark')} style={{ margin: "0 -3px" }} />
        :
        <Icons.Moon className=" text-blue-500 mr-1" onClick={() => setTheme('light')} style={{ margin: "0 -3px" }} />
      }
    </div>


  );
}
