import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <div className="h-screen">
      <UserButton />
    </div>
  )
}

