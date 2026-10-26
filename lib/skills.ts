import type { ComponentType } from "react"
import {
  SiBetterauth,
  SiCss,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiMongodb,
  SiMongoose,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si"
import { Bot, Brain } from "lucide-react"

export type SkillIcon = ComponentType<{ className?: string }>

export type Skill = {
  name: string
  icon: SkillIcon
}

export type SkillGroup = {
  id: string
  title: string
  description: string
  skills: Skill[]
}

/**
 * Add or remove skills here. `icon` can be any brand icon from `react-icons/si`
 * or any Lucide icon, so nothing breaks if a logo does not exist.
 */
export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description:
      "Building responsive, accessible interfaces with modern React and utility-first CSS.",
    skills: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    description:
      "Learning server-side logic, REST APIs, and authentication flows step by step.",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Better Auth", icon: SiBetterauth },
    ],
  },
  {
    id: "database-tools",
    title: "Database & Tools",
    description:
      "Storing data safely, tracking changes with Git, and using AI as a coding partner.",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Mongoose", icon: SiMongoose },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "AI-Assisted Coding", icon: Bot },
      { name: "AI Mindset & Engineering", icon: Brain },
    ],
  },
]
