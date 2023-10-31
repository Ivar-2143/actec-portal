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

export const PersonalInfoSchema = z.object({
    'first name': z.string({
        required_error: 'Please enter your first name'
    }),
    'middle name': z.string({
        required_error: 'Please enter your middle name'
    }),
    'last name': z.string({
        required_error: 'Please enter your last name'
    }),
    age: z.string().refine(v => { let n = Number(v); return !isNaN(n) && v?.length > 0 && (parseInt(v) > 0)}, {message: "Invalid age"}),
    'date of birth': z.date({
        required_error: 'Please enter your birth date'
    })
    

});



export const AddressSchema = z.object({
    street: z.string({
        required_error: 'Please enter your street address'
    }).min(3).max(50),
    'house number': z.string({
        required_error: 'Please enter your house number'
    }).min(2).max(50),
    'floor/Unit/Room number': z.string().min(3).max(50).optional(),
    barangay: z.string({
        required_error: 'Please enter your city address'
    }).min(3).max(50),
    district: z.string({
        required_error: 'Please enter your city address'
    }).min(3).max(50),
    municipality: z.string({
        required_error: 'Please enter your state information'
    }).min(2).max(50),
    'zip code': z.string({
        required_error: 'Please enter your zip code'
    }).refine(v => { let n = Number(v); return !isNaN(n) && v?.length > 2 }, {message: "Invalid zip"})
  });

  export const ContactSchema = z.object({
    'mobile number': z.string({
        required_error: 'Please enter your mobile number'
    }).regex(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/, "Please enter a valid phone number"),
    'telephone number': z.string().optional(),
    contact_email : z.string({
        required_error: 'Please enter your email'
    }).email(),
    facebook: z.string({
        required_error: 'Please enter the link of your facebook account'
    }),
    guardian_fName: z.string({
        required_error: "Please enter your guardian's first name"
    }),
    guardian_lName: z.string({
        required_error: "Please enter your guardian's last name"
    }), 
    guardian_mobile: z.string({
        required_error: 'Please enter your mobile number'
    }).regex(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/, "Please enter a valid phone number"),
    guardian_tel: z.string().optional(),
    guardian_email: z.string({
        required_error: "Please enter your guardian\'s email"
    }).email(),
  });

  export const EducationSchema = z.object({
    'highest_educational_attainment': z.string({
        required_error: 'Please select your highest attainment'
    }),
    'last_school_attended': z.string({
        required_error: 'Please enter the name of your school'
    }).min(3).max(50),
    year_completed: z.string({
        required_error: 'Please enter your year of completion'
    }).refine(v => { let n = Number(v); return !isNaN(n) && v?.length == 4 }, {message: "Invalid year"})
  });