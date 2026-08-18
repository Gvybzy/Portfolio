import { ArrowUpRight, Github } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ProjectCard({ project, compact=false }) {
 return <motion.article layout initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} exit={{opacity:0,y:14}} transition={{duration:.25}} className={`project-card ${compact?'compact':''}`}>
   <div className="project-image-wrap"><img src={project.image} alt={`${project.title} preview`} className="project-image" loading="lazy" onError={(e)=>{e.currentTarget.src='/assets/projects/project-placeholder.svg'}}/><span className="project-category">{project.category}</span></div>
   <div className="project-body"><h3>{project.title}</h3><p className="muted">{project.description}</p><div className="tag-row">{project.technologies.map(t=><span className="tag" key={t}>{t}</span>)}</div><div className="card-actions">{project.github && <a className="text-link" href={project.github} target="_blank" rel="noreferrer">GitHub <Github size={15}/></a>}{project.demo && <a className="text-link" href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={15}/></a>}</div></div>
 </motion.article>
}
