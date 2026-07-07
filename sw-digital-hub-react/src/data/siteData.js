import {
  Award,
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardList,
  Cloud,
  Code2,
  Database,
  GraduationCap,
  Layers3,
  Megaphone,
  Palette,
  Rocket,
  Search,
  Send,
  ShieldCheck,
  Smartphone,
  Target,
  Trophy,
  Users
} from 'lucide-react';

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' }
];

export const clients = ['Nexa Labs', 'BrightEdge', 'CloudMint', 'UrbanNest', 'SkillForge', 'PixelCart'];

export const stats = [
  { value: '45+', label: 'Digital projects shipped' },
  { value: '800+', label: 'Students trained' },
  { value: '18+', label: 'Career-ready programs' },
  { value: '92%', label: 'Placement support rate' }
];

export const services = [
  { slug: 'website-development', icon: Code2, title: 'Website Development', desc: 'Conversion-ready business websites, landing pages, and custom React frontends.', detail: 'We build fast, responsive websites with polished service pages, lead forms, SEO-friendly structure, and Vercel-ready deployment.', image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=900&q=80' },
  { slug: 'app-development', icon: Smartphone, title: 'App Development', desc: 'Product interfaces, mobile app screens, dashboards, and scalable user flows.', detail: 'We design and develop modern app interfaces with reusable UI systems, clear journeys, and integration-ready frontend architecture.', image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=80' },
  { slug: 'digital-marketing', icon: Megaphone, title: 'Digital Marketing', desc: 'Campaign strategy, lead funnels, social media direction, and performance assets.', detail: 'We plan digital campaigns with audience clarity, conversion landing pages, content calendars, and measurable campaign structure.', image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1200&q=85' },
  { slug: 'branding', icon: Award, title: 'Branding', desc: 'Identity systems, launch kits, visual direction, and premium brand consistency.', detail: 'We craft brand direction, visual systems, pitch-ready assets, and consistent digital presentation for stronger trust.', image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=900&q=80' },
  { slug: 'ui-ux-design', icon: Palette, title: 'UI/UX Design', desc: 'Wireframes, prototypes, product journeys, and elegant design systems.', detail: 'We map user journeys, create wireframes, prototype interfaces, and deliver clean design systems that scale.', image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=900&q=80' },
  { slug: 'seo-services', icon: Search, title: 'SEO Services', desc: 'Search architecture, page optimization, keyword planning, and technical SEO.', detail: 'We improve search readiness through semantic page structure, metadata, speed awareness, and keyword-led content planning.', image: 'https://images.unsplash.com/photo-1562577309-2592ab84b1bc?auto=format&fit=crop&w=900&q=80' },
  { slug: 'business-software-solutions', icon: Cloud, title: 'Business Software Solutions', desc: 'CRM-style dashboards, internal tools, workflow screens, and automation UI.', detail: 'We design admin dashboards, internal portals, lead systems, reporting views, and frontend structures ready for backend APIs.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80' },
  { slug: 'social-media-management', icon: Users, title: 'Social Media Management', desc: 'Content calendars, creative systems, reporting layouts, and growth support.', detail: 'We create social content systems, campaign visuals, posting calendars, and monthly reporting experiences for consistent growth.', image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=900&q=80' }
];

export const serviceDetails = [
  {
    title: 'Discovery and Strategy',
    desc: 'We clarify business goals, audience behavior, content priorities, and the conversion journey before design begins.'
  },
  {
    title: 'Design and Development',
    desc: 'We create responsive interfaces, reusable sections, smooth animations, and production-ready React/Vite builds.'
  },
  {
    title: 'Launch and Optimization',
    desc: 'We prepare deployment, basic SEO structure, performance checks, analytics-ready sections, and future backend hooks.'
  }
];

export const courses = [
  { icon: Layers3, title: 'Full Stack Web Development', level: 'Career Track', weeks: '20 weeks', desc: 'HTML, CSS, JavaScript, React, Node, APIs, deployment, and portfolio projects.' },
  { icon: Code2, title: 'Frontend Development', level: 'Beginner+', weeks: '12 weeks', desc: 'Responsive UI, React components, Tailwind CSS, animations, and production builds.' },
  { icon: Database, title: 'Backend Development', level: 'Intermediate', weeks: '14 weeks', desc: 'Node.js, Express, MongoDB, authentication, REST APIs, and deployment basics.' },
  { icon: Rocket, title: 'React.js', level: 'Focused', weeks: '8 weeks', desc: 'Hooks, routing, state patterns, reusable components, and real-world React projects.' },
  { icon: Cloud, title: 'Node.js', level: 'Focused', weeks: '8 weeks', desc: 'Server-side JavaScript, APIs, validation, auth flows, and database integration.' },
  { icon: BookOpen, title: 'Python', level: 'Beginner', weeks: '10 weeks', desc: 'Programming foundations, automation, data handling, and mini projects.' },
  { icon: ShieldCheck, title: 'Java', level: 'Core', weeks: '10 weeks', desc: 'OOP, collections, problem solving, interview basics, and project practice.' },
  { icon: BarChart3, title: 'Data Analytics', level: 'Career Track', weeks: '16 weeks', desc: 'Excel, SQL, dashboards, visualization, Python basics, and case studies.' },
  { icon: Palette, title: 'UI/UX Design', level: 'Creative Track', weeks: '10 weeks', desc: 'Research, wireframes, Figma, design systems, usability, and portfolio screens.' },
  { icon: Megaphone, title: 'Digital Marketing', level: 'Growth Track', weeks: '12 weeks', desc: 'SEO, ads, social media, funnels, content calendars, and campaign reporting.' },
  { icon: Cloud, title: 'AWS / Cloud Basics', level: 'Foundation', weeks: '6 weeks', desc: 'Cloud concepts, hosting, storage, deployment, and practical cloud workflows.' }
];

export const internshipSteps = [
  { icon: Send, title: 'Enroll', desc: 'Choose a domain, complete registration, and receive your learning roadmap.', image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80' },
  { icon: BookOpen, title: 'Learn', desc: 'Attend structured sessions with guided practice, mentor feedback, and checkpoints.', image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=80' },
  { icon: Layers3, title: 'Build Projects', desc: 'Create portfolio-grade projects that show practical skill and problem solving.', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80' },
  { icon: BriefcaseBusiness, title: 'Internship', desc: 'Work through simulated client tasks, deadlines, documentation, and reviews.', image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80' },
  { icon: Target, title: 'Interview Preparation', desc: 'Practice resumes, GitHub reviews, mock interviews, and technical discussions.', image: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=900&q=80' },
  { icon: Trophy, title: 'Placement', desc: 'Get placement guidance, opportunity alerts, profile polishing, and support.', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80' }
];

export const projects = [
  { title: 'SaaS Growth Landing Page', type: 'Website Design', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80', desc: 'Premium landing experience with feature blocks, lead CTAs, analytics visuals, and trust-focused messaging.' },
  { title: 'Retail Brand Campaign', type: 'Digital Marketing', image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=900&q=80', desc: 'Social campaign direction, product highlights, conversion-led creatives, and launch content planning.' },
  { title: 'Institute Website System', type: 'Education Website', image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=900&q=80', desc: 'Training website structure with programs, student proof, enquiry forms, and polished service storytelling.' },
  { title: 'Operations Dashboard UI', type: 'Business Software', image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80', desc: 'Admin-style dashboard interface for leads, teams, performance summaries, and business process tracking.' }
];

export const processSteps = [
  { icon: Search, title: 'Audit', desc: 'We review your current website, brand clarity, competitors, and conversion gaps.' },
  { icon: Target, title: 'Strategy', desc: 'We define service positioning, sitemap, content flow, and measurable goals.' },
  { icon: Palette, title: 'Design', desc: 'We create premium UI sections, interactions, and responsive page systems.' },
  { icon: Rocket, title: 'Launch', desc: 'We build, test, optimize, and prepare the site for deployment and growth.' }
];

export const caseStudies = [
  {
    title: 'Local Business Website Relaunch',
    metric: '+64% enquiries',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=900&q=80',
    challenge: 'The brand had weak service clarity and no focused enquiry path.',
    outcome: 'We redesigned the page architecture, service sections, CTA flow, and mobile experience.'
  },
  {
    title: 'Digital Campaign Visibility',
    metric: '+3.2x reach',
    image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=900&q=80',
    challenge: 'Campaign assets were inconsistent and difficult to measure.',
    outcome: 'We created a visual system, weekly content plan, and landing-page-aligned campaign structure.'
  },
  {
    title: 'Service Dashboard Experience',
    metric: '-38% manual work',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
    challenge: 'Internal teams were tracking leads and requests across disconnected sheets.',
    outcome: 'We designed a software dashboard concept with lead stages, analytics, and task visibility.'
  }
];

export const testimonials = [
  { name: 'Aarav Kulkarni', role: 'Frontend Intern', quote: 'The training felt practical from week one. I built real React screens and finally understood deployment.' },
  { name: 'Sneha Patil', role: 'Digital Marketing Student', quote: 'Campaign planning, SEO, and portfolio tasks helped me speak confidently in interviews.' },
  { name: 'Rohan Sharma', role: 'Business Client', quote: 'SW Digital Hub gave our brand a professional website and a much clearer enquiry journey.' }
];

export const blogPosts = [
  { slug: 'service-website-qualified-leads', title: 'How a service website turns visitors into qualified leads', category: 'Web Strategy', date: 'July 1, 2026', image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=900&q=80', excerpt: 'A strong services page explains value, builds trust, reduces confusion, and gives visitors a direct next step.', body: 'High-converting service websites use clear positioning, proof, specific service cards, FAQs, and simple enquiry flows. The goal is not more decoration; it is less confusion and a stronger reason to act.' },
  { slug: 'premium-digital-marketing-assets', title: 'What makes digital marketing assets feel premium', category: 'Brand Growth', date: 'June 20, 2026', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80', excerpt: 'Premium marketing depends on consistency: visual rhythm, clear offers, sharp messaging, and measurable campaign paths.', body: 'Premium assets look consistent across channels, use direct copy, carry one primary message, and connect back to a landing page designed for conversion.' },
  { slug: 'dashboard-information-hierarchy', title: 'Why dashboards need simple information hierarchy', category: 'UI/UX', date: 'June 8, 2026', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80', excerpt: 'Good dashboard design helps teams scan priorities, spot movement, and make decisions without interface friction.', body: 'Strong dashboard UI starts with priority metrics, grouped tasks, visible status, and consistent spacing. When hierarchy is right, teams spend less time searching and more time deciding.' }
];

export const faqs = [
  { question: 'Do you build only frontend websites?', answer: 'Yes, this project is frontend-only, but the structure includes an API service layer so backend integration can be added later.' },
  { question: 'Can SW Digital Hub redesign an existing website?', answer: 'Yes. We can audit your current site, rebuild the page flow, improve UI, and prepare a modern deployable frontend.' },
  { question: 'Do you provide SEO-ready pages?', answer: 'We structure pages with clean headings, fast layouts, metadata-ready content, and search-friendly service sections.' },
  { question: 'How can I request a free digital audit?', answer: 'Use the Free Audit route or CTA form and share your website, business type, and goals.' }
];

export const teamMembers = [
  { name: 'Strategy Team', role: 'Digital Planning', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=80' },
  { name: 'Design Team', role: 'UI/UX Systems', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=500&q=80' },
  { name: 'Growth Team', role: 'Marketing Assets', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=500&q=80' }
];

export const dashboardMetrics = [
  { label: 'New inquiries', value: '128', trend: '+18%' },
  { label: 'Active students', value: '642', trend: '+11%' },
  { label: 'Internship applications', value: '86', trend: '+24%' },
  { label: 'Contact leads', value: '214', trend: '+9%' }
];

export const studentWidgets = [
  { title: 'My Courses', value: '4 active', icon: GraduationCap },
  { title: 'Internship Status', value: 'Project phase', icon: BriefcaseBusiness },
  { title: 'Assignments', value: '7 pending', icon: ClipboardList },
  { title: 'Certificates', value: '2 earned', icon: Award }
];

export const featureChecks = [
  'Clean React and Vite architecture',
  'Reusable components for every major section',
  'Responsive mobile, tablet, and desktop layouts',
  'Backend-ready services folder for future APIs',
  'Vercel rewrites for client-side routing',
  'Framer Motion, Swiper, and React Three Fiber experiences'
];

export const whyChoose = [
  { icon: CheckCircle2, title: 'Practical learning', desc: 'Students work through real interfaces, project milestones, and portfolio delivery.' },
  { icon: ShieldCheck, title: 'Business-first execution', desc: 'Websites are structured for trust, speed, SEO, and enquiry conversion.' },
  { icon: Users, title: 'Mentor support', desc: 'Learners get direction on code quality, resumes, interviews, and confidence.' }
];
