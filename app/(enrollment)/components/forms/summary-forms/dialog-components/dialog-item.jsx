import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'

export default function DialogItem({title,desc,children}) {
  return (
    <DialogContent>
      <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {desc}
        </DialogDescription>
      </DialogHeader>
      <DialogFooter className='flex-row justify-around'>
        {children}
      </DialogFooter>
    </DialogContent>
  )
}

