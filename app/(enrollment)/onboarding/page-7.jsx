
import FormFooterButtons from '../elements/form-footer'
import PageHeader from '../elements/page-header'

export default function Page7({style}) {
  const title = "🚦 Verification"
  const body = "You’ve reached this far... We hope that you’re not a robot or an alien, right? We might need some documents to verify your identity. We just love to be true and be real with what we do and share it with real people like you!"

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
      <FormFooterButtons page={8} />
    </section>
  )
}
