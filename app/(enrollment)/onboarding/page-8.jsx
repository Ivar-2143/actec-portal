import FormFooterButtons from '../elements/form-footer'
import PageHeader from '../elements/page-header'

export default function Page8({style}) {
  const title = "🎓 Summary of your data"
  const body = "By going to the next step, you make sure that all the data you entered are correct."


  return (
    <section className={style}>
      <div className="onboard-content">
        <PageHeader
          title={title}
          body={body}
        />

        <div className="my-6">

        </div>
      </div>
      <FormFooterButtons page={9} />
    </section>
  )
}
