import type { Project } from "./types";
import { visionpro } from "./visionpro";
import { nick } from "./nick";

export const projects: Project[] = [
  nick,

  // ───────────────────────────── Calendar Cloud ─────────────────────────────
  {
    slug: "calendarcloud",
    title: "Calendar Cloud",
    shortTitle: "Calendar Cloud",
    tagline: "Unify your data, simplify your schedule.",
    summary:
      "A visualization platform that brings data from multiple sources into one unified calendar, so people can find the dates and details that matter in one place instead of jumping between tools.",
    image: "/images/calendarcloud.webp",
    imageAlt: "Calendar Cloud month view showing marketing activities from connected data sources, with a filter panel on the right.",
    kind: "B2B",
    spec: [
      { label: "Role", value: "Research, requirements, design, rollout" },
      { label: "Status", value: "Shipped, in production at two public companies" },
      { label: "Users", value: "200+ person global marketing team" },
      { label: "Integrations", value: "Salesforce, Marketo, Asana" },
    ],
    sections: [
      {
        id: "overview",
        title: "Overview",
        blocks: [
          {
            type: "facts",
            items: [
              { label: "Purpose", text: "Develop a centralized calendaring solution that integrates and visualizes all marketing activities, emails, and projects, providing an automated and unified source of truth." },
              { label: "Deployment", text: "Built and deployed across two publicly traded enterprise organizations: a B2B cybersecurity company with a 200+ person global marketing team, and an enterprise cloud infrastructure company. Running in production as the primary marketing calendar for both. Subsequently commercialized and sold to external customers through Next Generation Platform Solutions." },
              { label: "My role", text: "Assessed existing market solutions to identify the optimal approach, developed preliminary design and requirements, assisted with end-to-end product development and implementation, trained marketing teams to drive adoption, and led continued system evolution by identifying and resolving customer requests and pain points." },
            ],
          },
        ],
      },
      {
        id: "context",
        title: "Context",
        blocks: [
          { type: "p", text: "Professionals often juggle multiple calendars and data sources, leading to fragmented schedules, incomplete data, and decreased productivity. Our team set out to build a unified calendaring platform that integrates various data streams into a single, cohesive calendar, automating data input, improving operational efficiency, and giving users a central hub for everything on their schedule. With limited solutions on the market, and roughly [98% of B2B marketers recognizing the benefits of automation](https://www.digitalsilk.com/digital-trends/marketing-automation-statistics/), we decided to custom-build a solution." },
          { type: "facts", items: [{ label: "Target audience", text: "B2B marketers" }] },
        ],
      },
      {
        id: "problem",
        title: "Problem statement",
        blocks: [
          { type: "p", text: "Marketing teams struggled to visualize and coordinate campaigns because their calendaring tools lacked integration with Salesforce, Marketo, and Asana data. The result was marketing silos, weak collaboration, and missed opportunities. Fixing this would improve campaign coordination and increase marketing productivity." },
          { type: "h", text: "KPI goals" },
          {
            type: "list",
            items: [
              { label: "Campaign coordination", text: "User satisfaction ratings of 80% or higher" },
              { label: "Marketing productivity", text: "At least 1 hour saved per day" },
            ],
          },
          { type: "h", text: "Strategy" },
          { type: "p", text: "Vision: to revolutionize marketing by providing a centralized, automated calendaring solution that enhances efficiency, standardization, and collaboration across the organization." },
          {
            type: "list",
            items: [
              { label: "Integration", text: "Robust integrations with Salesforce, Marketo, and Asana to automatically capture and sync marketing activities into a unified data repository." },
              { label: "Customization", text: "Filters and personalized calendar views showing data relevant to each person's role." },
              { label: "Interoperability", text: "Export activities to Google Calendar, Apple Calendar, and Microsoft Outlook." },
              { label: "Collaboration", text: "Share customized views with teammates and create global organizational calendars." },
            ],
          },
        ],
      },
      {
        id: "approach",
        title: "Approach",
        blocks: [
          { type: "p", text: "Our primary objective was to assess the availability of existing calendaring solutions and understand the specific challenges faced by our internal marketing team." },
          { type: "facts", items: [{ label: "Market analysis", text: "We evaluated third-party calendaring solutions through demos from providers across the category. The analysis revealed a significant gap between what existing products offered and what our organization needed, leading us to build a custom solution." }] },
          { type: "h", text: "What internal user interviews revealed" },
          {
            type: "list",
            items: [
              { label: "Manual entry inefficiencies", text: "After creating Salesforce campaigns, marketers manually entered each activity into their personal calendars, about ten minutes per entry and at least two hours per day." },
              { label: "Inconsistent data entry", text: "No standardized fields meant inconsistent calendar entries that hindered comprehension and coordination." },
              { label: "Fragmented calendaring", text: "Marketers built their own groups in their own calendar apps. With no central master calendar, scheduling was disjointed." },
              { label: "Siloed tracking tools", text: "Marketo email and Asana project schedules lived separately, and consolidating them required help from marketing ops, sometimes taking hours." },
              { label: "Global visibility gaps", text: "Without a unified view, teams unknowingly engaged the same customers and prospects repeatedly." },
            ],
          },
        ],
      },
      {
        id: "solution",
        title: "Solution",
        blocks: [
          { type: "video", src: "/videos/calendarcloud.mp4", poster: "/videos/calendarcloud-poster.webp", title: "Calendar Cloud product walkthrough", caption: "Product walkthrough, about 4 minutes." },
          {
            type: "list",
            items: [
              { label: "Flexible backend", text: "A scalable API integration pattern connected Salesforce, Marketo, and Asana, ensuring clean data flow and a responsive experience." },
              { label: "Read, don't store", text: "Calendar Cloud reads data from source systems in real time instead of storing it locally, cutting storage costs and improving accuracy." },
              { label: "Data source tabs", text: "Toggle tabs let users switch between Salesforce, Marketo, and Asana data." },
              { label: "Filtering", text: "Robust filters let users tailor views to the criteria that matter to them." },
              { label: "Activity tooltips", text: "Hover tooltips show names and details instantly, especially useful on busy days." },
              { label: "Detailed activity view", text: "An expandable panel shows every data point, with admins configuring visible fields from a console." },
              { label: "Export and sharing", text: "Export to Google, Apple, and Outlook calendars, and share custom views with colleagues inside and outside the company." },
            ],
          },
          { type: "h", text: "Challenges and iterations" },
          {
            type: "list",
            items: [
              { label: "Integrating multiple data sources", text: "One combined view was overwhelmed by data volume and filter complexity. Tabbed navigation kept the unified calendar experience while giving each source clear segmentation." },
              { label: "External sharing", text: "Access originally required company Salesforce credentials. We built a workaround that allowed non-employee access, so marketers could coordinate with outside partners." },
              { label: "Ongoing iteration", text: "Select power users tested features in a sandbox throughout the build, and continuous feedback continues to shape enhancements." },
            ],
          },
        ],
      },
      {
        id: "results",
        title: "Results and learnings",
        blocks: [
          {
            type: "results",
            items: [
              { label: "User satisfaction", goal: "80% or higher", outcome: "90% satisfaction in an internal survey of 200+ users" },
              { label: "Time saved", goal: "1 hour per day", outcome: "At least 1.5 hours saved daily by eliminating manual data aggregation" },
            ],
          },
          {
            type: "list",
            items: [
              { label: "Trust and engagement", text: "Reliability led users to request more functionality." },
              { label: "Organizational alignment", text: "Marketers moved from isolated calendars to one central system, reducing redundant efforts." },
              { label: "Standardized data", text: "Standardized inputs and processes improved data quality and made filtering and integration reliable across the organization." },
            ],
          },
          { type: "h", text: "Lessons learned" },
          {
            type: "list",
            items: [
              { label: "Gather requirements thoroughly, early", text: "Detailed requirements up front would have reduced revisions during testing." },
              { label: "Involve users sooner", text: "More power users and testers early would have sped up enablement and adoption." },
              { label: "Plan for the complexity of building from scratch", text: "Turning a concept into a working product taught us a lot about teamwork, problem-solving, and adaptability." },
            ],
          },
        ],
      },
    ],
  },

  // ───────────────────────────── Smart Planner ─────────────────────────────
  {
    slug: "smartplanner",
    title: "Smart Planner",
    shortTitle: "Smart Planner",
    tagline: "Plan, standardize, and launch campaigns without the back-and-forth.",
    summary:
      "An all-in-one platform that centralizes budgeting and planning and automates the busywork around it, so teams spend their time on results instead of spreadsheets and tickets.",
    image: "/images/smartplanner.webp",
    imageAlt: "Smart Planner's spreadsheet-style planning grid with campaign rows, picklists, and budget columns.",
    kind: "B2B",
    spec: [
      { label: "Role", value: "Research, requirements, design, rollout" },
      { label: "Status", value: "Shipped, in production" },
      { label: "Impact", value: "Campaign setup from 8 hours to 15 minutes" },
      { label: "Integrations", value: "Salesforce, Marketo, Coupa, Tableau" },
    ],
    sections: [
      {
        id: "overview",
        title: "Overview",
        blocks: [
          {
            type: "facts",
            items: [
              { label: "Purpose", text: "Develop a campaign planning automation solution that centralizes planning, standardizes processes, automates campaign creation, and integrates financial tracking, improving efficiency and visibility across the organization." },
              { label: "Deployment", text: "Built and deployed for a live B2B SaaS marketing organization. Campaign planning, budget tracking, and Salesforce and Marketo automation running in production across the marketing org. Subsequently commercialized and sold to external customers through Next Generation Platform Solutions." },
              { label: "My role", text: "Assessed existing market solutions to identify the optimal approach, developed preliminary design and requirements, assisted with end-to-end product development and implementation, trained marketing teams to drive adoption, and led continued system evolution by identifying and resolving customer requests and pain points." },
            ],
          },
        ],
      },
      {
        id: "context",
        title: "Context",
        blocks: [
          { type: "p", text: "B2B organizations face real challenges in planning and budgeting. Fragmented tools and manual processes create unstandardized data and inefficiency, making it hard to align strategy across departments and see actual spend against plan. On top of that, the back-and-forth between marketers and marketing ops to create Salesforce campaigns and Marketo programs consumes time and resources." },
          { type: "p", text: "Teams are turning to automation to fix this, and [56% of companies already use marketing automation tools](https://meetergo.com/en/magazine/b2b-marketing-automation-tools). But existing solutions often lack the customization and integrations that unique workflows need, and their cost can be prohibitive. So we built Smart Planner." },
          { type: "facts", items: [{ label: "Target audience", text: "B2B marketers, B2B finance teams" }] },
        ],
      },
      {
        id: "problem",
        title: "Problem statement",
        blocks: [
          { type: "p", text: "B2B marketing teams grapple with fragmented planning and budgeting, leading to inefficiency, inconsistent data, and misalignment across departments. That's compounded by the manual back-and-forth between marketers and operations to create and manage campaigns in Salesforce and Marketo." },
          { type: "h", text: "KPI goals" },
          {
            type: "list",
            items: [
              { label: "Time saved in campaign creation", text: "At least 1 hour per day" },
              { label: "User adoption", text: "70% or more of the marketing organization" },
              { label: "Manual errors", text: "50% or greater reduction" },
              { label: "Budget adherence", text: "30% fewer errors" },
            ],
          },
        ],
      },
      {
        id: "approach",
        title: "Approach",
        blocks: [
          { type: "h", text: "Evaluation of existing solutions" },
          { type: "p", text: "We explored available systems through product demos and conversations with industry peers facing similar challenges. Feedback indicated many solutions were limited in scope or didn't deliver on their promises, and the costs (service fees, enhancements, integrations) were prohibitively high." },
          { type: "h", text: "What internal interviews revealed" },
          {
            type: "list",
            items: [
              { label: "Siloed planning", text: "Each department planned in its own Google Sheets, with no standard formats or inputs, requiring time-consuming consolidation and cleanup." },
              { label: "Limited visibility", text: "With no central repository, marketers couldn't see or understand each other's plans." },
              { label: "Inefficient campaign creation", text: "Marketers planned in Sheets, then filed unstandardized tickets for Salesforce and Marketo setup, causing constant back-and-forth and delays." },
              { label: "No financial integration", text: "The workflow didn't connect to Coupa, the purchase order system, so linking campaigns to POs needed extra help from ops and finance." },
              { label: "Poor ROI visibility", text: "Without campaigns tied to POs, measuring return on investment was difficult." },
              { label: "Overall frustration", text: "The manual process created real frustration and a clear need for automation." },
            ],
          },
          { type: "h", text: "Strategy" },
          { type: "p", text: "Vision: to transform B2B marketing planning by creating a centralized, automated platform that enhances efficiency, standardization, and collaboration across the organization." },
          {
            type: "list",
            items: [
              { label: "Integration", text: "Seamless connections with Salesforce, Marketo, and Coupa for unified data." },
              { label: "User experience", text: "An intuitive interface that makes planning effortless." },
              { label: "Customization", text: "Flexible views and reports for different roles and departments." },
              { label: "Financial tracking", text: "Purchase orders linked directly to campaigns for accurate budget management." },
            ],
          },
        ],
      },
      {
        id: "solution",
        title: "Solution",
        blocks: [
          { type: "video", src: "/videos/smartplanner.mp4", poster: "/videos/smartplanner-poster.webp", title: "Smart Planner product walkthrough", caption: "Product walkthrough, about 14 minutes." },
          {
            type: "list",
            items: [
              { label: "Scalable architecture", text: "API integrations with Salesforce, Marketo, and Coupa, designed to support more platforms later." },
              { label: "Synced data model", text: "Essential fields from Salesforce's Campaign object are mapped and stored centrally, so budget lines use consistent values and admins manage every field in one place." },
              { label: "One-click campaign creation", text: "Predefined mappings between campaign types and cloneable Marketo programs let users create Salesforce campaigns and Marketo programs with a single click." },
              { label: "Connected to Calendar Cloud", text: "Anything created in Smart Planner automatically appears on Calendar Cloud." },
              { label: "Spreadsheet-inspired interface", text: "Picklists, custom fields, filtering, and mass cloning across quarters made the move from Google Sheets feel familiar." },
              { label: "Reporting", text: "Budget roll-up reports give organizational visibility, and Coupa PO linking enables detailed spend analysis." },
            ],
          },
          { type: "h", text: "Challenges and iterations" },
          {
            type: "list",
            items: [
              { label: "A spreadsheet UI at scale", text: "Drag-and-drop rows and columns worked at 10 to 20 rows but slowed at thousands. Data virtualization and optimized rendering helped, and performance with very large datasets is an ongoing effort." },
              { label: "Coupa API limitations", text: "Required Coupa fields didn't align with Smart Planner's data structures. We shipped a semi-automated flow: campaigns sync to Coupa automatically, and users create the PO manually with campaign data already linked." },
              { label: "Reporting on actual spend", text: "Financial data from Coupa was consolidated in a data warehouse, enriched with Smart Planner and Sheets data, and visualized in Tableau for the MVP, with deeper finance collaboration planned." },
            ],
          },
        ],
      },
      {
        id: "results",
        title: "Results and learnings",
        blocks: [
          {
            type: "results",
            items: [
              { label: "Campaign creation time", goal: "Save at least 1 hour per day", outcome: "Reduced from up to 8 hours to about 15 minutes" },
              { label: "User adoption", goal: "70% of the marketing organization", outcome: "90% adoption, helped by retiring legacy systems and strong leadership support" },
              { label: "Manual errors", goal: "50% reduction", outcome: "Standardized entry and automation virtually eliminated manual errors" },
              { label: "Budget adherence", goal: "30% improvement", outcome: "At least 30% improvement in budget management and accountability" },
            ],
          },
          { type: "h", text: "Lessons learned" },
          {
            type: "list",
            items: [
              { label: "Prioritize user-centric design", text: "Involving end users throughout led to higher satisfaction and adoption." },
              { label: "Ensure scalability", text: "Early architecture choices made multiple integrations and growing data volumes manageable." },
              { label: "Adapt to external constraints", text: "Coupa's API limits showed the value of flexible solutions and proactive vendor communication." },
              { label: "Keep collaborating", text: "Ongoing work with finance and marketing ops was essential to getting reporting and budget adherence right." },
            ],
          },
        ],
      },
    ],
  },
  visionpro,

  // ───────────────────────────── Tandem ─────────────────────────────
  {
    slug: "tandem",
    title: "Tandem",
    shortTitle: "Tandem",
    tagline: "Get matched with providers who fit your style, your goals, and your schedule.",
    summary:
      "A lightweight two-sided platform that helps people discover and connect with the right local service provider based on their goals, preferences, and style. Smart matchmaking, built-in messaging, appointment tracking, and a provider dashboard for managing clients and analytics.",
    image: "/images/tandem.webp",
    imageAlt: "Tandem homepage with the headline \"Find a Service Provider That Gets You\" and a provider search bar.",
    kind: "Consumer",
    spec: [
      { label: "Role", value: "Solo builder" },
      { label: "Status", value: "Prototype, built in under 24 hours" },
      { label: "Category", value: "Two-sided marketplace" },
      { label: "Stack", value: "Bolt.new, Supabase" },
    ],
    links: [{ label: "Open the live app", href: "https://deluxe-crisp-51dfa1.netlify.app/" }],
    sections: [
      {
        id: "context",
        title: "Context",
        blocks: [
          { type: "p", text: "Tandem began as a rapid prototyping experiment. I wanted to see what I could build in a single day using no-code tools, starting with a simple question: what kind of product could solve a real-world problem and make money quickly?" },
          { type: "p", text: "After exploring different ideas, I focused on a common pain point: finding a coach, tutor, or specialist who truly fits your style and goals. Most platforms are built around task-based transactions. Very few prioritize long-term relationships, personal growth, and fit." },
          { type: "p", text: "With that in mind, I built Tandem as a lightweight matchmaking tool. It helps users find providers who align with their goals, while giving providers an easy way to manage clients, track progress, and grow their business." },
          {
            type: "facts",
            items: [
              { label: "Target audience", text: "Individuals seeking personal growth, independent service providers." },
              { label: "Purpose", text: "To explore how quickly I could go from idea to prototype using no-code tools while solving a real-world problem with clear monetization potential." },
            ],
          },
          { type: "p", text: "Tandem was built to help people find the right kind of support, whether physical, mental, or educational, by simplifying how we connect with coaches, tutors, and service providers. It focuses on removing friction, building trust, and making human connections feel more accessible." },
        ],
      },
      {
        id: "problem",
        title: "Problem statement",
        blocks: [
          { type: "p", text: "Finding the right service provider is frustrating and time-consuming. Whether someone is searching for a fitness coach, a tutor, or a wellness expert, the current options are fragmented, overwhelming, and often impersonal. Most platforms prioritize transactions instead of trust, leaving users with too many choices and not enough clarity. Providers are also left without the tools they need to build long-term client relationships." },
          { type: "p", text: "Tandem solves this by offering a simple and personalized matchmaking experience that connects people to providers who align with their goals, style, and preferences." },
          { type: "h", text: "Mock KPI goals" },
          {
            type: "list",
            items: [
              { label: "Time to match", text: "Help users find and message a provider in under 5 minutes" },
              { label: "Provider engagement", text: "At least 50 percent of providers log in weekly and respond to messages" },
              { label: "Conversion rate", text: "20 percent of site visitors complete the client intake form" },
              { label: "Provider satisfaction", text: "75 percent or higher satisfaction from a quick dashboard feedback prompt" },
              { label: "Prototype build time", text: "Launch a working version of the platform within 24 hours" },
            ],
          },
          { type: "note", text: "Since this is a prototype, mock KPIs and results are represented as part of this case study." },
        ],
      },
      {
        id: "approach",
        title: "Approach",
        blocks: [
          { type: "h", text: "Research and analysis" },
          { type: "p", text: "In exploring the opportunity to build a simple and scalable matchmaking platform, I began with a focused objective: create a lightweight MVP that could deliver immediate value, prove demand, and open pathways for monetization. With time as a constraint and clarity as the priority, the approach centered around rapid ideation, user-focused problem definition, and iterative no-code development." },
          { type: "h", text: "Evaluation of the market landscape" },
          { type: "p", text: "To determine the best starting point, I assessed the current landscape of service discovery tools. Platforms like Thumbtack, TaskRabbit, and Yelp offer broad provider access but often prioritize volume over personalization. These platforms are optimized for transactional, one-off tasks, and lack tools for relationship-based services such as coaching, tutoring, or personal development. Many also carry high barriers to entry for new providers, require steep fees, or lack trust-building tools for users." },
          { type: "p", text: "This evaluation revealed a clear gap in the market: an approachable, trust-first solution for users seeking consistent support, and a lightweight business toolkit for providers working independently or in small teams." },
          { type: "h", text: "Product strategy and framing" },
          { type: "p", text: "With the target problem identified, I outlined a product strategy focused on speed to value and expandability. The first version of Tandem would focus on fitness and tutoring as early verticals, while establishing a foundation that could scale to include other services like wellness coaching, language instruction, and creative skills training." },
          {
            type: "list",
            items: [
              { text: "Starting with a two-sided structure, giving both users and providers tailored experiences" },
              { text: "Prioritizing core user journeys like onboarding, matching, and communication" },
              { text: "Using a no-code toolset (Bolt.new and Supabase) to reduce build time and increase flexibility" },
              { text: "Including basic analytics and communication features to simulate real business utility for providers" },
              { text: "Designing a brand and name flexible enough to grow beyond the initial niche" },
            ],
          },
          { type: "h", text: "UX and functional priorities" },
          {
            type: "list",
            items: [
              { text: "A \"Match Me\" form that collects user preferences across goals, experience level, and availability" },
              { text: "A provider sign-up and dashboard experience that includes a schedule view, client list, and quick messaging access" },
              { text: "Smart, AI-assisted matching logic that pairs users with appropriate providers based on multiple data points" },
              { text: "A clean, modern UI that reflects approachability and professional trust" },
            ],
          },
          { type: "p", text: "The initial prototype of Tandem was developed and deployed in under 24 hours. The app includes a functional onboarding flow, basic two-sided matching, a working provider dashboard, and a plan for multiple monetization paths. The process validated that real, usable tools can be created in compressed timeframes when guided by clear goals and user needs." },
          { type: "h", text: "Strategy" },
          { type: "p", text: "Vision: to simplify the way people discover and connect with service providers by creating a human-centered platform that emphasizes personalization, trust, and ease of use. Tandem aims to empower individuals in their personal growth journeys while giving providers the tools to build sustainable, client-focused businesses." },
          {
            type: "list",
            items: [
              { label: "Personalized matching", text: "Design a smart intake and matching flow that connects users with providers based on goals, availability, preferences, and communication style." },
              { label: "Two-sided experience", text: "Build parallel experiences for users and providers, with tailored features that support discovery, communication, and ongoing engagement." },
              { label: "Provider tools", text: "Develop a lightweight dashboard for providers that includes appointment scheduling, client management, basic analytics, and messaging." },
              { label: "Trust and simplicity", text: "Create an intuitive, accessible interface that builds user confidence and lowers friction during onboarding and engagement." },
            ],
          },
        ],
      },
      {
        id: "solution",
        title: "Solution",
        blocks: [
          { type: "p", text: "Tandem was designed to help users find service providers who align with their goals, preferences, and lifestyle. The platform streamlines discovery, communication, and client management for both sides of the marketplace." },
          { type: "h", text: "Backend" },
          {
            type: "list",
            items: [
              { label: "Scalable no-code stack", text: "Supabase provides user authentication, database storage, and real-time updates, enabling rapid development while leaving room for growth." },
              { label: "Two-sided architecture", text: "Separate logic and database schemas for users and providers support different onboarding flows, dashboards, and interaction modes under one experience." },
              { label: "Smart matching logic", text: "Intake responses are matched to provider profiles based on availability, service category, goals, and preference tags. Matching can later be enhanced with AI." },
              { label: "Integrated messaging", text: "Built on Supabase's real-time capabilities, providers and clients message directly through their dashboards, with attachment uploads and a record of every interaction." },
            ],
          },
          { type: "h", text: "Frontend" },
          {
            type: "list",
            items: [
              { label: "Clean, modern interface", text: "A minimal, welcoming design system built in Bolt.new that keeps users focused on their next step." },
              { label: "Provider dashboard", text: "Upcoming appointments, client lists, messages, and analytics showing client activity and income trends." },
              { label: "User intake flow", text: "A dynamic form that collects preferences, goals, and availability, building trust through a personalized approach." },
              { label: "Quick actions menu", text: "A floating bar that lets providers switch between messaging, schedule, and client details." },
            ],
          },
          { type: "h", text: "Challenges and iterations" },
          {
            type: "list",
            items: [
              { label: "Designing for two audiences in one platform", text: "Parallel but clearly defined interfaces using conditional logic, with shared components like messaging and scheduling reused with role-specific labels. Ongoing user testing informed adjustments to flow and layout." },
              { label: "Matching without advanced AI", text: "The intake form was refined to capture more structured inputs, enabling smarter tag-based filtering. Plans were documented for a conversational assistant that could assess learning styles, personality fit, and goals." },
              { label: "Real-time messaging in a no-code stack", text: "Supabase real-time subscriptions sync messages instantly in the Bolt interface, with Supabase storage handling attachments." },
              { label: "Business tools without building a CRM", text: "The provider dashboard ships with just enough: a weekly schedule, income tracker, and client list, with feedback and booking history planned." },
              { label: "A brand that can grow", text: "An early barbell icon made the product feel narrowly focused. The logo was reworked around connection and duality, and the palette shifted from bold fitness tones to greens and neutrals that signal growth and trust." },
            ],
          },
        ],
      },
      {
        id: "results",
        title: "Mock results and learnings",
        blocks: [
          {
            type: "results",
            items: [
              { label: "Time to match", goal: "Find and message a provider in under 5 minutes", outcome: "Users completed the matchmaking flow and sent a first message in about 4 minutes" },
              { label: "Provider engagement", goal: "At least 50% of providers log in weekly and respond", outcome: "Simulated tracking suggested 60% of active providers returned in week one and replied to a new client" },
              { label: "Conversion rate", goal: "20% of visitors complete the intake form", outcome: "Early testing with simulated traffic indicated a projected 26%" },
              { label: "Provider satisfaction", goal: "75% or higher on a dashboard feedback prompt", outcome: "Initial usability tests showed 78% positive response" },
            ],
          },
          { type: "note", text: "Results are mock or simulated, as this was a prototype." },
          { type: "h", text: "Lessons learned" },
          {
            type: "list",
            items: [
              { label: "Design for dual audiences from the start", text: "Planning for both roles early avoided rework and delivered value on both sides of the marketplace." },
              { label: "Balance simplicity with flexibility", text: "Lightweight intake and dashboard tools felt approachable while leaving room for deeper customization." },
              { label: "Build fast, then refine", text: "Launching an MVP in under 24 hours showed the power of rapid prototyping, and the importance of iterating on feedback rather than aiming for perfection upfront." },
              { label: "Plan for scale beyond one industry", text: "Flexible branding, architecture, and matching logic position Tandem to expand without major changes." },
              { label: "Don't overbuild the first version", text: "Staying focused on matching, messaging, and dashboards avoided scope creep and kept the build achievable." },
            ],
          },
        ],
      },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
