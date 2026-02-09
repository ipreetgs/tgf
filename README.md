# TGF Web Application

A premium, multi-branch web application for TGF Parent Company, featuring Farming, Books, DevOps, and Perfume business modules.

## Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **UI Components**: [Shadcn/UI](https://ui.shadcn.com) + [Lucide React](https://lucide.dev)
- **Theming**: Dark/Light mode support via `next-themes`
- **Language**: TypeScript

## Getting Started

1.  **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    ```

2.  **Run the development server**:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/
│   ├── (main)/          # Top level layout
│   ├── farming/         # Farming module
│   ├── books/           # Art of Attraction module
│   ├── devops/          # DevOps Portfolio module
│   └── perfume/         # Perfume module
├── components/
│   ├── ui/              # Reusable UI components (Button, Card, etc.)
│   ├── navbar.tsx       # Global Navigation
│   └── footer.tsx       # Global Footer
└── lib/
    └── utils.ts         # Utility functions (cn, etc.)
```

## Deployment

### Docker

1.  **Build the image**:
    ```bash
    docker build -t tgf-app .
    ```

2.  **Run with Docker Compose**:
    ```bash
    docker-compose up -d
    ```

### Vercel / Netlify

This project is optimized for Vercel. Simply import the repository and deploy.
Ensure `output: 'standalone'` is set in `next.config.ts` if deploying to a custom container environment.

## Theme Configuration

The global theme is managed in `src/app/globals.css` using CSS variables. You can customize the color palette for both light and dark modes there.
