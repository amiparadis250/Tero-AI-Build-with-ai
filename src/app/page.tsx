import React from 'react'
import Login from '@/components/authentication/login'
import { redirect } from 'next/navigation'
import Link from 'next/link'

function page() {
  return (
    <div className='bg-white h-screen w-screen'>
      Welcome to Tero AI 

      Go to <Link href="/dashboard">Login</Link>


    </div>
  )
}

export default page
