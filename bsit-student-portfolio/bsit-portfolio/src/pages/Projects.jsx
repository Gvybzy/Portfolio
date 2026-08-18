import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import SectionTitle from '../components/SectionTitle'
import PageMeta from '../components/PageMeta'
import { projects } from '../data/projects'
export default function Projects(){ const filters=['All',...new Set(projects.map(p=>p.category))]; const [active,setActive]=useState('All'); const filtered=useMemo(()=>active==='All'?projects:projects.filter(p=>p.category===active),[active]); return <main className="page"><PageMeta title="Projects" description="School, personal, and experimental projects built while learning IT."/><div className="container page-header"><SectionTitle eyebrow="Projects" title="Learning happens in the build." description="A growing collection of school exercises, experiments, and personal projects. Replace the sample entries with your actual work as you go."/><div className="filters" role="group" aria-label="Filter projects">{filters.map(f=><button key={f} className={`filter-btn ${active===f?'active':''}`} onClick={()=>setActive(f)}>{f}</button>)}</div></div><section className="section pt-0"><div className="container project-grid"><AnimatePresence mode="popLayout">{filtered.map(p=><ProjectCard key={p.id} project={p}/>)}</AnimatePresence></div></section></main> }
