Tuuli Services – Company Website
README.md

Live Site: [https://tuuliservicesgh.vercel.app]

🌍 Overview
This repository hosts the official website of Tuuli Services, a Ghana-based tech company offering:

Hotel Management SaaS (Hotleo platform)

E-Voting Solutions (Blockchain-backed)

SMS/Communication APIs (MTN Mobile Money integration)

Custom Software Development

🛠 Tech Stack
Category	Tools	Why We Chose It
Frontend	Next.js, React, Chakra UI	SEO-friendly, fast rendering, and accessible components
Backend	Node.js (API routes), Firebase (Auth/DB)	Scalable, real-time updates for dashboards
Hosting	Vercel (Serverless) + AWS S3 (Storage)	Zero-downtime deployments, global CDN
CMS	Sanity.io	Customizable content models for case studies/blog (Ghana-focused)
Analytics	Google Analytics 4 + Hotjar	Track user behavior (especially for hotel SaaS demos)
🚀 Setup Instructions
Prerequisites
Node.js v18+

Yarn (npm install -g yarn)

Firebase CLI (npm install -g firebase-tools)

Local Development
Clone the repo:

bash
git clone https://github.com/tuuli-services/website.git  
cd website  
Install dependencies:

bash
yarn install  
Configure environment variables:

bash
cp .env.example .env.local  
Add your keys (get these from the team lead):

text
NEXT_PUBLIC_FIREBASE_API_KEY=xxx  
NEXT_PUBLIC_SANITY_PROJECT_ID=xxx  
Run the dev server:

bash
yarn dev  
Open http://localhost:3000.

📂 Project Structure
text
.  
├── components/       # Reusable components (e.g., <PricingTable />)  
├── lib/              # Utilities (Firebase hooks, SMS helpers)  
├── pages/            # Next.js routes:  
│   ├── services/     # /services/saas, /services/e-voting  
│   └── blog/         # Dynamic Sanity.io-powered posts  
├── public/           # Logos, favicons (use `tuuli-` prefix for files)  
├── styles/           # Chakra UI theme overrides (brand colors: #0A8A07, #012E40)  
└── sanity/           # CMS schemas (e.g., define ‘CaseStudy’ content types)  
🌐 Key Pages
Page	Tech Used	Notes
Home	Framer Motion (animations)	Hero video autoplays on desktop only (save mobile bandwidth)
/services/saas	Firebase Auth demo	Hotel managers can test a live demo with Ghanaian payment gateways
/contact	Twilio API + Formik	SMS confirmations sent to +233 numbers
🔌 Ghana-Specific Integrations
MTN Mobile Money API: For payment processing.

Ghana Post GPS: Address validation in contact forms.

Localization: i18n for English/Twi support (WIP).

🤝 Contributing
Use the dev- branch prefix:

bash
git checkout -b dev-feature/sms-form  
Follow Chakra UI conventions.

Test responsiveness (Mobile: 360px, Desktop: 1440px).

Before Merging:

Run Lighthouse audit (yarn build && yarn lighthouse).

Ensure all Firebase keys are never committed.

📄 License
MIT © Tuuli Services GH.

📬 Contact
Tech Lead: Issah Abdul-Rashid (@CTO on Slack)

Urgent Issues: File under GitHub Issues with label priority:high.

✨ Pro Tip: Use yarn export to generate a static version for backup!
