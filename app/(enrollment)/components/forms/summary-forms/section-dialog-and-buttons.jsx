import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogTrigger } from '@/components/ui/dialog'
import { useEditingState } from '@/lib/form-contexts'
import { PenIcon, TrashIcon } from '@/public/assets/icons';
import DialogItem from './dialog-components/dialog-item';
import { DialogCancel, DialogConfirm, DialogDiscard, DialogSubmit } from './dialog-components';
import { useForm } from 'react-hook-form';

export default function EditingDialog({className,parent}) {
    const {isEditing, formID, handleEditing} = useEditingState();
    console.log(formID);
    console.log(isEditing)
    const formName = (formID) =>{
        return String(formID.split('_')[1]);
    }

    return (
        <>
            {(isEditing && formID === parent)? (
                <>
                    <h6 className={className.heading}></h6>
                    <div className='flex justify-between sm:justify-end sm:gap-x-2'>
                        <Dialog>
                            <DialogTrigger>
                                <Button className={`${className.editButton} text-destructive border-destructive`} variant='link' > Delete Changes </Button>
                            </DialogTrigger>
                            <DialogItem
                                title='Ignore Changes?'
                                desc='Are you sure you want to ignore this changes?'>
                                <DialogCancel />
                                <DialogConfirm onClick={()=>{handleEditing(null)}} />
                            </DialogItem>
                        </Dialog>

                        <Dialog>
                            <DialogTrigger>
                                <Button className={className.editButton} variant='link' type='button'>Save Changes </Button>
                            </DialogTrigger>
                            <DialogItem
                                title='Save Changes?'
                                desc='Are you sure you want to save this changes?'>
                                <DialogCancel />
                                <DialogSubmit form={parent}/>
                            </DialogItem>
                        </Dialog>
                    </div>
                </>
            ):(
                <>
                    {isEditing? (
                        <>
                            <h6 className={className.heading}></h6>
                            <Dialog>
                                <DialogTrigger>
                                    <Button className={className.editButton} variant='link' ><PenIcon className='mr-1'/> Edit </Button>
                                </DialogTrigger>
                                <DialogItem
                                    title='Unsaved Changes'
                                    desc={`Do you want to save changes on ${formName(formID)} ?`}
                                >
                                    <DialogCancel />
                                    <DialogSubmit form={formID} />
                                </DialogItem>
                            </Dialog>
                        </>
                    ):(
                        <>
                            <h6 className={className.heading}></h6>
                            <Button className={className.editButton} variant='link' onClick={()=>handleEditing(parent)} ><PenIcon className='mr-1' /> Edit</Button>
                        </>
                    )}
                </>
            )}
        </>
    )
}
