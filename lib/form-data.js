
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

export const formHeaders=[{
    title: "👋 Welcome to ACTEC!",
    subTitle:"Tell us about yourself.",
    body: "We warmly welcome Junior high school completers, senior high school graduates, college transferees, and foreign applicants to our campuses.\n\n" +"Kindly fill-out the online application form for a fast and efficient admission process."
  },{
    title:"A few things to start out",
    subTitle:'',
    body :"These information will help us classify you more and assign you to a proper place to learn."
  },{
    title : "A bit about you.",
    subTitle:'',
    body : "We need your personal data to complete your learner’s profile."
  },{
    title : "🏡 Tell us where you live.",
    subTitle:'',
    body : "This might be useful in the future so we could have some party in your place!\n\n Just kidding... This is just to know where a bright student (just like you) live."
  },{
    title : "📞 How can we reach you?",
    subTitle:'',
    body : "Just err.. you know? So we could have some chitchat sometimes... It’s good to have some healthy conversations together, we will send you updates on how we’re doing and you won’t be able to reply at all!"
  },{
    title : "🎓 Level Completed",
    subTitle:'',
    body : "Every level has a different difficulty, right? This is to assess what boss level you’ve defeated. An important question is, Are you ready for the next battle?"
  },{
    title : "🚦 Verification",
    subTitle:'',
    body : "You’ve reached this far... We hope that you’re not a robot or an alien, right? We might need some documents to verify your identity. We just love to be true and be real with what we do and share it with real people like you!"
  },{
    title : "🎓 Summary of your data",
    subTitle:'',
    body : "By going to the next step, you make sure that all the data you entered are correct."
  },{
    title : "🚀  Almost There!",
    subTitle:'',
    body : "Sign up with your email to ensure the safety and confidentiality of your data."
  }]

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