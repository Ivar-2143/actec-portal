
import img_shs from '@/public/assets/student-type/SHS.png'
import img_sem from '@/public/assets/student-type/Semestral.png'
import img_sc from '@/public/assets/student-type/Short-Course.png'

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