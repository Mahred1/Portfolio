import Image from "next/image";
import React from "react";
type Props = {
  children: string;
  src:string
};
const StackTag = ({ children,src }: Props) => {
  return (
    <div className="flex gap-2 border-2 bg-surface px-2 py-1 font-mono text-xs  border-gray-300">
      <Image src={src} alt={children} width={18} height={18} />
      {children}
    </div>
  );
};

export default StackTag;
