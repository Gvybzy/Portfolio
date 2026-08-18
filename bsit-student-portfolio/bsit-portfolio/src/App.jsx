import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { useTheme } from './hooks/useTheme'
import Home from './pages/Home'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function AppShell(){ const {theme,toggleTheme}=useTheme(); return <BrowserRouter><ScrollToTop/><Navbar theme={theme} onThemeToggle={toggleTheme}/><Routes><Route path="/" element={<Home/>}/><Route path="/education" element={<Education/>}/><Route path="/experience" element={<Experience/>}/><Route path="/projects" element={<Projects/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<Home/>}/></Routes><Footer/></BrowserRouter> }
export default function App(){ return <HelmetProvider><AppShell/></HelmetProvider> }
