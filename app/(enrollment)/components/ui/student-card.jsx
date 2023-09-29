import Image from 'next/image'
import { Button } from '@/components/ui/button';

export default function StudentTypeCard({student, style,click, selected}) {
    const {value, img, title, desc} = student;

    return (
        <div className={`${style} ${(selected == value)? 
            'border-2 border-solid border-company shadow-[0_0_4px_4px_rgba(20,115,230,0.25)]' 
            : 'border-2 border-solid border-border'} transition-all cursor-pointer`} 
        onClick={()=> click(value) }>
            <div className='flex flex-row gap-2 justify-start items-center 
                                    w-full rounded-md relative
                                    h-full
                                    sm:flex-col '>
                <Image 
                    src={img}
                    sizes='(max-width:164px),(max-height:160px)'
                    alt='title'
                    quality={100}
                    className='relative h-[96px] w-[96px]
                        sm:h-[128px] sm:w-[128px]
                        md:h-[140px] md:w-[140px]
                        lg:h-[160px] lg:w-[160px] lg:max-w[160px]
                    '
                />
                <div>
                    <h4 className='sm:text-center font-medium'>
                        {title}
                    </h4>
                    <p className='sm:text-center text-xs'>
                        {desc}
                    </p>
                </div>
            </div>
            <Button 
                className='text-xs'
                variant={`${selected === value ? 'default' : 'outline'}`}
                disabled={selected === value} size='sm'>

                SELECT
            </Button>
        </div>
    )
}
