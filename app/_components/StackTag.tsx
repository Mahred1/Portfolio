import Image from "next/image";
import React from "react";
type Props = {
  children: string;
  src:string
};
const StackTag = ({ children,src }: Props) => {
  return (
    <div className="flex gap-1 border-3 bg-surface px-2 py-0.5 font-mono text-sm  border-secondary">
      <Image src={src} alt={children} width={18} height={18} />
      {children}
    </div>
  );
};

export default StackTag;
