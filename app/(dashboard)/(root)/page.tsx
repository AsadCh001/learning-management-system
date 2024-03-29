import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
 
export default function Home() {
  return (
    <div className="h-screen">
      <UserButton />
      <Button>Click me</Button>
    </div>
  )
}