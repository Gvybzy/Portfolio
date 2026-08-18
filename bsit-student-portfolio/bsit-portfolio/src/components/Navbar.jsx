import { Menu, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { personal } from '../data/personal'
import ThemeToggle from './ThemeToggle'
import MobileMenu from './MobileMenu'

const links = [{to:'/',label:'Home'},{to:'/education',label:'Education'},{to:'/experience',label:'Experience'},{to:'/projects',label:'Projects'},{to:'/contact',label:'Contact'}]

export default function Navbar({ theme, onThemeToggle }) {
  const [open, setOpen] = useState(false)
  const navClass = ({isActive}) => `nav-link ${isActive ? 'active' : ''}`
  return <header className="site-header">
    <div className="container nav-inner">
      <NavLink to="/" className="brand" aria-label="Home"><span className="brand-mark">{personal.shortName}</span><span>{personal.name}</span></NavLink>
      <nav className="desktop-nav" aria-label="Primary navigation">{links.map(link => <NavLink key={link.to} to={link.to} end={link.to === '/'} className={navClass}>{link.label}</NavLink>)}</nav>
      <div className="nav-actions"><ThemeToggle theme={theme} onToggle={onThemeToggle}/><button className="icon-button mobile-only" onClick={()=>setOpen(v=>!v)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open?'Close menu':'Open menu'}>{open?<X size={21}/>:<Menu size={21}/>}</button></div>
    </div>
    <div id="mobile-nav"><MobileMenu open={open} onClose={()=>setOpen(false)}/></div>
  </header>
}
