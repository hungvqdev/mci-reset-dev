import Sidebar from "../../../../components/Sidebar/StaffSidebar";
import availableFunctionsApi from "@/api/availableFunctionsApi";
import { cookies } from "next/headers";
import { redirect } from 'next/navigation'



export default async function Layout({ children }: { children: React.ReactNode }) {

  let userId = null;
  const cookieUserData = cookies().get("userData");
  if (cookieUserData) {
    const userData = JSON.parse(cookieUserData.value);
    userId = userData.id;
  } else {
    redirect('/')
  }
  const result = await availableFunctionsApi.getAvailableFunctions({ userId });


  return (
    <div className="flex h-full">
      <Sidebar data={result.data} />
      <div className="p-6 flex-1">{children}</div>
    </div>
  );
}
