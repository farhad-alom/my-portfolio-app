/**
 * Every piece of personal information lives here.
 * Change it once and it updates across the whole website.
 */
export const site = {
  name: "Farhad Alam",
  title: "Aspiring Full-Stack Web Developer",
  location: "Rajshahi, Bangladesh",

  email: "Forhad308@gmail.com",
  phone: "+8801735287645",
  phoneHref: "tel:+8801735287645",

  github: "https://github.com/farhad-alom",
  linkedin: "https://www.linkedin.com/in/farhad-alom/",

  logo: "/logo.png",
  profileImage: "/My%20image.png",

  /** The real CV that already lives in the public folder. */
  cv: {
    href: "/fake-cv.pdf",
    /** Name the file gets when the visitor downloads it. */
    downloadName: "Fake CV.pdf",
  },

  education: {
    degree: "Bachelor of Business Administration (BBA)",
    status: "Studied up to the fourth semester — degree not completed.",
    /** Leave empty ("") and the line is hidden. Add your university name here. */
    institution: "",
    description:
      "My BBA studies gave me a foundation in business and communication. I am now focusing that same discipline on web development, where I learn best by building real projects.",
  },

  /** Honest, current learning topics — update them as you grow. */
  currentlyLearning: [
    "Next.js App Router",
    "TypeScript",
    "Better Auth & authentication",
    "MongoDB & Mongoose data modelling",
    "Clean, accessible UI design",

  ],
} as const

/** Main navigation. Every link starts with "/" so it also works from project pages. */
export const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
] as const

/** Long copy that you may want to rewrite — kept in one place. */
export const content = {
  heroIntro:
    "I'm an aspiring Full-Stack Web Developer passionate about building responsive, accessible, and user-friendly web applications. I'm continuously improving my skills in modern frontend and backend technologies through hands-on projects and practical learning. I enjoy solving problems, exploring new tools, and turning ideas into functional digital experiences. My goal is to contribute to real-world projects, learn from experienced developers, and grow as a software professional.",

  aboutIntro:
    "I'm an aspiring Full-Stack Web Developer focused on learning modern web technologies and building practical projects. My development journey involves strengthening my frontend skills while gradually expanding into backend development, databases, authentication, and application architecture. I value consistency, curiosity, problem-solving, and continuous learning. I'm looking for opportunities to apply my skills, collaborate with others, and grow through real-world development challenges.",
}

export const meta = {
  description:
    "Farhad Alam is an aspiring Full-Stack Web Developer based in Rajshahi, Bangladesh. Explore his skills in React, Next.js, Node.js and MongoDB, view his projects, and download his CV.",
  /** Optional: set NEXT_PUBLIC_SITE_URL in .env later for absolute links (e.g. Open Graph). */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "",
}
