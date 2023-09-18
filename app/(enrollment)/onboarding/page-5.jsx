
import PageHeader from "../elements/page-header";
import FormElement from "../elements/form-item";
import FormFooterButtons from "../elements/form-footer";

export default function Page5({style}) {
  const title = "📞 How can we reach you?"
  const body = "Just err.. you know? So we could have some chitchat sometimes... It’s good to have some healthy conversations together, we will send you updates on how we’re doing and you won’t be able to reply at all!"
  


  return (
    <section className={style}>
      <div className="onboard-content">
        <PageHeader
          title={title}
          body={body}
        />
        <div className="my-10">
          <div className="my-8">
            <h4 className='text-lg text-gray font-medium my-2'>Personal</h4>
            <div className="w-full sm:flex gap-4">
              <FormElement fieldName="mobile number" hint='9#########' />
              <FormElement fieldName="telephone number"hint='' />
            </div>
            <FormElement accesoryKey="contact_email" fieldName="email" hint='' />
            <FormElement fieldName="facebook" hint='https://facebook.com/username' />
          </div>
          <div className="my-6">
            <h4 className='text-lg text-gray font-medium my-2'>Parent/Guardian</h4>
            <div className="w-full sm:flex gap-4">
              <FormElement accesoryKey="guardian_fName" fieldName="first name" hint='' />
              <FormElement accesoryKey="guardian_lName" fieldName="last name" hint='' />
            </div>
            <div className="w-full sm:flex gap-4">
              <FormElement accesoryKey="guardian_mobile" fieldName="mobile number" hint='9#########' />
              <FormElement accesoryKey="guardian_tel" fieldName="telephone number"hint='' />
            </div>
            <FormElement accesoryKey="guardian_email" fieldName="email" hint='' />
          </div>
        </div>
        
      </div>
      <FormFooterButtons page={6} />
        
    </section>
  )
}
