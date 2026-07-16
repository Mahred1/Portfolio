import { cn } from "@/app/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Social = ({ src, alt, href, className }: { src: string; alt: string; href: string; className: string }) => {
  return (
    <div className={cn("border-2 p-1", className)}>
      <Link target="_blank" href={href}>
        {" "}
        <Image src={src} width={16} height={16} alt={alt} className="md:w-5.5" />
      </Link>
    </div>
  );
};

export default Social;
