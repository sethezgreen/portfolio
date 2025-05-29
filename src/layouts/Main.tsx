import Navbar from '@/components/Navbar'
import { Outlet } from 'react-router'

function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center max-w-4xl mx-auto">
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout
