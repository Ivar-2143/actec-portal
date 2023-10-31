import EditingDialog from '../section-dialog-and-buttons'

export default function SectionForm({formName,sectionTitle,children,className}) {
  console.log(className)
  return (
    <section className={className.section} >
        <div className={`${className.section_header} border-b-2 border-border rounded-sm`}>
          <h6 className={className.heading}>{sectionTitle}</h6>
          <EditingDialog className={className} parent={formName}/>
        </div>
        <div className={className.section_content}>
            {children}
        </div>
      </section>
  )
}
