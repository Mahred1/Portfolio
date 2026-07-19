import Link from 'next/link'
import React from 'react'

const CertificateCard = () => {
  return (
     <Link href={""} target='_blank' className=" group bg-surface py-3 px-4 border-2 border-foreground flex items-start justify-start gap-6 hover:bg-secondary hover:border-accent transition-colors ease-in">
      <div className="bg-surface w-12 h-10  border-secondary border-2 text-center">
        
      </div>
      <div className="w-full">
        {/* category */}
        <div className="flex w-full justify-between font-mono text-gray-600 uppercase text-xs items-start">
          <span>SAA-CB3</span>
          <span
          >2025
          </span>
        </div>
        <div>
          <h1 className="font-semibold text-base">Aws Solutions Architect </h1>
          <p className="text-gray-600 font-medium text-xs">Amazon web serivces</p>
        </div>
        <p className='text-gray-600 text-xs group-hover:text-accent uppercase font-mono mt-3'>View Certificate</p>
      </div>
    </Link>
  )
}

export default CertificateCard