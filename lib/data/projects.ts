export type Project = {
  title: string;
  subtitle: string;
  start: string;
  end: string;
  description: string;
  bullets: string[];
  tags: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "Electronic Settlers of Catan",
    subtitle: "Embedded Hardware + Mobile App",
    start: "Jan 2026",
    end: "Apr 2026",
    description:
      "An electronic version of the classic board game Settlers of Catan, combining a physical LED board with a companion mobile app for live gameplay.",
    bullets: [
      "Wrote C++ firmware for an ESP32 microcontroller to manage hardware and track all game state information.",
      "Built a mobile application using React Native and deployed it as a beta for users to download and play.",
    ],
    tags: ["C++", "ESP32", "React Native", "Embedded Systems"],
    github: "https://github.com/alexlopez04",
  },
  {
    title: "PokéTrade",
    subtitle: "Collaborative Pokémon Trading Website",
    start: "Feb 2025",
    end: "Apr 2025",
    description:
      "A full-stack web application that lets users buy, sell, and trade their favorite Pokémon, built with Django and the PokéAPI.",
    bullets: [
      "Used Django and PokéAPI to create a web app for buying, selling, and trading Pokémon.",
      "Served as Scrum master for a team of 5 programmers, facilitating standups, retrospectives, and managing the backlog.",
      "Coordinated frontend and backend integration, ensuring seamless data flow between the UI and database.",
    ],
    tags: ["Django", "Python", "REST API", "Scrum", "PostgreSQL"],
    github: "https://github.com/alexlopez04",
  },
];
