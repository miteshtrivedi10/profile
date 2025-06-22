# Mitesh Trivedi's Personal Website

A modern, responsive personal website built with Next.js and Tailwind CSS. Features a blog, portfolio, and contact form.

## Features

- 🎨 Modern and clean design with dark mode support
- 📱 Fully responsive layout
- 🚀 Built with Next.js 14 and TypeScript
- 💅 Styled with Tailwind CSS
- 📝 Blog section with MDX support
- 🔍 SEO optimized
- 🌐 Fast page loads and smooth navigation
- 📬 Contact form with email integration

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/miteshtrivedi/personal-website.git
cd personal-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your environment variables:
```env
# Add any required environment variables here
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # React components
│   ├── styles/          # Global styles
│   └── types/           # TypeScript type definitions
├── public/              # Static assets
├── tailwind.config.ts   # Tailwind CSS configuration
└── package.json         # Project dependencies and scripts
```

## Customization

1. Update the content in `src/app/` directory to modify pages
2. Modify components in `src/components/` to change the layout and functionality
3. Add your own blog posts in `src/app/blog/` directory
4. Customize the styling by editing `tailwind.config.ts` and `src/app/globals.css`

## Deployment

The site can be deployed to any platform that supports Next.js applications, such as:

- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [AWS Amplify](https://aws.amazon.com/amplify/)

## Built With

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 