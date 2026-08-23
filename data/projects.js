// Featured project data — manually curated, sourced from actual repository
// descriptions on github.com/Gvybzy. Update descriptions here if the repos change.
export const projects = [
  {
    name: "ALICE-AI-Agent",
    category: "Automation",
    status: "Active",
    technologies: ["Python", "AI Integration (Groq)"],
    description:
      "A voice-and-text desktop agent for Windows. Opens apps, checks news and weather, chats with AI, and controls the PC through simple commands.",
    whatIBuilt:
      "The command handling, voice/text input pipeline, and the integrations that let the agent open applications and pull live info on request.",
    whatILearned:
      "Structuring a Python app around user commands, wiring up an external AI API, and handling system-level interactions on Windows.",
    github: "https://github.com/Gvybzy/ALICE-AI-Agent",
  },
  {
    name: "Eskwela",
    category: "Learning",
    status: "Active",
    technologies: ["Python", "Document Processing"],
    description:
      "Turns any article, Word doc, PowerPoint, or PDF into a complete offline study package — reviewer, flashcards, and quiz — built for students with limited internet.",
    whatIBuilt:
      "The document-parsing pipeline that extracts content from multiple file formats and restructures it into study materials.",
    whatILearned:
      "Working across different file formats, automating content transformation, and designing for people with unreliable internet access.",
    github: "https://github.com/Gvybzy/Eskwela",
  },
  {
    name: "Log-analyzer",
    category: "Security",
    status: "COMPLETED",
    technologies: ["Python", "Log Analysis", "Detection Rules", "JSON", "Unit Testing"],
    description:
      "A Python command-line tool that analyzes web server logs and flags rule-based indicators of potentially suspicious activity.",
    whatIBuilt:
      "I built a local Python command-line log analyzer that parses Apache/Nginx-style access logs and applies six configurable detection rules.",
    whatILearned:
      "I practiced log parsing, regular expressions, IP-based event tracking, time-window analysis, URL decoding, detection rules, and unit testing.",
    github: "https://github.com/Gvybzy/Log-analyzer",
  },
  {
    name: "Web-Based-School-Project",
    category: "Web",
    status: "Active",
    technologies: ["HTML"],
    description: "A school-based web project.",
    whatIBuilt: "A web project built for a school requirement.",
    whatILearned: "Foundational web development and page structuring.",
    github: "https://github.com/Gvybzy/Web-Based-School-Project",
  },
];
