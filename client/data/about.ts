export type TimelineItem = {
  year: string;
  title: string;
  detail: string;
};

export type Value = {
  id: string;
  label: string;
};

export type Skill = {
  id: string;
  name: string;
};

export const timeline: TimelineItem[] = [
  {
    year: "2024",
    title: "Full-time gooner",
    detail:
      "Working with experimental code experiences for creative studios and performing artists. Focus on interactive installations and live performances.",
  },
  {
    year: "2022",
    title: "Launched retro portfolio",
    detail:
      "Built the first version of this portfolio with the goal of combining nostalgia with modern web technology.",
  },
  {
    year: "2020",
    title: "Started Mac Codes",
    detail:
      "Published tutorials and streams about creative code systems. Quickly became a gathering point for retro UI enthusiasts.",
  },
];

export const values: Value[] = [
  {
    id: "experimental-design",
    label: "Experimental design"
  },
  {
    id: "user-focus", 
    label: "User focus"
  },
  {
    id: "open-source",
    label: "Open source"
  },
  {
    id: "performing-arts",
    label: "Performing arts"
  }
];

export const skills: Skill[] = [
  {
    id: "react-typescript",
    name: "React & TypeScript"
  },
  {
    id: "creative-coding",
    name: "Creative coding"
  },
  {
    id: "webgl-threejs",
    name: "WebGL & Three.js"
  },
  {
    id: "realtime-ux",
    name: "Realtime UX"
  },
  {
    id: "design-systems", 
    name: "Design systems"
  },
  {
    id: "audio-visual-sync",
    name: "Audio/visual sync"
  }
];