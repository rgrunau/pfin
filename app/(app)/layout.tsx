import AppHeader from "@/components/common/app-header";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";


export default function AppLayout({ children }: Readonly<{ children: React.ReactNode }>) { 


  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-200 text-slate-700 p-4">
       <AppHeader />
      <div className="w-full">
        {children}
      </div>
    </div>
  )
}