import {ViewTypeOptions} from './types';
import { DataTableTabs } from './data-table-tabs'
import { Input } from '../ui/input'
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';

export default function DataTableToolbar({table, className,children}) {
  return (
    <div className={cn('flex flex-col gap-4',className)}>
        <div className='flex items-center gap-2'>
            {children}
            <DataTableTabs title='Data Filter' options={ViewTypeOptions}/>
        </div>
        <div
         className='flex items-center border-b px-3 bg-white rounded-sm py-2 focus-within:ring-2 ring-gray
         '>
            <Search className='opacity-50 mr-2 h-6 w-6 shrink-0'/>
            <input
                placeholder='Search...'
                value={table.getState().globalFilter}
                onChange={e=> table.setGlobalFilter(e.target.value)}
                className='bg-none focus:outline-none'
            />
        </div>
    </div>
  )
}
