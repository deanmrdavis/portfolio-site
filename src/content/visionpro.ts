import type { Project } from "./types";

// Source: Dean's Project Ed product documentation (Google Doc) and Gamma deck.
// Every figure below comes from that documentation. Survey figures are from
// Dean's parent risk survey; RICE scores are his own prioritization model.
export const visionpro: Project = {
  slug: "visionpro",
  title: "Apple Vision Pro: Project Ed",
  shortTitle: "Vision Pro: Project Ed",
  tagline: "An AI tutor for Vision Pro, and a case for why education could be its killer use case.",
  summary:
    "A product strategy for driving Apple Vision Pro adoption through education: from auditing the problems in formal education, to prioritizing solutions with RICE, to validating an AI-powered tutor with parents and prototyping it.",
  image: "/images/visionpro.webp",
  imageAlt: "Project Ed concept: a student wearing Apple Vision Pro with floating subject tiles for Language, Science, History, and Math.",
  kind: "Consumer",
  spec: [
    { label: "Role", value: "Product strategy and prototype" },
    { label: "Status", value: "Concept and alpha prototype" },
    { label: "Category", value: "Spatial computing, EdTech" },
    { label: "Methods", value: "RICE, risk assessment, parent survey" },
  ],
  links: [
    { label: "Open the deck", href: "https://gamma.app/docs/Unlocking-Education-with-Apple-Vision-Pro-pn2m1deo8tzpc8m" },
    { label: "Read the full product doc", href: "https://docs.google.com/document/d/1waO-dQu-jdOrlqtlidLqn_uFNCu2A7J0puW5rIQvlb8/edit?usp=sharing" },
  ],
  sections: [
    {
      id: "overview",
      title: "Overview",
      blocks: [
        {
          type: "facts",
          items: [
            { label: "Purpose", text: "Identify how Apple can increase Apple Vision Pro sales by finding a high-value everyday use case, with formal education as the entry point." },
            { label: "Approach", text: "Work through the four foundations of product management (know the market, the business, the product, and the customer) and the four product risks (value, usability, feasibility, and viability), with every decision grounded in data and a prioritization framework." },
            { label: "Target audience", text: "Students and parents at private middle schools, high schools, and colleges." },
          ],
        },
      ],
    },
    {
      id: "context",
      title: "Context",
      blocks: [
        { type: "p", text: "Apple Vision Pro launched in early 2024 with projections of 800K to 1M units in its first year. Actual sales came in under 500K, in large part because it was hard to show customers clear everyday value." },
        { type: "p", text: "Apple has solved this before. Apple Watch found mass adoption once fitness and health gave people a concrete reason to wear it every day. Project Ed asks whether formal education could do the same for Vision Pro: immersive, interactive learning that changes how students engage with what they're taught." },
        { type: "h", text: "Objectives" },
        {
          type: "list",
          items: [
            { text: "Identify the key problems in formal education" },
            { text: "Evaluate the pain points of teachers, parents, and students" },
            { text: "Segment the audience and find where Vision Pro has the most lift" },
            { text: "Prioritize problems by customer pain, marketing impact, revenue potential, and emotional resonance" },
            { text: "Develop and score solutions for the top five problems, then pick one" },
            { text: "Define the hypothesis, assess the risks, and build an alpha prototype" },
          ],
        },
      ],
    },
    {
      id: "problem",
      title: "Problem",
      blocks: [
        { type: "p", text: "The research started broad: twelve problems across teachers, students, and parents, from teacher burnout (44% of K-12 teachers report feeling burned out very often or always) to homework gaps (5 million U.S. households lack reliable internet) to parents who don't know their child is behind (92% wrongly believe their child is at grade level)." },
        { type: "h", text: "The top five problems" },
        {
          type: "list",
          items: [
            { label: "Lack of hands-on, experiential learning", text: "55% of undergraduates say they don't get enough project-based learning, and active learning in STEM cuts failure rates by 55% yet remains underused." },
            { label: "Low engagement in blended and online courses", text: "Students feel isolated and demotivated, leading to lower grades and withdrawals." },
            { label: "High cost of supplemental learning", text: "Tutors, field trips, and private courses add up to thousands of dollars a year for families." },
            { label: "Mental health struggles and burnout", text: "Stress and anxiety lower academic performance and raise withdrawal rates." },
            { label: "Teacher shortages and burnout", text: "Overworked teachers have less time to prepare engaging material or give individual support." },
          ],
        },
        { type: "h", text: "Who to build for" },
        { type: "p", text: "Segmenting the three audiences showed teachers as the easiest to win (high problem fit, and willing if schools fund it), students next (a strong product fit, but financially gated), and parents as the hardest (deeply invested, but reluctant to fund the full cost themselves). Given Vision Pro's price, the focus narrowed to private institutions and higher-income families, where the purchase is realistic." },
      ],
    },
    {
      id: "approach",
      title: "Approach",
      blocks: [
        { type: "p", text: "Fifteen solutions across the five problems were scored with RICE (reach, impact, confidence, effort), and each was mapped to the existing spend it would replace, from lab materials to private tutors." },
        {
          type: "results",
          items: [
            { label: "Highest RICE score", outcome: "Gamified spatial learning modules", goalLabel: "RICE score", goal: "3,060,000. Replaces supplemental learning apps ($15 to $125 a year)" },
            { label: "Selected solution", outcome: "AI-powered virtual tutor", goalLabel: "RICE score", goal: "2,250,000. Replaces private tutoring ($1,300 to $7,800 a year)" },
          ],
        },
        { type: "h", text: "Why the tutor won over the top score" },
        {
          type: "list",
          items: [
            { label: "Stronger reason to buy", text: "It directly replaces a costly, well-understood service. Parents already spend thousands on tutoring, so the ROI is easy to see." },
            { label: "Perceived rigor", text: "\"AI tutoring\" reads as serious and results-driven, which fits how private school parents think about education." },
            { label: "Broad relevance", text: "It works across subjects and grade levels, and adapts to each student's learning style." },
          ],
        },
        { type: "h", text: "Hypothesis" },
        { type: "p", text: "Apple Vision Pro can expand Apple's education revenue by 20%, driven by adoption in high-income districts, through an AI-powered tutor that replaces costly supplemental education and gives parents a premium, cost-efficient path to their child's success." },
        { type: "h", text: "Risks" },
        {
          type: "list",
          items: [
            { label: "Value", text: "Parents may not see enough value to replace a human tutor or justify the headset. Mitigation: position it as a long-term cost saver and prove results with pilots and testimonials." },
            { label: "Usability", text: "Students may find a 3D interface distracting, and some can't use a headset at all. Mitigation: a minimal, guided UI, early testing with real families, and alternative formats." },
            { label: "Feasibility", text: "Real-time AI tutoring may strain on-device performance and compute costs. Mitigation: start with one narrow subject, curated data, and fallback to text." },
            { label: "Viability", text: "Student data raises COPPA and FERPA concerns, and AI responses must be safe for kids. Mitigation: parental consent flows, strict privacy policies, and human-in-the-loop guardrails." },
          ],
        },
      ],
    },
    {
      id: "validation",
      title: "Validation",
      blocks: [
        { type: "p", text: "Before building, the riskiest assumption, that parents would value this enough to pay, went to a survey of parents." },
        {
          type: "stats",
          items: [
            { value: "60%", label: "see moderate to high value in the concept" },
            { value: "76%", label: "are unsure or unlikely to replace their current tutoring without proof" },
            { value: "~50%", label: "are open to buying a Vision Pro if the ROI is clear" },
            { value: "76%", label: "already spend more than $200 a month on academic enrichment, and 43% spend $500 or more" },
          ],
        },
        {
          type: "facts",
          items: [
            { label: "Top features", text: "Personalized AI tutoring, confidence scores and mastery insights, and real-time parent dashboards." },
            { label: "Top motivations", text: "Reducing school stress, building confidence and independence, and academic performance." },
            { label: "Top concerns", text: "High upfront cost, a preference for human interaction, and doubt that it would work." },
          ],
        },
        { type: "p", text: "The takeaway: the idea has real early value with motivated, middle-to-upper-income parents, but most won't switch until results are proven. That shaped the MVP: prove academic outcomes fast, give parents visibility into progress, and lower the risk of trying it with options like a free trial or money-back guarantee." },
      ],
    },
    {
      id: "solution",
      title: "Solution",
      blocks: [
        { type: "h", text: "Scoping the MVP: one subject, starting with math" },
        { type: "p", text: "A multi-subject launch would show range, but it would also slow development, complicate QA, and stay shallow everywhere. A single subject ships faster and can go deeper. Math was the clear first choice." },
        {
          type: "list",
          items: [
            { label: "Highest demand", text: "It's the most commonly tutored subject in the U.S., and the one parents feel least able to help with." },
            { label: "Measurable", text: "Accuracy, speed, and scores make progress easy to report to parents, their most requested feature." },
            { label: "Built for this format", text: "Step-by-step guidance and hands-on problem solving suit AI tutoring and immersive interaction, and can ease math anxiety." },
            { label: "Efficient to build", text: "Engineering can go deep on one problem space, and QA has fewer content edge cases." },
          ],
        },
        { type: "h", text: "How it works" },
        {
          type: "list",
          items: [
            { label: "The tutor", text: "A holographic AI tutor appears beside the student. Students sync assignments or notes, and the tutor breaks them into guided modules with voice, spatial visuals, quizzes, and live Q&A. It can gesture, highlight objects in the air, and manipulate 3D models." },
            { label: "The parent view", text: "A mobile and visionOS dashboard shows session reports, progress, confidence scores, problem areas, and next steps. Parents can put on the headset to replay a session from their child's perspective." },
            { label: "Immersive learning", text: "Concepts become physical: equations float as puzzles solved by hand, and eye and hand tracking spot when a student is stuck and offer help." },
          ],
        },
        {
          type: "gallery",
          items: [
            { src: "/images/visionpro-session.webp", alt: "A student in Apple Vision Pro rotating a floating 3D molecule while a holographic tutor explains, with Pause, Ask a Question, and Next Step controls.", caption: "Tutor session" },
            { src: "/images/visionpro-parent.webp", alt: "An iPhone showing a parent dashboard with subject confidence trends, today's chemistry session, and scores for math, science, and English.", caption: "Parent dashboard" },
          ],
        },
        { type: "h", text: "Alpha prototype" },
        { type: "p", text: "The alpha prototype simulates the experience end to end, using Veo 3 for the immersive learning moments and Bolt.new for the spatial dashboards. Each scene reflects how students learn, how parents track progress, and how AI supports both." },
        { type: "video", src: "/videos/visionpro-prototype.mp4", poster: "/videos/visionpro-prototype-poster.webp", title: "Project Ed alpha prototype walkthrough", caption: "Alpha prototype walkthrough, about 2 minutes." },
      ],
    },
    {
      id: "next",
      title: "Next steps",
      blocks: [
        {
          type: "list",
          items: [
            { text: "Define launch grade levels and topics, such as grades 6 to 9: fractions, algebra basics, and equations" },
            { text: "Build a performance tracking framework for math outcomes" },
            { text: "Prototype guided math sessions with immersive problem walkthroughs" },
            { text: "Recruit one or two pilot families for early outcome data and testimonials" },
            { text: "Plan the post-MVP roadmap: science simulations, reading and writing, and test prep" },
          ],
        },
      ],
    },
    {
      id: "deck",
      title: "The full deck",
      blocks: [
        {
          type: "embed",
          src: "https://gamma.app/embed/pn2m1deo8tzpc8m",
          title: "Unlocking Education with Apple Vision Pro, analysis deck",
          href: "https://gamma.app/docs/Unlocking-Education-with-Apple-Vision-Pro-pn2m1deo8tzpc8m",
          linkLabel: "Open the deck in a new tab",
          aspect: "16 / 10",
        },
      ],
    },
  ],
};
