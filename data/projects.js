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
  {
    name: "Raspberry-Pi-Distance-Monitoring",
    category: "Hardware",
    status: "In Development",
    technologies: ["Raspberry Pi", "Python", "Ultrasonic Sensor", "LED", "Buzzer"],
    description: 
        "A Raspberry Pi-based distance monitoring system that measures object distance in centimeters and provides visual and audio warnings.",
    whatIBuilt: 
        "A working prototype that measures distance using an ultrasonic sensor and responds with different LED colors and buzzer sounds depending on how close the object is.",
    whatILearned: 
        "Learned the basics of working with Raspberry Pi hardware, ultrasonic distance sensing, GPIO components, and programming hardware responses with Python.",
    github: "https://github.com/Gvybzy/raspberry-pi-distance-monitoring",
},
];
