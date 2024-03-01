'use client'
import React from 'react'
import qs from 'query-string';
import { Search } from 'lucide-react';
import { useDebounce } from 'usehooks-ts'
import { useRouter } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';

const SearchInput = () => {
    const router = useRouter();
    const [value, setValue] = useState("");
    const debouncedValue = useDebounce(value, 500);

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    useEffect(() => {
        const url = qs.stringifyUrl({
            url: '/',
            query: {
                search: debouncedValue
            },
        }, { skipEmptyString: true, skipNull: true })

        router.push(url);
    }, [debouncedValue, router])

  return (
    <div className='w-full relative flex justify-start items-center'>
        <Search size={24} className='absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4'/>
        <Input onChange={handleSearchChange} className='w-full text-primary lg:max-w-[500px] border border-muted-foreground/10 pl-9 bg-transparent' placeholder='Search boards'/>
    </div>
  )
}

export default SearchInput