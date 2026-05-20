# MediCN Frontend

Frontend application for The MediCN healthcare housing marketplace.

## Tech Stack
- Next.js
- React
- Tailwind CSS
- TypeScript

## Local Development Setup

1. Clone the repository

git clone <repo-url>

2. Install dependencies

npm install

3. Create environment variables

Create a `.env.local` file using the example below.

4. Run the development server

npm run dev

## Environment Variables

NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_STRIPE_KEY=
SUPABASE_URL=
SUPABASE_ANON_KEY=

Do NOT commit sensitive keys to GitHub.

## Frontend Architecture

/pages
Main routing pages

/components
Reusable UI components

/features
Marketplace-specific features

/lib
Utilities and helper functions

/styles
Global styles and Tailwind configuration

## Documentation Standards

- All major features should include explanatory comments
- New workflows should be documented
- Significant architectural decisions should be added to the Decision Log

# README & Documentation Policy

To maintain continuity, scalability, and long-term maintainability of The MediCN platform, contributors are expected to update relevant documentation whenever major features, workflows, integrations, or architectural changes are introduced.

Documentation is considered part of the development process — not a separate final step.

## Documentation Update Expectations

README files should be updated whenever contributors:
- Add a new major feature
- Modify setup instructions
- Introduce new environment variables
- Change project structure or architecture
- Add integrations or third-party services
- Create new workflows or APIs
- Modify deployment procedures
- Add significant dependencies
- Introduce known limitations or technical considerations

## Required Documentation Areas

Contributors should document:
- Feature purpose and functionality
- Setup and installation changes
- Environment variables
- API usage
- Folder structure updates
- Architectural decisions
- Deployment considerations
- Known issues or limitations
- Future improvement considerations

## Plain English Requirement

Major systems and workflows should include a brief “plain English” explanation so non-technical stakeholders can understand the purpose and functionality of the system.

## Pull Request Expectation

If a major feature is added, the associated pull request should include:
- Summary of changes
- Setup/update instructions if applicable
- Documentation updates completed
- Known issues or future considerations

## Long-Term Goal

The goal of this policy is to:
- Reduce dependency on individual contributors
- Improve onboarding for future developers
- Preserve institutional knowledge
- Improve scalability and continuity
- Maintain organized startup operations

Major features that are not reasonably documented may be considered incomplete until documentation is updated.

## Architecture Decision Notes

Significant technical decisions should include:
- what decision was made
- why it was chosen
- alternatives considered
- expected tradeoffs
