export type Project = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  headline: string;
  image: string;
  description: string;
  stack: string[];
  repoUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "possimus",
    title: "Possimus",
    date: "2024-10-08",
    summary:
      "A retro-inspired dashboard for creators. Focus on micro-interactions and keyboard shortcuts.",
    headline: "Meet Possimus",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
    description:
      "A modular dashboard built with React and websockets to give creators instant updates on sales data, publications and community activity. The UI is inspired by retro hardware and analog synth aesthetics.",
    stack: ["React", "TypeScript", "Tailwind", "Supabase"],
    repoUrl: "https://github.com/mac/possimus",
  },
  {
    slug: "dolorum-ullam",
    title: "Dolorum Ullam Totam",
    date: "2024-07-14",
    summary:
      "Live coding platform that synchronizes light, sound and visuals via WebMIDI.",
    headline: "Live code in sync",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1000&q=80",
    description:
      "A stage toolkit that lets musicians program visual content while the concert is playing. The project exposes a modular node graph and supports both WebGL and laser projectors.",
    stack: ["Three.js", "WebMIDI", "Node.js", "Vite"],
    liveUrl: "https://live.mac.codes",
    repoUrl: "https://github.com/mac/dolorum-ullam",
  },
  {
    slug: "nexus",
    title: "Nexus",
    date: "2024-02-24",
    summary:
      "Experimental browser IDE with offline support and focus mode.",
    headline: "Nexus: an IDE for focus",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1000&q=80",
    description:
      "Nexus is a progressive web app inspired by classic terminal windows. It supports modular extensions, offline storage through IndexedDB and live collaboration via WebRTC.",
    stack: ["PWA", "IndexedDB", "WebRTC", "Radix UI"],
    liveUrl: "https://nexus.mac.codes",
  },
];

export const featuredProjects = projects.slice(0, 3);
