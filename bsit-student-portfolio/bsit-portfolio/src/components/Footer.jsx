import { Github, Linkedin, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { personal } from '../data/personal'

export default function Footer(){
  return <footer className="footer"><div className="container footer-inner"><div><div className="footer-name">{personal.name}</div><p className="muted">Learning, experimenting, and building one project at a time.</p></div><div className="footer-links"><Link to="/education">Education</Link><Link to="/experience">Experience</Link><Link to="/projects">Projects</Link><Link to="/contact">Contact</Link></div><div className="socials">{personal.github && <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a>}{personal.linkedin && <a href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a>}<a href={`mailto:${personal.email}`} aria-label="Email"><Mail size={18}/></a>}</div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} {personal.name}</span><span>Built with React</span></div></footer>
}
