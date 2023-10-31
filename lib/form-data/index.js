

import { captureImageInstructions } from './capture-image-instructions';
import { formHeaders } from './form-headers';
import { fieldKeys } from './field-keys';
import { educationLevels } from './education-levels';
import { howDidYouKnowACTEC,  comboBoxData, branches} from './program-data';
import { PageStepTitles } from './page-step-titles';
import { studentTypes } from './student-types';




  



const years = () =>{
    const options = [];
    const currentYear = new Date().getFullYear();
    //console.log(currentYear);
    for(let i = currentYear; i >= 1950; i--){
        options.push(i);
    }
    //console.log(options);
    return options;
};






export {
  captureImageInstructions,
  formHeaders,
  fieldKeys,
  educationLevels,
  howDidYouKnowACTEC as checkGroupData,
  PageStepTitles,
  studentTypes,
  comboBoxData,
  branches,
  years
}