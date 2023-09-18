import PageHeader from "../elements/page-header";
import FormElement from "../elements/form-item";
import { useFormContext } from "react-hook-form";
import FormFooterButtons from "../elements/form-footer";

export default function Page4({style}) {
  const title = "🏡 Tell us where you live."
  const body = "This might be useful in the future so we could have some party in your place!\n\n Just kidding... This is just to know where a bright student (just like you) live."

  const form = useFormContext();

  return (
    <section className={style}>
      <div className="onboard-content">
        <PageHeader
          title={title}
          body={body}
        />

        <div className="my-6">

          <div className="w-full relative sm:flex gap-4">
            <FormElement fieldName='house number' hint='House No.'/>
            <FormElement fieldName='street' hint='Street Name'/>
          </div>
          <FormElement fieldName='floor/Unit/Room number' optional={true} hint=''/>
          <FormElement fieldName='barangay' hint='Barangay'/>
          <FormElement fieldName='district' hint='House No.'/>
          <FormElement fieldName='municipality' hint='House No.'/>
          <FormElement fieldName='zip code' hint='3-4 digits' style="sm:w-1/2"/>
        </div>
      </div>
      <FormFooterButtons page={5} />
    </section>
  )
}
