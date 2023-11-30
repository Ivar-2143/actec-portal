import { useDropzone } from "react-dropzone"
import { useCallback } from "react";
import { DropArrowIcon, UploadIcon } from "@/public/assets/icons";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

export default function Dropzone({className,fieldName='birth-certificate'}) {
    const [image, setImage] = useState({});
    const form = useFormContext();

    const onDrop = useCallback( (acceptedFile, rejectedFile) => {
        console.log('dropped: '+ acceptedFile[0].name)
        setImage(
            acceptedFile.map(
                file => Object.assign(
                    file,
                    {preview: URL.createObjectURL(file)}
                )
            )
        )
        console.log(image);
        form.setValue(
            fieldName,
            acceptedFile.map(
                file => Object.assign(
                    file,
                    {preview: URL.createObjectURL(file)}
                )
            )
            ,{
                shouldDirty: true
            });
        console.log(form.formState.isDirty)
        console.log(form.getValues('birth-certificate'))

        console.log(rejectedFile);
    }, [image, form])
    

    const {getInputProps, getRootProps, isDragActive } = useDropzone({
        onDrop,
        accept:{
            'image/*': []
        },
        maxSize: 1024*10000,
        maxFiles: 1
        
    });


  return (
    <section>
        <div {...getRootProps({className: className})}>
            <input {...getInputProps()} />
            {isDragActive ? (
                <div className="text-gray flex flex-col justify-center items-center gap-2">
                    <DropArrowIcon className='text-6xl text-[#30303B]' />
                    <p className="text-xl">Drop here.</p>
                </div>
            ) : (
                <div className="text-gray flex flex-col justify-center items-center gap-2">
                    <UploadIcon className='text-8xl' />
                    <p> Drag and drop or browse to choose a file </p>
                </div>
            )}
        </div>
    </section>
  )
}
