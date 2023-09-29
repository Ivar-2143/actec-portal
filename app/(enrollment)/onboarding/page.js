
import { redirect } from 'next/navigation'
import FormStepper from '../components/form-stepper'
import PageHeader from '../components/ui/page-header'
import FormProvider from '@/lib/form-contexts'
import { StudentType, Program, AboutYou, Address, ContactInfo, EducationAttainment, Summary, CreateAccount, Documents } from '../components/forms'

export default function Onboarding({params,searchParams}) {
  
  const currentPage = searchParams.page
  if(currentPage === undefined){
    redirect(`?${new URLSearchParams({page:1})}`,'replace')
  }

  return (
    <main className='flex flex-col gap-2 lg:flex-row h-full w-full relative'>
      <FormStepper page={currentPage} />
      <div className='w-full px-6 relative z-0
                lg:px-[104px]'>
          <PageHeader page={currentPage}/>
          <FormProvider>
            <StudentType style={currentPage!=1? 'hidden' : ''} />
            <Program style={currentPage!=2? 'hidden' : ''} />
            <AboutYou style={currentPage!=3? 'hidden': ''} />
            <Address style={currentPage!=4? 'hidden': ''} />
            <ContactInfo style={currentPage!=5? 'hidden': ''} />
            <EducationAttainment style={currentPage!=6? 'hidden': ''} />
            <Documents style={currentPage!=7? 'hidden': ''}/>
            <Summary style={currentPage!=8? 'hidden': ''} />
            <CreateAccount style={currentPage!=9? 'hidden': ''} />
          </FormProvider>
      </div>
    </main>
  )
}
