"use client"
import { useState,useContext, createContext, useEffect } from "react";
import {useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export const FormContext = createContext();

export const EditingStateContext = createContext();

export const AccordionContext = createContext();

export default function FormProvider({ children }) {
    const [data, setData] = useState({
        pages:[],
        fieldValues:{}
    });

    const setFormValues = (page, values) => {
        setData(prevValues=>({
            ...prevValues,
            pages:[...prevValues.pages, page],
            fieldValues:{
                ...prevValues.fieldValues, ...values
            }
        }))
    }

    // const sampdata = {
    //     "pages": [
    //         {
    //             "isCompleted": true,
    //             "value": 7
    //         },
    //         {
    //             "isCompleted": true,
    //             "value": 1
    //         },
    //         {
    //             "isCompleted": true,
    //             "value": 2
    //         },
    //         {
    //             "isCompleted": true,
    //             "page": 3
    //         },
    //         {
    //             "isCompleted": true,
    //             "value": 4
    //         },
    //         {
    //             "isCompleted": true,
    //             "value": 5
    //         },
    //         {
    //             "isCompleted": true,
    //             "value": 6
    //         },
    //         {
    //             "isCompleted": true,
    //             "value": 7
    //         }
    //     ],
    //     "fieldValues": {
    //         "student_type": "semestral",
    //         "branch": "caloocan",
    //         "course": "cg",
    //         "items": [
    //             "letter"
    //         ],
    //         "first name": "ADRIAN CHARLES",
    //         "middle name": "DURANTE",
    //         "last name": "JELUZ",
    //         "age": "22",
    //         "date of birth": "2001-05-31T16:00:00.000Z",
    //         "address": {
    //             "street": "qwee",
    //             "house number": "qwee",
    //             "barangay": "asdasd",
    //             "district": "213aqwe",
    //             "municipality": "asdasd",
    //             "zip code": "1234"
    //         },
    //         "mobile number": "+639166692544",
    //         "contact_email": "adrianjeluz07@gmail.com",
    //         "facebook": "asd",
    //         "guardian_fName": "ADRIAN CHARLES",
    //         "guardian_lName": "JELUZ",
    //         "guardian_mobile": "+639166692544",
    //         "guardian_email": "sample@email.com",
    //         "highest_educational_attainment": "2yrC",
    //         "last_school_attended": "qwe",
    //         "year_completed": "1234",
    //         "birth-certificate": [
    //             {
    //                 "path": "internship-iLM.jpg",
    //                 "preview": "blob:http://localhost:3000/160fecf1-753e-464e-83a5-a95259149452"
    //             }
    //         ]
    //     }
    // }

    // useEffect(()=>{
    //     setData(sampdata)
    // },[]);

    return (
        <FormContext.Provider value={{ data, setFormValues }}>
            {children}
        </FormContext.Provider>
    );
}

export function EditingStateProvider({children}){
    const [isEditing, setIsEditing] = useState(false);
    const [formID, setFormID] = useState(null);

    const handleEditing = (form) => {
        if(formID != null){
            document.getElementById(formID).reset();
            console.log(formID);
            
        }
        setIsEditing(prev => !prev);
        setFormID(form);
    }

    
    return (
        <EditingStateContext.Provider value={{isEditing, formID, handleEditing}}>
            {children}
        </EditingStateContext.Provider>
    )

}

export const AccordionStateProvider = ({children}) => {
    const [value, setValue] = useState('item-1');

    const handleStateChange = (item) => {
        setValue(item);
    }

    return (
        <AccordionContext.Provider value={{value,setValue,handleStateChange}}>
            <EditingStateProvider>
                {children}
            </EditingStateProvider>
        </AccordionContext.Provider>
    )
}

export const useAccordionState = () => useContext(AccordionContext);

export const useEditingState = () => useContext(EditingStateContext);

export const useFormData = () => useContext(FormContext);