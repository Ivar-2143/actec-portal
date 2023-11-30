import fs from 'fs/promises';	
import {z} from "zod";
import path from 'path';
import { ApplicantSchema } from './applicant-schema';

export async function getApplicants(){
    const data = await fs.readFile(
        path.join(process.cwd(), '/app/(student-portal)/applicants-data/student-applicants.json'),(e)=>{
            console.log(e);

        }
    )  
    if(data){
        // console.log("data")
    }
    const applicants = JSON.parse(data.toString());

    //* you can use
    //* Will return only the object data included in the Schema
    //! return z.array(ApplicantSchema).parse(applicants);
    return JSON.parse(data);
}