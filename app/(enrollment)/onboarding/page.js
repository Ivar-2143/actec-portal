import React from 'react'
import EnrollmentForm from './enrollment-form'
import { redirect } from 'next/navigation'

export default function Onboarding({searchParams}) {
  
  const page = searchParams.page

  if(page === undefined){
    redirect(`?${new URLSearchParams({page:1})}`,'replace')
  }
  return (
    <main>
      <EnrollmentForm />
    </main>
  )
}
