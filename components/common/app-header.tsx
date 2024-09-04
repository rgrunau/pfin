'use client';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";


export default function AppHeader() {
   const [navOpen, setNavOpen] = useState(false);
    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

  return (
    <header className="font-extrabold bg-gradient-to-r from-sky-600 via-blue-800 to-blue-950 p-0">
        <div className="p-2 pr-2">
          <button 
              type="button"
              className="text-xl text-slate-50"
              onClick={toggleNav}
          >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>
          </button>
        </div>
        <nav 
            className={`w-screen lg:w-96 transition-all duration-500 ease-in-out z-20 
            bg-white ${navOpen ? 'translate-x-0' : '-translate-x-full'}
            absolute top-0 left-0 h-screen flex flex-col justify-start items-center`
            }
        >    
            <div className="w-full flex items-center justify-end p-2">
                <div className="p-2">

                    <button
                        type="button"
                        className="text-2xl italic text-slate-950"
                        onClick={toggleNav}
                    >
                        close
                    </button>
                </div>
            </div>
            <div className="flex flex-col items-center justify-start italic">
                
                    <Link 
                        key={""}
                        href={"/#"}
                        className="text-slate-900 text-3xl my-2"
                    >
                        route
                    </Link>
                  
        </div>
        <div className="flex flex-col items-center justify-start italic">
           <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
            
      </nav>
      
    </header>
        
    );
}


 


