import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import PageMeta from '../components/PageMeta'
import EducationCard from '../components/EducationCard'
import CertificationCard from '../components/CertificationCard'
import Timeline from '../components/Timeline'
import { education } from '../data/education'
import { certifications } from '../data/certifications'
export default function Education(){ return <main className="page"><PageMeta title="Education" description="Academic background and certifications for a BSIT student developer."/><div className="container page-header"><SectionTitle eyebrow="Education" title="Building a foundation in IT." description="The academic journey behind the projects, experiments, and concepts I’m working to understand."/></div><section className="section pt-0"><div className="container narrow"><Timeline>{education.map(item=><motion.div key={item.degree} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}}><EducationCard item={item}/></motion.div>)}</Timeline></div></section><section className="section section-surface"><div className="container"><SectionTitle eyebrow="Certifications" title="Learning beyond the classroom."/><div className="cert-grid">{certifications.length ? certifications.map(c=><CertificationCard key={`${c.name}-${c.date}`} item={c}/>) : <div className="empty-state"><h3>Certifications will appear here.</h3><p className="muted">I’ll add certificates as I continue learning and completing new courses.</p></div>}</div></div></section></main> }
