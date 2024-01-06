import { columns } from "@/app/columns";
import ManageGradeButtons from "@/components/button-sets/registrar/manage-grades-button-set";
import { DataTable } from "@/components/table/data-table";
import { getApplicants } from "../../applicants-data/fetch";


export default async function page() {
  const data = await getApplicants();

  return (
    <main className="mx-6 mt-10
                    md:mr-16 md:ml-14">
      <div className="">
        <DataTable columns={columns} data={data} buttonSet={<ManageGradeButtons />} />
      </div>
    </main>
  )
}
