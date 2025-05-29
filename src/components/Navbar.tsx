import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { ModeToggle } from './theme/mode-provider'
import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from '@/components/ui/sheet'
import { useState } from 'react'
import { useNavigate } from 'react-router'

function Navbar() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const handleNavigation = (path: string) => {
    navigate(path)
    setOpen(false)
  }

  return (
    <div className="flex items-center max-w-5xl mx-auto justify-between mb-6">
      <p className="font-bold text-lg">Seth Green</p>
      {/* Desktop Nav */}
      <div className="hidden md:flex justify-between items-center">
        <NavigationMenu className="mr-8">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink onClick={() => handleNavigation('/')}>
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink onClick={() => handleNavigation('/about')}>
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink onClick={() => handleNavigation('/projects')}>
                Projects
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink onClick={() => handleNavigation('/contact')}>
                Contact
              </NavigationMenuLink>
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
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <nav className="flex flex-col gap-4 mt-8 px-6">
              <button
                onClick={() => handleNavigation('/')}
                className="py-2 text-left hover:bg-accent hover:text-accent-foreground px-4 rounded-md transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation('/about')}
                className="py-2 text-left hover:bg-accent hover:text-accent-foreground px-4 rounded-md transition-colors"
              >
                About
              </button>
              <button
                onClick={() => handleNavigation('/projects')}
                className="py-2 text-left hover:bg-accent hover:text-accent-foreground px-4 rounded-md transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => handleNavigation('/contact')}
                className="py-2 text-left hover:bg-accent hover:text-accent-foreground px-4 rounded-md transition-colors"
              >
                Contact
              </button>
            </nav>
          </SheetContent>
        </Sheet>
        <ModeToggle />
      </div>
    </div>
  )
}

export default Navbar
