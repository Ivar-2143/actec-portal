import fs from 'fs/promises';
import {faker} from '@faker-js/faker';
import { studentTypes } from '@/lib/form-data';
import path from "path";

const applicants = Array.from({length: 100}, () => ({
    "Applicant_ID": faker.number.int({min: 1000000, max: 9999999}),
    "Strand_Course": faker.person.jobType(),
    "Student_Name": faker.person.fullName(),
    "Student_Type": faker.helpers.arrayElement( studentTypes).value,
    "Progress": faker.number.int({min:0 , max: 100}),
    "isArchived": faker.datatype.boolean({probability: 0.3})
}))

console.log(JSON.stringify(applicants,null,2))

// console.log("Starting... ?")
//! FS Error because node module cannot find 'fs' when using webpack.
// * check this out https://stackoverflow.com/questions/39249237/node-cannot-find-module-fs-when-using-webpack
// fs.writeFileSync(
//     path.join(__dirname,"student-applicants.json"),
//     JSON.stringify(applicants,null,2)
// )

console.log("✅ Tasks data generated.")