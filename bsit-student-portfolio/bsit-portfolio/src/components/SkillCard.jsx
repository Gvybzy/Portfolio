import { Braces, Code2, Database, FileCode2 } from 'lucide-react'

const iconMap = { python: Code2, braces: Braces, js: Code2, cplusplus: Braces, html: FileCode2, css: FileCode2, php: FileCode2, database: Database }
export default function SkillCard({ skill }) { const Icon = iconMap[skill.icon] || Code2; return <div className="skill-card"><div className="skill-icon"><Icon size={19}/></div><div><div className="skill-name">{skill.name}</div><div className="skill-status">{skill.status}</div></div></div> }
