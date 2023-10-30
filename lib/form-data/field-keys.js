import { educationLevels } from "./education-levels"
import { branches, howDidYouKnowACTEC, comboBoxData } from "./program-data"

export const fieldKeys = {
    program:{
      student_type:{
        title: 'student type',key:'student_type', type: 'select'},
      branch_program:[
        {title: 'branch',key: 'branch', type: 'select', data:branches},
        {title: 'course',key: 'course', type: 'combobox', data:comboBoxData},
        {title: 'referral code',key: 'referral code', type: 'input', },
        {title: 'scholarship code',key: 'scholarship code', type: 'input'},
        {title: 'how did you know ACTEC', key:'items', type: 'checkbox-group', data:howDidYouKnowACTEC}
      ]
    },
    personal_details: {
      about_you:[
        {title:'first name',key: 'first name', type:'input', placeholder:'', input_type:'' },
        {title:'middle name',key: 'middle name', type:'input', placeholder:'', input_type:'' },
        {title:'last name', key: 'last name', type:'input', placeholder:'', input_type:'' },
        {title: 'age', key: 'age', type:'input', placeholder:'', input_type:'number' },
        {title: 'date of birth', key: 'date of birth', type:'input', placeholder:'', input_type:'date'},
        {title: 'citizenship', key: 'citizenship', type:'input', placeholder:'', input_type:'' },
        {title: 'civil status', key: 'civil status', type:'input', placeholder:'ex. Single or Married', input_type:'' },
        {title: 'religion', key: 'religion', type:'input', placeholder:'', input_type:'' }
      ],
      address:[
        {title: 'house number', key: 'house number', type: 'input', placeholder:'House No.', input_type:''},
        {title: 'street', key: 'street', type: 'input', placeholder:'Street Name', input_type:''},
        {title: 'floor/Unit/Room number', key: 'floor/Unit/Room number', type: 'input', placeholder:'', input_type:''},
        {title: 'barangay', key: 'barangay', type: 'input', placeholder:'Barangay', input_type:''},
        {title: 'district', key: 'district', type: 'input', placeholder:'', input_type:''},
        {title: 'municipality', key: 'municipality', type: 'input', placeholder:'', input_type:''},
        {title: 'zip code', key: 'zip code', type: 'input', placeholder:'3-4 digits', input_type:'', className: 'sm:w-1/2'}
      ],
      contact_info:{
        personal:[
          {title: 'mobile number',key: 'mobile number', type:'input', placeholder:'', input_type:'text'},
          {title: 'telephone number',key: 'telephone number', type:'input', placeholder:'', input_type:'text'},
          {title: 'email',key: 'contact_email', type:'input', placeholder:'', input_type:'email'},
          {title: 'facebook',key: 'facebook', type:'input', placeholder:'', input_type:''}
        ],
        guardian:[
          {title:'first name', key: 'guardian_fName', type:'input', placeholder:'', input_type:''},
          {title: 'last name', key: 'guardian_lName', type:'input', placeholder:'', input_type:''},
          {title: 'email', key: 'guardian_email', type:'input', placeholder:'', input_type:''},
          {title: 'mobile number', key: 'guardian_mobile', type:'input', placeholder:'', input_type:'text'},
          {title: 'telephone number', key: 'guardian_tel', type:'input', placeholder:'', input_type:'text'}
        ]
      },
      education:[
        {title:'Highest Educational Attainment',key:'highest_educational_attainment',type:'select',data:educationLevels,placeholder:''},
        {title: 'last school attended',key: 'last_school_attended',type:'input',placeholder:'', input_type:'text'},
        {title: 'year completed', key: 'year_completed',type:'input',placeholder:'', input_type:'number'}],
    },
    document: [{title: 'birth certificate', key: 'birth-certificate'}]
  }