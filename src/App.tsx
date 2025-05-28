import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import { ThemeProvider } from './components/theme/theme-provider'
import MainLayout from './layouts/Main'

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={Home()} />
            <Route path="/about" />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
