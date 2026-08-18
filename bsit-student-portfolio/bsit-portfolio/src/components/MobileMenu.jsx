import { AnimatePresence, motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

const links = [{to:'/',label:'Home'},{to:'/education',label:'Education'},{to:'/experience',label:'Experience'},{to:'/projects',label:'Projects'},{to:'/contact',label:'Contact'}]

export default function MobileMenu({ open, onClose }) {
  return <AnimatePresence>
    {open && <motion.div initial={{opacity:0,height:0}} animate={{opacity:1,height:'auto'}} exit={{opacity:0,height:0}} className="mobile-menu">
      {links.map(link => <NavLink key={link.to} to={link.to} end={link.to === '/'} onClick={onClose}>{link.label}</NavLink>)}
    </motion.div>}
  </AnimatePresence>
}
