# Solution Doux Confort Inc.

## 🏢 Project Purpose

This repository is being used to build the official website for Solution Doux Confort Inc., a Quebec-based company specializing in HVAC (Heating, Ventilation, and Air Conditioning) and electrical services.

The file [textes-site-web.md](file:///Users/kjobin/Documents/GitHub/solution-doux-confort-0d958/textes-site-web.md) contains the complete French copywriting for the website, detailing:

- Services: Installation, repair, and maintenance (24/7 emergency service) for heating and cooling systems, as well as general electrical work.
- Products: Wall-mounted and central heat pumps, air exchangers, humidifiers, and filtration systems.
- Business Details: Contact information, customer testimonials, financing options, and maintenance plans.

## 🛠️ Technical Foundation

The project is built on top of the "Play" Next.js SaaS Boilerplate & Starter Kit (by TailGrids), which means it comes pre-configured with several powerful, modern integrations even if they aren't all strictly necessary for a standard corporate site. 

Here is the underlying Tech Stack:

- Framework: Next.js 15 (utilizing React 19 and the App Router architecture located in src/app).
- Styling: Tailwind CSS combined with TailGrids UI components to create a responsive, modern design.
- Database & ORM: Prisma (prisma/schema.json) configured for a PostgreSQL database.
- Authentication: NextAuth.js (now Auth.js) for user login, registration, and session management.
- Payments/E-commerce: Stripe integration for handling payments or subscriptions (located in the src/stripe folder).
- Content Management: Fully integrated with MDX to support writing blogs or documentation directly using Markdown mixed with React components.

## 📂 Key Directory Structure

- src/: Contains the main source code including app/ (routing and pages), components/ (reusable UI elements), and utils/.
- prisma/: Contains database schemas and setup.
- public/ & videos/: Static assets like images (e.g., favicon.ico) and video content.
- package.json: Manages the dependencies, showing a modern setup currently using yarn as the package manager.

In summary: You are taking a very robust React/Next.js SaaS starter template and adapting it to create a highly performant, SEO-friendly, and professional business website for Solution Doux Confort.