# VitalBlink Website

This is the official website for **VitalBlink**, a comprehensive hospital management system designed for healthcare facilities. It features a modern marketing site with detailed product information, pricing, documentation, and download links for the VitalBlink software and VitalSphere browser.

**Live Site: [https://vitalblink-website.vercel.app/](https://vitalblink-website.vercel.app/)**

## Features

- Marketing landing page with animated elements and countdown timer
- Product showcase for VitalBlink hospital management system
- VitalSphere browser download and information
- Pricing page with Stripe integration
- Dashboard pages for user management and activity logging
- Authentication system with JWT cookies
- Subscription management with Stripe Customer Portal
- Comprehensive documentation and feature pages
- Responsive design with Tailwind CSS

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 15
- **Database**: [Postgres](https://www.postgresql.org/) with [Drizzle](https://orm.drizzle.team/)
- **Payments**: [Stripe](https://stripe.com/)
- **UI Library**: [shadcn/ui](https://ui.shadcn.com/) with Tailwind CSS
- **Authentication**: JWT with cookies
- **Deployment**: [Vercel](https://vercel.com/)

## Getting Started

```bash
git clone https://github.com/divyanshxxx527-beep/vitalblink-website
cd vitalblink-website
pnpm install
```

## Running Locally

[Install](https://docs.stripe.com/stripe-cli) and log in to your Stripe account:

```bash
stripe login
```

Use the included setup script to create your `.env` file:

```bash
pnpm db:setup
```

Run the database migrations and seed the database with a default user and team:

```bash
pnpm db:migrate
pnpm db:seed
```

This will create the following user and team:

- User: `test@test.com`
- Password: `admin123`

You can also create new users through the `/sign-up` route.

Finally, run the Next.js development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.

You can listen for Stripe webhooks locally through their CLI to handle subscription change events:

```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

## Testing Payments

To test Stripe payments, use the following test card details:

- Card Number: `4242 4242 4242 4242`
- Expiration: Any future date
- CVC: Any 3-digit number

## Going to Production

When you're ready to deploy the VitalBlink website to production, follow these steps:

### Set up a production Stripe webhook

1. Go to the Stripe Dashboard and create a new webhook for your production environment.
2. Set the endpoint URL to your production API route (e.g., `https://yourdomain.com/api/stripe/webhook`).
3. Select the events you want to listen for (e.g., `checkout.session.completed`, `customer.subscription.updated`).

### Deploy to Vercel

1. Push your code to a GitHub repository.
2. Connect your repository to [Vercel](https://vercel.com/) and deploy it.
3. Follow the Vercel deployment process, which will guide you through setting up your project.

### Add environment variables

In your Vercel project settings (or during deployment), add all the necessary environment variables. Make sure to update the values for the production environment, including:

1. `BASE_URL`: Set this to your production domain.
2. `STRIPE_SECRET_KEY`: Use your Stripe secret key for the production environment.
3. `STRIPE_WEBHOOK_SECRET`: Use the webhook secret from the production webhook you created in step 1.
4. `POSTGRES_URL`: Set this to your production database URL.
5. `AUTH_SECRET`: Set this to a random string. `openssl rand -base64 32` will generate one.

## About VitalBlink

VitalBlink is a complete hospital management system with:
- 26+ medical departments
- Patient records and billing
- Inventory management
- Advanced security and role-based access
- Local deployment (no internet required)
- VitalSphere browser for medical imaging and tools

For more information, visit the [VitalBlink website](https://vitalblink-website.vercel.app/).
