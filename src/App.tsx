import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import { ThemeProvider } from './components/theme/theme-provider'
import MainLayout from './layouts/Main'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={Home()} />
            <Route path="/about" element={About()} />
            <Route path="/projects" element={Projects()} />
            <Route path="/contact" element={Contact()} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
