import { cn } from "./lib/utils";

export default function Loading({className}:{className:string}) {
  return (
    <div className={cn("flex h-screen w-full items-center justify-center",className)}>
      <div className="flex flex-col items-center space-y-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        <p className="text-sm text-muted-foreground">Loading....</p>
      </div>
    </div>
  );
}