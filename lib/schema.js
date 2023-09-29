import { z } from "zod";

export const ProgramSchema = z.object({
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