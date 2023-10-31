import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";


export function DialogCancel() {
  return (
    <DialogClose>
        <Button variant='secondary' type='button'>
            Cancel
        </Button>
    </DialogClose>
  )
}


export  function DialogSubmit({form}) {
    return (
      <DialogClose>
          <Button type='submit' form={form}>
              Confirm
          </Button>
      </DialogClose>
    )
}

export  function DialogSub({form}) {
  return (
    <DialogClose>
        <Button type='button' form={form}>
            Confirm
        </Button>
    </DialogClose>
  )
}

export  function DialogConfirm({onClick}) {
  return (
    <DialogClose>
        <Button type='button' onClick={onClick}>
            Confirm
        </Button>
    </DialogClose>
  )
}

export function DialogDiscard({onClick}) {
    return (
      <DialogClose>
          <Button variant='destructive' type='button' onClick={onClick}>
              Discard
          </Button>
      </DialogClose>
    )
}