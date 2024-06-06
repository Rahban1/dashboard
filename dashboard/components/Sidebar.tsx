import React from 'react'
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
import { LayoutDashboard,
         Newspaper,
         Folder,
         CreditCard,
         Settings,
         User
    } from 'lucide-react'
import Link from 'next/link'
  

function Sidebar() {
  return (<Command className='bg-secondary rounded-none'>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>
        <LayoutDashboard className='mr-2 h-4 w-4'/>
        <Link className='text-lg' href="/">Dashboard</Link>
      </CommandItem>
      <CommandItem>
        <Newspaper className='mr-2 h-4 w-4'/>
        <Link className='text-lg' href="/posts">Posts</Link>
      </CommandItem>
      <CommandItem>
        <Folder className='mr-2 h-4 w-4'/>
        <Link className='text-lg' href="#">Categories</Link>
      </CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem>
        <User className='mr-2 w-4 h-4'/>
        <span className='text-lg'>Profile</span>
        <CommandShortcut>Ctrl + P</CommandShortcut>
      </CommandItem>
      <CommandItem>
        <CreditCard className='mr-2 w-4 h-4'/>
        <span className='text-lg'>Billing</span>
        <CommandShortcut>Ctrl + B</CommandShortcut>
      </CommandItem>
      <CommandItem>
        <Settings className='mr-2 w-4 h-4'/>
        <span className='text-lg'>Settings</span>
        <CommandShortcut>Ctrl + S</CommandShortcut>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>
    )
}

export default Sidebar