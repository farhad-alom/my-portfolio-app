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
  // {
  //   slug: "project-one",
  //   title: "Your First Project",
  //   image: "", // IMAGE add here 
  //   summary:
  //     "Replace this card with a project you have built. Describe what it does and who it is for in one or two clear sentences.",
  //   stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  //   overview:
  //     "This is placeholder text. Write a short overview of your project here: the problem it solves, what you learned while building it, and how someone would use it.",
  //   features: [
  //     "Add three to five real features of your project",
  //     "For example: responsive layout on every screen size",
  //     "For example: search, filtering, or a contact form",
  //   ],
  //   challenges: [
  //     {
  //       title: "What was the hardest part?",
  //       solution:
  //         "Explain how you solved it. This shows recruiters how you think and learn.",
  //     },
  //   ],
  //   improvements: [
  //     "What would you add next if you had more time?",
  //     "What did you learn that you would do differently now?",
  //   ],
  //   isPlaceholder: true,
  // },
  // ========================================================================
  {

    slug: "salonbook",
    title: "SalonBook",
    image: "/salonbook.png",
    summary:
      "A full-stack salon appointment booking platform. Customers book services and pay online with Stripe after the admin confirms, and admins manage services, appointments, users, and payments.",
    stack: [
      "Next.js",
      "Express.js",
      "MongoDB",
      "Better Auth",
      "JWT",
      "Stripe",
      "Tailwind CSS",
    ],
    overview:
      "SalonBook lets customers explore salon services, request an appointment, and pay online once the admin confirms it. The admin has a separate dashboard to manage services, appointments, customers, and payment transactions. I built the client with Next.js and the REST API with Express.js and MongoDB. Authentication uses Better Auth, protected API routes use JWT, and payments use Stripe Checkout with a verified webhook.",
    features: [
      "Browse services with search by name, category filter, and sort by price",
      "Email/password and Google sign-in with Better Auth",
      "Appointment booking with date, time slot, and message, with duplicate slot protection",
      "Customer dashboard: appointment statistics, cancel pending requests, and pay for confirmed ones",
      "Stripe Checkout in test mode, with payment marked as Paid only after a verified webhook",
      "Admin dashboard: manage services with image upload, confirm or cancel appointments, block or unblock users, and view transactions",
      "Role-based access checked on the server, so users cannot open another role's dashboard or APIs",
      "Fully responsive design with toast notifications and loading states",
    ],
    challenges: [
      {
        title: "Stripe webhook and payment verification",
        solution:
          "The payment status must change only after Stripe confirms it, not when the customer returns to the success page. I verified the webhook signature on the server, then updated the appointment to Paid and saved the transaction. This taught me how real payment flows work.",
      },
      {
        title: "Role-based security on the server",
        solution:
          "Hiding dashboard links is not real security. I added JWT verification middleware on the Express server and checked the user's role, and blocked status, on every protected API.",
      },
      {
        title: "Google sign-in error on the live site",
        solution:
          "After deployment, Google sign-in returned an account linking error. I debugged the authentication and deployment settings until it worked on the live site.",
      },
    ],
    improvements: [
      "Show only the time slots that are free for the selected service and date",
      "Send email notifications when an appointment is confirmed or cancelled",
      "Let customers leave ratings and reviews after their appointment",
      "Add pagination to the admin tables and the services page",
      "Add automated tests for the booking and payment flow",
    ],
    repoUrl: "https://github.com/farhad-alom/salonbook-client",
    liveUrl: "https://salonbook-client-puce.vercel.app",
    isPlaceholder: false,
  },
  // ====================================================================

  {
    slug: "studiospace",
    title: "StudioSpace",
    image: "/studiospace3.png",
    summary:
      "A full-stack marketplace where photographers, filmmakers, podcasters, and musicians can find, book, and list creative studios by the hour.",
    stack: [
      "Next.js",
      "Express.js",
      "MongoDB",
      "Better Auth",
      "JWT",
      "Tailwind CSS",
      "Swiper.js",
    ],
    overview:
      "StudioSpace is a peer-to-peer platform for sharing creative workspaces. Visitors can search studios by title or location, filter by category, and book a date and time slot with a live hourly price. Studio owners can add, update, and delete their own listings. I built the client with Next.js and the REST API with Express.js and MongoDB. Authentication uses Better Auth with Google login, and the session is kept in an HTTPOnly cookie.",
    features: [
      "Search studios by title or location and filter by category",
      "Booking with date, time slot, and live hourly price calculation",
      "Email/password and Google login with a JWT session in an HTTPOnly cookie",
      "Add, edit, and delete studios with image upload, and the server checks ownership",
      "Booking status flow: Pending, Confirmed, Completed, or Cancelled",
      "Double-booking prevention, so overlapping confirmed bookings are blocked",
      "Private routes protected with proxy.ts and a client-side PrivateRoute",
      "PDF invoice download for confirmed bookings, plus dark and light theme",
      "Responsive design with skeleton loaders and toast notifications",
    ],
    challenges: [
      {
        title: "Login cookie not working between two deployed domains",
        solution:
          "The client and server are on different Vercel domains, so the session cookie was not sent reliably. I routed all API calls through relative /api URLs and used a Next.js rewrite to the backend. This keeps requests same-origin, so the cookie is always sent.",
      },
      {
        title: "Preventing double bookings",
        solution:
          "Two bookings must not use the same studio at overlapping times. Before saving a booking, the server checks existing confirmed bookings for a time overlap and returns a 409 error if there is a clash.",
      },
      {
        title: "Protecting private pages and APIs",
        solution:
          "I added authentication middleware on the server for private endpoints, ownership checks for studios and bookings, and proxy.ts on the client so unauthenticated users are redirected before the page loads.",
      },
    ],
    improvements: [
      "Add online payment for confirmed bookings",
      "Add ratings and reviews for studios",
      "Show an availability calendar for each studio",
      "Add email notifications for booking updates",
      "Add pagination and more filters on the studios page",
    ],
    repoUrl: "https://github.com/farhad-alom/studioSpace-client",
    liveUrl: "https://studio-space-client-five.vercel.app",
    isPlaceholder: false,
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}
