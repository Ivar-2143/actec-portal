import { z} from 'zod';

export const ApplicantSchema = z.object({
    "Applicant_ID": z.number(),
    "Student_Name": z.string(),
    "Student_Type": z.string(),
    "Strand_Course": z.string().optional()
})