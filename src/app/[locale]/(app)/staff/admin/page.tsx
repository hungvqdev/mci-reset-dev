import availableFunctionsApi from '@/api/availableFunctionsApi';
import React from 'react'
import { cookies } from "next/headers";
import Admin from '@/components/UI/Admin';

export default async function page() {

    let userId = null;
    const cookieUserData = cookies().get("userData");
    if (cookieUserData) {
        const userData = JSON.parse(cookieUserData.value);
        userId = userData.id;
    }
    const result = await availableFunctionsApi.getSetupFunction({ userId });


    return (
        <>
            <Admin data={result.data} />
        </>
    )
}
