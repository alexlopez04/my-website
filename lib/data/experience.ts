export type Experience = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
  tags: string[];
  link?: string;
};

export const experiences: Experience[] = [
  {
    company: "NCR Voyix",
    role: "Capstone Project Consultant",
    location: "Atlanta, GA",
    start: "Oct 2025",
    end: "Apr 2026",
    bullets: [
      "Consulted NCR's Data & AI Team on a semester-long capstone project through the Georgia Tech Denning T&M Program.",
      "Served as PM on an interdisciplinary team, facilitating weekly meetings with multiple stakeholders and ensuring alignment.",
      "Collaborated with four teammates to deliver an agentic AI feature for a customer-facing online grocery shopping platform.",
    ],
    tags: ["AI", "Product Management", "Agile"],
  },
  {
    company: "Georgia Tech Research Institute",
    role: "Embedded Software Engineering Co-op",
    location: "Atlanta, GA",
    start: "Aug 2024",
    end: "Aug 2025",
    bullets: [
      "Coordinated with cross-functional HW and SW engineering teams to integrate firmware updates for US military aircraft.",
      "Increased robustness of code by writing comprehensive unit tests of mission-critical software in C++.",
      "Implemented DevOps practices with GitLab CI/CD pipelines to manage testing cycles and bug tracking.",
      "Wrote Python scripts to automate source code updates and organization of internal files and directories.",
    ],
    tags: ["C++", "Python", "CI/CD", "Embedded Systems", "GitLab"],
  },
  {
    company: "Siemens — Smart Infrastructure",
    role: "R&D Hardware Engineer Intern",
    location: "Peachtree Corners, GA",
    start: "May 2024",
    end: "Aug 2024",
    bullets: [
      "Designed new schematic and PCB layout for ground fault circuit breakers aimed at reducing heat and power consumption.",
      "Performed simulations on analog circuits in SIMetrix to test and modify, ensuring compatibility with national electric codes.",
      "Programmed Raspberry Pi in Python to test the functionality of new components, verified using oscilloscope and DMM.",
      "Reduced power consumption of circuit board by over 50%, also reduced the size of the board and number of components.",
    ],
    tags: ["PCB Design", "Python", "Raspberry Pi", "Altium", "Analog Circuits"],
  },
];
