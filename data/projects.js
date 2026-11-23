// Featured project data — manually curated, sourced from actual repository
// descriptions on github.com/Gvybzy. Update descriptions here if the repos change.
export const projects = [
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
    name: "WinFix-Toolkit",
    category: "Learning",
    status: "Active",
    technologies: ["Batch", "Windows", "Document Processing"],
    description:
        "A lightweight Windows toolkit designed to automate common system maintenance and troubleshooting tasks through simple batch scripts.",
    whatIBuilt:
        "A collection of batch-based utilities that automate Windows maintenance, system checks, cleanup tasks, and other practical troubleshooting functions.",
    whatILearned:
        "Working with Windows command-line tools, writing batch scripts, automating repetitive system tasks, and understanding how basic system utilities interact with the Windows environment.",
    github: "https://github.com/Gvybzy/WinFix-Toolkit",
  },
];
