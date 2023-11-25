import {ViewTypeOptions} from './types';
import { DataTableTabs } from './data-table-tabs'
import { Input } from '../ui/input'
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';

export default function DataTableToolbar({table, className,buttonSet}) {
  return (
    <div className={cn('inline-flex w-full flex-wrap flex-row-reverse sm:flex-row sm:gap-x-4 gap-y-4 items-center justify-between max-[370px]:justify-start pt-2',className)}>
      <DataTableTabs
        className=''
        title='Data Filter' options={ViewTypeOptions}/>
      {buttonSet}
      <div className='flex items-center w-full border-b px-3 bg-white rounded-sm py-2 focus-within:ring-2 ring-gray sm:w-1/3 sm:place-items-end border-solid sm:mr-4
      sm:ring-2'>
            <Search className='opacity-50 mr-2 h-6 w-6 shrink-0'/>
            <input
                placeholder='Search...'
                value={table.getState().globalFilter}
                onChange={e=> table.setGlobalFilter(e.target.value)}
                className='sm:text-sm bg-none focus:outline-none w-full'
            />
        </div>
        
    </div>
  )
}
