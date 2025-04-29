import Link from 'next/link'
import React from 'react'

const page = ({params }:{params: {id: string}} ) => {

  const { id } = params;
  return (
    <div className="">
      <div>User profile: {id}</div>

      <Link href="/dashboard/users">Users page</Link>
    </div>
  )
}

export default page
