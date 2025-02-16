import Image from "next/image"
import Link from "next/link"
import { Avatar , AvatarImage, AvatarFallback } from "./ui/avatar"
import ThemeToggler from "./ThemeToggler"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  


export default function Navbar(){
    return <div className="bg-primary dark:bg-slate-700 text-white py-2 px-5 flex justify-between">
        <div className="flex justify-center items-center">
            <Link href={'/'}>
                Dashboard
            </Link>
            </div>

        <div className='flex items-center'>
            <ThemeToggler/>
            <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
                <Avatar>
                    <AvatarImage src='https://github.com/shadcn.png' alt="@shadcn"/>
                    <AvatarFallback className="text-black">BT</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link href="/profile">
                        Profile
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="/auth">
                        Logout
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

        </div>

        
    </div>
}