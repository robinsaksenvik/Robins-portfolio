export type TimelineItem = {
  startDate: string;
  endDate: string;
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
    startDate: "Aug 2025",
    endDate: "Present",
    title: "Project Coordinator – dotDAGENE",
    detail:
      "Contributing to establishing dotDAGENE as a meeting place between students and industry. Working with concept development, organization and business collaboration.",
  },
  {
    startDate: "Aug 2024",
    endDate: "Present",
    title: "Sports Manager – Linjeforeningen Online (NTNU)",
    detail:
      "Responsible for sports events for several hundred computer science students at NTNU.",
  },
  {
    startDate: "Aug 2024",
    endDate: "Jun 2026",
    title: "Bachelor in Computer Science – NTNU",
    detail:
      "Currently pursuing Bachelor's degree in Computer Science at Norwegian University of Science and Technology (NTNU). Expected graduation June 2026.",
  },
  {
    startDate: "Sep 2023",
    endDate: "Nov 2024",
    title: "Content Producer – NTNU",
    detail:
      "Part-time role producing and adapting content for communication and information sharing at the university.",
  },
  {
    startDate: "Aug 2022",
    endDate: "Jun 2023",
    title: "Economics & Administration – Nord University",
    detail:
      "Completed one-year study program in Economics and Administration.",
  },
  {
    startDate: "Aug 2022",
    endDate: "Aug 2023",
    title: "Field Sales Representative – Sector Alarm Norge",
    detail:
      "Full-time position responsible for prospective sales and customer follow-up in Bodø.",
  },
  {
    startDate: "Aug 2021",
    endDate: "Jul 2022",
    title: "Border Guard – Norwegian Armed Forces",
    detail:
      "Served as border guard at Garnisonen i Sør-Varanger, protecting Norway's border with Russia during the ongoing conflict. Completed Basic Medic Level 3 certification.",
  },
];

export const values: Value[] = [
  {
    id: "creative-innovation",
    label: "Creative innovation"
  },
  {
    id: "user-focus", 
    label: "User focus"
  },
  {
    id: "collaborative-mindset",
    label: "Collaborative mindset"
  },
  {
    id: "initiative-driven",
    label: "Initiative driven"
  }
];

export const skills: Skill[] = [
  {
    id: "react-typescript",
    name: "React & TypeScript"
  },
  {
    id: "ui-ux-design",
    name: "UI/UX Design"
  },
  {
    id: "python",
    name: "Python"
  },
  {
    id: "java",
    name: "Java"
  },
  {
    id: "javascript-css-html", 
    name: "Javascript, CSS & HTML"
  },
  {
    id: "user-engagement",
    name: "User engagement & retention"
  },
  {
    id: "sales-marketing",
    name: "Sales & Marketing"
  },
  {
    id: "vibe-coding",
    name: "Vibe coding"
  },
];