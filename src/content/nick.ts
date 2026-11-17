import type { Project } from "./types";

// Source: Dean's Nick brief (2026-11-16). Every fact and number below comes
// from Dean directly. Nick is in beta with a small first group of testers, so
// there are no outcome metrics; build stats are true as of Nov 16, 2026.
export const nick: Project = {
  slug: "nick",
  title: "Nick",
  shortTitle: "Nick",
  tagline: "Returns, just in the nick of time.",
  summary:
    "A return-reminder app that reads your order emails, works out when each return window closes, and emails you before it does. Built for shoppers who can't afford to miss a refund, and just launched in beta to a small first group of testers.",
  image: "/images/nick.webp",
  imageAlt:
    "Nick's Home and Purchases screens in phone frames, shown with an example account and made-up purchases.",
  kind: "Consumer",
  tileLabel: "Consumer beta",
  spec: [
    { label: "Role", value: "Product lead and builder, working with Claude" },
    { label: "Status", value: "Beta, launched November 2026" },
    { label: "Category", value: "Consumer shopping utility" },
    { label: "Stack", value: "Claude, Node, Supabase, Netlify" },
  ],
  links: [
    { label: "Visit nickreturns.com", href: "https://nickreturns.com" },
    { label: "Read the launch post", href: "https://www.linkedin.com/feed/update/urn:li:activity:7528242083778899969/" },
  ],
  sections: [
    {
      id: "overview",
      title: "Overview",
      blocks: [
        {
          type: "facts",
          items: [
            { label: "Purpose", text: "Help people get their money back on returns they'd otherwise miss. Nick turns order emails into return dates and reminds people before each window closes." },
            { label: "Deployment", text: "Live at [nickreturns.com](https://nickreturns.com) since November 16, 2026, in beta with a small first group of testers. Gmail only for now. While Nick is in Google's testing phase, sign-in shows an \"unverified app\" warning." },
            { label: "My role", text: "I'm a product person, not an engineer by title, and I ran Nick like a product. Claude Code wrote the code. I made the product decisions, reviewed every change, ran the database migrations, and tested with real people." },
          ],
        },
      ],
    },
    {
      id: "context",
      title: "Context",
      blocks: [
        { type: "p", text: "A while back I found a pair of Nike shorts in the back of my closet, still in the plastic. Sixty dollars, and by the time I went to return them, the window had already closed." },
        { type: "p", text: "On November 3 I posted on LinkedIn offering to build tools for the everyday problems people send me. Nick is the first of those tools, and it started with my own problem." },
        {
          type: "facts",
          items: [
            { label: "Target audience", text: "\"Sarah,\" a financially stretched shopper at value retailers like Old Navy, TJ Maxx, Ross, Marshalls, Target, Walmart, and Amazon." },
          ],
        },
        { type: "p", text: "For Sarah, a missed $40 to $60 return is bills money, not an annoyance. She wants something she can set and forget, and she has to trust it completely or she won't use it. Every decision in Nick was made for her, not for a power user." },
      ],
    },
    {
      id: "problem",
      title: "Problem statement",
      blocks: [
        { type: "p", text: "The reminder was the easy part. The hard part was knowing each store's real return policy, because a confident wrong date is worse than no date." },
        {
          type: "list",
          items: [
            { text: "Some stores count from the day you buy, and some from the day it arrives." },
            { text: "Some extend their windows over the holidays." },
            { text: "Some, like Costco, give no deadline at all for most things." },
          ],
        },
        { type: "p", text: "Return apps that cover thousands of stores end up guessing. I wanted Nick to cover fewer stores and get them right." },
        { type: "h", text: "KPI goals" },
        {
          type: "list",
          items: [
            { label: "Return dates are right", text: "Every date Nick gives matches the store's own policy" },
            { label: "Reminders go out on time", text: "3 days before and on the last day of every window" },
            { label: "Purchases are found", text: "Nick picks up the order emails in a connected inbox" },
          ],
        },
      ],
    },
    {
      id: "approach",
      title: "Approach",
      blocks: [
        { type: "h", text: "Trust beats coverage" },
        { type: "p", text: "Nick launched with 16 stores. Each one is checked against the store's own policy page before Nick gives anyone a date." },
        { type: "h", text: "Key product decisions" },
        {
          type: "list",
          items: [
            { label: "Never guess a date", text: "If Nick doesn't know a store yet, it says so and tells her to check her receipt, instead of inventing a deadline. Coverage is a state, not an error." },
            { label: "Quote every policy word for word", text: "Nick drafts each store's policy with Claude from the store's own page. Every window and holiday rule has to be backed by an exact quote, a second Claude pass double-checks the meaning, and I approve it before it goes live. Every morning, Nick re-reads every store's page and flags changes." },
            { label: "Store only what's needed", text: "Nick never keeps your emails, only the store, item, price, date, and a few yes or no flags. Google's inbox-access rules require it, and it's right anyway." },
            { label: "An email, not an app you have to open", text: "What Sarah actually gets is a timely reminder, 3 days before and on the last day, with a button to start the return on the store's site and an \"Already returned it\" button." },
            { label: "Treat cost as a product constraint", text: "Receipts are read by a cheaper model (Claude Sonnet), where checks catch mistakes. Store policies are read by the stronger model (Claude Opus), where a mistake would become a wrong date. Prompt caching cuts costs further, and a budget guard keeps Nick under about $20 a month by pausing the least important work first. Reminders never depend on AI at all." },
          ],
        },
        { type: "h", text: "How I worked" },
        { type: "p", text: "I ran it like a product:" },
        {
          type: "list",
          items: [
            { text: "A written roadmap with an exit test for every release" },
            { text: "A decision log" },
            { text: "A not-building list, where every cut is written down with its reason (no bank connection, no automatic returns, no price-drop tracking, no native app yet)" },
            { text: "Design mocks for every screen and email in Claude Design before any code" },
            { text: "A rule that I explain everything the way Nick explains things to its users" },
          ],
        },
      ],
    },
    {
      id: "solution",
      title: "Solution",
      blocks: [
        { type: "h", text: "How it works" },
        {
          type: "list",
          items: [
            { label: "Connect", text: "Sign in with Google and connect Gmail, read-only." },
            { label: "Read", text: "Nick reads the last 30 days of order emails." },
            { label: "Match", text: "Each purchase is matched to a verified store policy." },
            { label: "First look", text: "A welcome email arrives, and the next morning, one email lists every return date Nick found." },
            { label: "Reminders", text: "After that, Nick only emails when a window is about to close." },
            { label: "Behind the scenes", text: "Every morning, Nick scans inboxes at 6am, re-checks every store's policy page, then sends reminders at 7am." },
          ],
        },
        { type: "h", text: "What I built" },
        {
          type: "list",
          items: [
            { label: "Home", text: "Shows \"You can still get back $X,\" which item to return first, and how much Nick has saved you." },
            { label: "Purchases", text: "Filtered by can return, no date yet, and can't return." },
            { label: "Item page", text: "The return-by date, how to return, and how you're paid back." },
            { label: "Returned", text: "Everything you've already sent back." },
            { label: "Admin portal (for me)", text: "Store policy cards to approve, a four-step \"is Nick working?\" health check with history, and Claude spend." },
          ],
        },
        {
          type: "gallery",
          items: [
            {
              src: "/images/nick-emails.webp",
              alt: "Two Nick emails in phone frames: a reminder with 3 days left to return an Old Navy fleece pullover, and a welcome email explaining what happens next.",
              caption: "The 3-day reminder and the welcome email",
            },
          ],
        },
        { type: "h", text: "Stack" },
        {
          type: "list",
          items: [
            { label: "Claude", text: "claude.ai projects for product thinking, Claude Code for building, and Claude Design for every screen and email before building." },
            { label: "JavaScript and Node", text: "The app and its background jobs." },
            { label: "Netlify", text: "The site, plus scheduled and background functions." },
            { label: "Supabase", text: "Postgres, sign-in, and row-level security on every table." },
            { label: "Gmail API", text: "Read-only access to order emails." },
            { label: "Resend", text: "Every email Nick sends." },
            { label: "Anthropic API", text: "Claude Opus 5.5 and Sonnet 5.5." },
            { label: "Apify", text: "Browser reads for store pages that block simple downloads." },
          ],
        },
        { type: "h", text: "Challenges and iterations" },
        {
          type: "list",
          items: [
            { label: "Gmail isn't a browser", text: "A design that looked right in a browser broke in Gmail, which stripped the spacing and split the logo. Now I test real emails in real inboxes." },
            { label: "Two doors, two experiences", text: "People who signed up on their own got no welcome email, while invited testers did. Every path into Nick now gets the same first experience." },
            { label: "Strict checks raise false alarms", text: "The checks that catch wrong facts also flag things that are fine. I fix each one narrowly, without letting a wrong fact through." },
            { label: "Shared inboxes", text: "An early tester's Amazon orders went through another family member's account, which exposed a real gap: shared and household inboxes." },
          ],
        },
      ],
    },
    {
      id: "results",
      title: "Status and learnings",
      blocks: [
        { type: "note", text: "Nick launched in beta on November 16, 2026, to a small first group of testers. It's too early for results against these goals, so there aren't any here yet." },
        { type: "h", text: "By the numbers" },
        {
          type: "stats",
          items: [
            { value: "3 months", label: "from starting on August 14 to launching on November 16" },
            { value: "295", label: "commits" },
            { value: "703", label: "automated tests" },
            { value: "33", label: "database migrations" },
            { value: "16", label: "verified stores" },
            { value: "9", label: "kinds of branded email" },
          ],
        },
        { type: "h", text: "Lessons learned" },
        {
          type: "list",
          items: [
            { label: "The hardest problems were trust problems", text: "The technical work was manageable. Knowing when Nick could be sure, and saying so plainly when it couldn't, was the real product." },
            { label: "Test the real thing where it lives", text: "A screen that looks right in a browser isn't done until it looks right in a real inbox." },
            { label: "Every path in deserves the same first experience", text: "How someone arrives shouldn't change how they're welcomed." },
          ],
        },
      ],
    },
    {
      id: "next",
      title: "Next steps",
      blocks: [
        {
          type: "list",
          items: [
            { text: "A \"return kit\" on every item: the steps, the nearest store, and a link to open the order in Gmail" },
            { text: "Marking items returned automatically from the store's refund email" },
            { text: "\"Where my money went,\" a view of online spending and what you got back" },
          ],
        },
      ],
    },
  ],
};
