import { z } from "zod";

export const FormSchema = z.object({
    student_type: z.string({
        required_error: 'You have to select a student type'
    }),
    branch: z.string({
        required_error: 'Please select a branch'
    }),
    course: z.string({
        required_error: 'Please select a course'
    }),
    'scholarship code': z.string().optional(),
    'referral code': z.string().optional(),
    items: z.array(z.string()).refine((value) => value.some(item => item),{
        message: 'Please select at least one'
    })
    

});