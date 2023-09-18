import { Button } from '@/components/ui/button'
import { RightArrowIcon } from '@/public/assets/icons'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function FormFooterButtons({
    page,
    withNext=true,
    withPrev=true,
    disable,
    style,
    children
}) {
    const router = useRouter();

  return (
    <div className={`onboard-content onboard-footer ${withPrev? 'justify-between' : 'justify-end'} ${style}`}>
        {withPrev  && (
            <Button
                className='md:h-10 md:px-4 md:py-2 
                lg:text-base lg:h-11 lg:rounded-md lg:px-8'
                variant="ghost"
                size="sm"
                onClick={() => router.back() }
            >
                Previous Step
            </Button>
        )}
        {withNext && (
            <Button
                className='md:h-10 md:px-4 md:py-2 
                lg:text-base lg:h-11 lg:rounded-md lg:px-8'
                variant="default"
                size="sm"
                disabled={disable} 
                onClick={() => router.push(`?page=${page}`) }
                // disabled={studentType == null || studentType == ''}
            >
                Next 
                <RightArrowIcon className='ml-2 h-4 w-4 lg:ml-4 lg:h-5 lg:w-5'/>
            </Button>
        )}
        {children}
</div>
  )
}
