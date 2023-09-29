"use client"
import { useState,useContext, createContext } from "react";
import {useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export const FormContext = createContext();

export const PagerContext = createContext();

export default function FormProvider({ children }) {
    const [data, setData] = useState({});

    const setFormValues = (values) => {
        setData((prevValues) => ({
        ...prevValues,
        ...values,
        }));
    };

    return (
        <FormContext.Provider value={{ data, setFormValues }}>
            {children}
        </FormContext.Provider>
    );
}

export const useFormData = () => useContext(FormContext);
