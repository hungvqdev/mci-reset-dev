import { Header } from "@/components/Header/Header";
import { cookies } from 'next/headers'
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  const cookiesUser = cookies().has('userData')
  console.log(cookiesUser)
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
}
