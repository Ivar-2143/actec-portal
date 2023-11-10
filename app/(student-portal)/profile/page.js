"use client"
import FormElement from "@/app/(enrollment)/components/ui/form-item";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { CameraIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";


export default function Profile() {
    const form = useForm();
    const [image, setImage] = useState();
    const [imageName, setImageName] = useState();


    const onImageChange = (e) => {
        if(e.target.files && e.target.files[0]){
            console.log(e.target.files[0]);
            setImageName(e.target.files[0].name);
            setImage(URL.createObjectURL(e.target.files[0]));

            try{
                // ! Needs server action
            }catch(e){

            }
        }
    }
    const onSubmit = (formData) => {
        console.log("Profile Submitted", formData);
    }

    const fields = [{
        title: 'student ID',
        key: 'student_id',
        placeholder: '123123',
        type: 'text',
        disabled: true
    },{
        title: 'mobile number',
        key: 'mobile_number',
        placeholder: '9XXXXXXXXX',
        type: 'text',
        disabled: false
    },{
        title: 'telephone no.',
        key: 'telephone_no',
        placeholder: '',
        type: 'text',
        disabled: false
    },{
        title: 'new password',
        key: 'new_password',
        placeholder: '********',
        type: 'password',
        disabled: false
    },{
        title: 'confirm password',
        key: 'confirm_password',
        placeholder: '********',
        type: 'password',
        disabled: false
    },{
        title: 'email',
        key: 'email',
        placeholder: 'sample@email.com',
        type: 'email',
        disabled: false
    },{
        title: 'facebook',
        key: 'fb',
        placeholder: 'https://www.facebook.com/username',
        type: 'text',
        disabled: false
    }]


    return (
        <main className="p-6 relative">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <div className="relative w-[120px] h-[120px] bg-gray rounded-full">
                            <Image alt={imageName} src={image} fill className="object-cover rounded-full relative"/>
                            <div className="bg-primary absolute p-2 rounded-full border-white border-2 right-0 bottom-0">
                                <CameraIcon className="text-white"/>
                            </div>
                        </div>
                        <label className="bg-primary rounded-md px-2 py-1 text-primary-foreground">
                            <input type='file' accept="image/*" 
                                className="hidden" onChange={onImageChange}
                            />
                            Upload new
                        </label>
                        
                    </div>
                    <div className="">
                        {fields.map( field => (
                            <FormElement 
                                key={field.key}
                                fieldName={field.title}
                                accesoryKey={field.key}
                                label={field.title}
                                hint={field.placeholder}
                                disable={field.disabled}
                                type={field.type}
                            />
                        ))}
                    </div>
                    <div className="flex justify-between mt-6">
                        <Button onClick={()=>{}}variant='secondary'> Cancel </Button>
                        <Button type='submit'> Submit </Button>
                    </div>
                </form>
            </Form>
        </main>
    )
}
