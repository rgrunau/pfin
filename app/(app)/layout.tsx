import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";


export default function AppLayout({ children }: Readonly<{ children: React.ReactNode }>) { 


  return (
    <div className="w-full min-h-screen flex flex-col">
       <header className="w-full px-4 py-2">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
      </header>
      <div className="w-full">
        {children}
      </div>
    </div>
  )
}