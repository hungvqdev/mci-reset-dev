'use client'

import React from 'react'

export default function Admin({ data }: { data: any }) {
    console.log(data)
    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: data.division_form }} />
            <div dangerouslySetInnerHTML={{ __html: data.location_form }} />

            <div dangerouslySetInnerHTML={{ __html: data.new_user_profile_form }} />

            <div dangerouslySetInnerHTML={{ __html: data.user_registration_form }} />
            <div dangerouslySetInnerHTML={{ __html: data.product_form }} />


        </div>
    )
}
