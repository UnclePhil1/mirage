'use client'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import Image from 'next/image';
export default function NotFound() {
    const router = useRouter()

    const handleBack = () => {
        router.back();
    }
    return (
        <div className='h-full flex-col flex self-center items-center justify-center space-y-2 p-4'>
            <Image
                src={'/Images/notfound.svg'}
                alt='empty'
                width={700}
                height={300}
                className='w-full md:w-[350px] h-full md:h-[350px]'
            />
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Button onClick={handleBack}>Return Home</Button>
        </div>
    )
}