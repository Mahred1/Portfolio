import Image from 'next/image'
import StackTag from './StackTag'

type Props ={
    children:string,
    src:string
    stack:string[],
    index:number
}
const StackCard = ({children,src,stack,index}:Props) => {
  return (
    <div className='bg-surface px-4 py-3 border-2 border-foreground'>
        <div className='border-b-2 border-foreground pb-2 mb-2 flex justify-between items-center'>
            <div className='flex items-center gap-2 font-medium text-base'>
                <Image src={src} alt={children} width={20} height={20} />
                {children}
            </div>
            <span className='opacity-60 text-xs font-mono'>0{index+1}</span>
        </div>
        <div className='grid gap-2 grid-cols-2'>
            {stack && stack.map((item)=><StackTag  key={item} src={`/icons/${item.toLowerCase()}.svg`}>{item}</StackTag>)}
            
        </div>
    </div>
  )
}

export default StackCard