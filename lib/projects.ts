/**
 * Project data — this is the only file you need to edit to add your real work.
 *
 * Each object below is a PLACEHOLDER. Replace the text, add the real tech stack,
 * and fill in `repoUrl` / `liveUrl` when your project is online.
 * Any link you leave out is automatically hidden (no fake buttons).
 */
export type Project = {
  /** Used in the URL: /projects/your-project-slug */
  slug: string
  title: string
  /** One or two lines shown on the project card. */
  summary: string
  /** Short labels shown as badges. */
  stack: string[]
  /** Optional path to a screenshot inside /public, e.g. "/projects/task-app.png". */
  image?: string
  overview: string
  features: string[]
  challenges: { title: string; solution: string }[]
  improvements: string[]
  repoUrl?: string
  liveUrl?: string
  /** true = shown with a "Placeholder" badge and a notice on the detail page. */
  isPlaceholder: boolean
}

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Your First Project",
    image: "", // IMAGE add here 
    summary:
      "Replace this card with a project you have built. Describe what it does and who it is for in one or two clear sentences.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    overview:
      "This is placeholder text. Write a short overview of your project here: the problem it solves, what you learned while building it, and how someone would use it.",
    features: [
      "Add three to five real features of your project",
      "For example: responsive layout on every screen size",
      "For example: search, filtering, or a contact form",
    ],
    challenges: [
      {
        title: "What was the hardest part?",
        solution:
          "Explain how you solved it. This shows recruiters how you think and learn.",
      },
    ],
    improvements: [
      "What would you add next if you had more time?",
      "What did you learn that you would do differently now?",
    ],
    isPlaceholder: true,
  },
  {
    slug: "project-two",
    title: "Your Second Project",
    summary:
      "A second placeholder card. Swap in another real project, or delete this object from lib/projects.ts to show fewer cards.",
    stack: ["React", "Node.js", "MongoDB"],
    overview:
      "This is placeholder text. Use this space to describe a full-stack project: the frontend, the API, the database, and how the parts work together.",
    features: [
      "Replace with real features",
      "Add authentication details if your project has them",
      "Add the database models you designed",
    ],
    challenges: [
      {
        title: "What was the hardest part?",
        solution: "Describe the bug, the approach, and the outcome.",
      },
    ],
    improvements: [
      "Add a testing plan",
      "Add performance or accessibility improvements",
    ],
    isPlaceholder: true,
  },
  {
    slug: "project-three",
    title: "Your Third Project",
    summary:
      "A third placeholder card. Keep exactly three, or add more objects to the list — the grid adjusts automatically.",
    stack: ["Tailwind CSS", "Express.js", "Better Auth"],
    overview:
      "This is placeholder text. A good overview explains the goal in the first sentence, then what you built and what you learned.",
    features: [
      "Replace with real features",
      "Mention responsive design",
      "Mention accessibility if you worked on it",
    ],
    challenges: [
      {
        title: "What was the hardest part?",
        solution: "Explain the problem and your solution in plain language.",
      },
    ],
    improvements: ["List what you would improve next"],
    isPlaceholder: true,
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}
