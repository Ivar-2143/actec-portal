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