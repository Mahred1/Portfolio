import Image from 'next/image'
import React from 'react'
import StackTag from './StackTag'

type Props ={
    children:string,
    src:string
}
const StackCard = ({children,src}:Props) => {
  return (
    <div className='bg-surface px-4 py-3 border-2 border-foreground'>
        <div className='border-b-2 border-foreground pb-2 mb-2 flex justify-between items-center'>
            <div className='flex items-center gap-2 font-medium text-base'>
                <Image src={src} alt={children} width={20} height={20} />
                {children}
            </div>
            <span className='opacity-60 text-xs font-mono'>01</span>
        </div>
        <div className='grid gap-2 grid-cols-2'>
             <StackTag src="/icons/react.svg">React</StackTag>
            <StackTag src="/icons/nextjs.svg">Nextjs</StackTag>
            <StackTag src="/icons/git.svg">Git</StackTag>
             <StackTag src="/icons/react.svg">React</StackTag>
            <StackTag src="/icons/nextjs.svg">Nextjs</StackTag>
            <StackTag src="/icons/git.svg">Git</StackTag>
        </div>
    </div>
  )
}

export default StackCard