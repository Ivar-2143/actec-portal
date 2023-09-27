
import img_shs from '@/public/assets/student-type/SHS.png'
import img_sem from '@/public/assets/student-type/Semestral.png'
import img_sc from '@/public/assets/student-type/Short-Course.png'

export const PageStepTitles = [
  'Student Type',
  'Program',
  'About You',
  'Address',
  'Contact Info',
  'Education',
  'Documents',
  'Summary',
  'Create Account'
];
export const checkGroupData = [
    {
      id:'cos',
      label:'COS'
    },{
      id:'letter',
      label:'LETTER'
    },
    {
      id:'streamer',
      label:'STREAMER'
    },{
      id:'poster',
      label:'POSTER'
    },
    {
      id:'telemarketing',
      label:'TELEMARKETING'
    },{
      id:'others',
      label:'OTHERS'
    }
  ]

  export const studentTypes = [{
    value: 'shs',
    img:img_shs,
    title: "Senior High School",
    desc:'ex. ICT, HR Servicing, and Culinary'
},{
    value: 'semestral',
    img:img_sem,
    title: "Semestral",
    desc:'ex. 2yr-Courses'

},{
    value: 'shortcourse',
    img:img_sc,
    title: "Short Course",
    desc:'ex. Tesda Courses'

}];

export const educationLevels =[{
  value: 'elem',
  label: 'Elementary',
},{
  value: 'highschool',
  label: 'Junior High School',
},{
  value: 'shs',
  label: 'Senior High School',
},{
  value: '2yrC',
  label: '2 Year Course',
},{
  value: 'bachelor',
  label: 'College Degree',
}] 

export const years = () =>{
    const options = [];
    const currentYear = new Date().getFullYear();
    //console.log(currentYear);
    for(let i = currentYear; i >= 1950; i--){
        options.push(i);
    }
    //console.log(options);
    return options;
};

export const captureImageInstructions = [
  'Take your photo in a well-lit room or in direct sunlight.',
  'Take the photo facing the light so your shadow doesn’t fall on the paper.',
  'You can use the camera flash to help illuminate the paper.',
  'Make sure that the paper fills the screen.',
  'We accept formats such as .jpeg, .jpg, .png, and .pdf'
];