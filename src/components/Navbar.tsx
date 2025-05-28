import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { NavLink } from 'react-router'
import { ModeToggle } from './theme/mode-provider'
import { Menu } from 'lucide-react'
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex items-center max-w-5xl mx-auto justify-between mb-6">
      <p className="font-bold text-lg">Seth Green</p>
      {/* Desktop Nav */}
      <div className="hidden md:flex justify-between items-center">
        <NavigationMenu className="mr-8">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavLink to="/">
                <NavigationMenuLink>Home</NavigationMenuLink>
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink to="/about">
                <NavigationMenuLink>About</NavigationMenuLink>
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink to="/projects">
                <NavigationMenuLink>Projects</NavigationMenuLink>
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink to="/contact">
                <NavigationMenuLink>Contact</NavigationMenuLink>
              </NavLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <ModeToggle />
      </div>
      {/* Mobile Nav */}
      <div className="md:hidden flex items-center">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button aria-label="Open menu" className="mr-4">
              <Menu size={28} />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="p-0">
            <nav className="flex flex-col gap-4 mt-8 px-6">
              <NavLink to="/" className="py-2" onClick={() => setOpen(false)}>
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="py-2"
                onClick={() => setOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                to="/projects"
                className="py-2"
                onClick={() => setOpen(false)}
              >
                Projects
              </NavLink>
              <NavLink
                to="/contact"
                className="py-2"
                onClick={() => setOpen(false)}
              >
                Contact
              </NavLink>
            </nav>
          </SheetContent>
        </Sheet>
        <ModeToggle />
      </div>
    </div>
  )
}

export default Navbar
